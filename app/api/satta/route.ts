import { connectDB } from "@/app/lib/mongodb";
import Satta from "@/app/models/Satta";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const tableNo = searchParams.get("tableNo");

      const filter: { tableNo?: number } = {};

    if (tableNo) {
      const parsedTableNo = Number(tableNo);
      

      if (![1, 2].includes(parsedTableNo)) {
        return NextResponse.json(
          {
            success: false,
            message: "tableNo must be 1 or 2",
          },
          { status: 400 }
        );
      }

      filter.tableNo = parsedTableNo;
    }

    console.log("filter", filter)
    const sattaGames = await Satta.find(filter)
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      data: sattaGames,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch satta games",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const source = body.source || "MANUAL";
    if (!["API", "MANUAL"].includes(source)) {
      return NextResponse.json(
        {
          success: false,
          message: "source must be either 'API' or 'MANUAL'",
        },
        { status: 400 }
      );
    }

    const game = await Satta.create({
      name: body.name,
      slug: body.slug,
      resultTime: body.resultTime,
      source: source,
      apiName: body.apiName || null,
      isActive: body.isActive ?? true,
      tableNo: body.tableNo || 1,
      order: body.order || undefined,
    });

    return NextResponse.json(
      {
        success: true,
        data: game,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to create game",
      },
      { status: 400 }
    );
  }
}