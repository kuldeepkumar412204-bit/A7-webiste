"use client";
import { fetchContact } from "@/app/lib/contact";
import { getKhaiwalTimings, KhaiwalTiming } from "@/app/lib/khaiwal";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function KhaiwalGrid() {
  const [timings, setTimings] = useState<KhaiwalTiming[]>([]);

  useEffect(() => {
    const fetchTimings = async () => {
      try {
        const data = await getKhaiwalTimings();
        setTimings(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTimings();
  }, []);
  const timingsData1And2 = timings;

  const timingsData4 = timings;

    const { data } = useQuery({
    queryKey: ["contact", "A79PYR47"],
    queryFn:  () => fetchContact("A79PYR47"),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return (
    <div className="w-full my-[5px] font-sans select-none">
      <div className="w-full max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[5px] items-start text-[14px]">

        {/* COLUMN 1: AJAY BHAI KHAIWAL */}
        <div className="w-full bg-gradient-to-b from-[#ffd800] via-[#ffd000dd] to-white border-[3px] border-dashed border-red-600 rounded-[20px] px-2 py-4 text-center flex flex-col items-center">
          <div className="">
            <p className=" text-black tracking-tight text-[14.4px] mb-[3.2px]">
              <strong>
                --सीधे सट्टा कंपनी का No 1 खाईवाल--
              </strong>
            </p>
            <p className="font-bold mb-[3.2px]">
              <strong>
              ♕♕ KUBER BHAI  KHAIWAL ♕♕


            </strong>
            </p>

            <div className="w-full text-left">
              {timingsData1And2.map((item, idx) => (
                <div key={idx+"aguahdu"} className="flex justify-center text-black/80 items-center text-[14.4px] font-semibold mb-[3.2px]">
                  ⏰ {item.location} {"  "}
                  <span className="font-bold">
                    ----------- 
                  </span>
                  <span className="text-black/90 font-bold"> {" "} {item.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex flex-col items-center gap-2 mb-[3.2px] text-[14.4px]">
            <span className="text-black/85 font-black ">🤪 🤪 AJAY BHAI KHAIWAL 🤪 🤪</span>
            <a href={`https://wa.me/${data?.whatsappNumber}`} className="text-blue-800 font-black underline hover:text-blue-900 mb-1">
              Game play करने के लिये नीचे लिंक पर क्लिक करे
            </a>
            <WhatsAppButton number={data?.whatsappNumber}/>
          </div>
        </div>

        {/* COLUMN 2: AJAY BHAI KHAIWAL */}
        <div className="w-full bg-gradient-to-b text-black/80 from-[#ffd800] via-[#ffd000dd] to-white border-[3px] border-dashed border-red-600 rounded-[20px] px-2 py-4 text-center flex flex-col items-center">
          <div className="">
            <p className=" tracking-tight text-[14.4px] mb-[3.2px]">
              <strong>
                --सीधे सट्टा कंपनी का No 1 खाईवाल--
              </strong>
            </p>
            <p className="font-bold mb-[3.2px]">
              <strong>
              ♕♕ JASSI BHAI  KHAIWAL ♕♕
            </strong>
            </p>

            <div className="w-full text-left">
              {timingsData1And2.map((item, idx) => (
                <div key={idx+"aguahdu"} className="flex justify-center items-center text-[14.4px] font-semibold mb-[3.2px]">
                  ⏰ {item.location} {"  "}
                  <span className="font-bold">
                    ----------- 
                  </span>
                  <span className="text-black/90 font-bold"> {" "} {item.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex flex-col items-center gap-2 mb-[3.2px] text-[14.4px]">
            <span className=" font-black ">🙂🙂 JASSI BHAI KHAIWAL 🙂🙂 </span>
            <a href={`https://wa.me/${data?.whatsappNumber}`} className="text-blue-800 font-black underline hover:text-blue-900 mb-1">
              Game play करने के लिये नीचे लिंक पर क्लिक करे
            </a>
            <WhatsAppButton number={data?.whatsappNumber}/>
          </div>
        </div>

        {/* COLUMN 3: CRICKET ID INFO */}
        <div className="text-[14.4px] text-black/80 w-full bg-gradient-to-b from-[#ffd800] via-[#ffd000dd] to-white border-[3px] border-dashed border-red-600 rounded-[20px] px-2 py-4 text-center flex flex-col items-center">
          <p className=" font-black leading-relaxed max-w-xs">
            नमस्कार साथियों Cricket <span className="bg-purple-600 text-white px-1 py-0.5 rounded text-[10px]">ID</span> लेने वाले भाई नीचे दिए गए लिंक पर क्लिक करे
          </p>

          <div className="flex gap-0.5 my-1 text-emerald-600 font-black text-sm">
            ✳️✳️✳️✳️✳️✳️✳️✳️✳️✳️✳️✳️
          </div>

          <span className=" font-black text-xs sm:text-sm tracking-wide">
            minimum <span className="bg-purple-600 text-white px-1 py-0.5 rounded text-[10px]">ID</span> 500₹ maximum no limit
          </span>
<div className="flex gap-0.5 my-1 text-emerald-600 font-black text-sm">
            ✳️✳️✳️✳️✳️✳️✳️✳️✳️✳️✳️✳️
          </div>
          <p className="font-bold">
            Note 👉 इस नंबर पर सिर्फ क्रिकेट खेलने वाले ही msg करे फालतू के msg करने वाला ब्लॉक कर दिया जाएगा


          </p>

          <div className="mt-2">
            <WhatsAppButton number={data?.whatsappNumber}/>
          </div>
        </div>

        {/* COLUMN 4: RAMAN BHAI KHAIWAL */}
        <div className="w-full bg-gradient-to-b text-black/80 from-[#ffd800] via-[#ffd000dd] to-white border-[3px] border-dashed border-red-600 rounded-[20px] px-2 py-4 text-center flex flex-col items-center">
          <div className="">
            <p className=" tracking-tight text-[14.4px] mb-[3.2px]">
              <strong>
                --सीधे सट्टा कंपनी का No 1 खाईवाल--
              </strong>
            </p>
            <p className="font-bold mb-[3.2px]">
              <strong>
              ♕♕ RAMAN BHAI  KHAIWAL ♕♕
            </strong>
            </p>

            <div className="w-full text-left">
              {timingsData1And2.map((item, idx) => (
                <div key={idx+"aguahdu"} className="flex justify-center items-center text-[14.4px] font-semibold mb-[3.2px]">
                  ⏰ {item.location} {"  "}
                  <span className="font-bold">
                    ----------- 
                  </span>
                  <span className="text-black/90 font-bold"> {" "} {item.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex flex-col items-center gap-2 mb-[3.2px] text-[14.4px]">
            <span className=" font-black ">🙂🙂  RAMAN BHAI KHAIWAL  🙂🙂 </span>
            <a href={`https://wa.me/${data?.whatsappNumber}`} className="text-blue-800 font-black underline hover:text-blue-900 mb-1">
              Game play करने के लिये नीचे लिंक पर क्लिक करे
            </a>
            <WhatsAppButton number={data?.whatsappNumber}/>
          </div>
        </div>

      </div>
    </div>
  );
}

// Reusable Exact WhatsApp Button Layout Component
function WhatsAppButton({number}:{number:string|any;}) {
  return (
    <a
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 text-white "
    >
      {/* WhatsApp Pill Icon Wrapper */}
      <img src="/whatsapp-btn.png" alt="" className="h-[65px] text-[#00a2ed]" />

    </a>
  );
}