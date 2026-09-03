import { connectDB } from "@/app/lib/mongodb";
import Result from "@/app/models/Results";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: Promise<{ id: string }>;
}

export async function GET(req: NextRequest, { params }: Params) {
  try {
    await connectDB();
    const { id } = await params;

    const result = await Result.findById(id)
      .populate("sattaId", "name slug resultTime")
      .lean();

    if (!result) {
      return NextResponse.json(
        { success: false, message: "Result not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: result });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to fetch result" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest, { params }: Params) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await req.json();

    const invalidPlaceholders = ["", "--", "WAIT", "**", "XX"];
    const rawResult = typeof body.result === "string" ? body.result.trim() : "";
    const isValidResult = Boolean(rawResult && !invalidPlaceholders.includes(rawResult));

    // Construct update data
    const updateData: Record<string, any> = {};

    if (body.sattaId !== undefined) updateData.sattaId = body.sattaId;
    if (body.drawDate !== undefined) updateData.drawDate = body.drawDate;
    if (body.source !== undefined) updateData.source = body.source; // Update source from payload
    if (body.status !== undefined) updateData.status = body.status;
    if (body.isActive !== undefined) updateData.isActive = body.isActive;

    if (body.result !== undefined) {
      updateData.result = rawResult;

      // Handle override locking logic ONLY for "API" source games
      const targetSource = body.source || "MANUAL";
      if (targetSource === "API") {
        updateData.isOverridden = isValidResult;
      }
    }

    const updatedResult = await Result.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    ).populate("sattaId", "name slug resultTime source");

    if (!updatedResult) {
      return NextResponse.json(
        { success: false, message: "Result not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: updatedResult });
  } catch (error: any) {
    // Graceful duplicate entry error handling
    if (error.code === 11000) {
      return NextResponse.json(
        { success: false, message: "A result entry for this game and date already exists." },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}

export async function DELETE(req: NextRequest, { params }: Params) {
  try {
    await connectDB();
    const { id } = await params;

    const result = await Result.findByIdAndDelete(id);

    if (!result) {
      return NextResponse.json(
        { success: false, message: "Result not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Result deleted successfully",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to delete result" },
      { status: 500 }
    );
  }
}
