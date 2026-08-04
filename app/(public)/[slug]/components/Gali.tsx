import FAQSection from "./FAQSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gali Satta Result 2026 Today | Gali Chart & Live Updates",
  description:
    "Check the latest Gali Satta Result 2026 with daily updates, full charts, and historical records. Get fast and accurate results on A7 Satta King.",
  keywords: [
    "Gali Satta Result",
    "Gali Result Today",
    "Gali Chart 2026",
    "Satta King Gali",
    "Gali Satta Chart",
    "Satta Result Gali",
  ],
  alternates: {
    canonical: `${process.env.SITE_URL}/gali`,
  },
  openGraph: {
    title: "Gali Satta Result 2026 Today | Gali Chart & Live Updates",
    description:
      "Check the latest Gali Satta Result 2026 with daily updates, full charts, and historical records. Get fast and accurate results on A7 Satta King.",
    url: `${process.env.SITE_URL}/gali`,
    siteName: "A7 Satta King",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gali Satta Result 2026 Today | Gali Chart & Live Updates",
    description:
      "Check the latest Gali Satta Result 2026 with daily updates, full charts, and historical records. Get fast and accurate results on A7 Satta King.",
  },
};

export default function Gali() {
    const infoSections = [
    {
        heading: "Gali Satta Result & Chart 2026 – Live Updates",
        description: (
            <>
                <p>
                    Are you trying to find out the most recent information regarding the 2026 Gali Satta Result? You've come to the correct spot. A7 Satta King offers comprehensive information about the satta market, including historical records, comprehensive charts, and verified outcomes.
                </p>

                <p className="mt-3">
                    Users can easily check today’s winning number, explore past data, and follow number trends through a clean and well-structured layout. All information is updated regularly to ensure a smooth and reliable experience.
                </p>
            </>
        ),
    },
    {
        heading: "What is Gali Satta?",
        description: (
            <>
                <p>
                    Gali Satta is a popular number-based system followed by many users across India. It is based on daily results, where users check updates and review charts to observe number patterns and trends.
                </p>

                <p className="mt-3">
                    On A7 Satta King, all result information is presented in a simple and easy-to-understand format, making it convenient for users to track number flow and repeated patterns.
                </p>
            </>
        ),
    },
    {
        heading: "Gali Satta Chart 2026 Explained",
        description: (
            <>
                <p>
                    The Gali Satta Chart 2026 works as a complete record of previous results. Users can review weekly, monthly, and yearly data to understand number trends and identify repeating patterns.
                </p>

                <p className="mt-3">
                    The chart is updated daily and includes historical data from 2021 to 2026, allowing users to compare past and present results easily. It is designed to work smoothly on mobile phones, desktops, and tablets.
                </p>
            </>
        ),
    },
    {
        heading: "Key Features of Our Chart",
        description: (
            <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Daily updated results</li>
                <li>Complete history from 2021 to 2026</li>
                <li>Mobile-friendly and responsive layout</li>
                <li>Clear and easy-to-read format</li>
                <li>Quick access to latest and previous charts</li>
            </ul>
        ),
    },
    {
        heading: "Gali Satta Result Today",
        description: (
            <>
                <p>
                    Just reload the page to view the Gali Satta Result for today. All results are verified before being published to maintain accuracy and reliability.
                </p>

                <p className="mt-3">
                    Users can also stay updated with daily highlights, including number shifts and important updates related to trends.
                </p>
            </>
        ),
    },
    {
        heading: "Why Users Review Old Charts",
        description: (
            <>
                <p>
                    The history chart displays past results in a structured timeline, helping users understand repeated numbers and long-term patterns.
                </p>

                <p className="mt-3">
                    Many users review historical data for reference and comparison. However, past results are only for informational purposes and do not guarantee future outcomes.
                </p>
            </>
        ),
    },
    {
        heading: "How to Check Gali Satta Results",
        description: (
            <>
                <p>Follow these simple steps:</p>

                <ol className="list-decimal pl-6 mt-4 space-y-2">
                    <li>Visit the Gali Satta Result page on A7 Satta King</li>
                    <li>Check today’s result at the top</li>
                    <li>View the chart for visual data</li>
                    <li>Explore historical records for deeper understanding</li>
                </ol>
            </>
        ),
    },
    {
        heading: "Stay Updated with Gali Satta News",
        description:
            "A7 Satta King shares daily updates, including chart changes, trend highlights, and important information in a simple format. Users can stay connected to access the latest updates anytime.",
    },
    {
        heading: "Important Disclaimer",
        description:
            "A7 Satta King shares Gali Satta Result and chart information strictly for informational purposes only. The platform does not promote or support any illegal activity. Users are advised to follow local laws and use the information at their own risk.",
    },
];


    // const faqSchema = {
    //   "@context": "https://schema.org",
    //   "@type": "FAQPage",
    //   mainEntity: faqItems.map((faq) => ({
    //     "@type": "Question",
    //     name: faq.question,
    //     acceptedAnswer: {
    //       "@type": "Answer",
    //       text: faq.answer,
    //     },
    //   })),
    // };
    
    
        return (
            <>
             {/* <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
                /> */}
            <div className="w-full bg-white font-sans">
                <div className="w-full flex flex-col">
                    {/* Render Main Content Blocks */}
                    {infoSections.map((section, idx) => (
                        <div key={idx} className="w-full">
                            {/* Bright Yellow Heading Bar */}
                            <div className="w-full bg-[#ffd200] py-3.5 px-4 text-center border-b border-black/10">
                                <h2 className="text-black font-bold text-sm sm:text-lg md:text-xl tracking-wide uppercase">
                                    {section.heading}
                                </h2>
                            </div>
    
                            {/* Clean White Description Content Box */}
                            <div className="w-full bg-white py-5 px-4 md:px-6 max-w-8xl mx-auto">
                                <div className="text-black font-medium text-xs sm:text-base leading-relaxed text-justify md:text-left tracking-normal whitespace-pre-line">
                                    {section.description}
                                </div>
                            </div>
                        </div>
                    ))}
    
                    {/* --- FREQUENTLY ASKED QUESTIONS (ACCORDION SECTION) --- */}
                    {/* <FAQSection faqItems={faqItems} /> */}
                </div>
            </div>
            </>
        );
}