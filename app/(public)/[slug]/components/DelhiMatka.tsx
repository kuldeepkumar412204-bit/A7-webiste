import FAQSection from "./FAQSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || "https://a7sattaking.com"),
  title: "Delhi Matka Satta Results 2026 Today | Chart & Updates",
  description:
    "Check Delhi Matka Satta Results 2026 with daily updates, full charts, and history records on A7 Satta King.",
  keywords: [
    "Delhi Matka Satta Results",
    "Delhi Matka Result Today",
    "Delhi Matka Chart 2026",
    "Satta King Delhi Matka",
    "Delhi Matka Satta Chart",
  ],
  alternates: {
    canonical: `${process.env.SITE_URL}/delhi-matka`,
  },
  openGraph: {
    title: "Delhi Matka Satta Results 2026 Today | Chart & Updates",
    description:
      "Check Delhi Matka Satta Results 2026 with daily updates, full charts, and history records on A7 Satta King.",
    url: `${process.env.SITE_URL}/delhi-matka`,
    siteName: "A7 Satta King",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delhi Matka Satta Results 2026 Today | Chart & Updates",
    description:
      "Check Delhi Matka Satta Results 2026 with daily updates, full charts, and history records on A7 Satta King.",
  },
};

export default function DelhiMatka() {
    const infoSections = [
    {
        heading: "Delhi Matka Satta Results & Chart 2026 – Live Updates",
        description: (
            <>
                <p>
                    Are you trying to find the most recent Delhi Matka Satta Results for 2026? You've come to the correct spot. The A7 Satta King offers entire chart history and accurate, frequently updated data in an easy-to-use style.
                </p>

                <p className="mt-3">
                    Users can easily check today’s result, explore past data, and understand number trends without any confusion. Everything is organized clearly so both new and regular users can access information quickly.
                </p>
            </>
        ),
    },
    {
        heading: "What is Delhi Matka Satta?",
        description: (
            <>
                <p>
                    Delhi Matka Satta is part of the broader Satta Matka system, which is a number-based format where results are declared based on number combinations. Historically, Satta Matka originated as a form of lottery-style betting where numbers were drawn randomly.
                </p>

                <p className="mt-3">
                    Today, users mainly follow Delhi Matka Satta Results to check daily updates and review charts for informational purposes.
                </p>
            </>
        ),
    },
    {
        heading: "Delhi Matka Satta Chart 2026",
        description: (
            <>
                <p>
                    The Delhi Matka Satta Chart 2026 provides a complete record of results. It allows users to review daily, weekly, and monthly data to observe number patterns.
                </p>

                <p className="mt-3">
                    The chart is updated regularly and includes historical records, helping users compare past and current results easily.
                </p>
            </>
        ),
    },
    {
        heading: "Key Features of the Chart",
        description: (
            <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Daily updated results</li>
                <li>Complete historical data access</li>
                <li>Simple and clean layout</li>
                <li>Mobile-friendly design</li>
                <li>Easy comparison of trends</li>
            </ul>
        ),
    },
    {
        heading: "Delhi Matka Satta Result Today",
        description: (
            <>
                <p>
                    To check today’s Delhi Matka Satta Result, simply refresh the page. Results are updated after verification to ensure accuracy.
                </p>

                <p className="mt-3">
                    Users can also stay updated with number trends and daily highlights for better understanding.
                </p>
            </>
        ),
    },
    {
        heading: "Delhi Matka Satta History Chart",
        description: (
            <>
                <p>
                    The history chart shows past results in a structured format, making it easier to track repeated numbers and long-term trends.
                </p>

                <p className="mt-3">
                    While many users review old data for reference, past results do not guarantee future outcomes.
                </p>
            </>
        ),
    },
    {
        heading: "Why Users Check Delhi Matka Satta Results",
        description: (
            <>
                <p>Users follow Delhi Matka Satta Results for:</p>

                <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Quick daily updates</li>
                    <li>Easy access to charts</li>
                    <li>Simple and organized data</li>
                    <li>Historical records for reference</li>
                </ul>
            </>
        ),
    },
    {
        heading: "How to Check Delhi Matka Satta Results",
        description: (
            <>
                <p>Follow these steps:</p>

                <ol className="list-decimal pl-6 mt-4 space-y-2">
                    <li>Visit the Delhi Matka Satta Results page on A7 Satta King</li>
                    <li>Check today’s result</li>
                    <li>View the chart</li>
                    <li>Explore historical records</li>
                </ol>
            </>
        ),
    },
    {
        heading: "Stay Updated with Delhi Matka Satta",
        description:
            "A7 Satta King shares regular updates related to results, charts, and trends. Users can stay connected to check the latest information anytime.",
    },
    {
        heading: "Important Disclaimer",
        description:
            "A7 Satta King provides Delhi Matka Satta Results and chart information for informational purposes only. The platform does not promote or support any illegal activity. Users are advised to follow local laws and use the information at their own risk.",
    },
];

const faqItems = [
    {
        question: "What is the Delhi Matka Satta game?",
        answer:
            "Delhi Matka Satta is a classic number-based Satta game that is well-liked by players who look for patterns and trends in past game results.",
    },
    {
        question: "Does A7 Satta King also include other Satta games similar to Delhi Matka Satta?",
        answer:
            "Yes, A7 Satta King offers results and charts for numerous other well-known Satta games in addition to Delhi Matka Satta.",
    },
    {
        question: "When will the result for Delhi Matka Satta be released?",
        answer:
            "Delhi Matka Satta results are typically released every day at a set hour. Please monitor updates on A7 Satta King to stay informed as exact timing may vary.",
    },
    {
        question: "Does A7 Satta King provide valid results for Delhi Matka Satta?",
        answer:
            "Indeed, A7 Satta King is regarded as trustworthy for offering historical charts and the most accurate results for Delhi Matka Satta.",
    },
    {
        question: "Can I see old charts of Delhi Matka Satta on A7 Satta King?",
        answer:
            "For reference and analysis, users can access historical charts and records of previous Delhi Matka Satta games on A7 Satta King.",
    },
    {
        question: "Are the Delhi Matka Satta results updated every day?",
        answer:
            "Indeed, all Delhi Matka Satta charts and results are updated every day.",
    },
    {
        question: "Do I need to register to view Delhi Matka Satta results?",
        answer:
            "No, you don't need to register. All Delhi Matka Satta charts and results are available for free viewing.",
    },
    {
        question: "Does A7 Satta King provide tips or predictions for Delhi Matka Satta?",
        answer:
            "In order to enable users to conduct their own analysis and make their own judgements, A7 Satta King concentrates on offering precise results and historical charts.",
    },
    {
        question: "Can I access Delhi Matka Satta results on mobile?",
        answer:
            "Yes, a user-friendly website makes it simple to access Delhi Matka Satta results on mobile devices.",
    },
    {
        question: "How often does A7 Satta King update Delhi Matka Satta results?",
        answer:
            "As soon as confirmed data is available, Delhi Matka Satta results are updated on A7 Satta King every day.",
    },
    {
        question: "What makes Delhi Matka Satta so popular?",
        answer:
            "Delhi Matka Satta is well-liked because of its lengthy history, daily result releases, and accessibility to historical data for trend analysis.",
    },
    {
        question: "Where can I find today’s Delhi Matka Satta results?",
        answer:
            "Delhi Matka Satta results are validated and updated on A7 Satta King, where data is updated on a regular basis.",
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