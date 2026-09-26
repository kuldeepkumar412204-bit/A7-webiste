import React from "react";
import { Metadata } from "next";
import FAQSection from "./FAQSection";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Sadar Bazar Satta Result 2026 Today | Chart & Updates",
    description:
        "Check the latest Sadar Bazar Satta Result 2026 with updated charts, daily results, and historical data. Accurate updates only on A7 Satta King.",
    keywords: [
        "Sadar Bazar Satta Result",
        "Sadar Bazar Result Today",
        "Sadar Bazar Chart 2026",
        "Satta Bazar Result",
        "Satta King Sadar Bazar",
        "Sadar Bazar History Chart",
    ],
    alternates: {
        canonical: `${process.env.SITE_URL}/sadar-bazar`,
    },
    openGraph: {
        title: "Sadar Bazar Satta Result 2026 Today | Chart & Updates",
        description:
            "Check the latest Sadar Bazar Satta Result 2026 with updated charts, daily results, and historical data. Accurate updates only on A7 Satta King.",
        url: `${process.env.SITE_URL}/sadar-bazar`,
        siteName: "A7 Satta King",
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Sadar Bazar Satta Result 2026 Today | Chart & Updates",
        description:
            "Check the latest Sadar Bazar Satta Result 2026 with updated charts, daily results, and historical data. Accurate updates only on A7 Satta King.",
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
            heading: "Sadar Bazar Satta Results and Yearly Chart",
            description:
                "Sadar Bazar is a daily game, and its result is declared in the early afternoon at 1:40 PM. A new Sadar Bazar Satta Result is added to this page every day, so you can check today's result, the 2026 chart, and older records in one place instead of searching across several pages.\n\nThe chart at the top of the page lists every date of the year. Below it, you will find the result time, how to read the chart, how to look up past results, and links to other games you may follow.",
        },
        {
            heading: "Sadar Bazar Result Time",
            description: (
                <>
                    <p className="mb-3">The Sadar Bazar result is declared at 1:40 PM every day. Because this is an early afternoon result, plan to check the page shortly after 1:40 PM. You can check the result for that day on the <Link href="/" className="text-blue-600 underline">home page</Link> table, where all game results are available, or on this Sadar Bazar page.</p>
                    <p>If you open the page before 1:40 PM, today's result may not be added yet. Refresh the page after the result time to see the new entry.</p>
                </>
            ),
        },
        {
            heading: "How to Check Sadar Bazar Satta Result Today?",
            description:
                "Open this page and find today's date in the chart. Look along the row for that date to the column for the current month. The number in that cell is today's result. If the cell shows a wait icon, that date's result has not been added yet, so check again after 1:40 PM.",
        },
        {
            heading: "How to Read the Sadar Bazar Satta Chart 2026?",
            description:
                "Dates 1 to 31 run down the left side and the months run across the top. Each result sits where its date row meets its month column. To compare days, read across a row for the same date in different months. To see one month, read down its column.\n\nA wait icon means there is no result for that date. That can be a date that has not happened yet, or a result that has not been added. Months at the start of the year may have fewer entries than the current month.",
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
            heading: "Sadar Bazar Satta Result History",
            description:
                "Results from earlier dates stay in the chart, so you can look back at any day already declared this year. This is useful if you want to check a specific date, compare one month with another, or confirm what was declared on a day you missed.\n\nEvery entry is a record of what was declared. It is not a prediction of future results, and earlier numbers do not tell you what the next result will be.",
        },
        {
            heading: "How Are Sadar Bazar Results Updated?",
            description:
                "A new result is added to this page every day after it is declared at 1:40 PM. Results are added to the chart, and older entries stay in place so the year's record stays complete. If a result is corrected, the chart is updated.",
        },
        {
            heading: "Check More Satta Game Results",
            description: (
                <>
                Along with Sadar Bazar, users on A7 Satta King also check <Link href="/delhi-bazar" className="text-blue-600 underline">Delhi Bazar Satta Result</Link>, <Link href="/delhi-matka" className="text-blue-600 underline">Delhi Matka Satta Results</Link>, <Link href="/gali" className="text-blue-600 underline">Gali Satta Result</Link>, and <Link href="/karol-bagh" className="text-blue-600 underline">Karol Bagh Satta Results</Link>.
                </>
            )
        },
    ];

    // Accordion FAQs - styled like FAQSection
    const faqItems = [
        {
            question: "Does Sadar Bazar run every day?",
            answer: "Yes. Sadar Bazar publishes a result every day, with no off days.",
        },
        {
            question: "What time is the Sadar Bazar satta result declared?",
            answer: "The result is declared at 1:40 PM.",
        },
        {
            question: "Is Sadar Bazar a night game?",
            answer: "Yes. Its result comes out after midnight, at 1:40 PM.",
        },
        {
            question: "Where can I check today's Sadar Bazar result?",
            answer:
                "On this page, in the chart at the top, in the cell for today's date. You can also check the home page table.",
        },
        {
            question: "Why does today's cell show a wait icon?",
            answer:
                "A wait icon means that date's result has not been added yet. Check again after 1:40 PM.",
        },
        {
            question: "Can I see old Sadar Bazar results?",
            answer: "Yes. Earlier dates stay in the yearly chart on this page.",
        },
        {
            question: "How do I read the Sadar Bazar chart?",
            answer:
                "Dates run down the left and months run across the top. A result sits where its date row meets its month column.",
        },
        {
            question: "Can past results predict the next Sadar Bazar result?",
            answer:
                "No. The chart is a record of what was declared and should not be treated as a prediction.",
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
