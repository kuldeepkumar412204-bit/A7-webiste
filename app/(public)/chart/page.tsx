'use client'
import { fetchDailyData } from "@/app/lib/results";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

export default function SattaChartLinksGrid() {
    const charts = [
        { name: "DAMAN SATTA KING CHART 2026", isActive: false },
        { name: "KAROL BAGH SATTA KING CHART 2026", isActive: false },
        { name: "RAJ SHREE SATTA KING CHART 2026", isActive: false },
        { name: "GALI SATTA KING CHART 2026", isActive: false },
        { name: "DWARKA SATTA KING CHART 2026", isActive: false },
        { name: "GAZIABAD SATTA KING CHART 2026", isActive: false },
        { name: "ALWAR SATTA KING CHART 2026", isActive: true }, // Black active state
        { name: "FARIDABAD SATTA KING CHART 2026", isActive: false },
        { name: "AGRA SATTA KING CHART 2026", isActive: false },
        { name: "SHRI GANESH SATTA KING CHART 2026", isActive: false },
        { name: "DELHI BAZAR SATTA KING CHART 2026", isActive: false },
        { name: "GWALIOR SATTA KING CHART 2026", isActive: false },
        { name: "SADAR BAZAR SATTA KING CHART 2026", isActive: false },
        { name: "DISAWER SATTA KING CHART 2026", isActive: false },
        { name: "HR SATTA KING CHART 2026", isActive: false },
        { name: "UJJALA SUPER SATTA KING CHART 2026", isActive: false },
        { name: "NEW GANSA SATTA KING CHART 2026", isActive: false },
        { name: "DELHI MATKA SATTA KING CHART 2026", isActive: false },
        { name: "DEHRADUN CITY SATTA KING CHART 2026", isActive: false },
        { name: "KKR CITY SATTA KING CHART 2026", isActive: false },
        { name: "DELHI DARBAR SATTA KING CHART 2026", isActive: false },
        { name: "MANDI BAZAR SATTA KING CHART 2026", isActive: false },
        { name: "MADHUPURI SATTA KING CHART 2026", isActive: false },
        { name: "FATEHABAD SATTA KING CHART 2026", isActive: false },
        { name: "LION BAZAR SATTA KING CHART 2026", isActive: false },
        { name: "SIALKOT SATTA KING CHART 2026", isActive: false },
        { name: "BHADRA BAZAR SATTA KING CHART 2026", isActive: false },
        { name: "ANMOL BAZAR SATTA KING CHART 2026", isActive: false },
        { name: "SKY KING SATTA KING CHART 2026", isActive: false },
        { name: "MOHALI-7 SATTA KING CHART 2026", isActive: false },
        { name: "UDAIPUR CITY SATTA KING CHART 2026", isActive: false },
    ];

    const { data: satta = [], isLoading, error } = useQuery({
        queryKey: ["satta", "daily"],
        queryFn: fetchDailyData,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });

    return (
        <div className="w-full bg-white pb-8 select-none">

            <div className="bg-black py-[25px]">
                <p className="text-[16px] leading-[28px] text-center text-white">
                    A7satta provides all kind of satta king results everyday.

                </p>

            </div>
            {/* Top Main Heading Banner with exact Orange-Yellow Gradient */}
            <div className="bg-gradient-to-b from-[#ff9000] to-[#ffe400] border-b border-b-black border-t-2 border-t-black text-black py-5">
                <h2 className="text-black font-semibold text-[calc(1.325rem+0.9vw)] text-center mb-2 tracking-wide uppercase">
                    SATTA KING CHART 2026
                </h2>
            </div>

            {/* 3-Column Links Responsive Grid Container */}
            <div className=" mx-auto grid grid-flow-row grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-[5px] p-[10px]">
                {satta.map((chart: any, idx: number) => (
                    <Link
                        key={idx}
                        href={`/${chart.slug}`}
                        className="
        bg-[#ffd800] rounded-[5px] text-black font-medium py-[10px] text-center uppercase
        hover:bg-black hover:text-[#FFD200]
        hover:brightness-100
        active:translate-y-[1px]
      "
                    >
                        {chart.game} satta king chart 2026
                    </Link>
                ))}
            </div>

        </div>
    );
}