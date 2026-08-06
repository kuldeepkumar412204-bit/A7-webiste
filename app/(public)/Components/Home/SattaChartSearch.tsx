'use client';
import React, { useState } from "react";

export default function SattaChartSearch() {
  const [selectedGame, setSelectedGame] = useState("DAMAN");
  const [selectedYear, setSelectedYear] = useState("2026");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clean strings to make clean URL pathing slugs
    const gameSlug = selectedGame.toLowerCase().replace(/\s+/g, "-");
    
    // Redirect to the dynamic slug page with year parameter
    window.location.href = `/${gameSlug}?year=${selectedYear}`;
  };

  return (
    <div className="w-full bg-white font-sans select-none py-[12.8px]">

      {/* Main Search Controls Container Row */}
      <div className="w-full py-0 px-4 flex justify-center items-center">
        <form 
          onSubmit={handleSearchSubmit}
          className="w-full md:w-1/2 max-w-4xl flex items-center justify-center gap-2"
        >
          {/* Game Dropdown Selection Element */}
          <div className="w-full">
            <select
              value={selectedGame}
              onChange={(e) => setSelectedGame(e.target.value)}
              className="w-full bg-white text-black font-semibold md:font-bold p-[0.2rem] md:p-[0.8rem] rounded border-2 border-[#FFD200] outline-none appearance-none cursor-pointer tracking-wide"
              style={{
                backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='black'><path d='M7 10l5 5 5-5z'/></svg>")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 8px center",
                backgroundSize: "20px"
              }}
            >
              <option value="DAMAN">DAMAN</option>
              <option value="SADAR BAZAR">SADAR BAZAR</option>
              <option value="GWALIOR">GWALIOR</option>
              <option value="DELHI BAZAR">DELHI BAZAR</option>
              <option value="DELHI MATKA">DELHI MATKA</option>
              <option value="SHRI GANESH">SHRI GANESH</option>
            </select>
          </div>

          {/* Year Dropdown Selection Element */}
          <div className="w-full">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full bg-white text-black font-semibold md:font-bold p-[0.2rem] md:p-[0.8rem] rounded border-2 border-[#FFD200] outline-none appearance-none cursor-pointer tracking-wide"
              style={{
                backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='black'><path d='M7 10l5 5 5-5z'/></svg>")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 8px center",
                backgroundSize: "20px"
              }}
            >
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
          </div>

          {/* Submission Trigger Action Button */}
          <button
            type="submit"
            className="bg-[#FFD200] hover:bg-[#e6bd00] text-black font-semibold md:font-bold px-[10px] py-[4px] md:px-[20px] md:py-[12px] rounded transition-colors duration-150 active:scale-98 cursor-pointer shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
          >
            Check
          </button>
        </form>
      </div>
    </div>
  );
}