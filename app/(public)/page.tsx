
import LiveStatus from "./Components/Home/LiveStatus";
import CommunityLinks from "./Components/Home/CommunityLinks";
import KhaiwalGrid from "./Components/Home/KhaiwalGrid";
import SattaResultTable from "./Components/Home/SattaResultTable";
import FAQSection from "./Components/Home/FAQSection";
import Blogs from "./Components/Home/Blogs";
import SattaChartSearch from "./Components/Home/SattaChartSearch";
import WeeklyResultsSection from "./Components/Home/WeeklyResultsSection";
import CTA from "./Components/Home/CTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A7 Satta King | Satta Charts, Matka Result & Updates",
  description:
    "Check A7 Satta King latest results, daily Satta charts, Matka updates, and records. Stay updated with real-time results and game timings.",
  keywords: [
    "A7 Satta",
    "A7 Satta King",
    "Satta King result",
    "Satta Matka",
    "Satta charts",
    "daily Satta result",
    "Satta King chart",
    "A7 Satta result today",
    "Matka result",
    "Satta games India",
  ],
  alternates: {
    canonical: "https://a7sattaking.co/",
  },
  openGraph: {
    title: "A7 Satta King Result | Latest Satta Charts, Matka Results & Updates",
    description:
      "Check A7 Satta King latest results, daily Satta charts, Matka updates, and records. Stay updated with real-time results and game timings.",
    url: "https://a7sattaking.co/",
    siteName: "Your Website Name",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "A7 Satta King Result | Latest Satta Charts, Matka Results & Updates",
    description:
      "Check A7 Satta King latest results, daily Satta charts, Matka updates, and records. Stay updated with real-time results and game timings.",
  },
};

export default function Home() {


  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-black selection:bg-[#ffd200] selection:text-black">

      {/* 3. LIVE STATUS BLOCK (Black background) */}
      <LiveStatus />

      <CommunityLinks />

      <KhaiwalGrid />

      <SattaResultTable />

      <CTA />
      <main className="mx-auto mt-[5px] flex-grow w-full flex flex-col gap-10">

        {/* 8. DOUBLE HISTORIC RESULT CHART GRID */}
        <section id="charts" className="flex flex-col">

          {/* Header & Filter options */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 ">

            <div className="w-full bg-gradient-to-b from-[#ff9000] to-[#ffe400] border-b border-b-black border-t-2 border-t-black text-black py-[20px]">
              <h3 className="text-[1.25rem] font-medium text-black tracking-wider uppercase text-center mb-2 leading-[1.2]">
                SATTA KING RECORD CHART 2026
              </h3>
            </div>

          </div>
          <SattaChartSearch />

          <WeeklyResultsSection />

        </section>
        {/* 9. SEO TEXT WITH SOLID YELLOW HEADER */}
      </main>
      <FAQSection />

      {/* 10. A7 SATTA KING BLOG (Black background card blocks) */}
      {/* <Blogs /> */}

    </div>
  );
}
