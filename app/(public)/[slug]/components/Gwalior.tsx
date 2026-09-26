import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata: Metadata = {
  title: "Gwalior Satta Result 2026 Today | Chart & Daily Updates",
  description:
    "Check the latest Gwalior Satta Result 2026 with today’s updates, full chart, and previous records. Get fast, right results only on A7 Satta King.",
  keywords: [
    "Gwalior Satta Result",
    "Gwalior Result Today",
    "Gwalior Chart 2026",
    "Satta King Gwalior",
    "Gwalior Satta Chart",
    "Satta Result Gwalior",
  ],
  alternates: {
    canonical: `${process.env.SITE_URL}/gwalior`,
  },
  openGraph: {
    title: "Gwalior Satta Result 2026 Today | Chart & Daily Updates",
    description:
      "Check the latest Gwalior Satta Result 2026 with today’s updates, full chart, and previous records. Get fast, right results only on A7 Satta King.",
    url: `${process.env.SITE_URL}/gwalior`,
    siteName: "A7 Satta King",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gwalior Satta Result 2026 Today | Chart & Daily Updates",
    description:
      "Check the latest Gwalior Satta Result 2026 with today’s updates, full chart, and previous records. Get fast, right results only on A7 Satta King.",
  },
};

interface InfoSection {
  heading: string;
  description: React.ReactNode;
}


export default function Gwalior() {

  // Main Content Blocks - styled like FAQSection
  const infoSections: InfoSection[] = [
    {
      heading: "Gwalior Satta Result and Yearly Chart 2026",
      description:
        "Gwalior is an early afternoon game. On this page, you can check today's Gwalior Satta Result, the 2026 chart, and older records in one place, instead of searching across several pages.\n\nThe chart lists every date of the year. Below it, you will find the result time, how to check today's result, how to read the chart, how results are updated, and links to other games you may follow.",
    },
    {
      heading: "Gwalior Satta Result Time and Today's Result",
      description: (
        <>
          <p className="mb-3">The Gwalior result is declared at 2:20 PM. Plan to check the page shortly after that time. You can see the day's result on this Gwalior page or in the <Link href="/" className="text-blue-600 underline">home page</Link> table, where all game results are listed.</p>
          <p>If you open the page before 2:20 PM, today's result may not be added yet. Refresh the page after the result time to see the new entry.</p>
        </>
      ),
    },
    {
      heading: "Gwalior Result Time Compared With Other Games",
      description: (
        <>
          Gwalior comes shortly after <Link href="/sadar-bazar" className="text-blue-600 underline">Sadar Bazar</Link>, whose result is declared at 1:40 PM, and well before <Link href="/sialkot" className="text-blue-600 underline">Sialkot</Link>, which is declared at about 8:20 PM. If you follow several games, this gives you an idea of the order in which results appear during the day.
        </>
      ),
    },
    {
      heading: "How to Check Gwalior Satta Result Today",
      description: (
        <>
          <ol className="list-decimal list-inside space-y-1">
            <li>Open this page a few minutes after 2:20 PM.</li>
            <li>Find today's date in the chart. Dates run down the left side.</li>
            <li>Follow that row across to the column for the current month.</li>
            <li>The number in that cell is today's Gwalior result.</li>
          </ol>
          <p className="mt-3">If the cell shows a wait icon, the result has not been added yet. Wait a few minutes and refresh the page. You can also check the table at <Link href="/" className="text-blue-600 underline">home page</Link>, which lists the day's results for all games.</p>
        </>
      ),
    },
    {
      heading: "Why Check the Gwalior Chart?",
      description: (
        <>
          <p className="mb-3">The 2026 chart is a record of the Gwalior results by date. Dates 1 to 31 run down the left side and the months run across the top. Each result sits where its date row meets its month column.</p>
          <p className="mb-3">A wait icon means that date's result has not been added yet. This can be a date that has not happened yet, or a result that has not been added. Months at the start of the year may have fewer entries than the current month.</p>
          <h3 className="mb-3"><span className="font-bold">Look Up a Specific Date:</span> Find what was declared on any date already recorded this year, including days you missed. This is useful when you want to confirm a result rather than rely on memory.</h3>
          <h3 className="mb-3"><span className="font-bold">Compare Months:</span> Read across a row to compare the same date in different months, or read down a column to see one full month at a glance.</h3>
          <h3 className="mb-3"><span className="font-bold">Keep a Record:</span> Older entries stay in place, so the year's record remains complete, and you can return to it at any time.</h3>
          <p>The chart is a record of what was declared. It is not a prediction of future results, and earlier numbers do not show what the next result will be.</p>
        </>
      ),
    },
    {
      heading: "How Gwalior Results Are Updated",
      description: (
        <>
          <h3 className="mb-3"><span className="font-bold">Result Declared:</span> The Gwalior result is declared at 2:20 PM.</h3>
          <h3 className="mb-3"><span className="font-bold">Result Added:</span> After it is declared, the result is added to this page and to the home page table.</h3>
          <h3><span className="font-bold">Chart Updated:</span> The new result is added to the yearly chart, and older entries stay as they are. If you correct a result, the chart updates.</h3>
        </>
      ),
    },
    {
      heading: "What You Can Find on This Page",
      description: (
        <>
          <h3 className="mb-3"><span className="font-bold">Daily Gwalior Satta Result:</span> Today's result, added after 2:20 PM.</h3>
          <h3 className="mb-3"><span className="font-bold">Gwalior Satta Chart 2026:</span> The yearly chart with every recorded date.</h3>
          <h3 className="mb-3"><span className="font-bold">Previous Records:</span> Earlier results so that you can review past dates.</h3>
          <h3><span className="font-bold">Mobile and Desktop:</span> The page works on phones and desktops, and the chart scrolls sideways on smaller screens.</h3>
        </>
      ),
    },
    {
      heading: "More Satta Game Results",
      description: (
        <>
          Along with Gwalior, users on A7 Satta King also check <Link href="/sadar-bazar" className="text-blue-600 underline">Sadar Bazar Satta Result</Link>, <Link href="/gali" className="text-blue-600 underline">Gali Satta Result</Link>, <Link href="/delhi-bazar" className="text-blue-600 underline">Delhi Bazar Satta Result</Link>, and <Link href="/gaziabad" className="text-blue-600 underline">Ghaziabad Satta Result</Link>. Each game has its own page with its own result time and yearly chart.
        </>
      ),
    },
    {
      heading: "Quick Disclaimer",
      description:
        "This page is for information only. We do not promote or support betting or gambling, and we do not give gaming advice or guarantee any outcome. Follow the laws that apply where you live. We are not responsible for any loss arising from the use of this information.",
    },
  ];

  // Accordion FAQs - styled like FAQSection
  const faqItems = [
    {
      question: "What time is the Gwalior result declared?",
      answer: "The Gwalior result is declared at 2:20 PM.",
    },
    {
      question: "Where can I check today's Gwalior result?",
      answer:
        "On this page, in the chart in the cell for today's date, or in the home page table.",
    },
    {
      question: "Why does today's cell show a wait icon?",
      answer:
        "A wait icon means that date's result has not been added yet. Check again after 2:20 PM.",
    },
    {
      question: "Can I see old Gwalior results?",
      answer: "Yes. Earlier dates stay in the yearly chart on this page.",
    },
    {
      question: "How do I read the Gwalior chart?",
      answer:
        "Dates run down the left and months run across the top. A result sits where its date row meets its month column.",
    },
    {
      question: "Is the Gwalior Satta Result declared before or after Sadar Bazar?",
      answer: "After. Sadar Bazar is declared at 1:40 PM and Gwalior at 2:20 PM.",
    },
    {
      question: "Can I check Gwalior results on my phone?",
      answer: "Yes. The page works on mobile phones and desktops.",
    },
    {
      question: "Can past results predict the next Gwalior result?",
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
        <FAQSection faqItems={faqItems}/>
      </div>
    </div>
    </>
  );
}
