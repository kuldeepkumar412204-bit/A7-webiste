import { connectDB } from "@/app/lib/mongodb";
import Results from "@/app/models/Results";
import Satta from "@/app/models/Satta";
import { NextResponse } from "next/server";

// Force dynamic execution so Next.js doesn't cache market status calculations
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    // 1. Connect to MongoDB
    await connectDB();

    // 2. Get current date & time explicitly in IST (Asia/Kolkata)
    const now = new Date();

    // Format YYYY-MM-DD
    const istDateStr = now.toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });

    // Format HH:MM 24-hr safely
    const istParts = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).formatToParts(now);

    const hour = istParts.find((p) => p.type === "hour")?.value || "00";
    const minute = istParts.find((p) => p.type === "minute")?.value || "00";
    const istTimeStr = `${hour === "24" ? "00" : hour}:${minute}`;

    // Normalize draw date to UTC midnight for querying
    const drawDate = new Date(`${istDateStr}T00:00:00.000Z`);

    // 3. Query Active Games & Today's Published Results
    const [games, results] = await Promise.all([
      Satta.find({ isActive: true }).sort({ tableNo: 1, order: 1 }).lean(),
      Results.find({ drawDate, isActive: true, status: "published" }).lean(),
    ]);

    // 4. Map DB results by sattaId
    const resultMap = new Map<string, string>();
    results.forEach((r) => {
      if (r.sattaId) {
        resultMap.set(r.sattaId.toString(), r.result);
      }
    });

    // 5. Construct Payload
    const responsePayload = games.map((game) => {
      const gameIdStr = game._id.toString();
      const storedResult = resultMap.get(gameIdStr);
      const isTimePassed = istTimeStr >= game.resultTime;

      let displayResult = "WAIT";

      if (storedResult) {
        displayResult = storedResult;
      } else if (!isTimePassed) {
        displayResult = "WAIT";
      } else {
        displayResult = "WAIT";
      }

      return {
        id: gameIdStr,
        name: game.name,
        slug: game.slug,
        resultTime: game.resultTime,
        source: game.source,
        tableNo: game.tableNo,
        order: game.order,
        isTimePassed,
        result: displayResult,
      };
    });

    return NextResponse.json(
      { success: true, count: responsePayload.length, data: responsePayload },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching market states:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch market data" },
      { status: 500 }
    );
  }
}