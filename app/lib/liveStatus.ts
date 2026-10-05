// Live status (top black block) logic, shared by the server render and the client poller.

export interface GameLiveStatus {
  _id: string;
  name: string;
  today: string;
  time: string;
  minutes: number;
  isUpcoming?: boolean;

}

export interface LiveStatusState {
  latestGames: GameLiveStatus[];
  disawarResult: any;
}

// Convert "1:40 PM" to minutes past midnight
// Convert time strings (e.g., "1:40 PM", "12:40pm", "2 PM") to minutes past midnight
const parseTimeToMinutes = (timeStr: string): number => {
  if (!timeStr) return 0;

  // Clean string and standardize casing
  const cleanTime = timeStr.trim().toUpperCase().replace(/\s+/g, " ");
  const isPM = cleanTime.includes("PM");
  const isAM = cleanTime.includes("AM");

  // Extract digits and split into hours and minutes
  const numericPart = cleanTime.replace(/[^0-9:]/g, "").trim();
  const parts = numericPart.split(":");

  let hours = parseInt(parts[0], 10) || 0;
  let minutes = parts[1] ? parseInt(parts[1], 10) || 0 : 0;

  // 12-hour clock conversion
  if (isPM && hours < 12) hours += 12;
  if (isAM && hours === 12) hours = 0;

  return hours * 60 + minutes;
};

// Add near parseTimeToMinutes
const getISTMinutesNow = (): number => {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const hour = parseInt(parts.find(p => p.type === "hour")?.value || "0", 10);
  const minute = parseInt(parts.find(p => p.type === "minute")?.value || "0", 10);
  return hour * 60 + minute;
};

// Sort purely by time and slice the top 2 (throws if the disawer row is missing)
export function buildLiveStatus(rawData: any): LiveStatusState {
  const disawarResult = rawData.find((item: any) => item.game === "disawer").result;
  let latestGames: GameLiveStatus[] = [];

  if (Array.isArray(rawData)) {
    // 1. Process all items
    const processedGames = rawData.map((item: any) => {
      const gameTime = item.time;
      const gameMinutes = parseTimeToMinutes(gameTime);
      const results = Array.isArray(item.result) ? item.result : [];
      const today = results[1] && results[1] !== "WAIT" && results[1] !== "--" ? results[1] : "--";

      return {
        _id: item._id || item.game,
        name: (item.game || item.name || "").toUpperCase(),
        today,
        time: gameTime,
        minutes: gameMinutes,
      };
    });

    const nowMinutes = getISTMinutesNow();

    // Games due within the next 10 minutes, not yet resulted
    const upcomingGames = processedGames.filter(
      (g) => g.minutes > nowMinutes && g.minutes <= nowMinutes + 10
    );

    if (upcomingGames.length > 0) {
      upcomingGames.sort((a, b) => a.minutes - b.minutes);
      latestGames = upcomingGames.slice(0, 2).map((g) => ({ ...g, isUpcoming: true }));
    } else {
      const pastGames = processedGames.filter((g) => g.minutes <= nowMinutes);
      pastGames.sort((a, b) => b.minutes - a.minutes);
      latestGames = pastGames.slice(0, 2).map((g) => ({ ...g, isUpcoming: false }));
    }
  }

  return { latestGames, disawarResult };
}
