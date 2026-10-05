/**
 * Public data endpoint for the Satta results frontend.
 *
 * GET /api/data?range=daily            → today + yesterday per game
 * GET /api/data?range=weekly           → last 7 days per game
 * GET /api/data?range=monthly          → MTD (Month-to-Date): 1st of current month to today (IST)
 * GET /api/data?range=yearly           → full year, month-wise per game
 * GET /api/data?range=yearly&year=2025 → specific year
 *
 * All dates are interpreted in IST (UTC +5:30).
 * Only active (isActive: true) games and published results are returned.
 */


import Result from "@/app/models/Results";
import {
  getISTMidnightUTC,
  getISTDateLabels,
  utcToISTDateLabel,
} from "@/app/lib/ist";
import {
  formatTime12,
  hasResultTimePassed,
  getSortedActiveGames,
  buildDailyData,
  buildMonthlyData,
  buildYearlyData,
} from "@/app/lib/marketData";
import { NextRequest, NextResponse } from "next/server";

// ─── Main handler ─────────────────────────────────────────────────────────────

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const range = (searchParams.get("range") ?? "daily").toLowerCase();

  if (!["daily", "weekly", "monthly", "yearly"].includes(range)) {
    return NextResponse.json(
      { success: false, message: "Invalid range. Use: daily | weekly | monthly | yearly" },
      { status: 400 }
    );
  }

  try {
    // All active games, sorted by result time ascending (+ order-sorted copy)
    const { games, sortedGames } = await getSortedActiveGames();

    if (games.length === 0) {
      return NextResponse.json({ success: true, range, data: [] });
    }

    if (range === "daily") return daily(sortedGames);
    if (range === "weekly") return weekly(sortedGames);
    if (range === "monthly") return monthly(sortedGames);

    // yearly
    const year = parseInt(searchParams.get("year") ?? String(new Date().getFullYear()), 10);
    if (isNaN(year) || year < 2000 || year > 2100) {
      return NextResponse.json(
        { success: false, message: "Invalid year" },
        { status: 400 }
      );
    }
    return yearly(games, year);
  } catch (error: any) {
    console.error("[/api/data] error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

// ─── Daily ────────────────────────────────────────────────────────────────────
async function daily(games: any[]) {
  try {
    const data = await buildDailyData(games);
    return NextResponse.json({ success: true, range: "daily", data });
  } catch (error: any) {
    console.error("Error in daily market endpoint:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch daily market results" },
      { status: 500 }
    );
  }
}

// ─── Weekly ───────────────────────────────────────────────────────────────────
async function weekly(games: any[]) {
  const weekStart = getISTMidnightUTC(6);
  const weekEnd = new Date(getISTMidnightUTC(-1).getTime() - 1);

  const rows = await Result.find({
    drawDate: { $gte: weekStart, $lte: weekEnd },
    status: "published",
    isActive: true,
  })
    .select("sattaId drawDate result")
    .lean();

  const byGame = new Map<string, Map<string, string>>();
  for (const r of rows) {
    const id = r.sattaId.toString();
    const label = utcToISTDateLabel(r.drawDate);
    if (!byGame.has(id)) byGame.set(id, new Map());
    byGame.get(id)!.set(label, r.result);
  }

  const dateLabels = getISTDateLabels(7);

  const data = games.map((game) => {
    const id = game._id.toString();
    const dateMap = byGame.get(id) ?? new Map<string, string>();
    return {
      game: game.name,
      time: formatTime12(game.resultTime),
      dates: dateLabels,
      result: dateLabels.map((d) => {
        const todayLabel = utcToISTDateLabel(new Date());

        if (d > todayLabel) return null;

        if (d === todayLabel && !hasResultTimePassed(game.resultTime)) {
          return null;
        }

        return dateMap.get(d) ?? null;
      }),
    };
  });

  return NextResponse.json({ success: true, range: "weekly", data });
}


// ─── Monthly (Month-to-Date: 1st to Current Day) ──────────────────────────────
async function monthly(games: any[]) {
  const data = await buildMonthlyData(games);
  return NextResponse.json({ success: true, range: "monthly", data });
}

// ─── Yearly ───────────────────────────────────────────────────────────────────
async function yearly(games: any[], year: number) {
  const data = await buildYearlyData(games, year);
  return NextResponse.json({ success: true, range: "yearly", year, data });
}
