import type { Metadata } from "next";
import Link from "next/link";
import { InfoSection } from "../Components/Home/FAQSection";

const SITE_URL = process.env.SITE_URL || "https://a7sattaking.com";

export const metadata: Metadata = {
  title: "About A7 Satta King | Satta Results & Charts 2026",

  description:
    "Learn about A7 Satta King, a platform providing Satta King results, charts, and updates for popular games including Sadar Bazar, Gwalior, Delhi Bazar, Gali, Ghaziabad, Agra, Alwar and more.",

  keywords: [
    "About A7 Satta King",
    "A7 Satta King",
    "Satta King Results",
    "Satta King Chart 2026",
    "Satta Results 2026",
    "Satta King Charts",
    "Gali Satta Result",
    "Ghaziabad Satta Result",
    "Delhi Bazar Satta Result",
    "Sadar Bazar Satta Result",
    "Gwalior Satta Result",
    "Alwar Satta Result",
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
    canonical: `${SITE_URL}/about`,
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
    title: "About A7 Satta King | Satta Results & Charts 2026",
    description:
      "Learn more about A7 Satta King and the Satta results, charts, and updates available on the platform.",
    url: `${SITE_URL}/about`,
    siteName: "A7 Satta King",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "About A7 Satta King | Satta Results & Charts 2026",
    description:
      "Learn about A7 Satta King and explore Satta King results, charts, and updates.",
  },
};

export default function AboutPage() {
  const infoSections: InfoSection[] = [
    {
      heading: "What is A7 Satta King?",
      description:
        "A7 Satta King is a famous platform for announcing many satta results. While several websites announce the satta results, they are not reliable, and there is a lack of consistency; on the other hand, A7 Satta King is a trustworthy and consistent website for checking everyday satta results, and players can check the whole year's satta chart here, which is crucial for the game.",
    },
    {
      heading: "Games Covered on A7 Satta King",
      description: (
        <>
          A7 Satta King provides thorough details about every well-known Satta
          game that Satta players regularly play. For several well-known Satta
          games, including{" "}
          <Link href="/sadar-bazar" className="internal-link">
            Sadar Bazar
          </Link>
          ,{" "}
          <Link href="/gwalior" className="internal-link">
            Gwalior Satta
          </Link>
          , Satta King Disawar, A7 Satta,{" "}
          <Link href="/delhi-bazar" className="internal-link">
            Delhi Bazar
          </Link>
          ,{" "}
          <Link href="/delhi-matka" className="internal-link">
            Delhi Matka
          </Link>
          ,{" "}
          <Link href="/gali" className="internal-link">
            Gali Satta
          </Link>
          , and{" "}
          <Link href="/shri-ganesh" className="internal-link">
            Shri Ganesh
          </Link>
          , players can access the most recent Satta charts and results.
          Regional updates for{" "}
          <Link href="/agra" className="internal-link">
            Agra Satta
          </Link>
          ,{" "}
          <Link href="/faridabad" className="internal-link">
            Faridabad Satta
          </Link>
          ,{" "}
          <Link href="/alwar" className="internal-link">
            Alwar Satta
          </Link>
          ,{" "}
          <Link href="/gaziabad" className="internal-link">
            Ghaziabad Satta
          </Link>
          , A7 Satta, and{" "}
          <Link href="/dwarka" className="internal-link">
            Dwarka Satta
          </Link>{" "}
          are also available on the website.
        </>
      ),
    },
    {
      heading: "How to play A7 Satta King games?",
      description:
        "A7 Satta does not promote or organise any Satta King games, though individuals may advertise on this website. To play Satta King games, you must get in touch with people who are involved in the industry. Typically, they take your bet money, place it, and give you the winning amount if your prediction is correct.",
    },
  ];

  return (
    <>
      <div className="bg-[linear-gradient(180deg,_#ff9000,_#ffe400)] border-b border-b-black border-t-[2px] border-t-black text-black py-[20px]">
        <h2 className="text-[calc(1.375rem+1.5vw)] min-[1200px]:text-[2.5rem] text-center uppercase font-bold">
          About A7 Satta King
        </h2>
      </div>

      <section className="mx-auto bg-white">
        <div className="text-[20px] font-normal p-[1rem] mb-8 max-w-[700px] mx-auto">
          {infoSections.map((data) => (
            <div key={data.heading}>
              <h2 className="text-[calc(1.3rem+0.6vw)] xl:text-[1.75rem] font-bold mb-[0.5rem]">
                {data.heading}
              </h2>

              <div className="mb-[1rem]">{data.description}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
