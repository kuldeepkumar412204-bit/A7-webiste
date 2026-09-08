'use client';

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

interface GameLiveStatus {
  _id: string;
  name: string;
  today: string;
  time: string;
  minutes: number;
  isUpcoming?: boolean;

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

export default function LiveStatus() {
  const [currentTime, setCurrentTime] = useState("");
  const [latestGames, setLatestGames] = useState<GameLiveStatus[]>([]);

  // Live Clock Display
  // Replace the clock useEffect to force IST instead of local browser tz
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const date = now.toLocaleDateString("en-US", {
        timeZone: "Asia/Kolkata",
        month: "long",
        day: "numeric",
        year: "numeric",
      });

      const time = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

      setCurrentTime(`${date} ${time}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Fetch data, sort purely by time, and slice the top 2
  const fetchLiveGames = useCallback(async () => {
    try {
      const res = await fetch("/api/data?range=daily");
      if (!res.ok) throw new Error("Failed to load live status");

      const responseData = await res.json();
      const rawData = responseData.data || responseData;

      if (Array.isArray(rawData)) {
        // 1. Process all items
        const processedGames = rawData.map((item: any) => {
          const gameTime = item.time;
          const gameMinutes = parseTimeToMinutes(gameTime);
          const results = Array.isArray(item.result) ? item.result : [];
          const today = results[1] && results[1] !== "WAIT" && results[1] !== "--" ? results[1] : "--";

          // in the map inside processedGames:
          return {
            _id: item._id || item.game,
            name: (item.game || item.name || "").toUpperCase(),
            today,
            time: gameTime,
            minutes: gameMinutes,
          };
        });

        // In fetchLiveGames, replace steps 2-3:
        const nowMinutes = getISTMinutesNow();

        // Games due within the next 10 minutes, not yet resulted
        const upcomingGames = processedGames.filter(
          (g) => g.minutes > nowMinutes && g.minutes <= nowMinutes + 10
        );

        if (upcomingGames.length > 0) {
          upcomingGames.sort((a, b) => a.minutes - b.minutes);
          setLatestGames(upcomingGames.slice(0, 2).map((g) => ({ ...g, isUpcoming: true })));
        } else {
          const pastGames = processedGames.filter((g) => g.minutes <= nowMinutes);
          pastGames.sort((a, b) => b.minutes - a.minutes);
          setLatestGames(pastGames.slice(0, 2).map((g) => ({ ...g, isUpcoming: false })));
        }
      }
    } catch (err) {
      console.error("API error:", err);
    }
  }, []);

  useEffect(() => {
    fetchLiveGames();
    const interval = setInterval(fetchLiveGames, 15000);
    return () => clearInterval(interval);
  }, [fetchLiveGames]);

  return (
    <>
      <section className="w-full bg-black py-[24px] px-4 text-center border-b-4 border-black text-white">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
          <div className="block min-h-8 text-center text-[20px] font-bold text-[#ffd800]">
            {currentTime}
          </div>
          <h2 className="text-[24px] font-black text-white tracking-tight">
            हा भाई यही आती हे सबसे पहले खबर रूको और देखो
          </h2>

          <div className="w-full max-w-md pb-4">
            {latestGames.map((game) => (
              <div key={game._id} className="text-[33px] font-semibold tracking-widest text-white mt-2 uppercase">
                <div style={{ letterSpacing: "1px" }} className="pb-4">{game.name}</div>

                {game.isUpcoming ? (
                  <div className="w-[60px] h-[60px] flex items-center justify-center mx-auto py-4">
                    <Image
                      src="/new.gif"
                      alt="WAIT"
                      width={60}
                      height={60}
                      unoptimized
                    />
                  </div>
                ) : (<div className="py-[1rem] text-[39px] font-bold">{game.today}</div>)}

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISAWER RESULT PANEL */}
     <section className="w-full bg-[#ffd800] pt-[20px] text-center text-black">
                <div className="max-w-md mx-auto pb-[15px] flex flex-col items-center">
                    <h3 className="text-[24px] font-medium tracking-tight">DISAWER</h3>
                    <span className="my-2 text-center text-[18px] font-medium text-black">5:15 AM</span>
                    <div className="flex items-center rounded-xl text-black/70">
                        <span className="text-[20px] font-bold">67</span>
                        {/* Green arrow */}
                        <img
                            src="/arrow.gif"
                            alt="Arrow"
                            className="mx-[5px] h-[30px] w-[30px]"
                        />
                        <span className="text-[20px] font-bold">92</span>
                    </div>
                </div>
            </section>
    </>
  );
}