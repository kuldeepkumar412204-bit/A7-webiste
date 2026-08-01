import React from "react";
import { Metadata } from "next";
import FAQSection from "./FAQSection";

export const metadata: Metadata = {
    title: "Sadar Bazar Satta Result 2026 Today | Sadar Bazar Chart & Updates",
    description:
        "Check the latest Sadar Bazar Satta Result 2026 with updated charts, daily results, and historical data. Get fast and accurate updates only on A7 Satta King.",
    keywords: [
        "Sadar Bazar Satta Result",
        "Sadar Bazar Result Today",
        "Sadar Bazar Chart 2026",
        "Satta Bazar Result",
        "Satta King Sadar Bazar",
        "Sadar Bazar History Chart",
    ],
    alternates: {
        canonical: "/sadar-bazar",
    },
    openGraph: {
        title: "Sadar Bazar Satta Result 2026 Today | Sadar Bazar Chart & Updates",
        description:
            "Check the latest Sadar Bazar Satta Result 2026 with updated charts, daily results, and historical data. Get fast and accurate updates only on A7 Satta King.",
        url: "/sadar-bazar",
        siteName: "A7 Satta King",
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Sadar Bazar Satta Result 2026 Today | Sadar Bazar Chart & Updates",
        description:
            "Check the latest Sadar Bazar Satta Result 2026 with updated charts, daily results, and historical data. Get fast and accurate updates only on A7 Satta King.",
    },
};

interface InfoSection {
    heading: string;
    description: React.ReactNode;
}



export default function SadarBazar() {

    // Main Content Blocks - styled like FAQSection
    const infoSections: InfoSection[] = [
        {
            heading: "Sadar Bazar Satta Result and Chart 2026 – Updated",
            description:
                "Welcome to A7 Satta King, your reliable source for accurate, timely updates on Sadar Bazar Satta results and charts. We provide complete coverage of Satta Matka and Satta King games, ensuring users can easily access the latest information in one place.\n\nIf you are looking for daily updates on Sadar Bazar Satta, A7satta King keeps you informed with fast, consistent results. Our platform is designed to offer a smooth experience, where users can check both current outcomes and historical records without any confusion.\n\nThe dedicated Sadar Bazaar Satta page on A7satta King presents all essential details in a clean and organized format. From latest results to previous charts, everything is structured for easy understanding, making it simple for users to track game patterns and stay updated every day.\n\nStay connected with A7satta King for trusted Sadar Bazar Satta Result updates and a complete record of results, all in one convenient platform.",
        },
        {
            heading: `What is sadar bazar satta?`,
            description:
                "This game is a part of the Satta Matka industry and enjoys widespread popularity across North India, particularly in Delhi, Haryana, Uttar Pradesh, and Rajasthan. Many users follow it closely due to its frequent updates and easy availability of information. On A7Satta, all related details are presented in a clear and organized manner, making it simple for visitors to understand how results are updated on a regular basis.",
        },
        {
            heading: `How to Check Sadar Bazar Satta Result Today at A7 Satta King?`,
            description: `The results are published on the game page as soon as verified data is available. Each update is presented in a clear and organized manner, allowing users to view today’s outcome with ease. The website’s intuitive design makes it simple for both new and returning visitors to stay informed with the latest daily updates.`,
        },
        {
            heading: `How to Understand Sadar Bazar Satta Chart 2026?`,
            description: "The 2026 chart presents all dates in a well-organized format, making it easy for users to locate specific details. It combines the latest updates with records, helping users compare results and track changes throughout the year. The clear layout supports both quick reference and more detailed review.",
        },
        // {
        //   heading: `Which website shows instant ${gameName} satta king result ?`,
        //   description: (
        //     <>
        //       On Internet if you search for SADAR BAZAR SATTA KING RESULT , you will found thousands of results website but the question arises which sites is instant and reliable , So the answer to this question is there can be many websites which can show results instantly but the part remains that are these sites consistent , If to talk about consistancy you will find many sites fails to this test because these website are publishing some days are consistent but later their time delays can be so late . though A7satta.com is one the fast and consistent website to publish real-time sadar bazar satta results including other satta games. Website is consistent in showing results from a long time. To Check today's sadar bazar instant result click{" "}
        //       <Link href="/" className="text-blue-600 underline">
        //         Today's Sadar Bazar SATTA Superfast Result
        //       </Link>
        //     </>
        //   ),
        // },
        {
            heading: `How to View Sadar Bazar Satta Result History Chart?`,
            description:
                "Past results can be accessed in one convenient place through the history chart on the game page. Exploring previous records allows users to review earlier patterns and trends for reference only. However, past data should not be considered a prediction or guarantee of future outcomes.",
        },
        {
            heading: "Why Users Prefer Sadar Bazar Updates on A7",
            description:
                "The game section of A7-satta.com is very easily comprehensible and simple. It is easy to comprehend for anyone. The latest updates can be seen at any time and the chart is easily understood. Plus, it's easy and smooth to jump between pages.\n\nAll in all, it's very simple to understand, and new players and old players can quickly find the information they need without wasting time.",
        },
        {
            heading: "How Are Sadar Bazar Satta Result Updates Shared?",
            description:
                "After obtaining information from public sources, the A7-satta.com team verifies the results and chart data before posting them on the website. Once the details are confirmed, the latest updates are posted immediately in a simple and easy-to-read format, enabling users to view the records without getting any confusion.",
        },
        {
            heading: "Stay Updated with Sadar Bazar Satta Result in 2026",
            description:
                "A7 Satta King provides the latest results and charts in an easy-to-understand and simplified manner. It's easy to view today's result, view the yearly chart, or view old records all in one place.",
        },
    ];

    // Accordion FAQs - styled like FAQSection
    const faqItems = [
        {
            question: "What is Sadar Bazar Satta?",
            answer:
                "Sadar Bazar Satta is a popular market name where many people search for daily results, charts, and previous records online.",
        },
        {
            question: "How can I check Sadar Bazar Satta Result?",
            answer:
                "You can check Sadar Bazar Satta Result by visiting the results page where the latest updates and records are available.",
        },
        {
            question: "Are old Sadar Bazar charts available?",
            answer:
                "Yes, old charts and previous result records can be checked to see past updates and patterns.",
        },
        {
            question: "When are Sadar Bazar results updated?",
            answer: `Results are updated after the latest information is available on the website.`,
        },
        {
            question: "Can I check Sadar Bazar Satta Result on mobile?",
            answer:
                "Yes, you can open the website on your mobile phone and check results and charts easily.",
        },
    ];
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />

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
                    <FAQSection faqItems={faqItems} />
                </div>
            </div>

        </>
    );
}
