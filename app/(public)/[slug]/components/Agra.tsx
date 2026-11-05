import FAQSection from "./FAQSection";
import Link from "next/link";
import type { LatestResult } from "@/app/lib/homeData";
import { formatDrawDate } from "./formatDrawDate";
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

export default function Agra({ latest }: { latest?: LatestResult | null }) {
  // const infoSections = [
  //     {
  //         heading: "Agra Satta Result Today and 2026 Chart",
  //         description:
  //             "This page carries today's Agra number and the 2026 chart. Because Agra City is declared only five minutes later, it also helps you tell the two games apart, so you don't read one result as the other.",
  //     },
  //     {
  //         heading: "New Agra Satta Result",
  //         description: latest
  //             ? `Last chart update: ${formatDrawDate(latest.drawDate)}, ${latest.time} IST\nLatest available result: ${latest.result} (${formatDrawDate(latest.drawDate)})\nStatus: ${latest.isToday ? "Updated" : "Waiting for today's result"}`
  //             : "Latest available result: Not available yet\nStatus: Waiting for result",
  //     },
  //     {
  //         heading: "Agra Satta Result Time: 5:30 PM",
  //         description:
  //             "Agra is an evening result. Open this page a little after 5:30 PM to see today's number. If you check earlier, today's cell in the chart may still be empty. The day's result is also listed in the home page table alongside the other games.",
  //     },
  //     {
  //         heading: "Agra and Agra City: Two Separate Games",
  //         description: (
  //             <>
  //                 <p className="mb-3">Agra and <Link href="/agra-city" className="text-blue-600 underline">Agra City</Link> are different games. Each has its own result, its own chart, and its own page. Their names are close, and so are their times: Agra is declared at 5:30 PM and Agra City at 5:35 PM.</p>
  //                 <p className="mb-2">Here is how to avoid mixing them up:</p>
  //                 <ul className="list-disc list-inside space-y-1 mb-3">
  //                     <li><strong>Check the page heading.</strong> This page is for Agra. The Agra City page has its own heading.</li>
  //                     <li><strong>Check the time.</strong> A number that appears at 5:30 PM belongs to Agra, and one at 5:35 PM to Agra City.</li>
  //                     <li><strong>Don't compare the two charts cell by cell.</strong> They are separate records, so the same date can hold a different number in each.</li>
  //                 </ul>
  //                 <p>If you follow both, check this page first and the <Link href="/agra-city" className="text-blue-600 underline">Agra City page</Link> five minutes later.</p>
  //             </>
  //         ),
  //     },
  //     {
  //         heading: "Where Agra Falls in the Evening",
  //         description: (
  //             <>
  //                 <p className="mb-3">Agra comes after a quiet stretch. <Link href="/shri-ganesh" className="text-blue-600 underline">Shri Ganesh</Link> is declared at 4:45 PM, and nothing else is declared until Agra arrives 45 minutes later. Agra City follows five minutes after Agra, and <Link href="/faridabad" className="text-blue-600 underline">Faridabad</Link> comes at 6:10 PM, 40 minutes after Agra City.</p>
  //                 <p>Later in the evening, the next block starts at 7:20 PM with <Link href="/raj-shree" className="text-blue-600 underline">Raj Shree</Link>. So Agra opens the early evening, and there is a gap of more than an hour between Faridabad and the next result.</p>
  //             </>
  //         ),
  //     },
  //     {
  //         heading: "Agra Chart 2026",
  //         description:
  //             "The chart holds one cell per day for each month. To read today's Agra result, find the row for today's date, then the column for this month. An empty or waiting cell means the result has not been added yet.\n\nBecause Agra City is declared so soon after, make sure you are looking at the Agra chart and not the Agra City one. The heading at the top of the page tells you which it is.",
  //     },
  //     {
  //         heading: "Looking Up an Earlier Agra Result",
  //         description:
  //             "If you need a result from a previous date, find that date in the chart and follow it across to the month you want. Days that have already passed this year stay in the chart. The numbers record what was declared. They do not show what the next result will be.",
  //     },
  //     {
  //         heading: "More Satta Game Results",
  //         description: (
  //             <>
  //                 Along with Agra, users on A7 Satta King also check <Link href="/agra-city" className="text-blue-600 underline">Agra City Satta Result</Link>, <Link href="/shri-ganesh" className="text-blue-600 underline">Shri Ganesh Satta Result</Link>, <Link href="/faridabad" className="text-blue-600 underline">Faridabad Satta Result</Link>, and <Link href="/raj-shree" className="text-blue-600 underline">Raj Shree Satta Results</Link>.
  //             </>
  //         ),
  //     },
  //     {
  //         heading: "Disclaimer",
  //         description:
  //             "This page shows results and charts for reference only. It does not promote gambling or any illegal activity and gives no advice or guarantee. Please follow the laws that apply in your area.",
  //     },
  // ];

  const infoSections = [
    {
      heading: "Agra Satta Result Today और 2026 Chart",
      description:
        "इस पेज पर आज का Agra नंबर और 2026 का चार्ट दिया गया है। चूंकि Agra City का रिजल्ट इसके ठीक पांच मिनट बाद घोषित होता है, इसलिए यहां दोनों गेम के बीच अंतर समझने में भी मदद मिलेगी, ताकि आप एक गेम के रिजल्ट को दूसरे का रिजल्ट न समझें।",
    },
    {
      heading: "New Agra Satta Result",
      description: latest
        ? `अंतिम चार्ट अपडेट: ${formatDrawDate(latest.drawDate)}, ${latest.time} IST\nनवीनतम उपलब्ध रिजल्ट: ${latest.result} (${formatDrawDate(latest.drawDate)})\nस्टेटस: ${latest.isToday ? "अपडेटेड" : "आज के रिजल्ट का इंतजार है"}`
        : "नवीनतम उपलब्ध रिजल्ट: अभी उपलब्ध नहीं है\nस्टेटस: रिजल्ट का इंतजार है",
    },
    {
      heading: "Agra Satta Result Time: 5:30 PM",
      description: (
        <>
          Agra का रिजल्ट शाम को घोषित किया जाता है। आज का नंबर देखने के लिए शाम
          5:30 PM के कुछ देर बाद इस पेज को खोलें। यदि आप इससे पहले चेक करते हैं,
          तो चार्ट में आज का सेल खाली हो सकता है। दिन का रिजल्ट अन्य गेम के साथ{" "}
          <Link href="/" className="text-blue-600 underline">
            A7 Satta King
          </Link>{" "}
          की टेबल में भी दिया जाता है।
        </>
      ),
    },
    {
      heading: "Agra और Agra City: दो अलग-अलग गेम",
      description: (
        <>
          <p className="mb-3">
            Agra और{" "}
            <Link href="/agra-city" className="text-blue-600 underline">
              Agra City
            </Link>{" "}
            दो अलग-अलग गेम हैं। दोनों का अपना रिजल्ट, अपना चार्ट और अपना अलग पेज
            है। इनके नाम एक जैसे लगते हैं और रिजल्ट घोषित होने का समय भी काफी
            करीब है। Agra का रिजल्ट 5:30 PM पर और Agra City का रिजल्ट 5:35 PM पर
            घोषित होता है।
          </p>
          <p className="mb-2">
            दोनों के रिजल्ट को आपस में मिलाने से बचने के लिए इन बातों का ध्यान
            रखें:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-3">
            <li>
              <strong>पेज की हेडिंग चेक करें।</strong> यह पेज Agra के लिए है,
              जबकि Agra City के लिए अलग पेज दिया गया है।
            </li>
            <li>
              <strong>रिजल्ट का समय देखें।</strong> 5:30 PM पर आने वाला नंबर
              Agra का होता है और 5:35 PM पर आने वाला नंबर Agra City का होता है।
            </li>
            <li>
              <strong>दोनों चार्ट की तुलना न करें।</strong> ये अलग-अलग रिकॉर्ड
              हैं, इसलिए एक ही तारीख पर दोनों चार्ट में अलग-अलग नंबर हो सकते
              हैं।
            </li>
          </ul>
          <p>
            यदि आप दोनों गेम को फॉलो करते हैं, तो पहले इस पेज पर Agra का रिजल्ट
            चेक करें और इसके पांच मिनट बाद{" "}
            <Link href="/agra-city" className="text-blue-600 underline">
              Agra City
            </Link>{" "}
            पर जाएं।
          </p>
        </>
      ),
    },
    {
      heading: "शाम के रिजल्ट में Agra का स्थान",
      description: (
        <>
          <p className="mb-3">
            Agra से पहले कुछ समय तक कोई रिजल्ट घोषित नहीं होता।{" "}
            <Link href="/shri-ganesh" className="text-blue-600 underline">
              Shri Ganesh
            </Link>{" "}
            का रिजल्ट 4:45 PM पर आता है और इसके 45 मिनट बाद Agra का रिजल्ट घोषित
            होता है। Agra के पांच मिनट बाद Agra City का रिजल्ट आता है और फिर 40
            मिनट बाद यानी 6:10 PM पर{" "}
            <Link href="/faridabad" className="text-blue-600 underline">
              Faridabad
            </Link>{" "}
            का रिजल्ट घोषित होता है।
          </p>
          <p>
            शाम के अगले रिजल्ट का सिलसिला 7:20 PM पर{" "}
            <Link href="/raj-shree" className="text-blue-600 underline">
              Raj Shree
            </Link>{" "}
            के साथ शुरू होता है। इस तरह Agra शाम के शुरुआती रिजल्ट में शामिल है
            और Faridabad के बाद अगले रिजल्ट तक एक घंटे से अधिक का अंतर रहता है।
          </p>
        </>
      ),
    },
    {
      heading: "Agra Chart 2026",
      description:
        "इस चार्ट में साल के प्रत्येक महीने के लिए हर दिन का एक सेल दिया गया है। आज का Agra रिजल्ट देखने के लिए अपनी तारीख वाली रो (Row) और इस महीने का कॉलम (Column) देखें। यदि कोई सेल खाली है या उसमें Waiting लिखा है, तो इसका मतलब है कि उस दिन का रिजल्ट अभी अपडेट नहीं किया गया है।\n\nAgra City का रिजल्ट Agra के ठीक पांच मिनट बाद घोषित होता है। इसलिए यह सुनिश्चित करें कि आप Agra का चार्ट ही देख रहे हैं, न कि Agra City का। पेज के सबसे ऊपर दी गई हेडिंग से इसकी पहचान कर सकते हैं।",
    },
    {
      heading: "पिछले Agra Result कैसे देखें?",
      description:
        "यदि आप किसी पिछली तारीख का रिजल्ट देखना चाहते हैं, तो चार्ट में उस तारीख को खोजें और संबंधित महीने के कॉलम में उसका नंबर देखें। इस साल की बीती हुई तारीखों के रिजल्ट चार्ट में उपलब्ध रहते हैं। इनमें पहले घोषित किए गए नंबरों का रिकॉर्ड दिया जाता है। ये नंबर आने वाले रिजल्ट की भविष्यवाणी नहीं करते हैं।",
    },
    {
      heading: "अन्य Satta Game Results",
      description: (
        <>
          Agra के साथ-साथ A7 Satta King पर यूजर्स{" "}
          <Link href="/agra-city" className="text-blue-600 underline">
            Agra City Satta Result
          </Link>
          ,{" "}
          <Link href="/shri-ganesh" className="text-blue-600 underline">
            Shri Ganesh Satta Result
          </Link>
          ,{" "}
          <Link href="/faridabad" className="text-blue-600 underline">
            Faridabad Satta Result
          </Link>{" "}
          और{" "}
          <Link href="/raj-shree" className="text-blue-600 underline">
            Raj Shree Satta Results
          </Link>{" "}
          भी चेक करते हैं।
        </>
      ),
    },
    {
      heading: "अस्वीकरण",
      description:
        "यह पेज केवल जानकारी और संदर्भ के लिए रिजल्ट और चार्ट दिखाता है। इसका उद्देश्य जुआ या किसी भी गैरकानूनी गतिविधि को बढ़ावा देना नहीं है। यहां किसी भी तरह की सलाह या गारंटी नहीं दी जाती है। कृपया अपने क्षेत्र में लागू कानूनों का पालन करें।",
    },
  ];

  //   const faqItems = [
  //     {
  //       question: "What time is the Agra result declared?",
  //       answer: "At 5:30 PM.",
  //     },
  //     {
  //       question: "Is Agra the same as Agra City?",
  //       answer:
  //         "No. They are separate games with their own results, charts, and pages. Agra is declared at 5:30 PM and Agra City at 5:35 PM.",
  //     },
  //     {
  //       question: "Which is declared first, Agra or Agra City?",
  //       answer: "Agra, five minutes earlier.",
  //     },
  //     {
  //       question: "Where can I see today's Agra result?",
  //       answer:
  //         "In today's cell in the chart on this page. It also appears in the home page table.",
  //     },
  //     {
  //       question: "Does this page give tips or predictions?",
  //       answer: "No. It shows results and charts for reference only.",
  //     },
  //   ];

  const faqItems = [
    {
      question: "Agra Satta Result कितने बजे घोषित होता है?",
      answer: "Agra का रिजल्ट शाम 5:30 PM पर घोषित होता है।",
    },
    {
      question: "क्या Agra और Agra City एक ही गेम हैं?",
      answer:
        "नहीं। ये दोनों अलग-अलग गेम हैं और इनके रिजल्ट, चार्ट और पेज भी अलग हैं। Agra का रिजल्ट 5:30 PM पर और Agra City का रिजल्ट 5:35 PM पर आता है।",
    },
    {
      question: "Agra और Agra City में से पहले किसका रिजल्ट आता है?",
      answer:
        "Agra का रिजल्ट पहले घोषित होता है, जो Agra City से पांच मिनट पहले यानी 5:30 PM पर आता है।",
    },
    {
      question: "आज का Agra रिजल्ट कहां देख सकते हैं?",
      answer:
        "आप इस पेज के चार्ट में आज की तारीख वाले सेल में Agra का रिजल्ट देख सकते हैं। यह रिजल्ट होम पेज की टेबल में भी उपलब्ध होता है।",
    },
    {
      question: "क्या यह पेज टिप्स या भविष्यवाणी देता है?",
      answer:
        "नहीं। यह पेज केवल जानकारी और संदर्भ के लिए रिजल्ट और चार्ट दिखाता है।",
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
