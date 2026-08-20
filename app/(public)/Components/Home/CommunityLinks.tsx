'use client';

import { fetchContact } from "@/app/lib/contact";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import WhatsAppButton from "../Global/WhatsppBtn";
import TelegramButton from "../Global/TelegramButton";


export default function CommunityLinks() {
   const { data } = useQuery({
    queryKey: ["contact", "A7CHAN0ANI"],
    queryFn:  () => fetchContact("A7CHAN0ANI"),
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
            <WhatsAppButton value={data?.whatsappNumberOrUrl}/>
          </div>
        </div>
        
        {/* TELEGRAM ROW */}
        <div className="w-full bg-secondary border border-dashed border-red-500  p-[1.5rem] text-center">
          <p className="text-primary font-bold text-[14px] mb-[0.2rem] uppercase tracking-tight max-w-7xl mx-auto leading-relaxed">
            NOW TELEGRAM PLAYERS CAN ALSO JOIN OUR TELEGRAM CHANNEL TO GET RESULTS QUICKLY AND RECEIVE SUPERFAST RESULTS.
          </p>
          <div className="flex justify-center">
            <TelegramButton value={data?.telegramLink}/>
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