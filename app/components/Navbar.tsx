import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>


      <div className="bg-black pt-[30px] pb-5">

        <nav className="w-full px-4">
          <div className="w-full block">

            {/* Brand/Logo Pill Button */}
            <div className="float-left w-1/4 px-[30px]">
              <Link
                href="/"
                className="block rounded-[30px] border border-black bg-[#fff] px-[30px] py-3 text-center text-[14px] font-bold uppercase tracking-[0.5px] shadow-[2px_2px_0_rgba(255,216,100,0.9)]"
              >
                A7SATTA 🏠
              </Link>
            </div>

            {/* Navigation Link: CHART */}
            {
              [{ text: "CHART", href: "/chart" }, { text: "CONTACT", href: "/contact" }, { text: "LOGIN", href: "/login" }].map((link, index) => (
                <div className="float-left w-1/4 px-[30px]"
                  key={index}

                >

                  <Link
                    href={link.href}
                    className="block rounded-[30px] border border-black bg-[#ffd800] px-[30px] py-3 text-center text-[14px] font-bold uppercase tracking-[0.5px] shadow-[2px_2px_0_hsla(0,0%,100%,0.9)]"
                  >
                    {link.text}
                  </Link>
                </div>
              ))
            }
          </div>

        </nav>
        <div className="w-full pt-[18px] block overflow-hidden shadow-inner">
          {/* Marquee Ticker Banner Track */}
          <div className="w-full bg-gradient-to-r border-t overflow-hidden shadow-inner">
            {React.createElement('marquee', {
              behavior: 'scroll',
              direction: 'left',
              scrollamount: '5',
              className: 'text-[#140E05] font-medium text-[16px] tracking-wide flex items-center text-white',
            }, " Welcome to A7 SATTA KING Official Website! Stay updated with historical data insights, game rule books, and real-time live winning news updates around the clock. 🚀")}
          </div>
        </div>


      </div>
      {/* 2. MAIN BRAND HEADER (Yellow background, big title) */}
      <header className="  w-full bg-[#ffd800] py-6 text-center select-none overflow-hidden">

        <div className="container mx-auto px-[12px]">
          {/* Custom Keyframes Style Injection */}

          <style>{`
            @keyframes strictOpacityFade {
              0%, 100% { opacity: 0; }
              50% { opacity: 1; }
            }
            .animate-custom-fade {
              animation: strictOpacityFade 2s ease-in-out infinite;
            }
          `}</style>

          <Link href={"/"}>
            <h1 className="text-[calc(1.375rem+1.5vw)] leading-[1.2] font-semibold tracking-tighter text-black uppercase animate-custom-fade">
              A7 SATTA KING OFFICIAL
            </h1>
          </Link>
        </div>


      </header>
    </>

  );
}