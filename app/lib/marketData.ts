// Shared data builders used by /api/data and the server-rendered home page.

import { connectDB } from "@/app/lib/mongodb";
import Satta from "@/app/models/Satta";
import Result from "@/app/models/Results";
import { getISTMidnightUTC, getISTDateLabels, utcToISTDateLabel } from "@/app/lib/ist";

// ─── Shared helpers ────────────────────────────────────────────────────────────

export function formatTime12(time24: string): string {
  if (!time24) return "";
  const [hStr, mStr] = time24.split(":");
  let h = parseInt(hStr, 10);
  const period = h >= 12 ? "PM" : "AM";
  if (h === 0) h = 12;
  else if (h > 12) h -= 12;
  return `${h}:${mStr} ${period}`;
}

export function hasResultTimePassed(resultTime: string) {
  const nowIST = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );

  const [hours, minutes] = resultTime.split(":").map(Number);

  const resultDateTime = new Date(nowIST);
  resultDateTime.setHours(hours, minutes, 0, 0);

  return nowIST >= resultDateTime;
}

// All active games, sorted by `order` (ordered first), then oldest created first
export async function getSortedActiveGames() {
  await connectDB();

  const games = await Satta.find({ isActive: true })
    .sort({ resultTime: 1 })
    .lean();

  const sortedGames = [...games].sort((a: any, b: any) => {
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

  return { games, sortedGames };
}

// ─── Daily ────────────────────────────────────────────────────────────────────
function getISTDate(offsetDays: number = 0): Date {
  const d = new Date();
  d.setDate(d.getDate() - offsetDays);
  const dateStr = d.toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
  return new Date(`${dateStr}T00:00:00.000Z`);
}

export async function buildDailyData(games: any[]) {
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

  // Build fast lookup maps using stringified ObjectIds
  const todayMap = new Map(todayRows.map((r) => [r.sattaId.toString(), r.result]));
  const yesterdayMap = new Map(yesterdayRows.map((r) => [r.sattaId.toString(), r.result]));

  return games.map((game) => {
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
}

// ─── Monthly (Month-to-Date: 1st to Current Day) ──────────────────────────────
export async function buildMonthlyData(games: any[]) {
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

  return games.map((game) => {
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
}
