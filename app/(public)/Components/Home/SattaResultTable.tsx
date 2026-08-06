'use client';
import { fetchDailyApiData, fetchDailyData, hasTimePassed } from "@/app/lib/results";
import { GameRow, getSatta } from "@/app/lib/satta";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";


export default function SattaResultTable() {


    const { data: satta = [], isLoading, error } = useQuery({
        queryKey: ["satta", "daily"],
        queryFn: fetchDailyData,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });

    const { data: apiData = [], isLoading: apiIsLoading, error: apiError } = useQuery({
        queryKey: ["satta-api", "daily-api"],
        queryFn: fetchDailyApiData,
        staleTime: 1000 * 60 * 2, // 2 minutes
    });

    // console.log("apiData", apiData);

    return (
        <div>
            <div className="w-full bg-white font-sans select-none flex justify-center">
                <div className="w-full max-w-8xl border border-gray-400 overflow-hidden shadow-sm">

                    {/* TABLE HEADERS */}
                    <div className="flex bg-black text-center text-white text-[14px] font-bold">
                        <div className="p-2 w-[40%] sm:w-[37%] border border-[#333]">सट्टा का नाम</div>
                        <div className="p-2 w-[33%] border border-[#333]">कल आया था</div>
                        <div className="p-2 w-[33%] border border-[#333]">आज का रिजल्ट</div>
                    </div>

                    {/* TABLE ROWS */}
                    {/* <div className="divide-y divide-gray-300">
                        {satta.filter((item) => item.tableNo === 1).map((game, index) => (
                            <div key={game?._id} className="grid grid-cols-[4fr_3fr_3fr]  items-center text-center">

                                <div className="bg-[#FFD200] py-2 px-2 flex flex-col justify-center items-center h-full border-r border-gray-300">
                                    <Link href={`/${game.slug}`} className="text-black font-bold text-[22px] tracking-tight leading-tight uppercase hover:text-blue-800">
                                        {game?.game}
                                    </Link>
                                    <span className="text-black font-bold text-base sm:text-xl tracking-tight leading-tight mt-2">
                                        {game.time}
                                    </span>
                                </div>

                                <div className="py-2 text-black font-bold text-[22px] sm:text-xl border-r border-gray-300 bg-white h-full flex items-center justify-center">
                                    {game.result?.[0] ?? "-"}
                                </div>

                                <div className="py-2 bg-white h-full flex items-center justify-center">
                                    {!hasTimePassed(game.time) ? (
                                        <div className="w-10 h-10">
                                            <Image
                                                src="/new.gif"
                                                alt="New"
                                                width={300}
                                                height={300}
                                                unoptimized
                                            />
                                        </div>
                                    ) : (
                                        <span className="text-black font-bold text-[22px] sm:text-xl">
                                            {game.result?.[1]??"-"}
                                        </span>
                                    )}
                                </div>

                            </div>
                        ))}
                    </div> */}
                    <div className="text-[22px]">
                        {apiData.map((data: any, index: number) => (
                            <div key={data.name} className="flex items-stretch text-center">

                                {/* Column 1: Name & Timing */}
                                <div className="w-[40%] sm:w-[37%]">
                                    <div className=" bg-[#FFD200] p-[0.5rem] flex flex-col justify-center items-center h-full border border-t-0 border-primary">
                                    <Link href={`/${data?.name?.split(" ").join("-")}`} className="text-black  text-[15px] font-bold md:text-[22px] tracking-tight leading-tight uppercase hover:text-blue-800">
                                        {data?.name}
                                    </Link>
                                    <span className="text-black text-[15px] font-bold md:text-[22px] tracking-tight leading-tight md:mt-2">
                                        {data?.open_time?.replace("at ", "")}
                                    </span>
                                </div>
                                </div>

                                {/* Column 2: Yesterday's Result */}
                                <div className="w-[33%] py-3 flex items-center justify-center border border-t-0 border-x-0 border-primary">
                                    <div className="w-full mx-2  text-black font-bold text-[22px] flex items-center justify-center">
                                        {data?.yesterday}
                                    </div>
                                </div>

                                {/* Column 3 - Today Result */}
                                <div className="w-[33%] py-3 flex items-center justify-center border border-t-0 border-primary">
                                    <div className="w-full mx-2 py-2  text-black font-bold text-[22px] flex items-center justify-center">
                                    {data?.result === "XX" ? (
                                        <div className="w-10 h-10">
                                            <Image
                                                src="/new.gif"
                                                alt="New"
                                                width={300}
                                                height={300}
                                                unoptimized
                                            />
                                        </div>
                                    ) : (
                                        <span className="text-black font-bold text-[22px] sm:text-xl">
                                            {data?.result}
                                        </span>
                                    )}
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>


                </div>
            </div>
            <div className="w-full bg-white py-6 font-sans select-none flex justify-center">
                <div className="w-full max-w-8xl border border-gray-400 overflow-hidden shadow-sm">

                    {/* TABLE HEADERS */}
                    <div className="flex bg-black text-center text-white text-[14px] font-bold">
                        <div className="p-2 w-[40%] sm:w-[37%] border border-[#333]">सट्टा का नाम</div>
                        <div className="p-2 w-[33%] border border-[#333]">कल आया था</div>
                        <div className="p-2 w-[33%] border border-[#333]">आज का रिजल्ट</div>
                    </div>

                    {/* TABLE ROWS */}
                    <div className=" text-[22px]">
                        {satta.filter((item) => item.tableNo === 2).map((game, index) => (
                            <div key={game?._id} className="flex items-stretch text-center">

                                {/* Column 1: Name & Timing */}
                                <div className="w-[40%] sm:w-[37%]">
<div className=" bg-[#FFD200] p-[0.5rem] flex flex-col justify-center items-center h-full border border-t-0 border-primary">
                                    <Link href={`/${game.slug}`} className="text-black text-[15px] font-bold md:text-[22px] tracking-tight leading-tight uppercase hover:text-blue-800">
                                        {game.game}
                                    </Link>
                                    <span className="text-black text-[15px] font-bold md:text-[22px] tracking-tight leading-tight dm:mt-2">
                                        {game.time}
                                    </span>
                                </div>
                                </div>
                                

                                {/* Column 2: Yesterday's Result */}
                                <div className="w-[33%] py-3 flex items-center justify-center border border-t-0 border-x-0 border-primary">
                                    <div className="w-full mx-2 py-2  text-black font-bold text-[22px] flex items-center justify-center">
                                        {game.result?.[0] ?? "-"}
                                    </div>
                                </div>

                                {/* Column 3 - Today Result */}
                                <div className="w-[33%] py-3 flex items-center justify-center border border-t-0 border-primary">
                                    <div className="w-full mx-2 py-2  text-black font-bold text-[22px] flex items-center justify-center">

                                        {!hasTimePassed(game.time) ? (
                                            <div className="w-10 h-10">
                                                <Image
                                                    src="/new.gif"
                                                    alt="New"
                                                    width={300}
                                                    height={300}
                                                    unoptimized
                                                />
                                            </div>
                                        ) : (
                                            <span className="text-black font-bold text-[22px] sm:text-xl">
                                                {game.result?.[1] ?? "-"}
                                            </span>
                                        )}
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}