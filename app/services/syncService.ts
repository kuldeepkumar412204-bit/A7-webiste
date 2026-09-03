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
    try {
      const response = await axios.post(API_URL, apiPostData, { timeout: 10000 });
      if (response.data?.results?.status) {
        apiData = response.data.results.data || [];
      }
    } catch (apiErr) {
      console.warn("External API fetch failed:", apiErr);
    }

    const allGames = await Satta.find({ isActive: true });

    // Target calendar day in IST
    const todayStr = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
    const drawDate = new Date(`${todayStr}T00:00:00.000Z`);

    for (const game of allGames) {
      if (game.source === "API") {
        // 1. Fetch today's record from DB
        const existingRecord = await Results.findOne({ sattaId: game._id, drawDate });

        // 2. IF ADMIN EDITED THIS DAY'S RESULT: Skip API sync for today!
        if (existingRecord?.isOverridden) {
          console.log(`Skipping sync for ${game.name}: Admin overridden for ${todayStr}`);
          continue;
        }

        // 3. Otherwise, fetch raw API value and overwrite DB unconditionally
        const matchedItem = apiData.find(
          (item) => item.name === game.apiName || item.name === game.name?.toLocaleUpperCase()
        );
        const rawVal = (matchedItem?.result || matchedItem?.jodi || "--").trim();

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
          { upsert: true, new: true }
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
  } catch (error) {
    console.error("Error executing full result sync:", error);
  }
}