import { Suspense } from "react";
import type { ComponentType } from "react";
import SattaYearlyChart from "../Components/Charts/SattaYearlyChart";
import SadarBazar, { metadata as sadarBazarMetadata } from "./components/SadarBazar";
import Gwalior, { metadata as gwaliorMetadata } from "./components/Gwalior";
import DelhiBazar, { metadata as delhiBazarMetadata } from "./components/DelhiBazar";
import ShriGanesh, { metadata as shriGaneshMetadata } from "./components/ShriGanesh";
import Agra, { metadata as agraMetadata } from "./components/Agra";
import Faridabad, { metadata as faridabadMetadata } from "./components/Faridabad";
import Alwar, { metadata as alwarMetadata } from "./components/Alwar";
import Gahaziabad, { metadata as ghaziabadMetadata } from "./components/Ghaziabad";
import Dwarka, { metadata as dwarkaMetadata } from "./components/Dwarka";
import Gali, { metadata as galiMetadata } from "./components/Gali";
import DelhiMatka, { metadata as delhiMatkaMetadata } from "./components/DelhiMatka";
import { staticMarkets } from "./components/staticMarkets";
import { Metadata } from "next";
import StaticMarketPage from "./components/StaticMarketPage";
import { notFound } from "next/navigation";

const componentMap: Record<string, ComponentType> = {
  "sadar-bazar": SadarBazar,
  "gwalior": Gwalior,
  "delhi-bazar": DelhiBazar,
  "shri-ganesh": ShriGanesh,
  "agra": Agra,
  "faridabad": Faridabad,
  "alwar": Alwar,
  "ghaziabad": Gahaziabad,
  "dwarka": Dwarka,
  "gali": Gali,
  "delhi-matka": DelhiMatka,
};

const componentMetadataMap: Record<string, Metadata> = {
  "sadar-bazar": sadarBazarMetadata,
  "gwalior": gwaliorMetadata,
  "delhi-bazar": delhiBazarMetadata,
  "shri-ganesh": shriGaneshMetadata,
  "agra": agraMetadata,
  "faridabad": faridabadMetadata,
  "alwar": alwarMetadata,
  "ghaziabad": ghaziabadMetadata,
  "dwarka": dwarkaMetadata,
  "gali": galiMetadata,
  "delhi-matka": delhiMatkaMetadata,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

const SITE_URL = process.env.SITE_URL || "https://a7sattaking.com"; // Default value if not set

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const slugKey = String(slug).toLowerCase().trim();
  const componentMetadata = componentMetadataMap[slugKey];
  const market = staticMarkets[slugKey];

  if (componentMetadata) {
    return componentMetadata;
  }

  if (market?.seo?.metaTitle || market?.seo?.metaDescription) {
    const title = market.seo?.metaTitle;
    const description = market.seo?.metaDescription;
    const url = `${SITE_URL}/${slugKey}`;

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
        siteName: "A7 Satta King",
        type: "website",
        locale: "en_IN",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
      },
    };
  }

  if (componentMetadata) {
    return componentMetadata;
  }

  return {
    title: "Page Not Found",
    description: "The requested page could not be found.",
  };
}

export default async function page({ params }: PageProps) {
  const { slug } = await params;
    const slugKey = String(slug).toLowerCase().trim();

  const Component = componentMap[slugKey];
  const market = staticMarkets[slugKey];

  if (!Component && !market) {
    notFound();
  }

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
      {Component ? <Component /> : market ? <StaticMarketPage market={market} /> : null}
    </Suspense>
  );
}