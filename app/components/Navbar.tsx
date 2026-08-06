"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


const links = [
  { text: "Home", href: "/" },
  { text: "CHART", href: "/chart" },
  { text: "CONTACT", href: "/contact" },
  // { text: "LOGIN", href: "/login" },
    { text: "disclaimer", href: "/disclaimer" },

];

export default function Navbar() {
    const pathname = usePathname();
  return (
    <>


      <div className="bg-black pt-[30px] pb-[20px]">

         <nav className="w-full px-4">
        <div className="w-full block">
          {links.map((link, index) => {
            const isActive = pathname === link.href;

            return (
              <div
                key={link.href}
                className="float-left w-1/4 px-[2px] lg:px-[30px]"
              >
                <Link
                  href={link.href}
                  className={`block rounded-[30px] border border-black p-[8px] lg:px-[30px] lg:py-3 text-center text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] font-bold uppercase tracking-[0.5px] transition-all duration-200
                    ${
                      isActive
                        ? "bg-white lg:shadow-[2px_2px_0_rgba(255,216,100,0.9)]"
                        : "bg-[#ffd800] lg:shadow-[2px_2px_0_hsla(0,0%,100%,0.9)] hover:bg-[#ffe44d]"
                    }`}
                >
                  {link.text}
                </Link>
              </div>
            );
          })}
        </div>
      </nav>
        <div className="w-full pt-[34px] block overflow-hidden shadow-inner">
          {/* Marquee Ticker Banner Track */}
          <div className="w-full bg-gradient-to-r overflow-hidden shadow-inner">
            {React.createElement('marquee', {
              behavior: 'scroll',
              direction: 'left',
              scrollamount: '5',
              className: 'text-[#140E05] font-medium text-[14px] tracking-wide flex items-center text-white mb-[8px]',
            }, " Welcome to A7 SATTA KING Official Website! Stay updated with historical data insights, game rule books, and real-time live winning news updates around the clock.")}
          </div>
        </div>


      </div>
      {/* 2. MAIN BRAND HEADER (Yellow background, big title) */}
      <header className="  w-full bg-[#ffd800] py-[30px] text-center select-none overflow-hidden">

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
            <h1 className="text-[27px] font-semibold tracking-tighter text-black uppercase animate-custom-fade">
              A7 SATTA KING OFFICIAL
            </h1>
          </Link>
        </div>


      </header>
    </>

  );
}