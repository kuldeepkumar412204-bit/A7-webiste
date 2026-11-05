import FAQSection from "./FAQSection";
import Link from "next/link";
import type { LatestResult } from "@/app/lib/homeData";
import { formatDrawDate } from "./formatDrawDate";
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

export default function Faridabad({
  latest,
}: {
  latest?: LatestResult | null;
}) {
  // const infoSections = [
  //     {
  //         heading: "Faridabad Satta Result Today and 2026 Chart",
  //         description:
  //             "This page carries today's Faridabad number and the 2026 chart, and it shows where Faridabad sits in the evening timetable, so you know what comes before it and how long you wait for the next result.",
  //     },
  //     {
  //         heading: "Latest Faridabad Satta Result",
  //         description: latest
  //             ? `Last chart update: ${formatDrawDate(latest.drawDate)}, ${latest.time} IST\nLatest available result: ${latest.result} (${formatDrawDate(latest.drawDate)})\nStatus: ${latest.isToday ? "Updated" : "Waiting for today's result"}`
  //             : "Latest available result: Not available yet\nStatus: Waiting for result",
  //     },
  //     {
  //         heading: "Faridabad Satta Result Time: 6:10 PM",
  //         description: (
  //             <>
  //                 Faridabad is an early evening result. Open the page a few minutes after 6:10 PM to see today's number. If you check earlier, today's cell in the chart may still be empty. You can also find the day's result in the <Link href="/" className="text-blue-600 underline">home page</Link> table, which lists every game together.
  //             </>
  //         ),
  //     },
  //     {
  //         heading: "The Last Result Before the Break",
  //         description: (
  //             <>
  //                 Faridabad is the last result of the early evening. After 6:10 PM, nothing is declared for 70 minutes, until <Link href="/raj-shree" className="text-blue-600 underline">Raj Shree</Link> arrives at 7:20 PM. That makes Faridabad the point where the early evening block ends and the wait for the later evening block begins.
  //             </>
  //         ),
  //     },
  //     {
  //         heading: "What Comes Before Faridabad",
  //         description: (
  //             <>
  //                 Faridabad follows a short run of results. <Link href="/shri-ganesh" className="text-blue-600 underline">Shri Ganesh</Link> is declared at 4:45 PM, <Link href="/agra" className="text-blue-600 underline">Agra</Link> at 5:30 PM, and <Link href="/agra-city" className="text-blue-600 underline">Agra City</Link> at 5:35 PM. Faridabad comes 35 minutes after Agra City and 85 minutes after Shri Ganesh.
  //             </>
  //         ),
  //     },
  //     {
  //         heading: "What Comes After Faridabad",
  //         description: (
  //             <>
  //                 The evening block starts at 7:20 PM and moves quickly: <Link href="/raj-shree" className="text-blue-600 underline">Raj Shree</Link> at 7:20 PM, <Link href="/udaipur-city" className="text-blue-600 underline">Udaipur City</Link> at 7:30 PM, <Link href="/alwar" className="text-blue-600 underline">Alwar</Link> at 7:35 PM, and <Link href="/ajmer" className="text-blue-600 underline">Ajmer</Link> at 7:40 PM. Then come <Link href="/mandi-bazar" className="text-blue-600 underline">Mandi Bazar</Link> at 8:10 PM and <Link href="/sialkot" className="text-blue-600 underline">Sialkot</Link> at 8:20 PM.
  //             </>
  //         ),
  //     },
  //     {
  //         heading: "The Evening in Order",
  //         description: (
  //             <>
  //                 <p className="mb-2">Here is the run of results around Faridabad, in the order they are declared:</p>
  //                 <ul className="list-disc list-inside space-y-1">
  //                     <li>Shri Ganesh, 4:45 PM</li>
  //                     <li>Agra, 5:30 PM</li>
  //                     <li>Agra City, 5:35 PM</li>
  //                     <li><strong>Faridabad, 6:10 PM</strong></li>
  //                     <li>Raj Shree, 7:20 PM</li>
  //                     <li>Udaipur City, 7:30 PM</li>
  //                     <li>Alwar, 7:35 PM</li>
  //                     <li>Ajmer, 7:40 PM</li>
  //                 </ul>
  //             </>
  //         ),
  //     },
  //     {
  //         heading: "Faridabad Chart 2026",
  //         description:
  //             "The chart has one row per day and one column per month, so each day's result sits in a single cell. To find today's Faridabad satta result number, locate today's date in the left column and read across to this month. A cell that still shows the wait icon has no result yet, which is normal before 6:10 PM.",
  //     },
  //     {
  //         heading: "Finding an Earlier Faridabad Satta Result",
  //         description:
  //             "For a past date, go to that date in the left column and move across to the month you want. Every day that has passed this year remains in the chart, so you can look back through the year on this page. The numbers record what was declared and do not show what the next result will be.",
  //     },
  //     {
  //         heading: "More Satta Game Results",
  //         description: (
  //             <>
  //                 Along with Faridabad, users on A7 Satta King also check <Link href="/agra-city" className="text-blue-600 underline">Agra City Satta Result</Link>, <Link href="/agra" className="text-blue-600 underline">Agra Satta Result</Link>, <Link href="/raj-shree" className="text-blue-600 underline">Raj Shree Satta Results</Link>, and <Link href="/alwar" className="text-blue-600 underline">Alwar Satta Result</Link>.
  //             </>
  //         ),
  //     },
  //     {
  //         heading: "Disclaimer",
  //         description:
  //             "This page shows results and charts for information only. We do not promote or support gambling or any illegal activity. Please follow the laws that apply where you live.",
  //     },
  // ];

  const infoSections = [
    {
      heading: "Faridabad Satta Result Today और 2026 Chart",
      description:
        "इस पेज पर आप आज का Faridabad नंबर और 2026 का चार्ट देख सकते हैं। साथ ही, यहां शाम के रिजल्ट का पूरा टाइमटेबल भी दिया गया है, जिससे आपको पता चलता है कि Faridabad से पहले कौन-सा रिजल्ट आता है और इसके बाद अगले रिजल्ट के लिए कितना इंतजार करना पड़ता है।",
    },
    {
      heading: "Latest Faridabad Satta Result",
      description: latest
        ? `चार्ट का अंतिम अपडेट: ${formatDrawDate(latest.drawDate)}, ${latest.time} IST\nनवीनतम उपलब्ध रिजल्ट: ${latest.result} (${formatDrawDate(latest.drawDate)})\nस्टेटस: ${latest.isToday ? "अपडेटेड" : "आज के रिजल्ट का इंतजार है"}`
        : "नवीनतम उपलब्ध रिजल्ट: अभी उपलब्ध नहीं है\nस्टेटस: रिजल्ट का इंतजार है",
    },
    {
      heading: "Faridabad Satta Result Time: 6:10 PM",
      description: (
        <>
          Faridabad का रिजल्ट शाम के शुरुआती समय में घोषित किया जाता है। आज का
          नंबर देखने के लिए शाम 6:10 PM के कुछ मिनट बाद इस पेज को खोलें। यदि आप
          इससे पहले चेक करते हैं, तो चार्ट में आज का रिजल्ट खाली दिखाई दे सकता
          है। आप दिन के सभी गेम के रिजल्ट एक साथ देखने के लिए{" "}
          <Link href="/" className="text-blue-600 underline">
            A7 Satta King
          </Link>{" "}
          पर दी गई टेबल भी देख सकते हैं।
        </>
      ),
    },
    {
      heading: "अगले रिजल्ट से पहले आखिरी रिजल्ट",
      description: (
        <>
          Faridabad शाम के शुरुआती रिजल्ट का आखिरी गेम है। शाम 6:10 PM के बाद
          अगले 70 मिनट तक कोई रिजल्ट घोषित नहीं होता। इसके बाद शाम 7:20 PM पर{" "}
          <Link href="/raj-shree" className="text-blue-600 underline">
            Raj Shree
          </Link>{" "}
          का रिजल्ट आता है। इस तरह Faridabad के साथ शाम का शुरुआती रिजल्ट सेशन
          समाप्त होता है और देर शाम के रिजल्ट का इंतजार शुरू हो जाता है।
        </>
      ),
    },
    {
      heading: "Faridabad से पहले कौन-से रिजल्ट आते हैं?",
      description: (
        <>
          Faridabad से पहले कुछ रिजल्ट लगातार घोषित होते हैं।{" "}
          <Link href="/shri-ganesh" className="text-blue-600 underline">
            Shri Ganesh
          </Link>{" "}
          का रिजल्ट शाम 4:45 PM पर,{" "}
          <Link href="/agra" className="text-blue-600 underline">
            Agra
          </Link>{" "}
          का शाम 5:30 PM पर और{" "}
          <Link href="/agra-city" className="text-blue-600 underline">
            Agra City
          </Link>{" "}
          का शाम 5:35 PM पर आता है। Faridabad का रिजल्ट Agra City के 35 मिनट बाद
          और Shri Ganesh के 85 मिनट बाद घोषित होता है।
        </>
      ),
    },
    {
      heading: "Faridabad के बाद कौन-से रिजल्ट आते हैं?",
      description: (
        <>
          शाम का अगला रिजल्ट सेशन 7:20 PM पर शुरू होता है। इसके बाद लगातार कई
          गेम के रिजल्ट घोषित किए जाते हैं।{" "}
          <Link href="/raj-shree" className="text-blue-600 underline">
            Raj Shree
          </Link>{" "}
          का रिजल्ट 7:20 PM पर,{" "}
          <Link href="/udaipur-city" className="text-blue-600 underline">
            Udaipur City
          </Link>{" "}
          का 7:30 PM पर,{" "}
          <Link href="/alwar" className="text-blue-600 underline">
            Alwar
          </Link>{" "}
          का 7:35 PM पर और{" "}
          <Link href="/ajmer" className="text-blue-600 underline">
            Ajmer
          </Link>{" "}
          का 7:40 PM पर आता है। इसके बाद{" "}
          <Link href="/mandi-bazar" className="text-blue-600 underline">
            Mandi Bazar
          </Link>{" "}
          का रिजल्ट 8:10 PM और{" "}
          <Link href="/sialkot" className="text-blue-600 underline">
            Sialkot
          </Link>{" "}
          का रिजल्ट 8:20 PM पर घोषित होता है।
        </>
      ),
    },
    {
      heading: "शाम के सभी रिजल्ट का टाइमटेबल",
      description: (
        <>
          <p className="mb-2">
            यहां Faridabad के आसपास आने वाले सभी रिजल्ट उनके घोषित होने के समय
            के अनुसार दिए गए हैं:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Shri Ganesh, 4:45 PM</li>
            <li>Agra, 5:30 PM</li>
            <li>Agra City, 5:35 PM</li>
            <li>
              <strong>Faridabad, 6:10 PM</strong>
            </li>
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
        "इस चार्ट में हर दिन के लिए एक अलग रो और हर महीने के लिए एक अलग कॉलम दिया गया है। इससे प्रत्येक दिन का रिजल्ट एक ही सेल में देखा जा सकता है। आज का Faridabad Satta Result Number देखने के लिए बाईं ओर दिए गए कॉलम में आज की तारीख खोजें और फिर संबंधित महीने के कॉलम में रिजल्ट देखें। जिस सेल में अभी वेट आइकन दिखाई देता है, उसका मतलब है कि रिजल्ट अभी घोषित नहीं हुआ है। शाम 6:10 PM से पहले ऐसा होना सामान्य है।",
    },
    {
      heading: "पुराना Faridabad Satta Result कैसे देखें?",
      description:
        "किसी पिछली तारीख का रिजल्ट देखने के लिए चार्ट के बाईं ओर उस तारीख को खोजें और फिर जिस महीने का रिजल्ट देखना चाहते हैं, उसके कॉलम में जाएं। इस साल के सभी बीते दिनों के रिजल्ट इसी चार्ट में उपलब्ध रहते हैं। यहां दिए गए नंबर केवल पहले घोषित किए गए रिजल्ट का रिकॉर्ड हैं। इनसे आने वाले किसी रिजल्ट का अनुमान नहीं लगाया जा सकता।",
    },
    {
      heading: "अन्य Satta Game Results",
      description: (
        <>
          Faridabad के अलावा A7 Satta King पर यूजर्स{" "}
          <Link href="/agra-city" className="text-blue-600 underline">
            Agra City Satta Result
          </Link>
          ,{" "}
          <Link href="/agra" className="text-blue-600 underline">
            Agra Satta Result
          </Link>
          ,{" "}
          <Link href="/raj-shree" className="text-blue-600 underline">
            Raj Shree Satta Results
          </Link>{" "}
          और{" "}
          <Link href="/alwar" className="text-blue-600 underline">
            Alwar Satta Result
          </Link>{" "}
          भी चेक करते हैं।
        </>
      ),
    },
    {
      heading: "चेतावनी",
      description:
        "यह पेज केवल जानकारी के उद्देश्य से रिजल्ट और चार्ट दिखाता है। हम जुए या किसी भी गैरकानूनी गतिविधि को बढ़ावा या समर्थन नहीं देते हैं। कृपया अपने क्षेत्र में लागू कानूनों और नियमों का पालन करें।",
    },
  ];

  // const faqItems = [
  //     {
  //         question: "What time is the Faridabad satta result declared?",
  //         answer: "At 6:10 PM.",
  //     },
  //     {
  //         question: "Which games are declared just before and after Faridabad?",
  //         answer:
  //             "Agra City is declared at 5:35 PM before it, and Raj Shree at 7:20 PM after it.",
  //     },
  //     {
  //         question: "How long is the wait for the next result after Faridabad?",
  //         answer: "70 minutes, until Raj Shree at 7:20 PM.",
  //     },
  //     {
  //         question: "Where can I see today's Faridabad result?",
  //         answer:
  //             "In today's cell in the chart on this page. It also appears in the home page table.",
  //     },
  //     {
  //         question: "Does this page give tips or predictions?",
  //         answer: "No. It shows results and charts for reference only.",
  //     },
  // ];

  const faqItems = [
    {
      question: "Faridabad सट्टा रिजल्ट किस समय घोषित होता है?",
      answer: "Faridabad का रिजल्ट शाम 6:10 PM पर घोषित होता है।",
    },
    {
      question:
        "Faridabad से ठीक पहले और बाद में कौन-से गेम के रिजल्ट आते हैं?",
      answer:
        "Faridabad से पहले Agra City का रिजल्ट 5:35 PM पर और इसके बाद Raj Shree का रिजल्ट 7:20 PM पर आता है।",
    },
    {
      question:
        "Faridabad के बाद अगले रिजल्ट के लिए कितना इंतजार करना पड़ता है?",
      answer:
        "Faridabad के बाद अगले रिजल्ट Raj Shree के लिए 70 मिनट इंतजार करना पड़ता है। इसका रिजल्ट शाम 7:20 PM पर आता है।",
    },
    {
      question: "आज का Faridabad Result कहां देख सकते हैं?",
      answer:
        "आज का Faridabad Result इस पेज के चार्ट में आज की तारीख वाले सेल में देख सकते हैं। यह होम पेज की रिजल्ट टेबल पर भी उपलब्ध होता है।",
    },
    {
      question: "क्या इस पेज पर टिप्स या भविष्यवाणियां दी जाती हैं?",
      answer:
        "नहीं, यह पेज केवल पहले से घोषित रिजल्ट और चार्ट की जानकारी देता है। इसमें कोई टिप्स या भविष्यवाणियां नहीं दी जाती हैं।",
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
