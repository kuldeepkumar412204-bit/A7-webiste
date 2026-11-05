import React from "react";
import { Metadata } from "next";
import FAQSection from "./FAQSection";
import Link from "next/link";
import type { LatestResult } from "@/app/lib/homeData";
import { formatDrawDate } from "./formatDrawDate";

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

export default function SadarBazar({
  latest,
}: {
  latest?: LatestResult | null;
}) {
  const latestText = latest
    ? `Last chart update: ${formatDrawDate(latest.drawDate)}, ${latest.time} IST\nLatest available result: ${latest.result} (${formatDrawDate(latest.drawDate)})\nStatus: ${latest.isToday ? "Updated" : "Waiting for today's result"}`
    : "Latest available result: Not available yet\nStatus: Waiting for result";

  // Main Content Blocks - styled like FAQSection
  //   const infoSections: InfoSection[] = [
  //     {
  //       heading: "Sadar Bazar Satta Results and Yearly Chart",
  //       description:
  //         "Sadar Bazar is a daily game, and its result is declared in the early afternoon at 1:40 PM. A new Sadar Bazar Satta Result is added to this page every day, so you can check today's result, the 2026 chart, and older records in one place instead of searching across several pages.\n\nThe chart at the top of the page lists every date of the year. Below it, you will find the result time, how to read the chart, how to look up past results, and links to other games you may follow.",
  //     },
  //     {
  //       heading: "Latest Sadar Bazar Result",
  //       description: latestText,
  //     },
  //     {
  //       heading: "Sadar Bazar Result Time",
  //       description: (
  //         <>
  //           <p className="mb-3">
  //             The Sadar Bazar result is declared at 1:40 PM every day. Because
  //             this is an early afternoon result, plan to check the page shortly
  //             after 1:40 PM. You can check the result for that day on the{" "}
  //             <Link href="/" className="text-blue-600 underline">
  //               home page
  //             </Link>{" "}
  //             table, where all game results are available, or on this Sadar Bazar
  //             page.
  //           </p>
  //           <p>
  //             If you open the page before 1:40 PM, today's result may not be added
  //             yet. Refresh the page after the result time to see the new entry.
  //           </p>
  //         </>
  //       ),
  //     },
  //     {
  //       heading: "How to Check Sadar Bazar Satta Result Today?",
  //       description:
  //         "Open this page and find today's date in the chart. Look along the row for that date to the column for the current month. The number in that cell is today's result. If the cell shows a wait icon, that date's result has not been added yet, so check again after 1:40 PM.",
  //     },
  //     {
  //       heading: "About This Sadar Bazar Chart",
  //       description:
  //         "The Sadar Bazar chart provides a year-wise record of Sadar Bazar results in one place. It is organized by date and month, making it easier to find a result for a specific day or compare results across different months. The chart is updated as new results are added, while previous entries remain available for checking historical records. You can use the chart to view today's available result, check results from earlier dates, and review the yearly Sadar Bazar result history without searching through separate pages.",
  //     },
  //     {
  //       heading: "How to Read the Sadar Bazar Satta Chart 2026?",
  //       description:
  //         "Dates 1 to 31 run down the left side and the months run across the top. Each result sits where its date row meets its month column. To compare days, read across a row for the same date in different months. To see one month, read down its column.\n\nA wait icon means there is no result for that date. That can be a date that has not happened yet, or a result that has not been added. Months at the start of the year may have fewer entries than the current month.",
  //     },
  //     // {
  //     //   heading: `Which website shows instant ${gameName} satta king result ?`,
  //     //   description: (
  //     //     <>
  //     //       On Internet if you search for SADAR BAZAR SATTA KING RESULT , you will found thousands of results website but the question arises which sites is instant and reliable , So the answer to this question is there can be many websites which can show results instantly but the part remains that are these sites consistent , If to talk about consistancy you will find many sites fails to this test because these website are publishing some days are consistent but later their time delays can be so late . though A7satta.com is one the fast and consistent website to publish real-time sadar bazar satta results including other satta games. Website is consistent in showing results from a long time. To Check today's sadar bazar instant result click{" "}
  //     //       <Link href="/" className="text-blue-600 underline">
  //     //         Today's Sadar Bazar SATTA Superfast Result
  //     //       </Link>
  //     //     </>
  //     //   ),
  //     // },
  //     {
  //       heading: "Sadar Bazar Satta Result History",
  //       description:
  //         "Results from earlier dates stay in the chart, so you can look back at any day already declared this year. This is useful if you want to check a specific date, compare one month with another, or confirm what was declared on a day you missed.\n\nEvery entry is a record of what was declared. It is not a prediction of future results, and earlier numbers do not tell you what the next result will be.",
  //     },
  //     {
  //       heading: "How Are Sadar Bazar Results Updated?",
  //       description:
  //         "A new result is added to this page every day after it is declared at 1:40 PM. Results are added to the chart, and older entries stay in place so the year's record stays complete. If a result is corrected, the chart is updated.",
  //     },
  //     {
  //       heading: "Check More Satta Game Results",
  //       description: (
  //         <>
  //           Along with Sadar Bazar, users on A7 Satta King also check{" "}
  //           <Link href="/delhi-bazar" className="text-blue-600 underline">
  //             Delhi Bazar Satta Result
  //           </Link>
  //           ,{" "}
  //           <Link href="/delhi-matka" className="text-blue-600 underline">
  //             Delhi Matka Satta Results
  //           </Link>
  //           ,{" "}
  //           <Link href="/gali" className="text-blue-600 underline">
  //             Gali Satta Result
  //           </Link>
  //           , and{" "}
  //           <Link href="/karol-bagh" className="text-blue-600 underline">
  //             Karol Bagh Satta Results
  //           </Link>
  //           .
  //         </>
  //       ),
  //     },
  //   ];

  const infoSections: InfoSection[] = [
    {
      heading: "Sadar Bazar Satta Result और Yearly Chart",
      description:
        "Sadar Bazar एक डेली गेम है, जिसका रिजल्ट दोपहर 1:40 PM पर घोषित किया जाता है। इस पेज पर हर दिन नया Sadar Bazar Satta Result अपडेट किया जाता है, जिससे आप आज का रिजल्ट, 2026 का चार्ट और पुराने रिकॉर्ड एक ही जगह पर देख सकते हैं। इसके लिए आपको अलग-अलग पेज पर जाने की जरूरत नहीं है।\n\nपेज के सबसे ऊपर दिए गए चार्ट में पूरे साल की सभी तारीखें शामिल हैं। इसके नीचे आपको रिजल्ट का समय, चार्ट पढ़ने का तरीका, पुराने रिजल्ट देखने की जानकारी और दूसरे गेम के लिंक मिलेंगे।",
    },
    {
      heading: "नवीनतम Sadar Bazar Result",
      description: latestText,
    },
    {
      heading: "Sadar Bazar Result Time",
      description: (
        <>
          <p className="mb-3">
            Sadar Bazar का रिजल्ट हर दिन दोपहर 1:40 PM पर घोषित किया जाता है।
            चूंकि इसका रिजल्ट दोपहर में आता है, इसलिए आप 1:40 PM के कुछ समय बाद
            इस पेज को चेक कर सकते हैं। आप उस दिन का रिजल्ट{" "}
            <Link href="/" className="text-blue-600 underline">
              होम पेज
            </Link>{" "}
            पर दिए गए टेबल में भी देख सकते हैं, जहां सभी गेम के रिजल्ट उपलब्ध
            होते हैं। इसके अलावा, आप इसी Sadar Bazar पेज पर भी रिजल्ट चेक कर
            सकते हैं।
          </p>
          <p>
            अगर आप 1:40 PM से पहले पेज खोलते हैं, तो हो सकता है कि आज का रिजल्ट
            अभी तक अपडेट न हुआ हो। नया रिजल्ट देखने के लिए 1:40 PM के बाद पेज को
            रिफ्रेश करें।
          </p>
        </>
      ),
    },
    {
      heading: "आज का Sadar Bazar Satta Result कैसे चेक करें?",
      description:
        "इस पेज को खोलें और चार्ट में आज की तारीख देखें। उस तारीख की रो (Row) में मौजूदा महीने के कॉलम तक जाएं। उस सेल में दिया गया नंबर आज का रिजल्ट है। अगर सेल में वेट आइकन दिखाई देता है, तो इसका मतलब है कि उस तारीख का रिजल्ट अभी अपडेट नहीं हुआ है। ऐसी स्थिति में 1:40 PM के बाद दोबारा चेक करें।",
    },
    {
      heading: "Sadar Bazar Chart के बारे में",
      description:
        "Sadar Bazar Chart में पूरे साल के रिजल्ट का रिकॉर्ड एक ही जगह पर दिया जाता है। इसे तारीख और महीने के अनुसार व्यवस्थित किया गया है, जिससे किसी खास दिन का रिजल्ट ढूंढना या अलग-अलग महीनों के रिजल्ट की तुलना करना आसान हो जाता है। नए रिजल्ट आने पर चार्ट को अपडेट किया जाता है, जबकि पुराने रिजल्ट भी इसमें उपलब्ध रहते हैं। इस चार्ट की मदद से आप आज का रिजल्ट देख सकते हैं, पिछली तारीखों के नंबर चेक कर सकते हैं और बिना अलग-अलग पेज सर्च किए पूरे साल का Sadar Bazar Result History देख सकते हैं।",
    },
    {
      heading: "Sadar Bazar Satta Chart 2026 कैसे पढ़ें?",
      description:
        "चार्ट में 1 से 31 तक की तारीखें बाईं तरफ दी गई हैं और ऊपर की ओर महीनों के नाम दिए गए हैं। हर रिजल्ट उस तारीख की रो और संबंधित महीने के कॉलम के मिलने वाले स्थान पर दिखाई देता है।\n\nअलग-अलग महीनों में एक ही तारीख के रिजल्ट की तुलना करने के लिए उस तारीख की रो में देखें। किसी एक महीने के सभी रिजल्ट देखने के लिए उसके कॉलम में नीचे की तरफ जाएं।\n\nवेट आइकन का मतलब है कि उस तारीख का रिजल्ट उपलब्ध नहीं है। ऐसा तब हो सकता है जब वह तारीख अभी आई न हो या उसका रिजल्ट अभी अपडेट न किया गया हो। साल की शुरुआत वाले महीनों में मौजूदा महीने की तुलना में कम रिजल्ट दिखाई दे सकते हैं।",
    },
    {
      heading: "Sadar Bazar Satta Result इतिहास",
      description:
        "पिछली तारीखों के रिजल्ट चार्ट में सुरक्षित रहते हैं, इसलिए आप इस साल के किसी भी घोषित रिजल्ट को दोबारा देख सकते हैं। अगर आप किसी खास तारीख का रिजल्ट चेक करना चाहते हैं, अलग-अलग महीनों के नंबर की तुलना करना चाहते हैं या किसी पुराने रिजल्ट की जानकारी दोबारा देखना चाहते हैं, तो यह चार्ट आपके लिए उपयोगी है।\n\nचार्ट में दिया गया हर नंबर पहले घोषित किए गए रिजल्ट का रिकॉर्ड है। इसे भविष्य के रिजल्ट की भविष्यवाणी नहीं माना जाना चाहिए। पुराने नंबर यह नहीं बताते कि अगला रिजल्ट क्या होगा।",
    },
    {
      heading: "Sadar Bazar Satta Results कैसे अपडेट किए जाते हैं?",
      description:
        "Sadar Bazar का रिजल्ट हर दिन दोपहर 1:40 PM पर घोषित होने के बाद इस पेज पर अपडेट किया जाता है। नए रिजल्ट चार्ट में जोड़ दिए जाते हैं और पुराने रिजल्ट अपनी जगह पर बने रहते हैं, जिससे पूरे साल का रिकॉर्ड उपलब्ध रहता है। अगर किसी रिजल्ट में सुधार किया जाता है, तो चार्ट को भी अपडेट कर दिया जाता है।",
    },
    {
      heading: "अन्य Satta Game Results भी चेक करें",
      description: (
        <>
          Sadar Bazar के साथ-साथ A7 Satta King पर यूजर्स{" "}
          <Link href="/delhi-bazar" className="text-blue-600 underline">
            Delhi Bazar Satta Result
          </Link>
          ,{" "}
          <Link href="/delhi-matka" className="text-blue-600 underline">
            Delhi Matka Satta Results
          </Link>
          ,{" "}
          <Link href="/gali" className="text-blue-600 underline">
            Gali Satta Result
          </Link>
          ,{" "}
          <Link href="/karol-bagh" className="text-blue-600 underline">
            Karol Bagh Satta Results
          </Link>{" "}
          और{" "}
          <Link href="/gwalior" className="text-blue-600 underline">
            Gwalior Satta Result
          </Link>{" "}
          भी चेक कर सकते हैं।
        </>
      ),
    },
  ];

  // Accordion FAQs - styled like FAQSection
  //   const faqItems = [
  //     {
  //       question: "Does Sadar Bazar run every day?",
  //       answer:
  //         "Yes. Sadar Bazar publishes a result every day, with no off days.",
  //     },
  //     {
  //       question: "What time is the Sadar Bazar satta result declared?",
  //       answer: "The result is declared at 1:40 PM.",
  //     },
  //     {
  //       question: "Is Sadar Bazar a night game?",
  //       answer:
  //         "No. The Sadar Bazar result is declared in the afternoon at 1:40 PM.",
  //     },
  //     {
  //       question: "Where can I check today's Sadar Bazar result?",
  //       answer:
  //         "On this page, in the chart at the top, in the cell for today's date. You can also check the home page table.",
  //     },
  //     {
  //       question: "Why does today's cell show a wait icon?",
  //       answer:
  //         "A wait icon means that date's result has not been added yet. Check again after 1:40 PM.",
  //     },
  //     {
  //       question: "Can I see old Sadar Bazar results?",
  //       answer: "Yes. Earlier dates stay in the yearly chart on this page.",
  //     },
  //     {
  //       question: "How do I read the Sadar Bazar chart?",
  //       answer:
  //         "Dates run down the left and months run across the top. A result sits where its date row meets its month column.",
  //     },
  //     {
  //       question: "Can past results predict the next Sadar Bazar result?",
  //       answer:
  //         "No. The chart is a record of what was declared and should not be treated as a prediction.",
  //     },
  //   ];

  const faqItems = [
    {
      question: "क्या Sadar Bazar हर दिन चलता है?",
      answer:
        "हाँ। Sadar Bazar का रिजल्ट हर दिन जारी किया जाता है। इसमें कोई छुट्टी नहीं होती है।",
    },
    {
      question: "Sadar Bazar Satta Result कितने बजे घोषित होता है?",
      answer:
        "Sadar Bazar का रिजल्ट हर दिन दोपहर 1:40 PM पर घोषित किया जाता है।",
    },
    {
      question: "क्या Sadar Bazar एक नाइट गेम है?",
      answer:
        "नहीं। Sadar Bazar का रिजल्ट रात में नहीं, बल्कि दोपहर 1:40 PM पर घोषित किया जाता है।",
    },
    {
      question: "आज का Sadar Bazar Result कहां चेक कर सकते हैं?",
      answer:
        "आप इस पेज के सबसे ऊपर दिए गए चार्ट में आज की तारीख वाले सेल में रिजल्ट चेक कर सकते हैं। इसके अलावा, होम पेज पर दिए गए रिजल्ट टेबल में भी इसे देख सकते हैं।",
    },
    {
      question: "आज के रिजल्ट वाले सेल में वेट आइकन क्यों दिखाई देता है?",
      answer:
        "वेट आइकन का मतलब है कि उस तारीख का रिजल्ट अभी अपडेट नहीं किया गया है। आप 1:40 PM के बाद दोबारा चेक कर सकते हैं।",
    },
    {
      question: "क्या मैं Sadar Bazar के पुराने रिजल्ट देख सकता हूं?",
      answer:
        "हाँ। इस पेज पर दिए गए Yearly Chart में पिछली तारीखों के सभी उपलब्ध रिजल्ट देख सकते हैं।",
    },
    {
      question: "Sadar Bazar Chart कैसे पढ़ें?",
      answer:
        "चार्ट में बाईं तरफ तारीखें और ऊपर की तरफ महीने दिए गए हैं। किसी तारीख और महीने के मिलने वाले सेल में उसका रिजल्ट दिखाई देता है।",
    },
    {
      question:
        "क्या पुराने रिजल्ट से अगले Sadar Bazar Result का पता लगाया जा सकता है?",
      answer:
        "नहीं। चार्ट में दिए गए नंबर केवल पहले घोषित किए गए रिजल्ट का रिकॉर्ड हैं। इन्हें अगले रिजल्ट की भविष्यवाणी के रूप में इस्तेमाल नहीं किया जाना चाहिए।",
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
