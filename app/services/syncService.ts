import axios from "axios";
import Satta from "../models/Satta";
import Results from "../models/Results";

interface ApiMarketItem {
  name: string;
  jodi?: string;
  result?: string;
}

const API_URL = "https://api.sattaapi.com/wp-json/satta/v1/results?v=";

const apiPostData = {
  api_key: process.env.API_KEY,
  domain_key: process.env.DOMAIN_KEY,
  domain: process.env.API_DOMAIN,
};

export async function syncAllGameResults() {
  try {
    let apiData: ApiMarketItem[] = [];
    let apiOk = false;
    const startedAt = Date.now();
    const stats = { updated: 0, kept: 0, overridden: 0, unmatched: 0 };
    try {
      const response = await axios.post(API_URL, apiPostData, { timeout: 10000 });
      if (response.data?.results?.status) {
        apiData = response.data.results.data || [];
        apiOk = apiData.length > 0;
      }
      if (apiOk) {
        // One compact line per sync: every market's value as the API sent it
        console.log(
          `[sync] API ok HTTP ${response.status} in ${Date.now() - startedAt}ms, ${apiData.length} items, expiry ${response.data?.expiry ?? "n/a"}:`,
          apiData.map((i) => `${i.name}=${i.result || i.jodi || "--"}`).join(", ")
        );
      } else {
        console.error(
          `[sync] API returned no usable data (HTTP ${response.status}):`,
          JSON.stringify(response.data)?.slice(0, 300)
        );
      }
    } catch (apiErr: any) {
      console.error(
        `[sync] External API fetch failed after ${Date.now() - startedAt}ms: ${apiErr?.code ?? ""} HTTP ${apiErr?.response?.status ?? "n/a"} ${apiErr?.message ?? apiErr}`,
        "| creds set:",
        { API_KEY: !!process.env.API_KEY, DOMAIN_KEY: !!process.env.DOMAIN_KEY, API_DOMAIN: process.env.API_DOMAIN }
      );
    }

    // Debug: log raw API payload around the 12:05 AM and 12:15 AM IST checkpoints
    const istParts = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    }).formatToParts(new Date());
    const istHour = Number(istParts.find((p) => p.type === "hour")?.value);
    const istMinute = Number(istParts.find((p) => p.type === "minute")?.value);
    if (istHour === 0 && ((istMinute >= 5 && istMinute < 10) || (istMinute >= 15 && istMinute < 20))) {
      console.log(
        `[sync-debug] API fetch at IST 00:${String(istMinute).padStart(2, "0")} (${apiData.length} items):`,
        JSON.stringify(apiData)
      );
    }

    const allGames = await Satta.find({ isActive: true });

    // Target day in IST. The day rolls over at 12:15 AM (not 12:00) so late
    // results (e.g. Gali at ~12:08 AM) still belong to the previous day.
    const DAY_START_OFFSET_MS = 15 * 60 * 1000;
    const todayStr = new Date(Date.now() - DAY_START_OFFSET_MS).toLocaleDateString("en-CA", {
      timeZone: "Asia/Kolkata",
    });
    const drawDate = new Date(`${todayStr}T00:00:00.000Z`);

    for (const game of allGames) {
      if (game.source === "API") {
        // 1. Fetch today's record from DB
        const existingRecord = await Results.findOne({ sattaId: game._id, drawDate });

        // 2. IF ADMIN EDITED THIS DAY'S RESULT: Skip API sync for today!
        if (existingRecord?.isOverridden) {
          stats.overridden++;
          continue;
        }

        // 3. API down/empty: never touch stored results
        if (!apiOk) continue;

        const matchedItem = apiData.find(
          (item) => item.name === game.apiName || item.name === game.name?.toLocaleUpperCase()
        );
        if (!matchedItem) {
          stats.unmatched++;
          console.warn(`[sync] No API item matched for "${game.name}" (apiName: ${game.apiName})`);
        }
        const rawVal = (matchedItem?.result || matchedItem?.jodi || "--").trim();

        // 4. Never replace a saved numeric result with a placeholder (WAIT / -- / empty)
        const isNumeric = (v?: string) => !!v && /^\d+$/.test(v);
        if (isNumeric(existingRecord?.result) && !isNumeric(rawVal)) {
          stats.kept++;
          console.warn(
            `[sync] Keeping ${game.name}=${existingRecord!.result}; API sent "${rawVal}"`
          );
          continue;
        }

        // Log only real changes (DB value -> new value)
        if (existingRecord?.result !== (rawVal || "--")) {
          stats.updated++;
          console.log(`[sync] ${game.name}: ${existingRecord?.result ?? "(none)"} -> ${rawVal || "--"}`);
        }

        await Results.findOneAndUpdate(
          { sattaId: game._id, drawDate },
          {
            $set: {
              result: rawVal || "--",
              source: "API",
              status: "published",
              isActive: true,
              isOverridden: false, // Default state for API updates
            },
          },
          { upsert: true, returnDocument: "after" }
        );
      } else {
        // MANUAL GAME LOGIC
        const existingRecord = await Results.findOne({ sattaId: game._id, drawDate });
        if (!existingRecord) {
          await Results.create({
            sattaId: game._id,
            drawDate,
            result: "WAIT",
            source: "MANUAL",
            status: "published",
            isActive: true,
            isOverridden: false,
          });
        }
      }
    }

    console.log(
      `[sync] done in ${Date.now() - startedAt}ms for ${todayStr}: apiOk=${apiOk} updated=${stats.updated} kept=${stats.kept} adminOverridden=${stats.overridden} unmatched=${stats.unmatched}`
    );
  } catch (error) {
    console.error("Error executing full result sync:", error);
  }
}