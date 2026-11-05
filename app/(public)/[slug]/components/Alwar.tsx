import { NextPage } from "next";
import FAQSection from "./FAQSection";
import Link from "next/link";
import type { LatestResult } from "@/app/lib/homeData";
import { formatDrawDate } from "./formatDrawDate";
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
  latest?: LatestResult | null;
}

const Alwar: NextPage<Props> = ({ latest }) => {
  // const infoSections = [
  //     {
  //         heading: "Alwar Satta Result Today and 2026 Chart",
  //         description:
  //             "This page carries today's Alwar number and the 2026 chart. Alwar falls in the busiest part of the evening timetable, so this page also shows the three other results declared in the same 20 minutes, in case you're checking more than one.",
  //     },
  //     {
  //         heading: "New Alwar Satta Result",
  //         description: latest
  //             ? `Last chart update: ${formatDrawDate(latest.drawDate)}, ${latest.time} IST\nLatest available result: ${latest.result} (${formatDrawDate(latest.drawDate)})\nStatus: ${latest.isToday ? "Updated" : "Waiting for today's result"}`
  //             : "Latest available result: Not available yet\nStatus: Waiting for result",
  //     },
  //     {
  //         heading: "Alwar Satta Result Time: 7:35 PM",
  //         description: (
  //             <>
  //                 Alwar is an evening result. Open the page a few minutes after 7:35 PM to see today's number. If you check earlier, today's cell in the chart may still be empty. The day's result is also listed in the home page table alongside the other games.
  //             </>
  //         ),
  //     },
  //     {
  //         heading: "Four Results in 20 Minutes",
  //         description: (
  //             <>
  //                 <p className="mb-2">Between 7:20 PM and 7:40 PM, four results are declared one after another:</p>
  //                 <ul className="list-disc list-inside space-y-1 mb-3">
  //                     <li><Link href="/raj-shree" className="text-blue-600 underline">Raj Shree</Link>, 7:20 PM</li>
  //                     <li><Link href="/udaipur-city" className="text-blue-600 underline">Udaipur City</Link>, 7:30 PM</li>
  //                     <li><strong>Alwar, 7:35 PM</strong></li>
  //                     <li><Link href="/ajmer" className="text-blue-600 underline">Ajmer</Link>, 7:40 PM</li>
  //                 </ul>
  //                 <p>This is the closest run of results on the <Link href="/" className="text-blue-600 underline">A7 Satta King</Link> timetable. If you follow several of these games, it's worth checking each page in this order rather than all at once, since Alwar's number isn't out until 5 minutes after Udaipur City's.</p>
  //             </>
  //         ),
  //     },
  //     {
  //         heading: "Checking All Four in Order",
  //         description:
  //             "The practical order is: Raj Shree first at 7:20 PM, then Udaipur City at 7:30 PM, then this page for Alwar at 7:35 PM, then Ajmer at 7:40 PM. Because the gaps are 10, 5, and 5 minutes, refreshing a page too early will still show yesterday's number, not today's.",
  //     },
  //     {
  //         heading: "Before and After This Cluster",
  //         description: (
  //             <>
  //                 Before 7:20 PM, the last result is <Link href="/faridabad" className="text-blue-600 underline">Faridabad</Link> at 6:10 PM, over an hour earlier. After the cluster ends at 7:40 PM, there's a short gap until <Link href="/mandi-bazar" className="text-blue-600 underline">Mandi Bazar</Link> at 8:10 PM, followed by <Link href="/sialkot" className="text-blue-600 underline">Sialkot</Link> at 8:20 PM.
  //             </>
  //         ),
  //     },
  //     {
  //         heading: "Alwar Chart 2026",
  //         description:
  //             "The chart has one cell for each day of each month. To find today's Alwar satta result, locate today's date in the left column and read across to this month's column. A cell that still shows the wait icon has no result yet, which is normal before 7:35 PM.\n\nBecause Udaipur City and Ajmer are declared so close to Alwar, check the page heading before reading a chart, so you know which game's cell you're looking at.",
  //     },
  //     {
  //         heading: "September 2026 Snapshot",
  //         description:
  //             "September has been the most active month for Alwar so far this year, with results recorded for nearly every day from the 1st to the 24th. The number has ranged from 22 to 98 over that stretch, and no two days have shown the same result.",
  //     },
  //     {
  //         heading: "Finding an Earlier Alwar Result",
  //         description:
  //             "For a past date, go to that date in the left column and move across to the month you want. Every day that has already passed this year stays in the chart, so you can look back through the year on this page. The numbers record what was declared and do not show what the next result will be.",
  //     },
  //     {
  //         heading: "More Satta Game Results",
  //         description: (
  //             <>
  //                 Along with Alwar, users on A7 Satta King also check <Link href="/raj-shree" className="text-blue-600 underline">Raj Shree Satta Results</Link>, <Link href="/udaipur-city" className="text-blue-600 underline">Udaipur City Satta Results</Link>, <Link href="/ajmer" className="text-blue-600 underline">Ajmer Satta Result</Link>, and <Link href="/sialkot" className="text-blue-600 underline">Sialkot Satta Results</Link>.
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
      heading: "Alwar Satta Result Today और 2026 Chart",
      description:
        "इस पेज पर आज का Alwar नंबर और 2026 का चार्ट दिया गया है। Alwar शाम के सबसे व्यस्त रिजल्ट टाइमटेबल में आता है। इसलिए इस पेज पर उन तीन अन्य रिजल्ट की जानकारी भी दी गई है, जो इसी 20 मिनट के दौरान घोषित होते हैं। इससे आपको एक से अधिक गेम के रिजल्ट चेक करने में आसानी होगी।",
    },
    {
      heading: "New Alwar Satta Result",
      description: latest
        ? `अंतिम चार्ट अपडेट: ${formatDrawDate(latest.drawDate)}, ${latest.time} IST\nनवीनतम उपलब्ध रिजल्ट: ${latest.result} (${formatDrawDate(latest.drawDate)})\nस्थिति: ${latest.isToday ? "अपडेटेड" : "आज के रिजल्ट का इंतजार है"}`
        : "नवीनतम उपलब्ध रिजल्ट: अभी उपलब्ध नहीं है\nस्थिति: रिजल्ट का इंतजार है",
    },
    {
      heading: "Alwar Satta Result Time: शाम 7:35 बजे",
      description: (
        <>
          Alwar का रिजल्ट शाम को घोषित किया जाता है। आज का नंबर देखने के लिए शाम
          7:35 बजे के कुछ मिनट बाद यह पेज खोलें। अगर आप इससे पहले चेक करते हैं,
          तो चार्ट में आज का बॉक्स खाली हो सकता है। दिन का रिजल्ट होम पेज की
          टेबल में भी अन्य गेम के साथ दिया जाता है।
        </>
      ),
    },
    {
      heading: "20 मिनट में चार रिजल्ट",
      description: (
        <>
          <p className="mb-2">
            शाम 7:20 बजे से 7:40 बजे के बीच लगातार चार रिजल्ट घोषित किए जाते
            हैं:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-3">
            <li>
              <Link href="/raj-shree" className="text-blue-600 underline">
                Raj Shree
              </Link>
              , शाम 7:20 बजे
            </li>
            <li>
              <Link href="/udaipur-city" className="text-blue-600 underline">
                Udaipur City
              </Link>
              , शाम 7:30 बजे
            </li>
            <li>
              <strong>Alwar, शाम 7:35 बजे</strong>
            </li>
            <li>
              <Link href="/ajmer" className="text-blue-600 underline">
                Ajmer
              </Link>
              , शाम 7:40 बजे
            </li>
          </ul>
          <p>
            यह{" "}
            <Link href="/" className="text-blue-600 underline">
              A7 Satta King
            </Link>{" "}
            के टाइमटेबल में रिजल्ट का सबसे करीबी क्रम है। अगर आप इन सभी गेम के
            रिजल्ट देखते हैं, तो उन्हें एक साथ चेक करने के बजाय इसी क्रम में
            देखना बेहतर रहेगा। Udaipur City का रिजल्ट आने के 5 मिनट बाद ही Alwar
            का नंबर घोषित होता है।
          </p>
        </>
      ),
    },
    {
      heading: "चारों रिजल्ट सही क्रम में कैसे चेक करें?",
      description:
        "रिजल्ट चेक करने का सही क्रम है: सबसे पहले शाम 7:20 बजे Raj Shree, फिर 7:30 बजे Udaipur City, इसके बाद शाम 7:35 बजे इस पेज पर Alwar और अंत में 7:40 बजे Ajmer का रिजल्ट चेक करें। इनके बीच 10, 5 और 5 मिनट का अंतर होता है। इसलिए किसी पेज को बहुत जल्दी रिफ्रेश करने पर आज के बजाय पिछले दिन का नंबर दिखाई दे सकता है।",
    },
    {
      heading: "इस रिजल्ट से पहले और बाद के गेम",
      description: (
        <>
          शाम 7:20 बजे से पहले आखिरी रिजल्ट{" "}
          <Link href="/faridabad" className="text-blue-600 underline">
            Faridabad
          </Link>{" "}
          का शाम 6:10 बजे आता है, जो एक घंटे से भी अधिक पहले घोषित होता है। शाम
          7:40 बजे यह रिजल्ट क्रम समाप्त होने के बाद अगला रिजल्ट शाम 8:10 बजे{" "}
          <Link href="/mandi-bazar" className="text-blue-600 underline">
            Mandi Bazar
          </Link>{" "}
          का आता है। इसके बाद शाम 8:20 बजे{" "}
          <Link href="/sialkot" className="text-blue-600 underline">
            Sialkot
          </Link>{" "}
          का रिजल्ट घोषित किया जाता है।
        </>
      ),
    },
    {
      heading: "Alwar Chart 2026",
      description:
        "इस चार्ट में साल के प्रत्येक महीने की हर तारीख के लिए एक अलग बॉक्स दिया गया है। आज का Alwar satta result देखने के लिए बाईं ओर दिए गए कॉलम में आज की तारीख खोजें और फिर संबंधित महीने के कॉलम में उसका रिजल्ट देखें। जिस बॉक्स में अभी वेट आइकन दिखाई दे रहा है, उसका मतलब है कि रिजल्ट अभी घोषित नहीं हुआ है। शाम 7:35 बजे से पहले ऐसा होना सामान्य है।\n\nUdaipur City और Ajmer के रिजल्ट Alwar के काफी करीब घोषित होते हैं। इसलिए चार्ट में नंबर देखने से पहले पेज की हेडिंग जरूर चेक करें, ताकि आप सही गेम का रिजल्ट देख सकें।",
    },
    {
      heading: "October 2026 की झलक",
      description:
        "अक्टूबर में Alwar के चार्ट में 1 से 30 तारीख तक हर दिन का रिजल्ट दर्ज है, जबकि 31 अक्टूबर के आगे “WAIT” दिख रहा है। इस महीने नंबर 07 से 90 के बीच रहे। सबसे छोटा नंबर 2 अक्टूबर को (07) और सबसे बड़ा नंबर 30 अक्टूबर को (90) आया। इस दौरान कुछ नंबर एक से ज़्यादा बार भी आए: 31 (11 और 16 तारीख), 71 (19 और 22 तारीख) और 60 (26 और 28 तारीख)।",
    },
    {
      heading: "पुराना Alwar Result कैसे देखें?",
      description:
        "किसी पुरानी तारीख का रिजल्ट देखने के लिए चार्ट में बाईं ओर उस तारीख को खोजें और फिर अपनी जरूरत के महीने के कॉलम तक जाएं। इस साल की जो तारीखें बीत चुकी हैं, उनके रिजल्ट चार्ट में उपलब्ध रहते हैं। इस तरह आप इसी पेज पर पूरे साल के पुराने रिजल्ट देख सकते हैं। ये नंबर केवल पहले घोषित किए गए रिजल्ट का रिकॉर्ड हैं और इनसे अगले रिजल्ट का अनुमान नहीं लगाया जा सकता।",
    },
    {
      heading: "अन्य Satta Game Results",
      description: (
        <>
          Alwar के साथ-साथ A7 Satta King पर यूजर्स{" "}
          <Link href="/raj-shree" className="text-blue-600 underline">
            Raj Shree Satta Results
          </Link>
          ,{" "}
          <Link href="/udaipur-city" className="text-blue-600 underline">
            Udaipur City Satta Results
          </Link>
          ,{" "}
          <Link href="/ajmer" className="text-blue-600 underline">
            Ajmer Satta Result
          </Link>{" "}
          और{" "}
          <Link href="/sialkot" className="text-blue-600 underline">
            Sialkot Satta Results
          </Link>{" "}
          भी चेक करते हैं।
        </>
      ),
    },
    {
      heading: "अस्वीकरण",
      description:
        "इस पेज पर दिए गए रिजल्ट और चार्ट केवल जानकारी के उद्देश्य से उपलब्ध कराए गए हैं। हम जुआ या किसी भी गैरकानूनी गतिविधि को बढ़ावा या समर्थन नहीं देते हैं। कृपया अपने क्षेत्र में लागू कानूनों और नियमों का पालन करें।",
    },
  ];

  // const faqItems = [
  //     {
  //         question: "What time is the Alwar satta result declared?",
  //         answer: "At 7:35 PM.",
  //     },
  //     {
  //         question: "Which games are declared just before and after Alwar?",
  //         answer:
  //             "Udaipur City is declared at 7:30 PM before it, and Ajmer at 7:40 PM after it.",
  //     },
  //     {
  //         question: "Where can I see today's Alwar result?",
  //         answer:
  //             "In today's cell in the chart on this page. It also appears in the home page table.",
  //     },
  //     {
  //         question: "How do I find an older Alwar result?",
  //         answer:
  //             "Go to the date in the left column of the chart, then across to the month.",
  //     },
  //     {
  //         question: "Does this page give tips or predictions?",
  //         answer: "No. It shows results and charts for reference only.",
  //     },
  // ];

  const faqItems = [
    {
      question: "Alwar सट्टा रिजल्ट कितने बजे घोषित होता है?",
      answer: "Alwar का रिजल्ट शाम 7:35 बजे घोषित किया जाता है।",
    },
    {
      question: "Alwar से ठीक पहले और बाद में किन गेम के रिजल्ट आते हैं?",
      answer:
        "Alwar से पहले शाम 7:30 बजे Udaipur City और इसके बाद शाम 7:40 बजे Ajmer का रिजल्ट घोषित होता है।",
    },
    {
      question: "आज का Alwar Result कहां देख सकते हैं?",
      answer:
        "आप आज का रिजल्ट इस पेज के चार्ट में आज की तारीख वाले बॉक्स में देख सकते हैं। यह होम पेज की टेबल में भी उपलब्ध होता है।",
    },
    {
      question: "पुराना Alwar Result कैसे खोज सकते हैं?",
      answer:
        "चार्ट में बाईं ओर दी गई तारीख खोजें और फिर संबंधित महीने के कॉलम में जाकर पुराना रिजल्ट देखें।",
    },
    {
      question: "क्या इस पेज पर सुझाव या पूर्वानुमान दिए जाते हैं?",
      answer:
        "नहीं। इस पेज पर केवल पहले घोषित किए गए रिजल्ट और चार्ट जानकारी के लिए दिखाए जाते हैं।",
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
};

export default Alwar;
