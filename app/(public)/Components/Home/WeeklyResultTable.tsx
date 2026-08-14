// components/WeeklyResultTable.tsx

import { MonthlyGameRow } from "./WeeklyResultsSection";

interface Props {
  title?: string;
  data: MonthlyGameRow[];
  searchQuery: string;
  selectedMonth: string;
  selectedYear: string;
}

export default function WeeklyResultTable({
  title,
  data,
  searchQuery,
  selectedMonth,
  selectedYear,
}: Props) {
  // Filter games based on search query
  const filteredGames = data.filter((row) =>
    row.game.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Extract date list dynamically from the dynamic dataset array, default to empty if empty array is passed
  const availableDates = data[0]?.dates || [];
  const totalDays = availableDates.length;

  return (
    <div className="flex flex-col overflow-hidden">
      {title && (
        <div className="bg-gradient-to-b from-[#ff9000] to-[#ffe400] border-t-[2px] border-b border-black text-black py-5">
          <h3 className="text-[15px] md:text-[calc(1.375rem+1.5vw)] font-semibold text-black tracking-wider uppercase text-center leading-[1.2] mb-[0.2rem]">
            {title}
          </h3>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#ffd800] text-black border-b border-black text-[13px] font-extrabold uppercase">
              <th className="p-[0.5rem] min-w-[120px] w-[120px] z-20 bg-[#ffd800] border-[1px] border-[#333] text-center capitalize">
                <strong>Date</strong>
              </th>

              {filteredGames.map((game, index) => (
                <th
                  key={game.game + index}
                  className=" p-[0.5rem] text-center border-[1px] border-[#333] text-[13px] min-w-[120px]"
                >
                                          {game.game}

                    {/* <span className="text-[10px] text-black/60 font-mono font-medium lowercase">
                      ({game.time})
                    </span> */}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className=" text-[13px] font-bold bg-white text-black">
            {Array.from({ length: totalDays }).map((_, dayIdx) => {
              // Read exact target index labels directly from API configuration array sequence strings
              const rawDateLabel = availableDates[dayIdx] || "";

              // Clean formatting display view presentation labels (transforms "2026-07-16" into clean text like "16-Jul")
              let formattedDateView = rawDateLabel;
              if (rawDateLabel) {
                const parts = rawDateLabel.split("-");

                if (parts.length === 3) {
                  const day = parts[2];
                  const month = parts[1];

                  formattedDateView = `${day}-${month}`;
                }
              }

              return (
                <tr
                  key={dayIdx}
                  className="hover:bg-yellow-50 transition-colors"
                >
                  <td className="min-w-[120px] p-[0.5rem] font-bold text-[13px] left-0 z-20 bg-[#ffd200] border border-black text-center shadow-[2px_0_5px_rgba(0,0,0,0.1)]">
                    {formattedDateView}
                  </td>

                  {filteredGames.map((row) => {
                    // Match singular layout context response structures safely
                    const value = row.result?.[dayIdx] ?? "-";

                    return (
                      <td
                        key={`${row.game}-${dayIdx}`}
                        className="min-w-[120px] p-[0.5rem] text-center border-r border-b border-black text-[13px]"
                      >
                        {value === "-" || value === null ? (
                          <span className="text-black/35 font-bold">-</span>
                        ) : (
                          <span className="font-extrabold text-gray-900">{value}</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}