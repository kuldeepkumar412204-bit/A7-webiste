import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mongodb";
import { syncAllGameResults } from "@/app/services/syncService";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    // Optional: Protect route with a secret key header from Vercel
    const authHeader = req.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    await syncAllGameResults();

    return NextResponse.json({ success: true, message: "Sync executed successfully" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}