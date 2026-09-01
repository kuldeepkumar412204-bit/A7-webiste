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
        // 1. Fetch remote data from external API safely
        let apiData: ApiMarketItem[] = [];
        try {
            const response = await axios.post(API_URL, apiPostData, { timeout: 10000 });
            if (response.data?.results?.status) {
                apiData = response.data.results.data || [];
            }
        } catch (apiErr) {
            console.warn("External API fetch failed, proceeding with DB default records:", apiErr);
        }

        // 2. Fetch ALL active games (both API and MANUAL)
        const allGames = await Satta.find({ isActive: true });

        // 3. Normalize current target date (midnight UTC in IST timezone)
        const todayStr = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
        const drawDate = new Date(`${todayStr}T00:00:00.000Z`);

        for (const game of allGames) {
            if (game.source === "API") {
                if (!game.apiName) continue;

                const matchedItem = apiData.find((item) => item.name === game.apiName);
                const rawVal = (matchedItem?.result || matchedItem?.jodi  || "").trim();

                // ONLY update the DB if the API returned a real declared result!
                if (rawVal && rawVal !== "--" && rawVal !== "WAIT") {
                    await Results.findOneAndUpdate(
                        { sattaId: game._id, drawDate },
                        {
                            $set: {
                                result: rawVal,
                                source: "API",
                                status: "published",
                                isActive: true,
                            },
                        },
                        { upsert: true, new: true }
                    );
                }
            } else {
                // --- MANUAL GAME LOGIC ---
                // Only create a "WAIT" record if the admin hasn't created one for today yet
                const existingRecord = await Results.findOne({ sattaId: game._id, drawDate });

                if (!existingRecord) {
                    await Results.create({
                        sattaId: game._id,
                        drawDate,
                        result: "WAIT",
                        source: "MANUAL",
                        status: "published",
                        isActive: true,
                    });
                }
            }
        }
    } catch (error) {
        console.error("Error executing full result sync:", error);
    }
}