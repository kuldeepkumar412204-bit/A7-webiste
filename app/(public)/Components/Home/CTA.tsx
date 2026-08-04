'use client';
import { fetchContact } from "@/app/lib/contact";
import { useQuery } from "@tanstack/react-query";

export default function CTA(){
    const { data } = useQuery({
        queryKey: ["contact", "A79PYR47"],
        queryFn:  () => fetchContact("A79PYR47"),
        staleTime: 1000 * 60 * 5, // 5 minutes
      });
    return (
        <>
        
        <div className="mb-[5px]">
        {/* TELEGRAM ROW */}
        <div className="w-full bg-gradient-to-b text-black/80 text-[14.4px] from-[#ffd800] via-[#ffd000dd] to-white border-[3px] border-dashed border-red-600 rounded-[20px] px-2 py-4 text-center flex flex-col items-center">
          <p className=" font-semibold uppercase tracking-tight max-w-5xl leading-relaxed">
            🙏🏿नमस्कार साथियो 🙏🏿

          </p>
          <p className="font-semibold tracking-tight max-w-5xl leading-relaxed">
            अपनी गेम का रिजल्ट हमारी 
            <strong> web </strong> साइट पर लगवाने के लिए संपर्क करें।

          </p>
          <p className="font-bold uppercase tracking-tight max-w-5xl leading-relaxed mt-2">
            ----ARUN BHAI ----


          </p>

          <a
            href={`https://wa.me/${data?.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-white "
          >
            {/* WhatsApp Pill Icon Wrapper */}
            <img src="/whatsapp-btn.png" alt="" className="h-[65px] text-[#00a2ed]" />

          </a>


          <p className="font-semibold uppercase tracking-tight max-w-5xl leading-relaxed mt-2">
            NOTE:   इस नंबर पर लीक गेम नही मिलता गेम लेने वाले भाई कॉल या मैसेज न करें।

          </p>
          <p className="font-semibold uppercase tracking-tight max-w-5xl leading-relaxed">
            किसी भी भाई को किसी भी तरह की कोई शिकायत या परेशानी हो तो हमसे telegram पर संपर्क करे
          </p>
          <a
            href={data?.telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-white font-black transition-all duration-150"
          >
            <img src="/telegram-btn.png" alt="" className="h-[65px] text-[#00a2ed]" />
          </a>
        </div>
      </div></>
    )
}