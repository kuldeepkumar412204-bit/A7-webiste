'use client';

import { useEffect, useState } from "react";

export default function LiveStatus() {

    const [currentTime, setCurrentTime] = useState("");
    const [selectedYear, setSelectedYear] = useState(2026);
    const [selectedMonth, setSelectedMonth] = useState("July");

    // Clock Update
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const date = now.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
            });

            const time = now.toLocaleTimeString("en-US", {
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

    return (
        <>
            <section className="w-full bg-black py-[24px] px-4 text-center border-b-4 border-black text-white">
                <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
                    <div className="block min-h-8 text-center text-[20px] font-bold text-[#ffd800]">
                        {currentTime || "July 4, 2026 5:59:50 PM"}
                    </div>
                    <h2 className="text-[24px] font-black text-white tracking-tight">
                        हा भाई यही आती हे सबसे पहले खबर रूको और देखो
                    </h2>
                    <div>
                        <div className="text-[33px] font-semibold tracking-widest text-white mt-2 uppercase">
                            <div className="" style={{ letterSpacing: "1px" }}>
                                disawer
                            </div>
                            <div className="py-[1rem] text-[39px]">
                                26
                            </div>

                        </div>
                        {/* <div className="hidden md:block text-2xl sm:text-3xl font-bold tracking-widest text-white mt-6 uppercase">
                            <div className="">
                                gwalior
                            </div>
                            <div className="mt-4 sm:mt-6">
                                16
                            </div>

                        </div>
                        <div className="text-2xl sm:text-3xl font-bold tracking-widest text-white mt-6 uppercase">
                            <div className="">
                                AGRA
                            </div>
                            <div className="wait-starburst mt-6 mx-auto ">
                                <span>WAIT</span>
                            </div>

                        </div> */}

                    </div>
                </div>
            </section>

            {/* 4. DISAWER RESULT PANEL (Yellow background) */}
            <section className="w-full bg-[#ffd800] pt-[20px] text-center text-black">
                <div className="max-w-md mx-auto pb-[15px] flex flex-col items-center">
                    <h3 className="text-[24px] font-semibold tracking-tight">DISAWER</h3>
                    <span className="my-2 text-center text-[18px] font-semibold text-black">5:15 AM</span>
                    <div className="flex items-center rounded-xl text-black/70">
                        <span className="text-[20px] font-mono font-black">39</span>
                        {/* Green arrow */}
                        <img
                            src="/arrow.gif"
                            alt="Arrow"
                            className="mx-[5px] h-[30px] w-[30px]"
                        />
                        <span className="text-[20px] font-mono font-black">91</span>
                    </div>
                </div>
            </section>
        </>
    )
}
