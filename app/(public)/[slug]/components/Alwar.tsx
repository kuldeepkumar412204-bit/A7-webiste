import { NextPage } from 'next'
import FAQSection from './FAQSection';
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alwar Satta Result 2026 Today | Alwar Chart & Live Updates",
  description:
    "Check the latest Alwar Satta Result 2026 with daily updates, full charts, and historical records. Get fast and accurate results on A7 Satta King.",
  keywords: [
    "Alwar Satta Result",
    "Alwar Result Today",
    "Alwar Chart 2026",
    "Satta King Alwar",
    "Alwar Satta Chart",
    "Satta Result Alwar",
  ],
  alternates: {
    canonical: `${process.env.SITE_URL}/alwar`,
  },
  openGraph: {
    title: "Alwar Satta Result 2026 Today | Alwar Chart & Live Updates",
    description:
      "Check the latest Alwar Satta Result 2026 with daily updates, full charts, and historical records. Get fast and accurate results on A7 Satta King.",
    url: `${process.env.SITE_URL}/alwar`,
    siteName: "A7 Satta King",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alwar Satta Result 2026 Today | Alwar Chart & Live Updates",
    description:
      "Check the latest Alwar Satta Result 2026 with daily updates, full charts, and historical records. Get fast and accurate results on A7 Satta King.",
  },
};

interface Props {

}

const Alwar: NextPage<Props> = ({ }) => {
    
    const infoSections = [
        {
            heading: "Alwar Satta Result Today and 2026 Chart",
            description:
                "This page carries today's Alwar number and the 2026 chart. Alwar falls in the busiest part of the evening timetable, so this page also shows the three other results declared in the same 20 minutes, in case you're checking more than one.",
        },
        {
            heading: "Alwar Satta Result Time: 7:35 PM",
            description: (
                <>
                    Alwar is an evening result. Open the page a few minutes after 7:35 PM to see today's number. If you check earlier, today's cell in the chart may still be empty. The day's result is also listed in the home page table alongside the other games.
                </>
            ),
        },
        {
            heading: "Four Results in 20 Minutes",
            description: (
                <>
                    <p className="mb-2">Between 7:20 PM and 7:40 PM, four results are declared one after another:</p>
                    <ul className="list-disc list-inside space-y-1 mb-3">
                        <li><Link href="/raj-shree" className="text-blue-600 underline">Raj Shree</Link>, 7:20 PM</li>
                        <li><Link href="/udaipur-city" className="text-blue-600 underline">Udaipur City</Link>, 7:30 PM</li>
                        <li><strong>Alwar, 7:35 PM</strong></li>
                        <li><Link href="/ajmer" className="text-blue-600 underline">Ajmer</Link>, 7:40 PM</li>
                    </ul>
                    <p>This is the closest run of results on the <Link href="/" className="text-blue-600 underline">A7 Satta King</Link> timetable. If you follow several of these games, it's worth checking each page in this order rather than all at once, since Alwar's number isn't out until 5 minutes after Udaipur City's.</p>
                </>
            ),
        },
        {
            heading: "Checking All Four in Order",
            description:
                "The practical order is: Raj Shree first at 7:20 PM, then Udaipur City at 7:30 PM, then this page for Alwar at 7:35 PM, then Ajmer at 7:40 PM. Because the gaps are 10, 5, and 5 minutes, refreshing a page too early will still show yesterday's number, not today's.",
        },
        {
            heading: "Before and After This Cluster",
            description: (
                <>
                    Before 7:20 PM, the last result is <Link href="/faridabad" className="text-blue-600 underline">Faridabad</Link> at 6:10 PM, over an hour earlier. After the cluster ends at 7:40 PM, there's a short gap until <Link href="/mandi-bazar" className="text-blue-600 underline">Mandi Bazar</Link> at 8:10 PM, followed by <Link href="/sialkot" className="text-blue-600 underline">Sialkot</Link> at 8:20 PM.
                </>
            ),
        },
        {
            heading: "Alwar Chart 2026",
            description:
                "The chart has one cell for each day of each month. To find today's Alwar satta result, locate today's date in the left column and read across to this month's column. A cell that still shows the wait icon has no result yet, which is normal before 7:35 PM.\n\nBecause Udaipur City and Ajmer are declared so close to Alwar, check the page heading before reading a chart, so you know which game's cell you're looking at.",
        },
        {
            heading: "September 2026 Snapshot",
            description:
                "September has been the most active month for Alwar so far this year, with results recorded for nearly every day from the 1st to the 24th. The number has ranged from 22 to 98 over that stretch, and no two days have shown the same result.",
        },
        {
            heading: "Finding an Earlier Alwar Result",
            description:
                "For a past date, go to that date in the left column and move across to the month you want. Every day that has already passed this year stays in the chart, so you can look back through the year on this page. The numbers record what was declared and do not show what the next result will be.",
        },
        {
            heading: "More Satta Game Results",
            description: (
                <>
                    Along with Alwar, users on A7 Satta King also check <Link href="/raj-shree" className="text-blue-600 underline">Raj Shree Satta Results</Link>, <Link href="/udaipur-city" className="text-blue-600 underline">Udaipur City Satta Results</Link>, <Link href="/ajmer" className="text-blue-600 underline">Ajmer Satta Result</Link>, and <Link href="/sialkot" className="text-blue-600 underline">Sialkot Satta Results</Link>.
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
            question: "What time is the Alwar satta result declared?",
            answer: "At 7:35 PM.",
        },
        {
            question: "Which games are declared just before and after Alwar?",
            answer:
                "Udaipur City is declared at 7:30 PM before it, and Ajmer at 7:40 PM after it.",
        },
        {
            question: "Where can I see today's Alwar result?",
            answer:
                "In today's cell in the chart on this page. It also appears in the home page table.",
        },
        {
            question: "How do I find an older Alwar result?",
            answer:
                "Go to the date in the left column of the chart, then across to the month.",
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

export default Alwar