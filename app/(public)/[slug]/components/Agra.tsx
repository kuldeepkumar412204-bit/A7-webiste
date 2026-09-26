import FAQSection from "./FAQSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agra Satta Result 2026 Today | Agra Chart & Live Updates",
  description:
    "Check the latest Agra Satta Result 2026 with live updates, daily results, and full chart history. Get accurate and fast updates on A7 Satta King.",
  keywords: [
    "Agra Satta Result",
    "Agra Result Today",
    "Agra Chart 2026",
    "Satta King Agra",
    "Agra Satta Chart",
    "Satta Result Agra",
  ],
  alternates: {
    canonical: `${process.env.SITE_URL}/agra`,
  },
  openGraph: {
    title: "Agra Satta Result 2026 Today | Agra Chart & Live Updates",
    description:
      "Check the latest Agra Satta Result 2026 with live updates, daily results, and full chart history. Get accurate and fast updates on A7 Satta King.",
    url: `${process.env.SITE_URL}/agra`,
    siteName: "A7 Satta King",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agra Satta Result 2026 Today | Agra Chart & Live Updates",
    description:
      "Check the latest Agra Satta Result 2026 with live updates, daily results, and full chart history. Get accurate and fast updates on A7 Satta King.",
  },
};

export default function Agra() {

    const infoSections = [
        {
            heading: "Agra Satta Result Today and 2026 Chart",
            description:
                "This page carries today's Agra number and the 2026 chart. Because Agra City is declared only five minutes later, it also helps you tell the two games apart, so you don't read one result as the other.",
        },
        {
            heading: "Agra Satta Result Time: 5:30 PM",
            description:
                "Agra is an evening result. Open this page a little after 5:30 PM to see today's number. If you check earlier, today's cell in the chart may still be empty. The day's result is also listed in the home page table alongside the other games.",
        },
        {
            heading: "Agra and Agra City: Two Separate Games",
            description: (
                <>
                    <p className="mb-3">Agra and <Link href="/agra-city" className="text-blue-600 underline">Agra City</Link> are different games. Each has its own result, its own chart, and its own page. Their names are close, and so are their times: Agra is declared at 5:30 PM and Agra City at 5:35 PM.</p>
                    <p className="mb-2">Here is how to avoid mixing them up:</p>
                    <ul className="list-disc list-inside space-y-1 mb-3">
                        <li><strong>Check the page heading.</strong> This page is for Agra. The Agra City page has its own heading.</li>
                        <li><strong>Check the time.</strong> A number that appears at 5:30 PM belongs to Agra, and one at 5:35 PM to Agra City.</li>
                        <li><strong>Don't compare the two charts cell by cell.</strong> They are separate records, so the same date can hold a different number in each.</li>
                    </ul>
                    <p>If you follow both, check this page first and the <Link href="/agra-city" className="text-blue-600 underline">Agra City page</Link> five minutes later.</p>
                </>
            ),
        },
        {
            heading: "Where Agra Falls in the Evening",
            description: (
                <>
                    <p className="mb-3">Agra comes after a quiet stretch. <Link href="/shri-ganesh" className="text-blue-600 underline">Shri Ganesh</Link> is declared at 4:45 PM, and nothing else is declared until Agra arrives 45 minutes later. Agra City follows five minutes after Agra, and <Link href="/faridabad" className="text-blue-600 underline">Faridabad</Link> comes at 6:10 PM, 40 minutes after Agra City.</p>
                    <p>Later in the evening, the next block starts at 7:20 PM with <Link href="/raj-shree" className="text-blue-600 underline">Raj Shree</Link>. So Agra opens the early evening, and there is a gap of more than an hour between Faridabad and the next result.</p>
                </>
            ),
        },
        {
            heading: "Agra Chart 2026",
            description:
                "The chart holds one cell per day for each month. To read today's Agra result, find the row for today's date, then the column for this month. An empty or waiting cell means the result has not been added yet.\n\nBecause Agra City is declared so soon after, make sure you are looking at the Agra chart and not the Agra City one. The heading at the top of the page tells you which it is.",
        },
        {
            heading: "Looking Up an Earlier Agra Result",
            description:
                "If you need a result from a previous date, find that date in the chart and follow it across to the month you want. Days that have already passed this year stay in the chart. The numbers record what was declared. They do not show what the next result will be.",
        },
        {
            heading: "More Satta Game Results",
            description: (
                <>
                    Along with Agra, users on A7 Satta King also check <Link href="/agra-city" className="text-blue-600 underline">Agra City Satta Result</Link>, <Link href="/shri-ganesh" className="text-blue-600 underline">Shri Ganesh Satta Result</Link>, <Link href="/faridabad" className="text-blue-600 underline">Faridabad Satta Result</Link>, and <Link href="/raj-shree" className="text-blue-600 underline">Raj Shree Satta Results</Link>.
                </>
            ),
        },
        {
            heading: "Disclaimer",
            description:
                "This page shows results and charts for reference only. It does not promote gambling or any illegal activity and gives no advice or guarantee. Please follow the laws that apply in your area.",
        },
    ];

    const faqItems = [
        {
            question: "What time is the Agra result declared?",
            answer: "At 5:30 PM.",
        },
        {
            question: "Is Agra the same as Agra City?",
            answer:
                "No. They are separate games with their own results, charts, and pages. Agra is declared at 5:30 PM and Agra City at 5:35 PM.",
        },
        {
            question: "Which is declared first, Agra or Agra City?",
            answer: "Agra, five minutes earlier.",
        },
        {
            question: "Where can I see today's Agra result?",
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