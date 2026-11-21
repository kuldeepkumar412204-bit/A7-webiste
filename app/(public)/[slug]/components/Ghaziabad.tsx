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
      heading: "Satta Matka में इस्तेमाल होने वाले पारंपरिक शब्दों का अर्थ",
      description: (
        <>
          <p className="mb-3">
            Satta Matka की पुरानी कार्यप्रणाली में कुछ खास शब्दों का इस्तेमाल
            किया जाता रहा है, जिनका अर्थ समझना इसके इतिहास को जानने का एक हिस्सा
            है। उदाहरण के लिए, Matka शब्द उस बर्तन से जुड़ा है जिसका इस्तेमाल
            शुरुआती दौर में नंबरों की पर्चियां निकालने के लिए किया जाता था। समय
            के साथ इस व्यवस्था से जुड़े कई शब्द आम बोलचाल में शामिल हो गए। आज भी
            Jodi, Panna, Open और Close जैसे शब्द इस खेल से संबंधित ऑनलाइन
            सामग्री में दिखाई देते हैं।
          </p>
          <p className="mb-3">
            इन शब्दों की जानकारी के साथ अलग-अलग नामों से प्रकाशित पेजों की भाषा
            और प्रस्तुति को भी समझा जा सकता है।{" "}
            <Link href="/lakshmi-bajar" className="text-blue-600 underline">
              Lakshmi Bajar
            </Link>
            ,{" "}
            <Link href="/dehradun-city" className="text-blue-600 underline">
              Dehradun City
            </Link>
            ,{" "}
            <Link href="/udaipur-city" className="text-blue-600 underline">
              Udaipur City
            </Link>{" "}
            और{" "}
            <Link href="/sialkot" className="text-blue-600 underline">
              Sialkot
            </Link>{" "}
            जैसे पेज अपने शीर्षक और बाजार के नाम के अनुसार जानकारी प्रस्तुत करते
            हैं। किसी भी शब्द का अर्थ समझते समय यह ध्यान रखना चाहिए कि वह केवल
            खेल से जुड़ी पारंपरिक शब्दावली बताता है, किसी परिणाम की निश्चितता या
            भविष्य के नंबरों की जानकारी नहीं देता।
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
