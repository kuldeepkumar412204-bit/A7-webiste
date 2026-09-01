import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mongodb";
import { syncAllGameResults } from "@/app/services/syncService";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectDB();
    await syncAllGameResults();

    return NextResponse.json({
      success: true,
      message: "Sync triggered manually. Check terminal logs and DB for inserted records.",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}