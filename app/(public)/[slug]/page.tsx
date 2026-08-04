import { Suspense } from "react";
import SattaYearlyChart from "../Components/Charts/SattaYearlyChart";
import SadarBazar from "./components/SadarBazar";
import Gwalior from "./components/Gwalior";
import DelhiBazar from "./components/DelhiBazar";
import ShriGanesh from "./components/ShriGanesh";
import Agra from "./components/Agra";
import Faridabad from "./components/Faridabad";
import Alwar from "./components/Alwar";
import Gahaziabad from "./components/Ghaziabad";
import Dwarka from "./components/Dwarka";
import Gali from "./components/Gali";
import DelhiMatka from "./components/DelhiMatka";
import { Market, staticMarkets } from "./components/staticMarkets";
import FAQSection from "./components/FAQSection";
import { Metadata } from "next";
import StaticMarketPage from "./components/StaticMarketPage";


const componentMap: Record<string, React.ComponentType> = {
  'sadar-bazar': SadarBazar,
  'gwalior': Gwalior,
  'delhi-bazar': DelhiBazar,
  'shri-ganesh': ShriGanesh,
  'agra': Agra,
  'faridabad': Faridabad,
  'alwar': Alwar,
  'ghaziabad': Gahaziabad,
  'dwarka': Dwarka,
  'gali': Gali,
  'delhi-matka': DelhiMatka,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

const SITE_URL = process.env.SITE_URL || "https://a7sattaking.com"; // Default value if not set

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const market = staticMarkets[slug];

  if (market) {
    const title = market?.seo?.metaTitle;
    const description = market?.seo?.metaDescription;
    const url = `${SITE_URL}/${slug}`;

    return {
      title,
      description,

      alternates: {
        canonical: url,
      },

      openGraph: {
        title,
        description,
        url,
        siteName: "Your Website Name",
        type: "website",
        locale: "en_US",

        images: [
          {
            url: `${SITE_URL}/images/og-default.jpg`,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        title,
        description,

        images: [`${SITE_URL}/images/og-default.jpg`],
      },
    };
  }

  return {
    title: "Page Not Found",
    description: "The requested page could not be found.",
  };
}

export default async function page({ params }: PageProps) {
  const { slug } = await params;
  const Component = componentMap[slug];
    const market = staticMarkets[slug];


  // If no matching component found, still show the chart
  const showContent = Component ? true : false;

  console.log("Rendering page for slug:", slug, componentMap[slug], "Show content:", showContent);

  return (
    <Suspense
      fallback={
        <div className="w-full bg-white py-20 text-center font-sans">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-[#FFA500] border-t-transparent"></div>
          <p className="mt-4 text-black font-bold text-sm">Loading chart...</p>
        </div>
      }
    >
      <SattaYearlyChart />
      {Component ? (
        <Component />
      ) : market ? (
        <StaticMarketPage market={market} />
      ) : null}
    </Suspense>
  )
}