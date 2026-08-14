export default function Footer(){
    return (
        <footer className="w-full bg-black py-10 border-t-4 border-black text-center text-white">
        <div className="flex flex-col items-center gap-6">
          <div className="max-w-7xl mx-auto  flex justify-center gap-6 text-xs sm:text-sm font-bold capitalize">
            <a
              href="#privacy"
              className="text-[#ffd200] hover:text-[#ffe033] underline"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-[#ffd200] hover:text-[#ffe033] underline"
            >
              Terms & Conditions
            </a>
          </div>
          <div className=" bg-secondary text-[14px] text-black  font-bold w-full py-4 capitalize">
           <span className="text-neutral-500"> ©</span> 2026 A7 SATTAKING All Rights Reserved.
          </div>
          <div className="text-[14px] font-semibold text-secondary max-w-7xl leading-relaxed mt-6">
            Disclaimer: The information available on this website is based on publicly accessible sources and is provided for general informational purposes only. We do not guarantee the accuracy, completeness, or reliability of any data, charts, or results displayed. Users are advised to use their own judgment and discretion while referring to the content. This website holds no responsibility for any decisions, losses, or consequences arising from the use of this information.

          </div>
          
        </div>
      </footer>
    )
}