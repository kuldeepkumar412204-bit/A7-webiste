import FAQSection from "./FAQSection";
import Link from "next/link";
import type { LatestResult } from "@/app/lib/homeData";
import { formatDrawDate } from "./formatDrawDate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ghaziabad Satta Result 2026 Today | Chart & Live Updates",
  description:
    "Check Ghaziabad Satta Result 2026 with daily updates, full charts, and history records on A7 Satta King.",
  keywords: [
    "Ghaziabad Satta Result 2026",
    "Ghaziabad Satta Result Today",
    "Gaziabad Satta King Result",
    "Ghaziabad Satta Chart 2026",
    "Ghaziabad Satta Live Updates",
    "Ghaziabad Satta History",
    "Satta King Ghaziabad Result",
  ],
  alternates: {
    canonical: `${process.env.SITE_URL}/gaziabad`,
  },
  openGraph: {
    title: "Ghaziabad Satta Result 2026 Today | Chart & Live Updates",
    description:
      "Check Ghaziabad Satta Result 2026 with daily updates, full charts, and history records on A7 Satta King.",
    url: `${process.env.SITE_URL}/gaziabad`,
    siteName: "A7 Satta King",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghaziabad Satta Result 2026 Today | Chart & Live Updates",
    description:
      "Check Ghaziabad Satta Result 2026 with daily updates, full charts, and history records on A7 Satta King.",
  },
};

export default function Gahaziabad({
  latest,
}: {
  latest?: LatestResult | null;
}) {
  // const infoSections = [
  //   {
  //     heading: "Gaziabad Satta Result Today and 2026 Chart",
  //     description: (
  //       <>
  //         <p>
  //           This page carries today's Gaziabad number and the 2026 chart, shows where Gaziabad sits in the late-evening timetable, and looks at what the 2026 chart has recorded so far.
  //         </p>
  //       </>
  //     ),
  //   },
  //   {
  //     heading: "Latest Gaziabad Satta Result",
  //     description: latest
  //       ? `Last chart update: ${formatDrawDate(latest.drawDate)}, ${latest.time} IST\nLatest available result: ${latest.result} (${formatDrawDate(latest.drawDate)})\nStatus: ${latest.isToday ? "Updated" : "Waiting for today's result"}`
  //       : "Latest available result: Not available yet\nStatus: Waiting for result",
  //   },
  //   {
  //     heading: "Gaziabad Satta Result Time: 9:50 PM",
  //     description: (
  //       <>
  //         <p>
  //           Gaziabad is a late-evening result. Open the page a few minutes after 9:50 PM to see today's number. Before that, today's cell in the chart may still be empty. The day's result is also listed in the home page table alongside the other games.
  //         </p>
  //       </>
  //     ),
  //   },
  //   {
  //     heading: "The Longest Gap of the Evening",
  //     description: (
  //       <>
  //         <p>
  //           After <Link href="/sialkot" className="text-blue-600 underline">Sialkot</Link> at 8:20 PM, nothing is declared for over an hour, the longest stretch without a result anywhere on the timetable. That quiet period ends when a run of late games begins, and Gaziabad, at 9:50 PM, is one of them.
  //         </p>
  //       </>
  //     ),
  //   },
  //   {
  //     heading: "The Full Evening, Start to Finish",
  //     description: (
  //       <>
  //         <p>Laid out end to end, the evening after Sialkot looks like this:</p>
  //         <ul className="list-disc pl-6 mt-4 space-y-2">
  //           <li>Sialkot, 8:20 PM</li>
  //           <li>(over an hour of no results)</li>
  //           <li>Gaziabad, 9:50 PM</li>
  //           <li><Link href="/dwarka" className="text-blue-600 underline">Dwarka</Link>, 10:35 PM</li>
  //           <li><Link href="/gali" className="text-blue-600 underline">Gali</Link>, 11:50 PM, the last result of the day</li>
  //         </ul>
  //         <p className="mt-4">Gaziabad is the third-last game declared each day, with only Dwarka and Gali following it.</p>
  //       </>
  //     ),
  //   },
  //   {
  //     heading: "A Cluster of Late Games",
  //     description: (
  //       <>
  //         <p>
  //           In the run-up to 9:50 PM, several late-evening results follow one another in quick succession. If you're checking more than one of these pages, do it in time order, since results declared close together late in the evening are easy to mix up. Checking a page too early in this window will still show the previous day's number rather than today's.
  //         </p>
  //       </>
  //     ),
  //   },
  //   {
  //     heading: "Gaziabad Chart 2026",
  //     description: (
  //       <>
  //         <p>
  //           The chart has one cell for each day of each month. To find today's Gaziabad Satta Result number, locate today's date in the left column and read across to this month's column. A cell that still shows the wait icon has no result yet, which is normal before 9:50 PM. Once the year fills in further, the same layout will let you compare any two months side by side just by scanning across a row.
  //         </p>
  //       </>
  //     ),
  //   },
  //   {
  //     heading: "Key Features of Our Chart",
  //     description: (
  //       <>
  //         <ul className="list-disc pl-6 mt-4 space-y-2">
  //           <li>Daily updated results</li>
  //           <li>Complete history from 1 Jan 2026 to the present</li>
  //           <li>Mobile-friendly and responsive design</li>
  //           <li>Clear and easy-to-read format</li>
  //           <li>Quick access to latest and old charts</li>
  //         </ul>
  //       </>
  //     ),
  //   },
  //   {
  //     heading: "Finding an Earlier Gaziabad Result",
  //     description: (
  //       <>
  //         <p>
  //           For a past date, go to that date in the left column and move across to the month you want. Every day that has already passed this year stays in the chart. The numbers record what was declared and do not show what the next result will be.
  //         </p>
  //       </>
  //     ),
  //   },
  //   {
  //     heading: "Related Satta Results",
  //     description: (
  //       <>
  //         Along with Gaziabad, users on A7 Satta King also check <Link href="/sialkot" className="text-blue-600 underline">Sialkot Satta Results</Link>, <Link href="/dwarka" className="text-blue-600 underline">Dwarka Satta Results</Link>, and <Link href="/gali" className="text-blue-600 underline">Gali Satta Result</Link>.
  //       </>
  //     ),
  //   },
  //   {
  //     heading: "Gaziabad Satta History Chart",
  //     description: (
  //       <>
  //         <p>The history chart displays past results in a structured timeline, helping users understand repeated numbers and long-term patterns.
  //         </p>
  //         <p className="mt-3">While many users review historical data for reference, it is important to note that past results do not guarantee future outcomes.
  //         </p>
  //       </>
  //     ),
  //   },
  //   {
  //     heading: "Why Choose A7 Satta King",
  //     description: (
  //       <>
  //         <p><Link href="https://www.a7sattaking.co/" className="text-blue-600 underline">A7 Satta King</Link> is preferred by users because it provides a simple and reliable experience.

  //         </p>
  //         <p className="mt-3 font-bold">Reasons to choose this platform:</p>
  //         <ul className="list-disc pl-6 mt-2 space-y-2">
  //           <li>Fast and regular result updates</li>
  //           <li>Clean and organized chart display</li>
  //           <li>Easy navigation for all users</li>
  //           <li>Access to multiple Satta game results</li>
  //           <li>Smooth performance on mobile and desktop</li>
  //         </ul>
  //       </>
  //     ),
  //   },
  //   {
  //     heading: "Disclaimer",
  //     description:
  //       "This page shows results and charts for information only. We do not promote or support gambling or any illegal activity. Please follow the laws that apply where you live.",
  //   },
  // ];

  const infoSections = [
    {
      heading: "Gaziabad Satta Result Today और 2026 Chart",
      description: (
        <>
          <p>
            इस पेज पर आज का Gaziabad नंबर और 2026 का चार्ट दिया गया है। इसमें यह
            भी बताया गया है कि शाम के आखिरी समय के रिजल्ट शेड्यूल में Gaziabad
            का स्थान क्या है और 2026 के चार्ट में अब तक कौन-कौन से रिजल्ट दर्ज
            किए गए हैं।
          </p>
        </>
      ),
    },
    {
      heading: "ताज़ा Gaziabad Satta Result",
      description: latest
        ? `आखिरी चार्ट अपडेट: ${formatDrawDate(latest.drawDate)}, ${latest.time} IST\nनवीनतम उपलब्ध रिजल्ट: ${latest.result} (${formatDrawDate(latest.drawDate)})\nस्टेटस: ${latest.isToday ? "अपडेटेड" : "आज के रिजल्ट का इंतज़ार है"}`
        : "नवीनतम उपलब्ध रिजल्ट: अभी उपलब्ध नहीं है\nस्टेटस: रिजल्ट का इंतज़ार है",
    },
    {
      heading: "Gaziabad Satta Result समय: 9:50 PM",
      description: (
        <>
          <p>
            Gaziabad का रिजल्ट देर शाम घोषित किया जाता है। आज का नंबर देखने के
            लिए रात 9:50 बजे के कुछ मिनट बाद इस पेज को खोलें। इससे पहले चार्ट
            में आज की तारीख वाला बॉक्स खाली हो सकता है। दिन का रिजल्ट होम पेज की
            टेबल में भी अन्य गेम्स के साथ दिया जाता है।
          </p>
        </>
      ),
    },
    {
      heading: "शाम का सबसे लंबा अंतराल",
      description: (
        <>
          <p>
            रात 8:20 बजे{" "}
            <Link href="/sialkot" className="text-blue-600 underline">
              Sialkot
            </Link>{" "}
            के रिजल्ट के बाद एक घंटे से अधिक समय तक कोई दूसरा रिजल्ट घोषित नहीं
            होता। यह पूरे दिन के रिजल्ट शेड्यूल का सबसे लंबा अंतराल है, जब कोई
            रिजल्ट नहीं आता। इसके बाद देर शाम के रिजल्ट एक के बाद एक घोषित होने
            शुरू होते हैं, जिनमें रात 9:50 बजे आने वाला Gaziabad भी शामिल है।
          </p>
        </>
      ),
    },
    {
      heading: "पूरी शाम का रिजल्ट शेड्यूल",
      description: (
        <>
          <p>
            Sialkot के बाद शाम से लेकर रात तक का रिजल्ट शेड्यूल इस प्रकार है:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Sialkot, रात 8:20 बजे</li>
            <li>(एक घंटे से अधिक समय तक कोई रिजल्ट नहीं)</li>
            <li>Gaziabad, रात 9:50 बजे</li>
            <li>
              <Link href="/dwarka" className="text-blue-600 underline">
                Dwarka
              </Link>
              , रात 10:35 बजे
            </li>
            <li>
              <Link href="/gali" className="text-blue-600 underline">
                Gali
              </Link>
              , रात 11:50 बजे, दिन का आखिरी रिजल्ट
            </li>
          </ul>
          <p className="mt-4">
            Gaziabad हर दिन घोषित होने वाला तीसरा आखिरी गेम है। इसके बाद केवल
            Dwarka और Gali के रिजल्ट आते हैं।
          </p>
        </>
      ),
    },
    {
      heading: "देर शाम के रिजल्ट का सिलसिला",
      description: (
        <>
          <p>
            रात 9:50 बजे से पहले और बाद में देर शाम के कई रिजल्ट एक के बाद एक
            घोषित होते हैं। अगर आप एक से अधिक गेम के रिजल्ट चेक कर रहे हैं, तो
            उन्हें समय के अनुसार देखना बेहतर है, क्योंकि देर शाम में कम अंतराल
            पर आने वाले रिजल्ट आपस में मिल सकते हैं। इस समय के दौरान किसी पेज को
            बहुत जल्दी खोलने पर आज के बजाय पिछले दिन का नंबर दिखाई दे सकता है।
          </p>
        </>
      ),
    },
    {
      heading: "Gaziabad Chart 2026",
      description: (
        <>
          <p>
            इस चार्ट में हर महीने की प्रत्येक तारीख के लिए एक अलग बॉक्स दिया गया
            है। आज का Gaziabad Satta Result नंबर देखने के लिए बाईं ओर तारीख
            खोजें और फिर उसी तारीख के सामने संबंधित महीने के कॉलम में नंबर
            देखें। जिस बॉक्स में अभी भी वेट आइकन दिखाई दे रहा है, उसका मतलब है
            कि उस दिन का रिजल्ट अभी अपडेट नहीं हुआ है। रात 9:50 बजे से पहले ऐसा
            होना सामान्य है। जैसे-जैसे साल का रिकॉर्ड पूरा होता जाएगा, इसी चार्ट
            में किसी भी दो महीनों के रिजल्ट की तुलना एक साथ की जा सकेगी।
          </p>
        </>
      ),
    },
    {
      heading: "हमारे चार्ट की मुख्य विशेषताएं",
      description: (
        <>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>रोजाना अपडेट होने वाले रिजल्ट</li>
            <li>1 जनवरी 2026 से अब तक का पूरा रिकॉर्ड</li>
            <li>मोबाइल के अनुकूल और रिस्पॉन्सिव डिजाइन</li>
            <li>साफ और आसानी से पढ़ा जाने वाला फॉर्मेट</li>
            <li>नए और पुराने चार्ट तक तुरंत पहुंच</li>
          </ul>
        </>
      ),
    },
    {
      heading: "पुराने Gaziabad Result कैसे देखें?",
      description: (
        <>
          <p>
            किसी पुरानी तारीख का रिजल्ट देखने के लिए बाईं ओर दिए गए कॉलम में उस
            तारीख को खोजें और फिर अपनी पसंद के महीने के कॉलम में आगे देखें। इस
            साल की सभी बीती हुई तारीखों के रिजल्ट चार्ट में उपलब्ध रहते हैं।
            इसमें दिए गए नंबर पहले घोषित हो चुके रिजल्ट का रिकॉर्ड हैं। इनसे आने
            वाले रिजल्ट का अनुमान नहीं लगाया जा सकता।
          </p>
        </>
      ),
    },
    {
      heading: "संबंधित Satta Results",
      description: (
        <>
          Gaziabad के साथ A7 Satta King पर यूजर्स{" "}
          <Link href="/sialkot" className="text-blue-600 underline">
            Sialkot Satta Results
          </Link>
          ,{" "}
          <Link href="/dwarka" className="text-blue-600 underline">
            Dwarka Satta Results
          </Link>{" "}
          और{" "}
          <Link href="/gali" className="text-blue-600 underline">
            Gali Satta Result
          </Link>{" "}
          भी चेक करते हैं।
        </>
      ),
    },
    {
      heading: "Gaziabad Satta History Chart",
      description: (
        <>
          <p>
            हिस्ट्री चार्ट में पुराने रिजल्ट को एक व्यवस्थित टाइमलाइन के रूप में
            दिखाया जाता है। इससे यूजर्स पहले घोषित हुए नंबरों और लंबे समय के
            रिकॉर्ड को आसानी से देख सकते हैं।
          </p>
          <p className="mt-3">
            कई यूजर्स पुराने रिजल्ट को केवल जानकारी और संदर्भ के लिए देखते हैं।
            यह समझना जरूरी है कि पिछले रिजल्ट भविष्य में आने वाले नंबरों की
            गारंटी नहीं देते हैं।
          </p>
        </>
      ),
    },
    {
      heading: "A7 Satta King क्यों चुनें?",
      description: (
        <>
          <p>
            <Link
              href="https://www.a7sattaking.co/"
              className="text-blue-600 underline"
            >
              A7 Satta King
            </Link>{" "}
            को यूजर्स इसके आसान और सुविधाजनक अनुभव के लिए पसंद करते हैं।
          </p>
          <p className="mt-3 font-bold">
            इस प्लेटफॉर्म को चुनने के मुख्य कारण:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>तेज और नियमित रिजल्ट अपडेट</li>
            <li>साफ और व्यवस्थित चार्ट डिस्प्ले</li>
            <li>सभी यूजर्स के लिए आसान नेविगेशन</li>
            <li>कई Satta गेम्स के रिजल्ट एक ही जगह उपलब्ध</li>
            <li>मोबाइल और डेस्कटॉप पर बेहतर परफॉर्मेंस</li>
          </ul>
        </>
      ),
    },
    {
      heading: "चेतावनी",
      description:
        "इस पेज पर दिए गए रिजल्ट और चार्ट केवल जानकारी के उद्देश्य से उपलब्ध कराए गए हैं। हम जुए या किसी भी गैरकानूनी गतिविधि को बढ़ावा या समर्थन नहीं देते हैं। कृपया अपने क्षेत्र में लागू कानूनों और नियमों का पालन करें।",
    },
  ];

  // const faqItems = [
  //   {
  //     question: "What time is the Gaziabad Satta Result declared?",
  //     answer: "At 9:50 PM.",
  //   },
  //   {
  //     question: "What comes right before Gaziabad in the evening?",
  //     answer:
  //       "Sialkot at 8:20 PM, followed by the evening's longest gap: over an hour with no result.",
  //   },
  //   {
  //     question: "How many results come after Gaziabad?",
  //     answer:
  //       "Two: Dwarka at 10:35 PM and Gali at 11:50 PM, the last of the day.",
  //   },
  //   {
  //     question: "Where can I see today's Gaziabad Satta Result?",
  //     answer:
  //       "In today's cell in the chart on this page. It also appears in the home page table.",
  //   },
  //   {
  //     question: "Does this page give tips or predictions?",
  //     answer: "No. It shows results and charts for reference only.",
  //   },
  // ];

  const faqItems = [
    {
      question: "Gaziabad Satta Result कितने बजे घोषित होता है?",
      answer: "Gaziabad का रिजल्ट रात 9:50 बजे घोषित होता है।",
    },
    {
      question: "शाम को Gaziabad से ठीक पहले कौन-सा रिजल्ट आता है?",
      answer:
        "Gaziabad से पहले Sialkot का रिजल्ट रात 8:20 बजे आता है। इसके बाद एक घंटे से अधिक समय तक कोई रिजल्ट घोषित नहीं होता।",
    },
    {
      question: "Gaziabad के बाद कितने रिजल्ट आते हैं?",
      answer:
        "Gaziabad के बाद दो रिजल्ट आते हैं। Dwarka का रिजल्ट रात 10:35 बजे और Gali का रिजल्ट रात 11:50 बजे घोषित होता है। Gali दिन का आखिरी रिजल्ट है।",
    },
    {
      question: "आज का Gaziabad Satta Result कहां देख सकते हैं?",
      answer:
        "आज का Gaziabad Satta Result इस पेज पर दिए गए चार्ट में आज की तारीख वाले बॉक्स में देख सकते हैं। यह होम पेज की टेबल में भी उपलब्ध होता है।",
    },
    {
      question: "क्या इस पेज पर टिप्स या भविष्यवाणियां दी जाती हैं?",
      answer:
        "नहीं, इस पेज पर केवल पहले से घोषित रिजल्ट और चार्ट जानकारी के लिए दिखाए जाते हैं।",
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
