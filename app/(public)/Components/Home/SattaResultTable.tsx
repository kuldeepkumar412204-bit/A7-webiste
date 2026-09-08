'use client';

import { fetchDailyApiData, fetchDailyData } from "@/app/lib/results";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Robust Time Parser
const parseTimeToMinutes = (timeStr: string): number => {
  if (!timeStr) return 0;

  // Clean strings like "12:40 PM", "1:35 PM", "01:35 PM"
  const cleanTime = timeStr.trim().toUpperCase();
  const isPM = cleanTime.includes("PM");
  const isAM = cleanTime.includes("AM");

  const formatted = cleanTime.replace(/[^0-9:]/g, "").trim();
  let [hours, minutes] = formatted.split(":").map((num) => parseInt(num, 10) || 0);

  // Correct 12-hour AM/PM conversion
  if (isPM && hours < 12) hours += 12;
  if (isAM && hours === 12) hours = 0;

  return hours * 60 + minutes;
};

// Precise Time Passed Evaluator in IST
const checkHasTimePassed = (time?: string): boolean => {
  if (!time) return false;

  const targetMinutes = parseTimeToMinutes(time);

  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    timeZone: "Asia/Kolkata",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  const parts = formatter.formatToParts(now);

  const hourStr = parts.find((p) => p.type === "hour")?.value || "0";
  const minuteStr = parts.find((p) => p.type === "minute")?.value || "0";

  const hour = parseInt(hourStr, 10) % 24;
  const minute = parseInt(minuteStr, 10);

  const currentMinutes = hour * 60 + minute;

  return currentMinutes >= targetMinutes;
};

export default function SattaResultTable() {
  const { data: satta = [] } = useQuery({
    queryKey: ["satta", "daily"],
    queryFn: fetchDailyData,
    staleTime: 0,
    refetchInterval: 30 * 1000,
  });

  const renderTableSection = (tableNo: number) => (
    <div className="w-full bg-white py-3 font-sans select-none flex justify-center">
      <div className="w-full max-w-8xl border border-gray-400 overflow-hidden shadow-sm">
        {/* TABLE HEADERS */}
        <div className="flex bg-black text-center text-white text-[14px] font-bold">
          <div className="p-2 w-[40%] sm:w-[37%] border border-[#333]">सट्टा का नाम</div>
          <div className="p-2 w-[33%] border border-[#333]">कल आया था</div>
          <div className="p-2 w-[33%] border border-[#333]">आज का रिजल्ट</div>
        </div>

        {/* TABLE ROWS */}
        <div className="divide-y divide-gray-300 text-[22px]">
          {satta
            .filter((item: any) => item.tableNo === tableNo)
            .map((game: any) => {
              const todayResult = game.result?.[1];
              const hasResult =
                todayResult &&
                todayResult !== "WAIT" &&
                todayResult !== "--" &&
                todayResult !== "";

              const timePassed = checkHasTimePassed(game.time);

              if(game.game==='disawer') return null;

              return (
                <div key={game?._id} className="flex items-stretch text-center">
                  {/* Col 1: Name & Time */}
                  <div className="w-[40%] sm:w-[37%] bg-[#FFD200] p-[0.5rem] flex flex-col justify-center items-center border border-t-0 border-primary">
                    <Link
                      href={`/${game.slug}`}
                      className="text-black text-[15px] font-bold md:text-[22px] tracking-tight leading-tight uppercase hover:text-blue-800"
                    >
                      {game?.game}
                    </Link>
                    <span className="text-black text-[15px] font-bold md:text-[22px] tracking-tight leading-tight md:mt-2">
                      {game?.time}
                    </span>
                  </div>

                  {/* Col 2: Yesterday's Result */}
                  <div className="w-[33%] p-[0.5rem] flex items-center justify-center border border-t-0 border-x-0 border-primary">
                    <div className="w-full text-black font-bold text-[22px]">
                      {game.result?.[0] === "WAIT" || game.result?.[0] === "**"
                        ? "--"
                        : game.result?.[0]}
                    </div>
                  </div>

                  {/* Col 3: Today's Result */}
                  {/* Column 3: Today's Result */}
<div className="w-[33%] p-[0.5rem] flex items-center justify-center border border-t-0 border-primary">
  <div className="w-full text-black font-bold text-[22px] flex items-center justify-center">
    {!timePassed ? (
      /* 1. Time HAS NOT passed yet -> Always show GIF badge (hides result even if API returns it early) */
      <div className="w-10 h-10 flex items-center justify-center">
        <Image
          src="/new.gif"
          alt="WAIT"
          width={40}
          height={40}
          unoptimized
        />
      </div>
    ) : hasResult ? (
      /* 2. Time HAS passed AND result exists -> Show the result */
      <span className="text-black font-bold text-[22px] sm:text-xl">
        {todayResult}
      </span>
    ) : (
      /* 3. Time HAS passed BUT result is missing/WAIT -> Show fallback "--" */
      <span className="font-extrabold text-[18px] tracking-wider">
        --
      </span>
    )}
  </div>
</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {renderTableSection(1)}
      {renderTableSection(2)}
    </div>
  );
}