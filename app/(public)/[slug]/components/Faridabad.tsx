import FAQSection from "./FAQSection";
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
            heading: "Faridabad Satta Result and Chart 2026 – Live and Updated",
            description: (
                <>
                    <p>
                        Are you trying to find out the most recent information about the 2026
                        Faridabad Satta Result? You've come to the correct spot. Clear results
                        and organized chart data, including daily figures, patterns, and
                        trends, are provided by the A7 Satta King.
                    </p>

                    <p className="mt-3">
                        Because everything is well-organized and updated on a regular basis,
                        you can easily examine records or check today's results.
                    </p>
                </>
            ),
        },
        {
            heading: "What is Faridabad Satta?",
            description:
                "Users utilize the number-based Faridabad Satta system every day to monitor outcomes and spot trends. Verified results are given in an easy-to-understand style on A7 Satta King, which facilitates the understanding of number trends over time.",
        },
        {
            heading: "Faridabad Satta Chart 2026 Guide",
            description: (
                <>
                    <p>
                        The Faridabad Satta Chart 2026 presents historical data in an
                        understandable manner. To identify trends, users can examine data on a
                        weekly and monthly basis.
                    </p>

                    <p className="mt-3">
                        For improved analysis, the graphic incorporates all previous records
                        and is refreshed every day. Both desktop and mobile users can utilize
                        it.
                    </p>


                </>
            ),
        },
        {
            heading: "Features of Our Chart",
            description: (
                <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Results are updated daily.</li>
                    <li>Full historical documentation</li>
                    <li>Design that is mobile-friendly</li>
                    <li>Layout that is readable and clear</li>
                    <li>Simple navigation</li>
                </ul>
            )
        },
        {
            heading: "Today’s Faridabad Satta Result",
            description:
                "After verification, the most recent Faridabad Satta Result is updated. Users can stay up to date with the most recent information by refreshing the site to view the results for today.",
        },
        {
            heading: "Faridabad Satta History Chart",
            description:
                "The results from 2024 to 2026 are shown in the history chart, which aids users in comprehending numerical trends and recurring patterns throughout time.",
        },
        {
            heading: "Why Choose A7 Satta King?",
            description: (
                <>
                    <p>The A7 Satta King is recommended for:</p>

                    <ul className="list-disc pl-6 mt-4 space-y-2">
                        <li>Quick and frequent updates</li>
                        <li>Clear and uncomplicated charts</li>
                        <li>Simple information access</li>
                        <li>Trustworthy information</li>
                    </ul>
                </>
            ),
        },
        {
            heading: "How to Use Our Pages",
            description: (
                <>
                    <p>Take these actions:</p>

                    <ol className="list-decimal pl-6 mt-4 space-y-2">
                        <li>Go to the A7 Satta King page for the Faridabad Satta Results.</li>
                        <li>Check the outcome for today.</li>
                        <li>See the chart</li>
                        <li>Examine historical documents</li>
                    </ol>
                </>
            ),
        },
        {
            heading: "Stay Updated with Faridabad Satta News",
            description:
                "A7 Satta King shares updates related to charts, trends, and important information. Users can stay connected for regular updates.",
        },
    ];

    const faqItems = [
        {
            question: "What is Faridabad Satta?",
            answer:
                "Faridabad Satta is a number-based system where users check daily results and review charts.",
        },
        {
            question: "How can I check today’s Faridabad Satta result?",
            answer:
                "You can check the latest Faridabad Satta Result on A7 Satta King.",
        },
        {
            question: "What is the result timing?",
            answer:
                "Results are usually announced at a fixed time, but timing may vary.",
        },
        {
            question: "Is A7 Satta King reliable?",
            answer:
                "Yes, A7 Satta King provides accurate results with historical charts.",
        },
        {
            question: "Can I view old charts?",
            answer:
                "Yes, previous charts and records are available.",
        },
        {
            question: "How often are results updated?",
            answer:
                "Results are updated daily after verification.",
        },
        {
            question: "Is registration required?",
            answer:
                "No, all results and charts are free to access.",
        },
        {
            question: "Are tips or predictions provided?",
            answer:
                "No, only results and charts are shared.",
        },
        {
            question: "Can I check results on mobile?",
            answer:
                "Yes, the website is mobile-friendly.",
        },
        {
            question: "Are results updated daily?",
            answer:
                "Yes, results and charts are updated daily.",
        },
        {
            question: "Why is it popular?",
            answer:
                "Due to daily updates and access to past records.",
        },
        {
            question: "Are other Satta results available?",
            answer:
                "Yes, A7 Satta King provides multiple Satta game updates.",
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