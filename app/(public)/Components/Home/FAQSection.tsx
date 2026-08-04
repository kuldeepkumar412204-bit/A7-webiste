"use client";

import React, { useState } from "react";

interface InfoSection {
  heading: string;
  description: React.ReactNode;
}

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  // State to track which FAQ accordion item is open
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  // Main H2 Text Content Sections
  const infoSections: InfoSection[] = [
    {
      heading: "What is A7 Satta King?",
      description:
        "A7 Satta King is a famous platform for announcing many satta results. While several websites announce the satta results, they are not reliable, and there is a lack of consistency; on the other hand, A7 Satta King is a trustworthy and consistent website for checking everyday satta results, and players can check the whole year's satta chart here, which is crucial for the game.",
    },
    {
      heading: "How do a7 satta King work",
      description: (
        <>
          On the A7 Satta King website, the Satta King or Satta Matka charts are
          simply there to show the latest game results. The names or entries you
          see on the chart page are part of the most recently announced results
          for each game and its timing.
          <br />
          <br />
          We keep things simple and easy to follow, so you don’t have to spend
          time trying to figure anything out. You can easily check the latest
          updates and keep up with the results without any confusion. Everything
          is designed to be simple and user-friendly, so your experience feels
          smooth and stress-free.
        </>
      ),
    },
    {
      heading: "Understanding A7 Satta King Chart",
      description:
        "A7 Satta King Charts are easy to check and comprehend. The chart page is made to display results in an easy-to-understand, step-by-step fashion. Every result entry is presented on a daily, monthly, and annual basis. A lot of SATTA players look at earlier charts to observe how results have changed over time. Examining chart history maintains transparency and aids users in understanding patterns.",
    },
    {
      heading: "Games Covered on A7 Satta King",
      description:
        "A7 Satta King provides thorough details about every well-known Satta game that Satta players regularly play. For several well-known Satta games, including Sadar Bazar, Gwalior Satta, Satta King Disawar, A7 Satta, Delhi Bazar, Delhi Matka, Gali Satta, and Shri Ganesh, players can access the most recent Satta charts and results. Regional updates for Agra Satta, Faridabad Satta, Alwar Satta, Ghaziabad Satta, A7 Satta, and Dwarka Satta are also available on the website.",
    },
    {
      heading: "How to play A7 Satta King games?",
      description:
        "A7 Satta does not promote or organise any Satta King games, though individuals may advertise on this website. To play Satta King games, you must get in touch with people who are involved in the industry. Typically, they take your bet money, place it, and give you the winning amount if your prediction is correct.",
    },
    {
      heading: "Why Do Users Trust A7 Satta King?",
      description: (
        <>
          Every STA player frequently searches for an A7 Satta STA website that
          offers concise explanations, trustworthy results, up-to-date charts,
          and an easy-to-use interface. A7 Satta King.com's primary goal is to
          make information clear and easy to access so that users can locate
          what they're looking for. Satta players may stay up to date with ease
          thanks to well-organised records, a simple design, and often updated
          results charts.
          <br />
          <br />
          <strong>Real-time updates:</strong> Users can keep informed without
          needless waits because results are updated rapidly. This facilitates
          their ability to verify results as soon as they are declared.
          <br />
          <br />
          <strong>Reliability of results:</strong> The platform is renowned for
          disseminating reliable and consistent results, which gradually fosters
          user confidence. Because the information is reliably and plainly
          delivered, people rely on it.
        </>
      ),
    },
    {
      heading: "Can I Check A7 Satta Results on This Website?",
      description:
        "Users can examine A7 Satta result-related information on the A7 Satta website, since both platforms often include comparable Satta market games, result updates, and historical chart records. These websites are frequently used by visitors to examine past performance charts, daily number updates, market timing data, and historical record archives related to frequently searched Satta markets.",
    },
    {
      heading: "Legal Disclaimer",
      description: (
        <>
          This platform is solely intended for informative reasons. We do not
          encourage or condone unlawful betting or gambling. Before
          participating in any such activity, users should abide by their local
          laws.
          <br />
          <br />
          The correctness of the information supplied is not guaranteed by us.
          You use our platform at your own risk, and we have no liability for
          any damages or legal problems.
        </>
      ),
    },
  ];

  // Accordion FAQs
  const faqItems: FAQItem[] = [
    {
      question: "A7 Satta: What is it?",
      answer:
        "Satta King and Matka result tables, daily winning numbers, historical records, and updates for other Satta games are all available on A7 Satta. People go to the website to compare historical data and view results.",
    },
    {
      question: "What is Satta Matka or A7 Satta King?",
      answer:
        "The number-based lottery-style game A7 Satta King, also called Satta Matka, has its roots in India. It gained popularity over time as a type of betting where winning numbers are revealed every day.",
    },
    {
      question: "Is it possible to play Satta on the A7 Satta website?",
      answer:
        "No, this website does not allow you to play satta. Only results and historical record charts are offered by A7 Satta. In several regions of India, playing satta may be prohibited.",
    },
    {
      question: "Are there more kinds of Satta games available at A7 Satta?",
      answer:
        "Yes, in addition to frequent updates, the portal offers charts and results for a number of well-known satta games.",
    },
    {
      question: "How frequently are A7 Satta results updated?",
      answer:
        "Users may quickly review the most recent results because charts and results are updated often.",
    },
    {
      question: "Can I view the chart records from prior years on A7 Satta?",
      answer:
        "Indeed, users can access chart records from previous years, which facilitates the tracking of historical data and trends.",
    },
    {
      question: "Which games are available on A7 Satta?",
      answer:
        "Disawar, Gali, Delhi Bazar, Delhi Matka, Sadar Bazar, Shri Ganesh, Faridabad, Agra, Alwar, Ghaziabad, Dwarka, and other regional marketplaces are among the games covered by the platform.",
    },
    {
      question: "Is it permissible to use this website in India?",
      answer:
        "In several regions of India, satta activities are prohibited. This website shows findings and charts for reference and is solely intended for informational purposes.",
    },
    {
      question:
        "Do I have to register in order to view my Alwar Satta results?",
      answer:
        "There is no need to register. The charts and results are all free.",
    },
    {
      question: "How can I interpret the A7 Satta charts?",
      answer:
        "Charts are arranged by to winning numbers, game names, and dates. Users can peruse previous data or verify daily outcomes with ease.",
    },
    {
      question: "Can I use this website to anticipate winning numbers?",
      answer:
        "No, the website only displays previous outcomes. Future predictions cannot be guaranteed because Satta results are dependent on chance.",
    },
    {
      question: "Does A7 Satta provide leak numbers?",
      answer:
        "No, neither leaks nor guaranteed figures are offered by the platform. Such claims should be avoided by users elsewhere.",
    },
    {
      question: "What time is Gali Satta?",
      answer: "Results for Gali Satta are typically released at 11:50 p.m.",
    },
    {
      question: "What is the Sadar Bazar Satta outcome timing?",
      answer: "Usually, the outcome is announced about 1:40 PM.",
    },
    {
      question: "What time does Delhi Bazar Satta take place?",
      answer: "The outcome is often declared at 3:10 PM.",
    },
    {
      question: "What time is Shri Ganesh?",
      answer: "The time of the outcome is around 04:40 PM.",
    },
    {
      question: "What time is Faridabad?",
      answer: "Usually, the outcome is declared at 6:10 PM.",
    },
    {
      question: "What time is Disawar?",
      answer:
        "Disawar results are often announced between 5:00 and 5:05 in the morning.",
    },
  ];

  return (
    <div className="w-full bg-white font-sans my-[16px] text-[16px]">
      <div className="w-full flex flex-col">
        {/* Render Main Content Blocks */}
        {infoSections.map((section, idx) => (
          <div key={idx} className="w-full">
            {/* Bright Yellow Heading Bar */}
            <div className="w-full bg-[#ffd800] p-4 mb-2 text-center border-b border-black/10">
              <h2 className="text-[#212529] font-bold text-[20px] tracking-wide">
                {section.heading}
              </h2>
            </div>

            {/* Clean White Description Content Box */}
            <div className="w-full bg-white p-4 pt-0 md:px-6 max-w-8xl mx-auto">
              <div className="text-[#212529] font-medium leading-relaxed text-justify md:text-left tracking-normal">
                {section.description}
              </div>
            </div>
          </div>
        ))}

        {/* --- FREQUENTLY ASKED QUESTIONS (ACCORDION SECTION) --- */}
        <div className="w-full">
          {/* FAQ Main Yellow Header */}
          <div className="w-full bg-[#ffd200] py-3.5 px-4 text-center border-b border-black/10">
            <h2 className="text-black font-semibold text-sm sm:text-lg md:text-xl tracking-wide uppercase">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Accordion List Container */}
          <div className="w-full bg-white py-6 px-4 md:px-6 max-w-4xl mx-auto">
            <div className="space-y-3">
              {faqItems.map((item, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 shadow-sm"
                  >
                    {/* Accordion Trigger Trigger button */}
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex justify-between items-center text-left py-4 px-4 bg-[#ffd200] hover:bg-[#c4a000] transition-colors focus:outline-none"
                    >
                      <span className="text-black font-semibold text-xs sm:text-base pr-4">
                        {item.question}
                      </span>
                      {/* Accordion Indicator Icon */}
                      <span
                        className={`transform transition-transform duration-200 text-gray-600 font-bold text-sm sm:text-lg shrink-0`}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {/* Accordion Content Box */}
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen
                          ? "max-h-[500px] border-t border-gray-100"
                          : "max-h-0"
                      }`}
                    >
                      <div className="p-4 bg-white text-gray-800 text-xs sm:text-sm md:text-base leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
