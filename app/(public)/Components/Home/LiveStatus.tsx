'use client';

import { buildLiveStatus, type GameLiveStatus, type LiveStatusState } from "@/app/lib/liveStatus";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

export default function LiveStatus({ initialState }: { initialState?: LiveStatusState }) {
  const [currentTime, setCurrentTime] = useState("");
  // Seeded from the server render (SEO); polling below keeps it live
  const [latestGames, setLatestGames] = useState<GameLiveStatus[]>(initialState?.latestGames ?? []);
  const [disawarResult, setDisawarResult] = useState(initialState?.disawarResult);
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

      const live = buildLiveStatus(rawData);
      setDisawarResult(live.disawarResult);
      setLatestGames(live.latestGames);
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

                {game.isUpcoming || game.today === "--" || game.today === "WAIT" ? (
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
                        <span className="text-[20px] font-bold">{disawarResult && disawarResult[0]}</span>
                        {/* Green arrow */}
                        <img
                            src="/arrow.gif"
                            alt="Arrow"
                            className="mx-[5px] h-[30px] w-[30px]"
                        />
                        <span className="text-[20px] font-bold">{disawarResult && disawarResult[1]}</span>
                    </div>
                </div>
            </section>
    </>
  );
}