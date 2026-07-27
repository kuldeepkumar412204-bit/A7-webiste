
import LiveStatus from "./Components/Home/LiveStatus";
import CommunityLinks from "./Components/Home/CommunityLinks";
import KhaiwalGrid from "./Components/Home/KhaiwalGrid";
import SattaResultTable from "./Components/Home/SattaResultTable";
import FAQSection from "./Components/Home/FAQSection";
import Blogs from "./Components/Home/Blogs";
import SattaChartSearch from "./Components/Home/SattaChartSearch";
import WeeklyResultsSection from "./Components/Home/WeeklyResultsSection";
import CTA from "./Components/Home/CTA";


export default function Home() {


  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans selection:bg-[#ffd200] selection:text-black">


      {/* 3. LIVE STATUS BLOCK (Black background) */}
      <LiveStatus/>
      {/* 6. SATTA ANNOUNCEMENT HEADER BANNER */}

      <CommunityLinks />


      <KhaiwalGrid />

      <SattaResultTable />

      <CTA/>
      <main className="mx-auto pt-8 flex-grow w-full flex flex-col gap-10">


        {/* 8. DOUBLE HISTORIC RESULT CHART GRID */}
        <section id="charts" className="flex flex-col gap-6">

          {/* Header & Filter options */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 ">

            <div className="w-full bg-gradient-to-b from-orange-400 to-[#ffd200] border-t-2 border-b border-black py-4 pb-6 text-center">
              <h3 className="text-xl sm:text-xl font-semibold text-black tracking-wider uppercase">
                SATTA RECORD CHART 2026
              </h3>
            </div>

          </div>
          <SattaChartSearch />

          <WeeklyResultsSection />


        </section>
        {/* 9. SEO TEXT WITH SOLID YELLOW HEADER */}

        <FAQSection />


        {/* 10. A7 SATTA KING BLOG (Black background card blocks) */}
        <Blogs />

      </main>
      {/* 12. FLOATING BOTTOM RIGHT REFRESH BUTTON */}
      

    </div>
  );
}
