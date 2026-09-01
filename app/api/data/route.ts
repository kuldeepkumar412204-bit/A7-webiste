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

import { connectDB } from "@/app/lib/mongodb";
import Satta from "@/app/models/Satta";
import Result from "@/app/models/Results";
import {
  getISTMidnightUTC,
  getISTDateLabels,
  utcToISTDateLabel,
  getISTYearBoundsUTC,
  MONTHS,
} from "@/app/lib/ist";
import { NextRequest, NextResponse } from "next/server";


// ─── Shared helpers ────────────────────────────────────────────────────────────

function formatTime12(time24: string): string {
  if (!time24) return "";
  const [hStr, mStr] = time24.split(":");
  let h = parseInt(hStr, 10);
  const period = h >= 12 ? "PM" : "AM";
  if (h === 0) h = 12;
  else if (h > 12) h -= 12;
  return `${h}:${mStr} ${period}`;
}

function hasResultTimePassed(resultTime: string) {
  const nowIST = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );

  const [hours, minutes] = resultTime.split(":").map(Number);

  const resultDateTime = new Date(nowIST);
  resultDateTime.setHours(hours, minutes, 0, 0);

  return nowIST >= resultDateTime;
}

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
    await connectDB();

    // All active games, sorted by result time ascending
    const games = await Satta.find({ isActive: true })
      .sort({ resultTime: 1 })
      .lean();

    if (games.length === 0) {
      return NextResponse.json({ success: true, range, data: [] });
    }


    const sortedGames = [...games].sort((a:any, b:any) => {
      const aHasOrder = a.order !== undefined && a.order !== null;
      const bHasOrder = b.order !== undefined && b.order !== null;

      // Ordered games come first
      if (aHasOrder && !bHasOrder) return -1;
      if (!aHasOrder && bHasOrder) return 1;

      // Both have order → sort by order
      if (aHasOrder && bHasOrder) {
        return a.order - b.order;
      }

      // Neither has order → oldest created first
      return (
        new Date(a?.createdAt).getTime() -
        new Date(b?.createdAt).getTime()
      );
    });


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
function getISTDate(offsetDays: number = 0): Date {
  const d = new Date();
  d.setDate(d.getDate() - offsetDays);
  const dateStr = d.toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
  return new Date(`${dateStr}T00:00:00.000Z`);
}

export async function daily(games: any[]) {
  try {
    const todayDrawDate = getISTDate(0);      // Today 00:00:00.000Z
    const yesterdayDrawDate = getISTDate(1);  // Yesterday 00:00:00.000Z

    // Fetch exact matches for yesterday and today concurrently
    const [todayRows, yesterdayRows] = await Promise.all([
      Result.find({
        drawDate: todayDrawDate,
        status: "published",
        isActive: true,
      })
        .select("sattaId result")
        .lean(),

      Result.find({
        drawDate: yesterdayDrawDate,
        status: "published",
        isActive: true,
      })
        .select("sattaId result")
        .lean(),
    ]);
    // console.log("todayRows", todayRows)

    // Build fast lookup maps using stringified ObjectIds
    const todayMap = new Map(todayRows.map((r) => [r.sattaId.toString(), r.result]));
    const yesterdayMap = new Map(yesterdayRows.map((r) => [r.sattaId.toString(), r.result]));

    const data = games.map((game) => {
      const id = game._id.toString();
      const showTodayResult = hasResultTimePassed(game.resultTime);

      // Yesterday fallback: if no record exists, default to "--"
      const yesterdayResult = yesterdayMap.get(id) ?? "--";

      // Today fallback: 
      // If cutoff time has passed OR a DB result exists -> return result or "WAIT"
      // If result time hasn't arrived yet -> keep "WAIT" badge active
      let todayResult = "WAIT";
      if (todayMap.has(id)) {
        todayResult = todayMap.get(id)!;
      } else if (!showTodayResult) {
        todayResult = "WAIT";
      }

      return {
        _id: id,
        game: game.name,
        time: formatTime12(game.resultTime),
        tableNo: game.tableNo,
        slug: game.slug,
        order: game.order ?? 0,
        result: [yesterdayResult, todayResult],
      };
    });

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
  const nowIST = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );

  const currentDay = nowIST.getDate(); // e.g., 16

  // 1. Calculate how many days have passed since the 1st of the current month
  // If it's the 16th, we need 16 labels. getISTDateLabels(N) returns [N-1 days ago ... today]
  const totalDaysThisMonth = currentDay;
  const dateLabels = getISTDateLabels(totalDaysThisMonth);

  // 2. Fetch records ranging from the 1st of the month till today's end
  const monthStart = getISTMidnightUTC(totalDaysThisMonth - 1);
  const monthEnd = new Date(getISTMidnightUTC(-1).getTime() - 1);

  const rows = await Result.find({
    drawDate: { $gte: monthStart, $lte: monthEnd },
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

  const todayLabel = utcToISTDateLabel(new Date());

  const data = games.map((game) => {
    const id = game._id.toString();
    const dateMap = byGame.get(id) ?? new Map<string, string>();

    return {
      game: game.name,
      time: formatTime12(game.resultTime),
      tableNo: game.tableNo,
      slug: game.slug,
      order: game.order,
      dates: dateLabels,
      result: dateLabels.map((d) => {
        // Hide future dates just in case
        if (d > todayLabel) return null;

        // Hide today's result if the draw time hasn't passed yet
        if (d === todayLabel && !hasResultTimePassed(game.resultTime)) {
          return null;
        }

        return dateMap.get(d) ?? null;
      }),
    };
  });

  return NextResponse.json({ success: true, range: "monthly", data });
}

// ─── Yearly ───────────────────────────────────────────────────────────────────
async function yearly(games: any[], year: number) {
  const { start, end } = getISTYearBoundsUTC(year);

  const rows = await Result.find({
    drawDate: { $gte: start, $lte: end },
    status: "published",
  })
    .select("sattaId drawDate result")
    .lean();

  const byGame = new Map<string, Record<string, Record<number, string>>>();

  games.forEach((game) => {
    const id = game._id.toString();
    const initialMonths: Record<string, Record<number, string>> = {};
    MONTHS.forEach((mName) => {
      initialMonths[mName] = {};
      for (let day = 1; day <= 31; day++) {
        initialMonths[mName][day] = "-";
      }
    });
    byGame.set(id, initialMonths);
  });

  for (const r of rows) {
    const id = r.sattaId.toString();
    const gameEntry = byGame.get(id);
    if (!gameEntry) continue;

    const istDate = new Date(r.drawDate.getTime() + 5.5 * 60 * 60 * 1000);
    const monthName = MONTHS[istDate.getUTCMonth()];
    const day = istDate.getUTCDate();

    if (gameEntry[monthName]) {
      gameEntry[monthName][day] = r.result;
    }
  }

  const nowIST = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );

  const currentYear = nowIST.getFullYear();
  const currentMonthIdx = nowIST.getMonth();
  const currentMonthName = MONTHS[currentMonthIdx];
  const currentDay = nowIST.getDate();

  const data = games.map((game) => {
    const id = game._id.toString();
    const months = byGame.get(id)!;

    if (year === currentYear) {
      if (!hasResultTimePassed(game.resultTime)) {
        if (months[currentMonthName]) {
          months[currentMonthName][currentDay] = "-";
        }
      }

      for (let d = currentDay + 1; d <= 31; d++) {
        if (months[currentMonthName]) {
          months[currentMonthName][d] = "-";
        }
      }

      for (let mIdx = currentMonthIdx + 1; mIdx < 12; mIdx++) {
        const futureMonthName = MONTHS[mIdx];
        for (let d = 1; d <= 31; d++) {
          if (months[futureMonthName]) {
            months[futureMonthName][d] = "-";
          }
        }
      }
    }

    return {
      game: game.name,
      slug: game.slug,
      time: formatTime12(game.resultTime),
      year,
      months,
    };
  });

  return NextResponse.json({ success: true, range: "yearly", year, data });
}