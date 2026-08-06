'use client';

import { fetchContact } from "@/app/lib/contact";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";


export default function CommunityLinks() {
   const { data } = useQuery({
    queryKey: ["contact", "A79PYR47"],
    queryFn:  () => fetchContact("A79PYR47"),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
  console.log(data)
  return (
    <div className="w-full py-2 flex flex-col gap-4 font-sans select-none">
      <div className="w-full mx-auto flex flex-col gap-2">

        {/* WHATSAPP ROW */}
        <div className="w-full bg-[#ffd200] border border-dashed border-red-500 p-[1.5rem] text-center ">
          <p className="text-primary font-bold text-[14px] mb-[0.2rem] uppercase tracking-tight max-w-7xl mx-auto leading-relaxed">
            NOW WHATSAPP PLAYERS CAN ALSO JOIN OUR WHATSAPP CHANNEL TO GET RESULTS QUICKLY AND RECEIVE SUPERFAST RESULTS.
          </p>
          <div className="flex justify-center">
            <a
            href={`https://wa.me/${data?.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-white "
          >
            {/* WhatsApp Pill Icon Wrapper */}
                        <img src="/whatsapp-btn.png" alt="" className="h-[69px] text-[#00a2ed]" />

          </a>
          </div>
        </div>
        
        {/* TELEGRAM ROW */}
        <div className="w-full bg-secondary border border-dashed border-red-500  p-[1.5rem] text-center">
          <p className="text-primary font-bold text-[14px] mb-[0.2rem] uppercase tracking-tight max-w-7xl mx-auto leading-relaxed">
            NOW TELEGRAM PLAYERS CAN ALSO JOIN OUR TELEGRAM CHANNEL TO GET RESULTS QUICKLY AND RECEIVE SUPERFAST RESULTS.
          </p>
          <div className="flex justify-center">
            <a
            href={data?.telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-white font-black transition-all duration-150"
          >
            <img src="/telegram-btn.png" alt="" className="h-[69px] text-[#00a2ed]" />
          </a>
          </div>
        </div>

        

        {/* SHRI GANESH UPDATE TRACK */}
        <div className="w-full bg-secondary border border-dashed border-red-500 p-5 text-center">
          <p className="text-primary font-semibold text-[0.9rem] uppercase tracking-tight">
            <a href="#shri-ganesh" className="underline text-blue-900 hover:text-zinc-800">SHRI GANESH SATTA KING</a> RESULT IS UPDATED EVERYDAY AT <span className="font-bold">4:40 PM</span>.
          </p>
        </div>

        {/* SADAR BAZAR UPDATE TRACK */}
        <div className="w-full bg-[#ffd200] border border-dashed border-red-500 p-5 text-center">
          <p className="text-primary font-semibold text-[0.9rem] uppercase tracking-tight">
            <a href="#sadar-bazar" className="underline text-blue-900 hover:text-zinc-800">SADAR BAZAR SATTA KING 2025</a> CHART IS AVAILABLE ON a7sattaking.co
          </p>
        </div>

      </div>
    </div>
  );
}