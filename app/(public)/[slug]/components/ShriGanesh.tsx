import FAQSection from "./FAQSection";
import Link from "next/link";
import type { LatestResult } from "@/app/lib/homeData";
import { formatDrawDate } from "./formatDrawDate";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shri Ganesh Satta Result 2026 Today | Chart & Updates",
  description:
    "Check the latest Shri Ganesh Satta Result 2026 with daily updates, full charts, and historical records. Accurate and fast results on A7 Satta King.",
  keywords: [
    "Shri Ganesh Satta Result",
    "Shri Ganesh Result Today",
    "Shri Ganesh Chart 2026",
    "Satta King Shri Ganesh",
    "Shri Ganesh Satta Chart",
    "Satta Result Shri Ganesh",
  ],
  alternates: {
    canonical: `${process.env.SITE_URL}/shri-ganesh`,
  },
  openGraph: {
    title: "Shri Ganesh Satta Result 2026 Today | Chart & Updates",
    description:
      "Check the latest Shri Ganesh Satta Result 2026 with daily updates, full charts, and historical records. Get accurate and fast results on A7 Satta King.",
    url: `${process.env.SITE_URL}/shri-ganesh`,
    siteName: "A7 Satta King",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shri Ganesh Satta Result 2026 Today | Chart & Updates",
    description:
      "Check the latest Shri Ganesh Satta Result 2026 with daily updates, full charts, and historical records. Get accurate and fast results on A7 Satta King.",
  },
};

export default function ShriGanesh({
  latest,
}: {
  latest?: LatestResult | null;
}) {
  //   const infoSections = [
  //     {
  //       heading: "Shri Ganesh Satta Result and Chart 2026",
  //       description:
  //         "Check today's Shri Ganesh result and the 2026 yearly chart in one place. This page also shows where Shri Ganesh falls in the day's timetable, including the results immediately before and after it, so you can quickly find the result you are looking for.\n\nIf you follow more than one game on A7 Satta King, the timing matters as much as the number. The sections below show what is declared just before Shri Ganesh, what follows it, and how to look up a result from an earlier date.",
  //     },
  //     {
  //       heading: "Latest Shri Ganesh Satta Result",
  //       description: latest
  //         ? `Last chart update: ${formatDrawDate(latest.drawDate)}, ${latest.time} IST\nLatest available result: ${latest.result} (${formatDrawDate(latest.drawDate)})\nStatus: ${latest.isToday ? "Updated" : "Waiting for today's result"}`
  //         : "Latest available result: Not available yet\nStatus: Waiting for result",
  //     },
  //     {
  //       heading: "Shri Ganesh Result Time: 4:45 PM",
  //       description:
  //         "Shri Ganesh is a late afternoon result. Open the page a few minutes after 4:45 PM to see today's number. Before that time, today's cell in the chart may still be empty. You can also find the day's result in the home page table, which lists every game together.",
  //     },
  //     {
  //       heading: "Where Shri Ganesh Sits in the Day's Timetable",
  //       description: (
  //         <>
  //           Counting every game on the A7 Satta King timetable, Shri Ganesh is the
  //           14th result of the day. Thirteen games are declared before it,
  //           starting with{" "}
  //           <Link href="/delhi-savera" className="text-blue-600 underline">
  //             Delhi Savera
  //           </Link>{" "}
  //           at 12:40 PM, and fifteen come after it, ending with{" "}
  //           <Link href="/gali" className="text-blue-600 underline">
  //             Gali
  //           </Link>{" "}
  //           at 11:50 PM. That puts Shri Ganesh close to the middle of the day,
  //           about four hours after the first result and seven hours before the
  //           last.
  //         </>
  //       ),
  //     },
  //     {
  //       heading: "The Busy Stretch Before Shri Ganesh",
  //       description: (
  //         <>
  //           <p className="mb-3">
  //             The stretch just before Shri Ganesh is the busiest part of the
  //             timetable.{" "}
  //             <Link href="/delhi-bazar" className="text-blue-600 underline">
  //               Delhi Bazar
  //             </Link>{" "}
  //             is declared at 3:15 PM,{" "}
  //             <Link href="/new-ganga" className="text-blue-600 underline">
  //               New Ganga
  //             </Link>{" "}
  //             at 3:30 PM,{" "}
  //             <Link href="/delhi-matka" className="text-blue-600 underline">
  //               Delhi Matka
  //             </Link>{" "}
  //             at 3:40 PM,{" "}
  //             <Link href="/jaipur-matka" className="text-blue-600 underline">
  //               Jaipur Matka
  //             </Link>{" "}
  //             at 3:45 PM and{" "}
  //             <Link href="/shri-lakshmi" className="text-blue-600 underline">
  //               Shri Lakshmi
  //             </Link>{" "}
  //             at 3:50 PM. Five results fall inside 35 minutes.
  //           </p>
  //           <p>
  //             After that, the schedule goes quiet for 55 minutes, until Shri
  //             Ganesh arrives at 4:45 PM.
  //           </p>
  //         </>
  //       ),
  //     },
  //     {
  //       heading: "The Quiet Stretch Around 4:45 PM",
  //       description:
  //         "Shri Ganesh is the only result declared between 3:50 PM and 5:30 PM. If you have been working through the afternoon games one by one, this is the pause in the middle, and Shri Ganesh is what ends it. The next result, Agra, comes 45 minutes later.",
  //     },
  //     {
  //       heading: "What Follows Shri Ganesh",
  //       description: (
  //         <>
  //           <Link href="/agra" className="text-blue-600 underline">
  //             Agra
  //           </Link>{" "}
  //           is declared at 5:30 PM, followed by{" "}
  //           <Link href="/agra-city" className="text-blue-600 underline">
  //             Agra City
  //           </Link>{" "}
  //           at 5:35 PM and{" "}
  //           <Link href="/faridabad" className="text-blue-600 underline">
  //             Faridabad
  //           </Link>{" "}
  //           at 6:10 PM. After that, there is a gap until 7:20 PM, when the evening
  //           block begins:{" "}
  //           <Link href="/raj-shree" className="text-blue-600 underline">
  //             Raj Shree
  //           </Link>{" "}
  //           at 7:20 PM,{" "}
  //           <Link href="/udaipur-city" className="text-blue-600 underline">
  //             Udaipur City
  //           </Link>{" "}
  //           at 7:30 PM,{" "}
  //           <Link href="/alwar" className="text-blue-600 underline">
  //             Alwar
  //           </Link>{" "}
  //           at 7:35 PM, and{" "}
  //           <Link href="/ajmer" className="text-blue-600 underline">
  //             Ajmer
  //           </Link>{" "}
  //           at 7:40 PM.
  //         </>
  //       ),
  //     },
  //     {
  //       heading: "Shri Ganesh Chart 2026",
  //       description:
  //         "Think of the chart as a calendar of results. Each row is a day of the month, each column is a month, and each filled cell holds the number declared for that day. Once the 4:45 PM result is added, today's cell is filled and the ones after it are still open.\n\nA cell that still shows the wait icon has no result yet. That makes it a quick way to see how far the year has come.",
  //     },
  //     {
  //       heading: "Finding an Earlier Shri Ganesh Result",
  //       description:
  //         "To check a past day, go to its date in the left column, then move across to the month you want. Every day that has already passed this year stays in the chart, so you can go back through the year without leaving the page. The numbers are a record of what was declared and do not show what comes next.",
  //     },
  //     {
  //       heading: "More Satta Game Results",
  //       description: (
  //         <>
  //           Along with Shri Ganesh, users on A7 Satta King also check{" "}
  //           <Link href="/shri-lakshmi" className="text-blue-600 underline">
  //             Shri Lakshmi Satta Result
  //           </Link>
  //           ,{" "}
  //           <Link href="/agra" className="text-blue-600 underline">
  //             Agra Satta Result
  //           </Link>
  //           ,{" "}
  //           <Link href="/delhi-matka" className="text-blue-600 underline">
  //             Delhi Matka Satta Results
  //           </Link>
  //           , and{" "}
  //           <Link href="/faridabad" className="text-blue-600 underline">
  //             Faridabad Satta Result
  //           </Link>
  //           .
  //         </>
  //       ),
  //     },
  //     {
  //       heading: "Disclaimer",
  //       description:
  //         "This page shows results and charts for information only. We do not promote or support gambling or any illegal activity. Please follow the laws that apply in your area.",
  //     },
  //   ];

  const infoSections = [
    {
      heading: "Shri Ganesh Satta Result और 2026 का वार्षिक चार्ट",
      description:
        "आज का Shri Ganesh Satta Result और 2026 का वार्षिक चार्ट एक ही जगह देखें। इस पेज पर आपको दिन के टाइमटेबल में Shri Ganesh का स्थान भी बताया गया है, जिसमें इससे ठीक पहले और बाद में आने वाले रिजल्ट शामिल हैं। इससे आप आसानी से अपनी जरूरत का रिजल्ट खोज सकते हैं।\n\nअगर आप A7 Satta King पर एक से ज्यादा गेम के रिजल्ट देखते हैं, तो नंबर के साथ उनका समय जानना भी जरूरी है। नीचे दिए गए सेक्शन में बताया गया है कि Shri Ganesh से पहले कौन-सा रिजल्ट आता है, इसके बाद कौन-सा रिजल्ट घोषित होता है और पिछली तारीख का रिजल्ट कैसे देख सकते हैं।",
    },
    {
      heading: "Latest Shri Ganesh Satta Result",
      description: latest
        ? `आखिरी चार्ट अपडेट: ${formatDrawDate(latest.drawDate)}, ${latest.time} IST\nनवीनतम उपलब्ध रिजल्ट: ${latest.result} (${formatDrawDate(latest.drawDate)})\nस्टेटस: ${latest.isToday ? "अपडेटेड" : "आज के रिजल्ट का इंतजार है"}`
        : "नवीनतम उपलब्ध रिजल्ट: अभी उपलब्ध नहीं है\nस्टेटस: रिजल्ट का इंतजार है",
    },
    {
      heading: "Shri Ganesh Result Time: 4:45 PM",
      description: (
        <>
          Shri Ganesh का रिजल्ट दोपहर के बाद यानी शाम 4:45 PM पर घोषित किया जाता
          है। आज का नंबर देखने के लिए 4:45 PM के कुछ मिनट बाद इस पेज को खोलें।
          इससे पहले चार्ट में आज की तारीख वाला बॉक्स खाली दिखाई दे सकता है। आप
          आज का रिजल्ट{" "}
          <Link href="/" className="text-blue-600 underline">
            होम पेज
          </Link>{" "}
          की टेबल में भी देख सकते हैं, जहां सभी गेम के रिजल्ट एक साथ दिए जाते
          हैं।
        </>
      ),
    },
    {
      heading: "दिन के टाइमटेबल में Shri Ganesh का स्थान",
      description: (
        <>
          A7 Satta King के पूरे टाइमटेबल के अनुसार, Shri Ganesh दिन का 14वां
          रिजल्ट है। इससे पहले 13 गेम के रिजल्ट घोषित होते हैं, जिनकी शुरुआत
          दोपहर 12:40 PM पर{" "}
          <Link href="/delhi-savera" className="text-blue-600 underline">
            Delhi Savera
          </Link>{" "}
          से होती है। इसके बाद 15 गेम के रिजल्ट आते हैं और आखिरी रिजल्ट रात
          11:50 PM पर{" "}
          <Link href="/gali" className="text-blue-600 underline">
            Gali
          </Link>{" "}
          का होता है। इस तरह Shri Ganesh दिन के लगभग बीच में आता है। यह दिन के
          पहले रिजल्ट के करीब चार घंटे बाद और आखिरी रिजल्ट से लगभग सात घंटे पहले
          घोषित होता है।
        </>
      ),
    },
    {
      heading: "Shri Ganesh से पहले आने वाले रिजल्ट",
      description: (
        <>
          <p className="mb-3">
            Shri Ganesh से ठीक पहले का समय पूरे टाइमटेबल का सबसे व्यस्त हिस्सा
            है।{" "}
            <Link href="/delhi-bazar" className="text-blue-600 underline">
              Delhi Bazar
            </Link>{" "}
            का रिजल्ट 3:15 PM पर,{" "}
            <Link href="/new-ganga" className="text-blue-600 underline">
              New Ganga
            </Link>{" "}
            का 3:30 PM पर,{" "}
            <Link href="/delhi-matka" className="text-blue-600 underline">
              Delhi Matka
            </Link>{" "}
            का 3:40 PM पर,{" "}
            <Link href="/jaipur-matka" className="text-blue-600 underline">
              Jaipur Matka
            </Link>{" "}
            का 3:45 PM पर और{" "}
            <Link href="/shri-lakshmi" className="text-blue-600 underline">
              Shri Lakshmi
            </Link>{" "}
            का रिजल्ट 3:50 PM पर घोषित होता है। इस तरह केवल 35 मिनट के अंदर पांच
            गेम के रिजल्ट आते हैं।
          </p>
          <p>
            इसके बाद टाइमटेबल में 55 मिनट का अंतराल होता है और फिर शाम 4:45 PM
            पर Shri Ganesh का रिजल्ट घोषित किया जाता है।
          </p>
        </>
      ),
    },
    {
      heading: "शाम 4:45 PM के आसपास का शांत समय",
      description:
        "3:50 PM से 5:30 PM के बीच Shri Ganesh ही एकमात्र रिजल्ट है। अगर आप दोपहर के सभी गेम के रिजल्ट एक-एक करके देखते हैं, तो इस समय टाइमटेबल में थोड़ा अंतराल मिलता है और Shri Ganesh का रिजल्ट इस अंतराल को समाप्त करता है। इसके 45 मिनट बाद अगला रिजल्ट Agra का 5:30 PM पर घोषित होता है।",
    },
    {
      heading: "Shri Ganesh के बाद कौन-सा रिजल्ट आता है?",
      description: (
        <>
          Shri Ganesh के बाद सबसे पहले{" "}
          <Link href="/agra" className="text-blue-600 underline">
            Agra
          </Link>{" "}
          का रिजल्ट 5:30 PM पर आता है। इसके बाद{" "}
          <Link href="/agra-city" className="text-blue-600 underline">
            Agra City
          </Link>{" "}
          का रिजल्ट 5:35 PM पर और{" "}
          <Link href="/faridabad" className="text-blue-600 underline">
            Faridabad
          </Link>{" "}
          का रिजल्ट 6:10 PM पर घोषित होता है। इसके बाद शाम 7:20 PM तक का अंतराल
          रहता है। फिर शाम के गेम शुरू होते हैं, जिनमें{" "}
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
          का रिजल्ट 7:40 PM पर घोषित होता है।
        </>
      ),
    },
    {
      heading: "Shri Ganesh Chart 2026",
      description:
        "इस चार्ट को रिजल्ट के कैलेंडर की तरह समझ सकते हैं। इसमें हर पंक्ति में महीने की तारीखें और हर कॉलम में साल के महीने दिए गए हैं। जिन तारीखों के रिजल्ट घोषित हो चुके हैं, उनके सामने संबंधित नंबर दिखाई देता है।\n\nजैसे ही शाम 4:45 PM पर आज का रिजल्ट घोषित होता है, चार्ट में आज की तारीख वाला बॉक्स भर दिया जाता है। इसके बाद आने वाली तारीखों के बॉक्स खाली रहते हैं। जिस बॉक्स में वेट आइकन दिखाई देता है, उसका मतलब है कि उस तारीख का रिजल्ट अभी उपलब्ध नहीं है। इस तरह आप आसानी से देख सकते हैं कि साल के कितने दिनों के रिजल्ट चार्ट में जोड़े जा चुके हैं।",
    },
    {
      heading: "पुराने Shri Ganesh रिजल्ट कैसे देखें?",
      description:
        "किसी पिछली तारीख का रिजल्ट देखने के लिए चार्ट के बाईं ओर दी गई तारीख खोजें। इसके बाद उस तारीख से अपनी पसंद के महीने वाले कॉलम तक जाएं। इस साल की जितनी भी तारीखों के रिजल्ट घोषित हो चुके हैं, वे सभी चार्ट में उपलब्ध रहते हैं।\n\nइससे आपको पुराना रिजल्ट देखने के लिए किसी दूसरे पेज पर जाने की जरूरत नहीं पड़ती। चार्ट में दिए गए नंबर केवल पहले घोषित किए गए रिजल्ट का रिकॉर्ड हैं और इनसे भविष्य के रिजल्ट का पता नहीं चलता।",
    },
    {
      heading: "अन्य Satta Game के रिजल्ट",
      description: (
        <>
          Shri Ganesh के साथ A7 Satta King पर यूजर्स दूसरे गेम के रिजल्ट भी
          देखते हैं। इनमें{" "}
          <Link href="/shri-lakshmi" className="text-blue-600 underline">
            Shri Lakshmi Satta Result
          </Link>
          ,{" "}
          <Link href="/agra" className="text-blue-600 underline">
            Agra Satta Result
          </Link>
          ,{" "}
          <Link href="/delhi-matka" className="text-blue-600 underline">
            Delhi Matka Satta Results
          </Link>{" "}
          और{" "}
          <Link href="/faridabad" className="text-blue-600 underline">
            Faridabad Satta Result
          </Link>{" "}
          शामिल हैं।
        </>
      ),
    },
    {
      heading: "चेतावनी",
      description:
        "यह पेज केवल जानकारी के उद्देश्य से रिजल्ट और चार्ट दिखाता है। हम जुआ या किसी भी गैरकानूनी गतिविधि को बढ़ावा या समर्थन नहीं देते हैं। कृपया अपने क्षेत्र में लागू कानूनों और नियमों का पालन करें।",
    },
  ];

  //   const faqItems = [
  //     {
  //       question: "What time is the Shri Ganesh result declared?",
  //       answer: "At 4:45 PM.",
  //     },
  //     {
  //       question: "Which result comes right before Shri Ganesh?",
  //       answer: "Shri Lakshmi, at 3:50 PM.",
  //     },
  //     {
  //       question: "Which result comes right after Shri Ganesh?",
  //       answer: "Agra, at 5:30 PM, 45 minutes later.",
  //     },
  //     {
  //       question: "Are any other games declared between 3:50 PM and 5:30 PM?",
  //       answer:
  //         "No. On the A7 Satta King timetable, Shri Ganesh is the only one in that window.",
  //     },
  //     {
  //       question: "How many games are declared before Shri Ganesh?",
  //       answer: "Thirteen, starting with Delhi Savera at 12:40 PM.",
  //     },
  //     {
  //       question: "Where can I check today's Shri Ganesh result?",
  //       answer:
  //         "On this page, in today's cell in the chart, or in the home page table.",
  //     },
  //     {
  //       question: "How do I find an older Shri Ganesh result?",
  //       answer:
  //         "Go to the date in the left column of the chart, then across to the month.",
  //     },
  //     {
  //       question: "Does this page give tips or predictions?",
  //       answer: "No. It shows results and charts for reference only.",
  //     },
  //   ];

  const faqItems = [
    {
      question: "Shri Ganesh का रिजल्ट कितने बजे घोषित होता है?",
      answer: "Shri Ganesh का रिजल्ट शाम 4:45 PM पर घोषित किया जाता है।",
    },
    {
      question: "Shri Ganesh से ठीक पहले कौन-सा रिजल्ट आता है?",
      answer:
        "Shri Ganesh से ठीक पहले Shri Lakshmi का रिजल्ट 3:50 PM पर आता है।",
    },
    {
      question: "Shri Ganesh के तुरंत बाद कौन-सा रिजल्ट आता है?",
      answer:
        "Shri Ganesh के 45 मिनट बाद शाम 5:30 PM पर Agra का रिजल्ट घोषित होता है।",
    },
    {
      question: "क्या 3:50 PM से 5:30 PM के बीच कोई दूसरा गेम आता है?",
      answer:
        "नहीं, A7 Satta King के टाइमटेबल के अनुसार इस समय के बीच Shri Ganesh ही एकमात्र रिजल्ट है।",
    },
    {
      question: "Shri Ganesh से पहले कितने गेम के रिजल्ट घोषित होते हैं?",
      answer:
        "Shri Ganesh से पहले कुल 13 गेम के रिजल्ट आते हैं। इनमें सबसे पहला Delhi Savera है, जिसका रिजल्ट 12:40 PM पर घोषित होता है।",
    },
    {
      question: "आज का Shri Ganesh रिजल्ट कहां देख सकते हैं?",
      answer:
        "आप आज का Shri Ganesh रिजल्ट इसी पेज के चार्ट में आज की तारीख वाले बॉक्स में या वेबसाइट के होम पेज की रिजल्ट टेबल में देख सकते हैं।",
    },
    {
      question: "पुराना Shri Ganesh रिजल्ट कैसे चेक करें?",
      answer:
        "पुराना रिजल्ट देखने के लिए चार्ट के बाईं ओर अपनी पसंद की तारीख खोजें और फिर उस तारीख से संबंधित महीने के कॉलम में जाएं।",
    },
    {
      question: "क्या इस पेज पर कोई टिप्स या भविष्यवाणी दी जाती है?",
      answer:
        "नहीं, यह पेज केवल पहले घोषित किए गए रिजल्ट और पुराने चार्ट की जानकारी देता है। इसमें किसी भी तरह की टिप्स या भविष्यवाणी नहीं दी जाती है।",
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
