import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata: Metadata = {
    title: "Delhi Bazar Satta Result Live 2026 | Chart & Updates",
    description:
        "Check Delhi Bazar Satta Result 2026 with the latest charts, daily updates, and fast results on A7 Satta King.",
    keywords: [
        "Delhi Bazar Satta Result",
        "DB Result 2026",
        "Delhi Bazar chart",
        "Satta King Delhi Bazar",
        "DB Satta result today",
        "Delhi Bazar live result",
        "Satta Matka Delhi Bazar",
        "A7 Satta King DB result"
    ],
    alternates: {
        canonical: `${process.env.SITE_URL}/delhi-bazar`,
    },
    openGraph: {
        title: "Delhi Bazar Satta Result Live 2026 | Chart & Updates",
        description:
            "Check Delhi Bazar Satta Result 2026 with the latest charts, daily updates, and fast results on A7 Satta King.",
        url: `${process.env.SITE_URL}/delhi-bazar`,
        siteName: "A7 Satta King",
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Delhi Bazar Satta Result Live 2026 | Chart & Updates",
        description:
            "Check Delhi Bazar Satta Result 2026 with the latest charts, daily updates, and fast results on A7 Satta King.",
    },
};

interface InfoSection {
    heading: string;
    description: React.ReactNode;
}


export default function DelhiBazar() {
    // Main Content Blocks - styled like FAQSection
    const infoSections: InfoSection[] = [
        {
            heading: "Delhi Bazar Satta Result Today 2026 and Yearly Chart",
            description:
                "On this page, you can check today's Delhi Bazar result and the 2026 chart, see how Delhi Bazar sits among the other Delhi games, and find older records in one place instead of searching across several pages.\n\nThe chart lists every date of the year. Below it, you will find the result time, how to check today's result, how the Delhi games follow each other during the day, how to read the chart, and links to other games.",
        },
        {
            heading: "Delhi Bazar Satta Result Time and Today's Result",
            description: (
                <>
                    <p className="mb-3">The Delhi Satta Bazar result is declared at 3:15 PM. Plan to check the page shortly after that time. You can see the day's result on this page or in the <Link href="/" className="text-blue-600 underline">home page</Link> table, where all game results are listed.</p>
                    <p>If you open the page before 3:15 PM, today's result may not be added yet. Refresh the page after the result time to see the new entry.</p>
                </>
            ),
        },
        {
            heading: "How to Check Delhi Bazar Satta Result Today",
            description: (
                <>
                    <ol className="list-decimal list-inside space-y-1">
                        <li>Open this page a few minutes after 3:15 PM.</li>
                        <li>Find today's date in the chart. Dates run down the left side.</li>
                        <li>Follow that row across to the column for the current month.</li>
                        <li>The number in that cell is today's Delhi Bazar result.</li>
                    </ol>
                    <p className="mt-3">If the cell shows a wait icon, the result has not been added yet. Wait a few minutes and refresh the page.</p>
                </>
            ),
        },
        {
            heading: "Delhi Games on A7 Satta King: Which Page Is Which",
            description: (
                <>
                    <p className="mb-3">Several games on A7 Satta King have Delhi in their name, and all four are declared in the afternoon. This is the order in which they come during the day:</p>
                    <ul className="list-disc list-inside space-y-1 mb-3">
                        <li><strong>Delhi Savera:</strong> 12:40 PM</li>
                        <li><strong>Delhi Darbar:</strong> 2:10 PM</li>
                        <li><strong>Delhi Bazar:</strong> 3:15 PM</li>
                        <li><strong>Delhi Matka:</strong> 3:40 PM</li>
                    </ul>
                    <p className="mb-3">Delhi Savera comes first, well before the others. Delhi Bazar is the third of the four. It is declared 1 hour 5 minutes after Delhi Darbar and 25 minutes before Delhi Matka. If you are waiting for a Delhi result after 3 PM, Delhi Bazar is the first of the two that remain.</p>
                    <p>Each of these games has its own page and its own yearly chart. The result on this page is for Delhi Bazar at 3:15 PM only. To check the others, open <Link href="/delhi-savera" className="text-blue-600 underline">Delhi Savera</Link>, <Link href="/delhi-darbar" className="text-blue-600 underline">Delhi Darbar</Link>, or <Link href="/delhi-matka" className="text-blue-600 underline">Delhi Matka</Link>.</p>
                </>
            ),
        },
        {
            heading: "Where Delhi Bazar Falls in the Day",
            description: (
                <>
                    <p className="mb-3">Delhi Bazar is an afternoon result. <Link href="/sadar-bazar" className="text-blue-600 underline">Sadar Bazar</Link> is declared earlier, at 1:40 PM, and <Link href="/gwalior" className="text-blue-600 underline">Gwalior</Link> at 2:40 PM, which is 35 minutes before Delhi Bazar. After Delhi Bazar and Delhi Matka, <Link href="/shri-ganesh" className="text-blue-600 underline">Shri Ganesh</Link> follows at 4:45 PM. Later games such as <Link href="/sialkot" className="text-blue-600 underline">Sialkot</Link>, at 8:20 PM, come in the evening.</p>
                    <p>If you follow several games, checking them in this order lets you go through the day's results one after another without opening pages at the wrong time.</p>
                </>
            ),
        },
        {
            heading: "Reading the Delhi Bazar Chart 2026",
            description:
                "The yearly chart is one grid: 31 date rows and 12 month columns. The 3:15 PM result goes into the row for that day and the column for that month, so by evening you should see today's number in its cell. You will find the steps for locating it in the \"How to Check\" section above, so here is what else the grid is good for.\n\nReading down a column shows you a single month from the 1st to the 31st. Reading along a row puts the same date from different months side by side. A cell that shows an icon rather than a number is still pending. That is normal for every date after today, and for today until the 3:15 PM result is in. Months that have not started yet will stay pending.",
        },
        {
            heading: "Finding an Older Delhi Bazar Satta Result",
            description:
                "Suppose you missed yesterday's result, or you want the number from a date two months ago. You don't need to search anywhere else: go to that date's row, move to the month you want, and read the cell. Every day that has already passed this year stays in the grid, so the full run of results from January to today is in one place.\n\nThe chart is a reference for what was declared. It doesn't say anything about what the next result will be.",
        },
        {
            heading: "What Happens After 3:15 PM",
            description:
                "The result is declared at 3:15 PM. After that, the number is added to the Delhi Bazar chart and appears in the home page table alongside the other games. That is why the page can look unchanged at 3:10 PM and different at 3:25 PM: nothing new is shown until the result is in. Delhi Matka is declared only 25 minutes later, so people who follow both often check this page first and Delhi Matka next.",
        },
        {
            heading: "Games Declared After Delhi Bazar",
            description: (
                <>
                    Once Delhi Bazar is done, the next results of the day are <Link href="/delhi-matka" className="text-blue-600 underline">Delhi Matka</Link> at 3:40 PM, <Link href="/shri-ganesh" className="text-blue-600 underline">Shri Ganesh</Link> at 4:45 PM, and <Link href="/agra" className="text-blue-600 underline">Agra</Link> at 5:30 PM. Results declared before Delhi Bazar include <Link href="/delhi-darbar" className="text-blue-600 underline">Delhi Darbar</Link> at 2:10 PM and <Link href="/sadar-bazar" className="text-blue-600 underline">Sadar Bazar</Link> at 1:40 PM.
                </>
            ),
        },
        {
            heading: "Disclaimer",
            description:
                "This page is for information only. We do not promote or support betting or gambling, and we do not give gaming advice or guarantee any outcome. Follow the laws that apply where you live. We are not responsible for any loss arising from the use of this information.",
        },
    ];

    // Accordion FAQs - styled like FAQSection
    const faqItems = [
        {
            question: "What time is the Delhi Bazar result declared?",
            answer: "The Delhi Bazar result is declared at 3:15 PM.",
        },
        {
            question: "Which Delhi game is declared first?",
            answer: "Delhi Savera, at 12:40 PM.",
        },
        {
            question: "Is Delhi Bazar declared before Delhi Matka?",
            answer:
                "Yes. Delhi Bazar is declared at 3:15 PM and Delhi Matka at 3:40 PM, 25 minutes later.",
        },
        {
            question: "How long after Delhi Darbar is Delhi Bazar declared?",
            answer:
                "Delhi Darbar is declared at 2:10 PM, so Delhi Bazar comes 1 hour and 5 minutes later.",
        },
        {
            question: "Where can I check today's Delhi Bazar result?",
            answer:
                "On this page, in the chart in the cell for today's date, or in the home page table.",
        },
        {
            question: "Which game is declared right after Delhi Bazar?",
            answer: "Delhi Matka, at 3:40 PM, 25 minutes later.",
        },
        {
            question: "What is the next result after Delhi Matka?",
            answer: "Shri Ganesh, at 4:45 PM.",
        },
        {
            question: "How do I read the Delhi Bazar chart?",
            answer:
                "Dates run down the left and months run across the top. A result sits where its date row meets its month column.",
        },
        {
            question: "Does this page give tips or predictions?",
            answer: "No. It only shows results and charts for reference.",
        },
        {
            question: "Can past results predict the next Delhi Bazar result?",
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