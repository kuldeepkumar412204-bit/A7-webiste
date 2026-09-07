import type { Metadata } from "next";
import SattaChartLinksGrid from "./SattaChartLinksGrid";

const SITE_URL = process.env.SITE_URL || "https://a7sattaking.com";

export const metadata: Metadata = {
  title: "Satta King Chart 2026 | All Satta Charts & Results | A7 Satta King",

  description:
    "Check all Satta King Chart 2026 results in one place. View Gali, Ghaziabad, Delhi Bazar, Faridabad, Agra, Gwalior, Alwar and other Satta charts with the latest updates.",

  keywords: [
    "Satta King Chart 2026",
    "Satta Chart 2026",
    "Satta King Chart",
    "Satta Result Chart",
    "Gali Satta Chart 2026",
    "Ghaziabad Satta Chart 2026",
    "Delhi Bazar Satta Chart 2026",
    "Faridabad Satta Chart 2026",
    "Agra Satta Chart 2026",
    "Gwalior Satta Chart 2026",
    "Alwar Satta Chart 2026",
    "Sadar Bazar Satta Chart 2026",
    "Delhi Matka Chart 2026",
    "A7 Satta King",
  ],

  authors: [
    {
      name: "A7 Satta King",
      url: SITE_URL,
    },
  ],

  creator: "A7 Satta King",
  publisher: "A7 Satta King",

  alternates: {
    canonical: `${SITE_URL}/chart`,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    title: "Satta King Chart 2026 | All Satta Charts & Results",
    description:
      "View Satta King Chart 2026 with multiple game charts and latest result updates including Gali, Ghaziabad, Delhi Bazar, Faridabad, Agra, Gwalior and more.",
    url: `${SITE_URL}/chart`,
    siteName: "A7 Satta King",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Satta King Chart 2026 | A7 Satta King",
    description:
      "Check Satta King Chart 2026 and access multiple Satta charts and latest result updates on A7 Satta King.",
  },

  category: "Entertainment",
};

export default function ChartPage() {
  return <SattaChartLinksGrid />;
}
