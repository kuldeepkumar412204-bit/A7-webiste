import FAQSection from "./FAQSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gali Satta Result 2026 Today | Gali Chart & Live Updates",
  description:
    "Check the latest Gali Satta Result 2026 with daily updates, full charts, and historical records. Get fast and accurate results on A7 Satta King.",
  keywords: [
    "Gali Satta Result",
    "Gali Result Today",
    "Gali Chart 2026",
    "Satta King Gali",
    "Gali Satta Chart",
    "Satta Result Gali",
  ],
  alternates: {
    canonical: `${process.env.SITE_URL}/gali`,
  },
  openGraph: {
    title: "Gali Satta Result 2026 Today | Gali Chart & Live Updates",
    description:
      "Check the latest Gali Satta Result 2026 with daily updates, full charts, and historical records. Get fast and accurate results on A7 Satta King.",
    url: `${process.env.SITE_URL}/gali`,
    siteName: "A7 Satta King",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gali Satta Result 2026 Today | Gali Chart & Live Updates",
    description:
      "Check the latest Gali Satta Result 2026 with daily updates, full charts, and historical records. Get fast and accurate results on A7 Satta King.",
  },
};

export default function Gali() {
  //     const infoSections = [
  //     {
  //         heading: "Gali Satta Result & Chart 2026 – Live Updates",
  //         description: (
  //             <>
  //                 <p>
  //                     Are you trying to find out the most recent information regarding the 2026 Gali Satta Result? You've come to the correct spot. A7 Satta King offers comprehensive information about the satta market, including historical records, comprehensive charts, and verified outcomes.
  //                 </p>

  //                 <p className="mt-3">
  //                     Users can easily check today’s winning number, explore past data, and follow number trends through a clean and well-structured layout. All information is updated regularly to ensure a smooth and reliable experience.
  //                 </p>
  //             </>
  //         ),
  //     },
  //     {
  //         heading: "What is Gali Satta?",
  //         description: (
  //             <>
  //                 <p>
  //                     Gali Satta is a popular number-based system followed by many users across India. It is based on daily results, where users check updates and review charts to observe number patterns and trends.
  //                 </p>

  //                 <p className="mt-3">
  //                     On A7 Satta King, all result information is presented in a simple and easy-to-understand format, making it convenient for users to track number flow and repeated patterns.
  //                 </p>
  //             </>
  //         ),
  //     },
  //     {
  //         heading: "Gali Satta Chart 2026 Explained",
  //         description: (
  //             <>
  //                 <p>
  //                     The Gali Satta Chart 2026 works as a complete record of previous results. Users can review weekly, monthly, and yearly data to understand number trends and identify repeating patterns.
  //                 </p>

  //                 <p className="mt-3">
  //                     The chart is updated daily and includes historical data from 2021 to 2026, allowing users to compare past and present results easily. It is designed to work smoothly on mobile phones, desktops, and tablets.
  //                 </p>
  //             </>
  //         ),
  //     },
  //     {
  //         heading: "Key Features of Our Chart",
  //         description: (
  //             <ul className="list-disc pl-6 mt-4 space-y-2">
  //                 <li>Daily updated results</li>
  //                 <li>Complete history from 2021 to 2026</li>
  //                 <li>Mobile-friendly and responsive layout</li>
  //                 <li>Clear and easy-to-read format</li>
  //                 <li>Quick access to latest and previous charts</li>
  //             </ul>
  //         ),
  //     },
  //     {
  //         heading: "Gali Satta Result Today",
  //         description: (
  //             <>
  //                 <p>
  //                     Just reload the page to view the Gali Satta Result for today. All results are verified before being published to maintain accuracy and reliability.
  //                 </p>

  //                 <p className="mt-3">
  //                     Users can also stay updated with daily highlights, including number shifts and important updates related to trends.
  //                 </p>
  //             </>
  //         ),
  //     },
  //     {
  //         heading: "Why Users Review Old Charts",
  //         description: (
  //             <>
  //                 <p>
  //                     The history chart displays past results in a structured timeline, helping users understand repeated numbers and long-term patterns.
  //                 </p>

  //                 <p className="mt-3">
  //                     Many users review historical data for reference and comparison. However, past results are only for informational purposes and do not guarantee future outcomes.
  //                 </p>
  //             </>
  //         ),
  //     },
  //     {
  //         heading: "How to Check Gali Satta Results",
  //         description: (
  //             <>
  //                 <p>Follow these simple steps:</p>

  //                 <ol className="list-decimal pl-6 mt-4 space-y-2">
  //                     <li>Visit the Gali Satta Result page on A7 Satta King</li>
  //                     <li>Check today’s result at the top</li>
  //                     <li>View the chart for visual data</li>
  //                     <li>Explore historical records for deeper understanding</li>
  //                 </ol>
  //             </>
  //         ),
  //     },
  //     {
  //         heading: "Stay Updated with Gali Satta News",
  //         description:
  //             "A7 Satta King shares daily updates, including chart changes, trend highlights, and important information in a simple format. Users can stay connected to access the latest updates anytime.",
  //     },
  //     {
  //         heading: "Browse More Satta Results Across Different Markets",
  //         description: (
  //             <>
  //                 Along with checking Gali updates, users also explore games like <Link href="/delhi-savera" className="text-blue-600 underline">Delhi Savera Satta Result</Link>, <Link href="/lakshmi-bajar" className="text-blue-600 underline">Lakshmi Bajar Satta Result</Link>, and <Link href="/karol-bagh" className="text-blue-600 underline">Karol Bagh Satta Result</Link> to stay updated with different result timings. You can also follow <Link href="/anmol-bazar" className="text-blue-600 underline">Anmol Bazar Satta Result</Link> and <Link href="/mirzapur" className="text-blue-600 underline">Mirzapur Satta Result</Link> for additional updates throughout the day.
  //             </>
  //         ),
  //     },
  //     {
  //         heading: "Important Disclaimer",
  //         description:
  //             "A7 Satta King shares Gali Satta Result and chart information strictly for informational purposes only. The platform does not promote or support any illegal activity. Users are advised to follow local laws and use the information at their own risk.",
  //     },
  // ];

  // const faqSchema = {
  //   "@context": "https://schema.org",
  //   "@type": "FAQPage",
  //   mainEntity: faqItems.map((faq) => ({
  //     "@type": "Question",
  //     name: faq.question,
  //     acceptedAnswer: {
  //       "@type": "Answer",
  //       text: faq.answer,
  //     },
  //   })),
  // };

  const infoSections = [
    {
      heading: "Gali Satta Result & Chart 2026 – लाइव अपडेट",
      description: (
        <>
          <p>
            क्या आप 2026 के सबसे नए Gali Satta Result की जानकारी प्राप्त करना
            चाहते हैं? तो आप बिल्कुल सही जगह पर हैं। A7 Satta King सट्टा मार्केट
            से जुड़ी पूरी जानकारी प्रदान करता है, जिसमें पुराने रिजल्ट का
            रिकॉर्ड, विस्तृत चार्ट और सत्यापित परिणाम शामिल हैं।
          </p>

          <p className="mt-3">
            यूजर्स आज का जीतने वाला नंबर आसानी से देख सकते हैं, पुराने डेटा को
            एक्सप्लोर कर सकते हैं और नंबरों के ट्रेंड को समझ सकते हैं। सभी
            जानकारियां नियमित रूप से अपडेट की जाती हैं, ताकि यूजर्स को एक आसान
            और बेहतर अनुभव मिल सके।
          </p>
        </>
      ),
    },
    {
      heading: "Gali Satta क्या है?",
      description: (
        <>
          <p>
            Gali Satta एक लोकप्रिय नंबर-आधारित सिस्टम है, जिसे भारत में कई
            यूजर्स फॉलो करते हैं। इसमें रोजाना रिजल्ट घोषित किए जाते हैं,
            जिन्हें यूजर्स चेक करते हैं और पुराने चार्ट देखकर नंबरों के पैटर्न
            और ट्रेंड को समझने की कोशिश करते हैं।
          </p>

          <p className="mt-3">
            <Link
              href="https://www.a7sattaking.co/"
              className="text-blue-600 underline"
            >
              A7 Satta King
            </Link>{" "}
            पर सभी रिजल्ट की जानकारी आसान और समझने योग्य फॉर्मेट में दी जाती है,
            जिससे यूजर्स के लिए नंबरों के पुराने रिकॉर्ड और दोहराए जाने वाले
            पैटर्न को देखना सुविधाजनक हो जाता है।
          </p>
        </>
      ),
    },
    {
      heading: "Gali Satta Chart 2026 की पूरी जानकारी",
      description: (
        <>
          <p>
            Gali Satta Chart 2026 पिछले रिजल्ट का पूरा रिकॉर्ड देखने का एक
            माध्यम है। यूजर्स नंबरों के ट्रेंड और बार-बार दोहराए जाने वाले
            पैटर्न को समझने के लिए साप्ताहिक, मासिक और सालाना डेटा देख सकते हैं।
          </p>

          <p className="mt-3">
            इस चार्ट को रोजाना अपडेट किया जाता है और इसमें 2021 से 2026 तक का
            पुराना डेटा शामिल है। इससे यूजर्स पुराने और नए रिजल्ट की आसानी से
            तुलना कर सकते हैं। यह चार्ट मोबाइल फोन, डेस्कटॉप और टैबलेट सभी
            डिवाइस पर आसानी से काम करता है।
          </p>
        </>
      ),
    },
    {
      heading: "हमारे चार्ट की मुख्य विशेषताएं",
      description: (
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>रोजाना अपडेट होने वाले रिजल्ट</li>
          <li>2021 से 2026 तक का पूरा रिकॉर्ड</li>
          <li>मोबाइल फ्रेंडली और रिस्पॉन्सिव लेआउट</li>
          <li>साफ और आसानी से पढ़ा जाने वाला फॉर्मेट</li>
          <li>नए और पुराने चार्ट तक तुरंत पहुंच</li>
        </ul>
      ),
    },
    {
      heading: "Gali Satta Result Today",
      description: (
        <>
          <p>
            आज का Gali Satta Result देखने के लिए बस इस पेज को रिफ्रेश करें।
            जानकारी की सटीकता और विश्वसनीयता बनाए रखने के लिए सभी रिजल्ट
            प्रकाशित करने से पहले वेरिफाई किए जाते हैं।
          </p>

          <p className="mt-3">
            यूजर्स रोजाना के जरूरी अपडेट भी देख सकते हैं, जिनमें नंबरों में
            बदलाव और ट्रेंड से जुड़ी महत्वपूर्ण जानकारियां शामिल होती हैं।
          </p>
        </>
      ),
    },
    {
      heading: "यूजर्स पुराने चार्ट क्यों देखते हैं?",
      description: (
        <>
          <p>
            हिस्ट्री चार्ट में पिछले रिजल्ट को एक व्यवस्थित टाइमलाइन में दिखाया
            जाता है, जिससे यूजर्स पुराने नंबरों और लंबे समय के पैटर्न को समझ
            सकते हैं।
          </p>

          <p className="mt-3">
            कई यूजर्स पुराने डेटा को जानकारी और तुलना के लिए देखते हैं। हालांकि,
            पिछले रिजल्ट केवल जानकारी के उद्देश्य से होते हैं और भविष्य के
            परिणामों की कोई गारंटी नहीं देते।
          </p>
        </>
      ),
    },
    {
      heading: "Gali Satta Result कैसे चेक करें?",
      description: (
        <>
          <p>Gali Satta Result चेक करने के लिए इन आसान स्टेप्स को फॉलो करें:</p>

          <ol className="list-decimal pl-6 mt-4 space-y-2">
            <li>A7 Satta King की Gali Satta Result वेबसाइट पर जाएं।</li>
            <li>पेज के सबसे ऊपर आज का रिजल्ट चेक करें।</li>
            <li>विजुअल डेटा देखने के लिए चार्ट सेक्शन पर जाएं।</li>
            <li>अधिक जानकारी के लिए पुराने रिजल्ट का रिकॉर्ड देखें।</li>
          </ol>
        </>
      ),
    },
    {
      heading: "Gali Satta News के साथ अपडेट रहें",
      description:
        "A7 Satta King रोजाना के अपडेट प्रदान करता है, जिसमें चार्ट में होने वाले बदलाव, नंबरों के ट्रेंड और अन्य महत्वपूर्ण जानकारियां आसान फॉर्मेट में दी जाती हैं। यूजर्स किसी भी समय वेबसाइट पर आकर नवीनतम अपडेट प्राप्त कर सकते हैं।",
    },
    {
      heading: "अलग-अलग मार्केट के अन्य Satta Result भी देखें",
      description: (
        <>
          Gali के अपडेट देखने के साथ-साथ यूजर्स अलग-अलग रिजल्ट टाइमिंग की
          जानकारी के लिए{" "}
          <Link href="/delhi-savera" className="text-blue-600 underline">
            Delhi Savera Satta Result
          </Link>
          ,{" "}
          <Link href="/lakshmi-bajar" className="text-blue-600 underline">
            Lakshmi Bajar Satta Result
          </Link>{" "}
          और{" "}
          <Link href="/karol-bagh" className="text-blue-600 underline">
            Karol Bagh Satta Result
          </Link>{" "}
          जैसे गेम के रिजल्ट भी देखते हैं। इसके अलावा, दिनभर के अन्य अपडेट
          प्राप्त करने के लिए आप{" "}
          <Link href="/anmol-bazar" className="text-blue-600 underline">
            Anmol Bazar Satta Result
          </Link>{" "}
          और{" "}
          <Link href="/mirzapur" className="text-blue-600 underline">
            Mirzapur Satta Result
          </Link>{" "}
          भी चेक कर सकते हैं।
        </>
      ),
    },
    {
      heading: "महत्वपूर्ण डिस्क्लेमर",
      description:
        "A7 Satta King पर Gali Satta Result और चार्ट से जुड़ी सभी जानकारियां केवल सूचनात्मक उद्देश्यों के लिए साझा की जाती हैं। यह प्लेटफॉर्म किसी भी गैरकानूनी गतिविधि को बढ़ावा या समर्थन नहीं देता है। यूजर्स को सलाह दी जाती है कि वे अपने स्थानीय कानूनों का पालन करें और इस जानकारी का उपयोग अपने जोखिम पर करें।",
    },
  ];

  const faqItems = [
    {
      question: "Gali Satta Result 2026 कहां चेक कर सकते हैं?",
      answer:
        "आप A7 Satta King की वेबसाइट पर Gali Satta Result 2026 चेक कर सकते हैं। यहां आज का रिजल्ट और पुराने चार्ट की जानकारी उपलब्ध है।",
    },
    {
      question: "Gali Satta Chart 2026 में कौन-सा डेटा उपलब्ध है?",
      answer:
        "इस चार्ट में 2021 से 2026 तक के पुराने रिजल्ट का रिकॉर्ड दिया गया है, जिससे यूजर्स पिछले डेटा को देख और उसकी तुलना कर सकते हैं।",
    },
    {
      question: "Gali Satta Result कितनी बार अपडेट होता है?",
      answer:
        "Gali Satta Result की जानकारी रोजाना अपडेट की जाती है। नए रिजल्ट देखने के लिए यूजर्स पेज को रिफ्रेश कर सकते हैं।",
    },
    {
      question:
        "क्या पुराने Gali Satta Chart से भविष्य का रिजल्ट पता चल सकता है?",
      answer:
        "नहीं, पुराने चार्ट केवल पिछले रिजल्ट की जानकारी देते हैं। इनसे भविष्य के परिणामों की गारंटी नहीं मिलती।",
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
