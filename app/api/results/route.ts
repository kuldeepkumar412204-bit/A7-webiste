import { connectDB } from "@/app/lib/mongodb";
import Result from "@/app/models/Results";
import Satta from "@/app/models/Satta";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);

    // Extract query parameters
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "20", 10);
    const search = searchParams.get("search") || "";
    const status = searchParams.get("status");
    const source = searchParams.get("source");
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");

    const skip = (page - 1) * limit;

    // Build MongoDB query filter
    const queryFilter: Record<string, unknown> = {};

    // 1. Status Filter
    if (status && status !== "all") {
      queryFilter.status = status;
    }

    // 2. Source / Mode Filter
    if (source && source !== "all") {
      queryFilter.source = source;
    }

    // 3. Date Range Filter
    if (startDate || endDate) {
      queryFilter.drawDate = {};
      if (startDate) {
        (queryFilter.drawDate as Record<string, unknown>).$gte = new Date(startDate);
      }
      if (endDate) {
        // Set to end of day (23:59:59.999) to include the entire selected end date
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);
        (queryFilter.drawDate as Record<string, unknown>).$lte = end;
      }
    }

    // 4. Server-Side Search Filter (Search by result string or populated game name)
    if (search) {
      // Find matching game IDs if searching by game name
      const matchingGames = await Satta.find({
        name: { $regex: search, $options: "i" },
      }).select("_id");

      const gameIds = matchingGames.map((g) => g._id);

      queryFilter.$or = [
        { result: { $regex: search, $options: "i" } },
        { sattaId: { $in: gameIds } },
      ];
    }

    // Execute query with pagination & populate
    const [results, total] = await Promise.all([
      Result.find(queryFilter)
        .populate("sattaId")
        .sort({ drawDate: -1, createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Result.countDocuments(queryFilter),
    ]);

    const totalPages = Math.ceil(total / limit);

    return NextResponse.json(
      {
        success: true,
        data: results,
        pagination: {
          total,
          page,
          limit,
          totalPages,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Failed to fetch results",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const invalidPlaceholders = ["", "--", "WAIT", "**", "XX"];
    const rawResult = typeof body.result === "string" ? body.result.trim() : "";
    const isValidResult = Boolean(rawResult && !invalidPlaceholders.includes(rawResult));

    // Evaluate override flag based on the incoming source
    const source = body.source || "MANUAL";
    const isOverridden = source === "API" ? isValidResult : false;

    const result = await Result.create({
      sattaId: body.sattaId,
      drawDate: body.drawDate,
      result: rawResult,
      source: source,
      status: body.status ?? "draft",
      isActive: body.isActive ?? true,
      isOverridden: isOverridden,
    });

    const populated = await result.populate("sattaId", "name slug resultTime source");

    return NextResponse.json(
      { success: true, data: populated },
      { status: 201 }
    );
  } catch (error: any) {
    if (error.code === 11000) {
      return NextResponse.json(
        {
          success: false,
          message: "A result entry for this game and date already exists."
        },
        { status: 409 } // 409 Conflict
      );
    }
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}
