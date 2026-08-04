"use client";

import React, { useState } from "react";
import { Metadata } from "next";
import FAQSection from "./FAQSection";

export const metadata: Metadata = {
  title: "Gwalior Satta Result 2026 Today | Gwalior Chart & Daily Updates",
  description:
    "Check the latest Gwalior Satta Result 2026 with today's updates, full chart, and previous records. Get fast and accurate results only on A7 Satta King.",
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
    title: "Gwalior Satta Result 2026 Today | Gwalior Chart & Daily Updates",
    description:
      "Check the latest Gwalior Satta Result 2026 with today's updates, full chart, and previous records. Get fast and accurate results only on A7 Satta King.",
    url: `${process.env.SITE_URL}/gwalior`,
    siteName: "A7 Satta King",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gwalior Satta Result 2026 Today | Gwalior Chart & Daily Updates",
    description:
      "Check the latest Gwalior Satta Result 2026 with today's updates, full chart, and previous records. Get fast and accurate results only on A7 Satta King.",
  },
};

interface InfoSection {
  heading: string;
  description: React.ReactNode;
}


export default function Gwalior() {
  // State to track which FAQ accordion item is open
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const gameName = "gwalior";
  const resultTime = "2:20 PM";

  // Main Content Blocks - styled like FAQSection
  const infoSections: InfoSection[] = [
    {
      heading: "GWALIOR Satta Result and Full Chart 2026: Your Reliable Info Site",
      description:
        "Welcome to A7 Satta King, where you can find the latest updates and information related to the number game. If you are looking for quick results, previous records, and updated charts, you are at the right place. We share the latest results and charts in a simple and easy-to-understand format, helping users check the information without any confusion. We aim to provide clear and useful updates for everyone.",
    },
    {
      heading: "Gwalior News and Today's Result",
      description: (
        <>
          <p>
            All look for rapid updates, and we ensure that the latest information gets shared when needed. After the update is available, today's result is added and can be checked while waiting for the update. The website is easy to use, and results and charts are easily found.
          </p>
          <p className="mt-3 font-semibold">Please see the latest update here:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Today's Result: Chart page</li>
            <li>Result Time: 2:20 PM</li>
          </ul>
          <p className="mt-3">
            We know how important timely updates are, and we always strive to share with you as much information as we can, as quickly as possible.
          </p>
        </>
      ),
    },
    {
      heading: "Gwalior Chart 2026",
      description:
        "The 2026 chart maintains an annual record of the numbers for each day. It enables users to easily review previous results and understand previous updates. For those who like to study old data, these charts can be a useful source of information.",
    },
    {
      heading: "Why check the chart?",
      description: (
        <>
          <h3 className="font-semibold mb-2">Check Previous Trends:</h3>
          <p className="mb-3">Old results can be viewed on the chart, and numbers can be seen as they change over time.</p>
          <h3 className="font-semibold mb-2">Study Past Records:</h3>
          <p className="mb-3">A large number of users review earlier records, in search of duplicate numbers and to learn about previous patterns.</p>
          <h3 className="font-semibold mb-2">Easy-to-Read Records:</h3>
          <p className="mb-3">The well-organized charts have the advantage of being easy to look at and compare information from the past.</p>
          <p>A7 Satta King updates the yearly chart periodically with the latest information to maintain the clarity of records and ease of access.</p>
        </>
      ),
    },
    {
      heading: "How the Gwalior System Works",
      description: (
        <>
          <p className="mb-3">This is a lottery type game, but played with numbers. It has been played for many years and now it's available in a quick and convenient online format.</p>
          <p className="mb-3">The users select numbers like a single digit, a pair or any other combination and wait for the official result. If the selected number is the same as the announced number, it will be regarded as a winning number.</p>
          <p className="font-semibold mb-2">The work of a Result Processor:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Number Selection:</strong> Picks numbers in his/her own way, method, or preference.</li>
            <li><strong>Result Draw:</strong> The result is read out at the fixed time, via the official process.</li>
            <li><strong>Result Update:</strong> The new winning number is added to the site, making it easy for the users to check the new winning number.</li>
            <li><strong>Chart Update:</strong> The output is also merged with the past results and graphed for reference.</li>
          </ul>
          <p className="mb-3">For this section, it's all about our focus: simple and clear information. We are dedicated to offering a seamless service and transparency:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Experience:</strong> Users are able to readily access information thanks to regular updates and maintained records.</li>
            <li><strong>Clear Information:</strong> Simple presentation of results, charts, and previous records.</li>
            <li><strong>Accuracy:</strong> Information is correctly reviewed before updates are disseminated.</li>
            <li><strong>Reliable Updates:</strong> Users are only added with available and confirmed information.</li>
          </ul>
        </>
      ),
    },
    {
      heading: "What You Get From Our Data",
      description:
        "Daily GWALIOR Satta Result:\nPlease refer to the updated numbers when they become available.\n\nComplete GWALIOR Satta Result Charts:\nSee the annual chart for 2026, including the complete history.\n\nPrevious Records:\nReview previous results to see trends and past numbers.\n\nEasy Access:\nThe website is easy to navigate from cell phones and desktops.",
    },
    {
      heading: "Final Thoughts and Next Steps",
      description:
        "Need to view the 2026 results and charts? Check the GWALIOR Satta Result and record of A7 Satta King for the latest results. You can view previous records whenever needed, check the latest updates, and save the page for later reference.",
    },
    {
      heading: "Quick Disclaimer",
      description:
        "A7 Satta King does not share all results and details of charts for anything but general information and reference. This activity is designed to be played on a random basis, and we are not encouraging people to play; we cannot guarantee outcomes or provide any gaming advice in relation to the game. Users must abide by local rules and regulations. The information on this site is for the user's use at their own risk.",
    },
  ];

  // Accordion FAQs - styled like FAQSection
  const faqItems = [
    {
      question: "What is Gwalior Satta?",
      answer:
        "Gwalior Satta is a number-based game where users check results, charts, and previous records related to Gwalior results.",
    },
    {
      question: "How can I check Gwalior Satta results?",
      answer:
        "You can check the latest Gwalior Satta results by visiting the result page where updates and charts are available.",
    },
    {
      question: "Are old Gwalior Satta charts available?",
      answer:
        "Yes, previous charts and old result records can be viewed to check past numbers and updates.",
    },
    {
      question: "When are Gwalior Satta results updated?",
      answer:
        "Results are updated after the latest information is available on the website.",
    },
    {
      question: "Can I check Gwalior Satta results on mobile?",
      answer:
        "Yes, the website can be opened on mobile phones, making it easy to check results anytime.",
    },
    {
      question: "Why do users check Gwalior Satta charts?",
      answer:
        "Many users view charts to look at previous records and understand past result information.",
    },
    {
      question: "Is Gwalior Satta result information available for free?",
      answer:
        "Yes, result updates and chart information can be accessed online without any charge.",
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
