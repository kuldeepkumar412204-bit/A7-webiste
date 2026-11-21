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
      heading: "अलग-अलग मार्केट के रिजल्ट और समय का अंतर",
      description: (
        <>
          Alwar के अलावा भी कई मार्केट अपने अलग-अलग समय और रिजल्ट अपडेट के लिए
          जाने जाते हैं। उदाहरण के लिए,{" "}
          <Link href="/gwalior" className="text-blue-600 underline">
            Gwalior Satta Result
          </Link>
          ,{" "}
          <Link href="/delhi-bazar" className="text-blue-600 underline">
            Delhi Bazar Satta Result
          </Link>{" "}
          और{" "}
          <Link href="/sadar-bazar" className="text-blue-600 underline">
            Sadar Bazar Satta Result
          </Link>{" "}
          के लिए अलग-अलग पेज उपलब्ध हैं। इन मार्केट की जानकारी को अलग-अलग देखना
          उपयोगी रहता है, क्योंकि हर पेज पर संबंधित मार्केट का नाम और उसका
          रिजल्ट रिकॉर्ड दिया जाता है।
        </>
      ),
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
      heading: "आसपास के अन्य मार्केट की जानकारी",
      description: (
        <>
          Alwar के रिजल्ट टाइमटेबल के साथ दूसरे मार्केट के नामों से परिचित होना
          भी उपयोगी हो सकता है। वेबसाइट पर{" "}
          <Link href="/gali" className="text-blue-600 underline">
            Gali Satta Result
          </Link>
          ,{" "}
          <Link href="/dwarka" className="text-blue-600 underline">
            Dwarka Satta Result
          </Link>{" "}
          और{" "}
          <Link href="/karol-bagh" className="text-blue-600 underline">
            Karol Bagh Satta Result
          </Link>{" "}
          के लिए अलग-अलग पेज दिए गए हैं। इन पेजों पर जाकर पाठक संबंधित मार्केट
          की जानकारी और उपलब्ध रिजल्ट रिकॉर्ड देख सकते हैं।
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
      heading: "दूसरे शहरों के मार्केट रिकॉर्ड भी देखें",
      description: (
        <>
          अलग-अलग शहरों और क्षेत्रों के मार्केट की जानकारी वेबसाइट पर अलग पेजों
          में व्यवस्थित की गई है। Alwar के पुराने रिजल्ट देखने के साथ आप{" "}
          <Link href="/jaipur-matka" className="text-blue-600 underline">
            Jaipur Matka Result
          </Link>
          ,{" "}
          <Link href="/new-ganga" className="text-blue-600 underline">
            New Ganga Satta Result
          </Link>
          ,{" "}
          <Link href="/shri-lakshmi" className="text-blue-600 underline">
            Shri Lakshmi Satta Result
          </Link>{" "}
          और{" "}
          <Link href="/disawer" className="text-blue-600 underline">
            Disawer Satta Result
          </Link>{" "}
          के पेज भी देख सकते हैं। हर पेज अपने संबंधित मार्केट की जानकारी के लिए
          बनाया गया है।
        </>
      ),
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
