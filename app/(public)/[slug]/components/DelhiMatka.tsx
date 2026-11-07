import FAQSection from "./FAQSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || "https://www.a7sattaking.co"),
  title: "Delhi Matka Satta Results 2026 Today | Chart & Updates",
  description:
    "Check Delhi Matka Satta Results 2026 with daily updates, full charts, and history records on A7 Satta King.",
  keywords: [
    "Delhi Matka Satta Results",
    "Delhi Matka Result Today",
    "Delhi Matka Chart 2026",
    "Satta King Delhi Matka",
    "Delhi Matka Satta Chart",
  ],
  alternates: {
    canonical: `${process.env.SITE_URL}/delhi-matka`,
  },
  openGraph: {
    title: "Delhi Matka Satta Results 2026 Today | Chart & Updates",
    description:
      "Check Delhi Matka Satta Results 2026 with daily updates, full charts, and history records on A7 Satta King.",
    url: `${process.env.SITE_URL}/delhi-matka`,
    siteName: "A7 Satta King",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delhi Matka Satta Results 2026 Today | Chart & Updates",
    description:
      "Check Delhi Matka Satta Results 2026 with daily updates, full charts, and history records on A7 Satta King.",
  },
};

export default function DelhiMatka() {
  const infoSections = [
    {
      heading: "Delhi Matka Satta Results & Chart 2026 – लाइव अपडेट",
      description: (
        <>
          <p>
            क्या आप 2026 के सबसे नए Delhi Matka Satta Results की जानकारी प्राप्त करना चाहते हैं? तो आप बिल्कुल सही जगह पर आए हैं। A7 Satta King पर आपको पूरे चार्ट का इतिहास और सटीक, नियमित रूप से अपडेट किया गया डेटा आसान और सुविधाजनक तरीके से मिलता है।
          </p>

          <p className="mt-3">
            यूजर्स आज का रिजल्ट आसानी से चेक कर सकते हैं, पुराने रिकॉर्ड देख सकते हैं और नंबरों के ट्रेंड को समझ सकते हैं। यहां सभी जानकारियों को व्यवस्थित तरीके से प्रस्तुत किया गया है, ताकि नए और नियमित दोनों तरह के यूजर्स आसानी से जानकारी प्राप्त कर सकें।
          </p>
        </>
      ),
    },
    {
      heading: "Delhi Matka Satta क्या है?",
      description: (
        <>
          <p>
            Delhi Matka Satta, व्यापक Satta Matka सिस्टम का एक हिस्सा है। यह एक नंबर-आधारित फॉर्मेट है, जिसमें अलग-अलग नंबरों के कॉम्बिनेशन के आधार पर रिजल्ट घोषित किए जाते हैं। ऐतिहासिक रूप से Satta Matka की शुरुआत लॉटरी जैसी सट्टेबाजी के रूप में हुई थी, जिसमें नंबरों का चयन रैंडम तरीके से किया जाता था।
          </p>

          <p className="mt-3">
            आज यूजर्स मुख्य रूप से रोजाना के अपडेट देखने और चार्ट की जानकारी प्राप्त करने के लिए Delhi Matka Satta Results को फॉलो करते हैं।
          </p>
        </>
      ),
    },
    {
      heading: "Delhi Matka Satta Chart 2026",
      description: (
        <>
          <p>
            Delhi Matka Satta Chart 2026 में रिजल्ट का पूरा रिकॉर्ड उपलब्ध होता है। इसकी मदद से यूजर्स रोजाना, साप्ताहिक और मासिक डेटा देख सकते हैं और नंबरों के पैटर्न को समझ सकते हैं।
          </p>

          <p className="mt-3">
            इस चार्ट को नियमित रूप से अपडेट किया जाता है। इसमें पुराने रिकॉर्ड भी शामिल होते हैं, जिससे यूजर्स पिछले और मौजूदा रिजल्ट की आसानी से तुलना कर सकते हैं।
          </p>
        </>
      ),
    },
    {
      heading: "चार्ट की मुख्य विशेषताएं",
      description: (
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>रोजाना अपडेट होने वाले रिजल्ट</li>
          <li>पुराने डेटा और रिकॉर्ड देखने की सुविधा</li>
          <li>आसान और साफ-सुथरा लेआउट</li>
          <li>मोबाइल के अनुकूल डिजाइन</li>
          <li>नंबरों के ट्रेंड की आसानी से तुलना</li>
        </ul>
      ),
    },
    {
      heading: "आज का Delhi Matka Satta Result",
      description: (
        <>
          <p>
            आज का Delhi Matka Satta Result देखने के लिए बस इस पेज को रिफ्रेश करें। रिजल्ट की सटीकता सुनिश्चित करने के लिए वेरिफिकेशन के बाद अपडेट किए जाते हैं।
          </p>

          <p className="mt-3">
            यूजर्स बेहतर जानकारी के लिए नंबरों के ट्रेंड और रोजाना के मुख्य अपडेट भी देख सकते हैं।
          </p>
        </>
      ),
    },
    {
      heading: "Delhi Matka Satta History Chart",
      description: (
        <>
          <p>
            Delhi Matka Satta History Chart में पिछले रिजल्ट को व्यवस्थित तरीके से दिखाया जाता है। इससे बार-बार आने वाले नंबरों और लंबे समय के ट्रेंड को समझना आसान हो जाता है।
          </p>

          <p className="mt-3">
            कई यूजर्स पुराने डेटा को जानकारी और संदर्भ के लिए देखते हैं, लेकिन यह ध्यान रखना जरूरी है कि पिछले रिजल्ट भविष्य के परिणामों की गारंटी नहीं देते हैं।
          </p>
        </>
      ),
    },
    {
      heading: "यूजर्स Delhi Matka Satta Results क्यों देखते हैं?",
      description: (
        <>
          <p>यूजर्स कई कारणों से Delhi Matka Satta Results को फॉलो करते हैं:</p>

          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>रोजाना के अपडेट जल्दी प्राप्त करने के लिए</li>
            <li>चार्ट तक आसानी से पहुंचने के लिए</li>
            <li>सरल और व्यवस्थित डेटा देखने के लिए</li>
            <li>पुराने रिकॉर्ड को संदर्भ के रूप में देखने के लिए</li>
          </ul>
        </>
      ),
    },
    {
      heading: "Delhi Matka Satta Results कैसे चेक करें?",
      description: (
        <>
          <p>Delhi Matka Satta Results देखने के लिए नीचे दिए गए आसान स्टेप्स को फॉलो करें:</p>

          <ol className="list-decimal pl-6 mt-4 space-y-2">
            <li>A7 Satta King पर Delhi Matka Satta Results का पेज खोलें।</li>
            <li>आज का रिजल्ट चेक करें।</li>
            <li>उपलब्ध चार्ट देखें।</li>
            <li>पुराने रिकॉर्ड और हिस्ट्री एक्सप्लोर करें।</li>
          </ol>
        </>
      ),
    },
    {
      heading: "Delhi Matka Satta के साथ अपडेट रहें",
      description:
        "A7 Satta King पर रिजल्ट, चार्ट और नंबरों के ट्रेंड से जुड़ी जानकारी नियमित रूप से शेयर की जाती है। यूजर्स कभी भी वेबसाइट पर आकर नवीनतम जानकारी प्राप्त कर सकते हैं और नए अपडेट देख सकते हैं।",
    },
    {
      heading: "Delhi Matka के साथ अन्य सट्टा गेम के रिजल्ट भी देखें",
      description: (
        <>
          Delhi Matka के नियमित अपडेट के साथ-साथ, यूजर्स अलग-अलग रिजल्ट टाइमिंग की जानकारी प्राप्त करने के लिए{" "}
          <Link href="/gwalior" className="text-blue-600 underline">
            Gwalior Satta Result
          </Link>
          ,{" "}
          <Link href="/shri-ganesh" className="text-blue-600 underline">
            Shri Ganesh Satta Result
          </Link>{" "}
          और{" "}
          <Link href="/karol-bagh" className="text-blue-600 underline">
            Karol Bagh Satta Result
          </Link>{" "}
          जैसे गेम भी देख सकते हैं। इसके अलावा, दिनभर के अन्य अपडेट प्राप्त करने के लिए{" "}
          <Link href="/anmol-bazar" className="text-blue-600 underline">
            Anmol Bazar Satta Result
          </Link>{" "}
          और{" "}
          <Link href="/delhi-darbar" className="text-blue-600 underline">
            Delhi Darbar Satta Result
          </Link>{" "}
          को भी फॉलो कर सकते हैं।
        </>
      ),
    },
    {
      heading: "महत्वपूर्ण डिस्क्लेमर",
      description:
        "A7 Satta King पर Delhi Matka Satta Results और चार्ट से जुड़ी जानकारी केवल सूचनात्मक उद्देश्यों के लिए उपलब्ध कराई जाती है। यह प्लेटफॉर्म किसी भी गैरकानूनी गतिविधि को बढ़ावा या समर्थन नहीं देता है। यूजर्स को सलाह दी जाती है कि वे अपने स्थानीय कानूनों का पालन करें और इस जानकारी का उपयोग अपने जोखिम पर करें।",
    },
  ];

  const faqItems = [
    {
      question: "Delhi Matka Satta गेम क्या है?",
      answer:
        "Delhi Matka Satta एक पारंपरिक नंबर-आधारित सट्टा गेम है। इसे वे लोग फॉलो करते हैं जो पिछले गेम के रिजल्ट और नंबरों के पैटर्न को देखते हैं।",
    },
    {
      question:
        "क्या A7 Satta King पर Delhi Matka Satta जैसे अन्य सट्टा गेम के रिजल्ट भी मिलते हैं?",
      answer:
        "हां, A7 Satta King पर Delhi Matka Satta के अलावा कई अन्य लोकप्रिय सट्टा गेम के रिजल्ट और चार्ट भी उपलब्ध हैं।",
    },
    {
      question: "Delhi Matka Satta का रिजल्ट कब जारी होता है?",
      answer:
        "Delhi Matka Satta के रिजल्ट आमतौर पर हर दिन एक निर्धारित समय पर जारी किए जाते हैं। हालांकि, सही समय की जानकारी के लिए A7 Satta King पर नियमित अपडेट चेक करते रहें।",
    },
    {
      question:
        "क्या A7 Satta King पर Delhi Matka Satta के सही रिजल्ट मिलते हैं?",
      answer:
        "A7 Satta King पर Delhi Matka Satta के रिजल्ट और पुराने चार्ट की जानकारी उपलब्ध कराई जाती है। यूजर्स यहां नियमित अपडेट और ऐतिहासिक रिकॉर्ड देख सकते हैं।",
    },
    {
      question: "क्या मैं A7 Satta King पर Delhi Matka Satta के पुराने चार्ट देख सकता हूं?",
      answer:
        "हां, यूजर्स जानकारी और विश्लेषण के लिए A7 Satta King पर Delhi Matka Satta के पुराने चार्ट और पिछले रिजल्ट के रिकॉर्ड देख सकते हैं।",
    },
    {
      question: "क्या Delhi Matka Satta के रिजल्ट रोजाना अपडेट होते हैं?",
      answer:
        "हां, Delhi Matka Satta के रिजल्ट और चार्ट को रोजाना अपडेट किया जाता है, ताकि यूजर्स को नवीनतम जानकारी मिल सके।",
    },
    {
      question: "क्या Delhi Matka Satta के रिजल्ट देखने के लिए रजिस्ट्रेशन करना जरूरी है?",
      answer:
        "नहीं, आपको रजिस्ट्रेशन करने की जरूरत नहीं है। Delhi Matka Satta के चार्ट और रिजल्ट बिना किसी शुल्क के देखे जा सकते हैं।",
    },
    {
      question:
        "क्या A7 Satta King Delhi Matka Satta के लिए टिप्स या प्रेडिक्शन देता है?",
      answer:
        "A7 Satta King मुख्य रूप से रिजल्ट और पुराने चार्ट की जानकारी उपलब्ध कराने पर ध्यान देता है, ताकि यूजर्स खुद डेटा का विश्लेषण कर सकें और अपनी समझ बना सकें।",
    },
    {
      question: "क्या मैं मोबाइल पर Delhi Matka Satta के रिजल्ट देख सकता हूं?",
      answer:
        "हां, A7 Satta King की यूजर-फ्रेंडली वेबसाइट मोबाइल डिवाइस पर भी आसानी से एक्सेस की जा सकती है। आप अपने मोबाइल से Delhi Matka Satta के रिजल्ट और चार्ट देख सकते हैं।",
    },
    {
      question:
        "A7 Satta King पर Delhi Matka Satta के रिजल्ट कितनी बार अपडेट होते हैं?",
      answer:
        "A7 Satta King पर Delhi Matka Satta के रिजल्ट हर दिन अपडेट किए जाते हैं। कन्फर्म डेटा उपलब्ध होते ही नई जानकारी साझा की जाती है।",
    },
    {
      question: "Delhi Matka Satta इतना लोकप्रिय क्यों है?",
      answer:
        "Delhi Matka Satta अपनी लंबी हिस्ट्री, रोजाना जारी होने वाले रिजल्ट और पुराने डेटा की उपलब्धता के कारण लोकप्रिय है। यूजर्स इसके पुराने रिकॉर्ड को ट्रेंड समझने के लिए देखते हैं।",
    },
    {
      question: "आज का Delhi Matka Satta Result कहां देख सकते हैं?",
      answer:
        "आप आज का Delhi Matka Satta Result A7 Satta King पर देख सकते हैं। यहां रिजल्ट की जांच करके नियमित रूप से नवीनतम जानकारी और अपडेट साझा किए जाते हैं।",
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
