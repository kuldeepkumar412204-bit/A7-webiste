import FAQSection from "./FAQSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Faridabad Satta Result 2026 Today | Chart & Live Updates",
    description:
        "Check Faridabad Satta Result 2026 with live updates, daily results, and chart history on A7 Satta King.",
    keywords: [
        "Faridabad Satta Result",
        "Faridabad Result Today",
        "Faridabad Chart 2026",
        "Satta King Faridabad",
        "Faridabad Satta Chart",
        "Satta Result Faridabad",
    ],
    alternates: {
        canonical: `${process.env.SITE_URL}/faridabad`,
    },
    openGraph: {
        title: "Faridabad Satta Result 2026 Today | Chart & Live Updates",
        description:
            "Check Faridabad Satta Result 2026 with live updates, daily results, and chart history on A7 Satta King.",
        url: `${process.env.SITE_URL}/faridabad`,
        siteName: "A7 Satta King",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Faridabad Satta Result 2026 Today | Chart & Live Updates",
        description:
            "Check Faridabad Satta Result 2026 with live updates, daily results, and chart history on A7 Satta King.",
    },
};

export default function Faridabad() {
    const infoSections = [
        {
            heading: "Faridabad Satta Result Today and 2026 Chart",
            description:
                "This page carries today's Faridabad number and the 2026 chart, and it shows where Faridabad sits in the evening timetable, so you know what comes before it and how long you wait for the next result.",
        },
        {
            heading: "Faridabad Satta Result Time: 6:10 PM",
            description: (
                <>
                    Faridabad is an early evening result. Open the page a few minutes after 6:10 PM to see today's number. If you check earlier, today's cell in the chart may still be empty. You can also find the day's result in the <Link href="/" className="text-blue-600 underline">home page</Link> table, which lists every game together.
                </>
            ),
        },
        {
            heading: "The Last Result Before the Break",
            description: (
                <>
                    Faridabad is the last result of the early evening. After 6:10 PM, nothing is declared for 70 minutes, until <Link href="/raj-shree" className="text-blue-600 underline">Raj Shree</Link> arrives at 7:20 PM. That makes Faridabad the point where the early evening block ends and the wait for the later evening block begins.
                </>
            ),
        },
        {
            heading: "What Comes Before Faridabad",
            description: (
                <>
                    Faridabad follows a short run of results. <Link href="/shri-ganesh" className="text-blue-600 underline">Shri Ganesh</Link> is declared at 4:45 PM, <Link href="/agra" className="text-blue-600 underline">Agra</Link> at 5:30 PM, and <Link href="/agra-city" className="text-blue-600 underline">Agra City</Link> at 5:35 PM. Faridabad comes 35 minutes after Agra City and 85 minutes after Shri Ganesh.
                </>
            ),
        },
        {
            heading: "What Comes After Faridabad",
            description: (
                <>
                    The evening block starts at 7:20 PM and moves quickly: <Link href="/raj-shree" className="text-blue-600 underline">Raj Shree</Link> at 7:20 PM, <Link href="/udaipur-city" className="text-blue-600 underline">Udaipur City</Link> at 7:30 PM, <Link href="/alwar" className="text-blue-600 underline">Alwar</Link> at 7:35 PM, and <Link href="/ajmer" className="text-blue-600 underline">Ajmer</Link> at 7:40 PM. Then come <Link href="/mandi-bazar" className="text-blue-600 underline">Mandi Bazar</Link> at 8:10 PM and <Link href="/sialkot" className="text-blue-600 underline">Sialkot</Link> at 8:20 PM.
                </>
            ),
        },
        {
            heading: "The Evening in Order",
            description: (
                <>
                    <p className="mb-2">Here is the run of results around Faridabad, in the order they are declared:</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Shri Ganesh, 4:45 PM</li>
                        <li>Agra, 5:30 PM</li>
                        <li>Agra City, 5:35 PM</li>
                        <li><strong>Faridabad, 6:10 PM</strong></li>
                        <li>Raj Shree, 7:20 PM</li>
                        <li>Udaipur City, 7:30 PM</li>
                        <li>Alwar, 7:35 PM</li>
                        <li>Ajmer, 7:40 PM</li>
                    </ul>
                </>
            ),
        },
        {
            heading: "Faridabad Chart 2026",
            description:
                "The chart has one row per day and one column per month, so each day's result sits in a single cell. To find today's Faridabad satta result number, locate today's date in the left column and read across to this month. A cell that still shows the wait icon has no result yet, which is normal before 6:10 PM.",
        },
        {
            heading: "Finding an Earlier Faridabad Satta Result",
            description:
                "For a past date, go to that date in the left column and move across to the month you want. Every day that has passed this year remains in the chart, so you can look back through the year on this page. The numbers record what was declared and do not show what the next result will be.",
        },
        {
            heading: "More Satta Game Results",
            description: (
                <>
                    Along with Faridabad, users on A7 Satta King also check <Link href="/agra-city" className="text-blue-600 underline">Agra City Satta Result</Link>, <Link href="/agra" className="text-blue-600 underline">Agra Satta Result</Link>, <Link href="/raj-shree" className="text-blue-600 underline">Raj Shree Satta Results</Link>, and <Link href="/alwar" className="text-blue-600 underline">Alwar Satta Result</Link>.
                </>
            ),
        },
        {
            heading: "Disclaimer",
            description:
                "This page shows results and charts for information only. We do not promote or support gambling or any illegal activity. Please follow the laws that apply where you live.",
        },
    ];

    const faqItems = [
        {
            question: "What time is the Faridabad satta result declared?",
            answer: "At 6:10 PM.",
        },
        {
            question: "Which games are declared just before and after Faridabad?",
            answer:
                "Agra City is declared at 5:35 PM before it, and Raj Shree at 7:20 PM after it.",
        },
        {
            question: "How long is the wait for the next result after Faridabad?",
            answer: "70 minutes, until Raj Shree at 7:20 PM.",
        },
        {
            question: "Where can I see today's Faridabad result?",
            answer:
                "In today's cell in the chart on this page. It also appears in the home page table.",
        },
        {
            question: "Does this page give tips or predictions?",
            answer: "No. It shows results and charts for reference only.",
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
    )
}