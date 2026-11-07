import type { Metadata } from "next";
import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata: Metadata = {
  title: "Dwarka Satta Result 2026 Today | Dwarka Chart & Live Updates",
  description:
    "Check the latest Dwarka Satta Result 2026 with daily updates, full charts, and historical records. Get fast and accurate results on A7 Satta King.",
  keywords: [
    "Dwarka Satta Result",
    "Dwarka Result Today",
    "Dwarka Chart 2026",
    "Satta King Dwarka",
    "Dwarka Satta Chart",
    "Satta Result Dwarka",
  ],
  alternates: {
    canonical: `${process.env.SITE_URL}/dwarka`,
  },
  openGraph: {
    title: "Dwarka Satta Result 2026 Today | Dwarka Chart & Live Updates",
    description:
      "Check the latest Dwarka Satta Result 2026 with daily updates, full charts, and historical records. Get fast and accurate results on A7 Satta King.",
    url: `${process.env.SITE_URL}/dwarka`,
    siteName: "A7 Satta King",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dwarka Satta Result 2026 Today | Dwarka Chart & Live Updates",
    description:
      "Check the latest Dwarka Satta Result 2026 with daily updates, full charts, and historical records. Get fast and accurate results on A7 Satta King.",
  },
};

export default function Dwarka() {
  //     const infoSections = [
  //     {
  //         heading: "Dwarka Satta Result & Chart 2026 – Live Updates",
  //         description: (
  //             <>
  //                 <p>
  //                     Welcome to A7 Satta King, your trusted platform for checking Dwarka Satta Result and chart updates for 2026. Here, users can access verified results, daily updates, and structured chart data in a clear and easy-to-understand format.
  //                 </p>

  //                 <p className="mt-3">
  //                     The platform provides complete historical records from 1 January 2026 till today, allowing users to track number movements, review patterns, and stay updated without confusion. Whether you are checking today’s result or analyzing past data, everything is available in one place.
  //                 </p>
  //             </>
  //         ),
  //     },
  //     {
  //         heading: "What is Dwarka Satta?",
  //         description: (
  //             <>
  //                 <p>
  //                     Dwarka Satta is part of the larger Satta Matka network, which includes popular games such as Gali, Disawar, and Faridabad. Each game has its own result timing and user base.
  //                 </p>

  //                 <p className="mt-3">
  //                     Many users follow Dwarka Satta daily to check results and observe number patterns. On A7 Satta King, all results are presented in a simple format so users can easily understand updates and track changes over time.
  //                 </p>
  //             </>
  //         ),
  //     },
  //     {
  //         heading: "Dwarka Satta Result Timing",
  //         description: (
  //             <>
  //                 <p>
  //                     Dwarka Satta results are generally released at a fixed time every day. Based on historical patterns, results are usually announced between 10:10 PM and 10:15 PM.
  //                 </p>

  //                 <p className="mt-3">
  //                     However, timing may vary slightly depending on updates, so users are advised to check regularly for the latest information.
  //                 </p>
  //             </>
  //         ),
  //     },
  //     {
  //         heading: "Dwarka Satta Result Today",
  //         description: (
  //             <>
  //                 <p>
  //                     Users looking for today’s Dwarka Satta Result can easily find the latest update on this page. Results are published only after proper verification to ensure accuracy.
  //                 </p>

  //                 <p className="mt-3">
  //                     Simply refresh the page to check the newest result along with related updates and highlights.
  //                 </p>
  //             </>
  //         ),
  //     },
  //     {
  //         heading: "Dwarka Satta Chart 2026",
  //         description: (
  //             <>
  //                 <p>
  //                     The Dwarka Satta Chart 2026 provides a structured view of daily results from January 1, 2026 to the present date. It helps users review number movements over time.
  //                 </p>

  //                 <p className="mt-3">
  //                     Monthly charts summarize how results changed during a specific period, making it easier to understand variations and patterns.
  //                 </p>
  //             </>
  //         ),
  //     },
  //     {
  //         heading: "Monthly & Yearly Chart Insights",
  //         description: (
  //             <>
  //                 <p>
  //                     Monthly and yearly charts offer a broader understanding of number frequency and trends.
  //                 </p>

  //                 <ul className="list-disc pl-6 mt-4 space-y-2">
  //                     <li>Monthly charts show short-term movement</li>
  //                     <li>Yearly charts help track long-term patterns</li>
  //                     <li>Users can compare data across different time periods</li>
  //                 </ul>
  //                 <p className="mt-3">

  //                     These insights help users observe how numbers repeat or change over time.
  //                 </p>
  //             </>
  //         ),
  //     },
  //     {
  //         heading: "Why Users Track Dwarka Satta History",
  //         description: (
  //             <>
  //                 <p>
  //                     Users follow historical data for better understanding and observation.
  //                 </p>
  //                 <p className="mt-3 font-bold">
  //                     Key reasons include:

  //                 </p>

  //                 <ul className="list-disc pl-6 mt-4 space-y-2">
  //                     <li>Complete chart data from January 2026 to the present</li>
  //                     <li>Easy identification of number patterns</li>
  //                     <li>Access to multiple game updates in one place</li>
  //                     <li>Simple and structured data for analysis</li>
  //                 </ul>
  //             </>
  //         ),
  //     },
  //     {
  //         heading: "Why Choose A7 Satta King",
  //         description: (
  //             <>
  //                 <p>A7 Satta King is preferred for:</p>

  //                 <ul className="list-disc pl-6 mt-4 space-y-2">
  //                     <li>Fast and verified result updates</li>
  //                     <li>Clean and easy-to-read charts</li>
  //                     <li>Mobile-friendly interface</li>
  //                     <li>Smooth navigation and user experience</li>
  //                     <li>Access to multiple Satta markets</li>
  //                 </ul>
  //             </>
  //         ),
  //     },
  //     {
  //         heading: "Stay Updated with Dwarka Satta News",
  //         description:
  //             "A7 Satta King regularly shares updates related to chart changes, trends, and daily results. Users can stay connected to get the latest information quickly and easily.",
  //     },
  //     {
  //         heading: "Discover Additional Daily Satta Result Options",
  //         description: (
  //             <>
  //                 Along with checking Dwarka updates, users also explore games like <Link href="https://www.a7sattaking.co/disawar" className="text-blue-600 underline">
  //               Disawar Satta Result
  //             </Link>, <Link href="/shri-ganesh" className="text-blue-600 underline">Shri Ganesh Satta Result</Link>, and <Link href="/gali" className="text-blue-600 underline">Gali Satta Result</Link> to stay updated with different result timings. You can also follow <Link href="/raj-shree" className="text-blue-600 underline">Raj Shree Satta Result</Link> and <Link href="/udaipur-city" className="text-blue-600 underline">Udaipur City Satta Result</Link> for additional updates throughout the day.
  //             </>
  //         ),
  //     },
  //     {
  //         heading: "Important Disclaimer",
  //         description:
  //             "A7 Satta King provides Dwarka Satta Result and chart information for informational purposes only. The platform does not promote any illegal activity. Users should follow local laws and use the information at their own risk.",
  //     },
  // ];

  const infoSections = [
    {
      heading: "Dwarka Satta Result & Chart 2026 – लाइव अपडेट",
      description: (
        <>
          <p>
            A7 Satta King में आपका स्वागत है। यह Dwarka Satta Result और 2026 के
            चार्ट अपडेट देखने के लिए एक भरोसेमंद प्लेटफॉर्म है। यहाँ यूजर्स को
            सत्यापित रिजल्ट, दैनिक अपडेट और व्यवस्थित चार्ट की जानकारी आसान और
            स्पष्ट भाषा में मिलती है।
          </p>

          <p className="mt-3">
            इस प्लेटफॉर्म पर 1 जनवरी 2026 से लेकर आज तक का पूरा पुराना रिकॉर्ड
            उपलब्ध है, जिससे यूजर्स नंबरों में होने वाले बदलावों को ट्रैक कर
            सकते हैं, पुराने पैटर्न देख सकते हैं और बिना किसी परेशानी के अपडेट
            रह सकते हैं। चाहे आप आज का रिजल्ट देख रहे हों या पुराने डेटा का
            विश्लेषण कर रहे हों, सभी जानकारी एक ही जगह उपलब्ध है।
          </p>
        </>
      ),
    },
    {
      heading: "Dwarka Satta क्या है?",
      description: (
        <>
          <p>
            Dwarka Satta बड़े Satta Matka नेटवर्क का एक हिस्सा है, जिसमें Gali,
            Disawar और Faridabad जैसे लोकप्रिय बाजार शामिल हैं। हर बाजार का अपना
            रिजल्ट टाइम और यूजर्स का अलग समूह होता है।
          </p>

          <p className="mt-3">
            कई यूजर्स रोजाना Dwarka Satta को फॉलो करते हैं, ताकि वे रिजल्ट देख
            सकें और नंबरों के पैटर्न को समझ सकें। A7 Satta King पर सभी रिजल्ट
            आसान फॉर्मेट में दिखाए जाते हैं, जिससे यूजर्स अपडेट को आसानी से समझ
            सकते हैं और समय के साथ होने वाले बदलावों को ट्रैक कर सकते हैं।
          </p>
        </>
      ),
    },
    {
      heading: "Dwarka Satta Result का समय",
      description: (
        <>
          <p>
            Dwarka Satta के रिजल्ट आमतौर पर हर दिन एक निश्चित समय पर जारी किए
            जाते हैं। पुराने रिकॉर्ड के अनुसार, रिजल्ट सामान्यतः रात 10:10 बजे
            से 10:15 बजे के बीच घोषित किए जाते हैं।
          </p>

          <p className="mt-3">
            हालांकि, अपडेट के आधार पर समय में थोड़ा बदलाव हो सकता है। इसलिए
            यूजर्स को नवीनतम जानकारी के लिए नियमित रूप से वेबसाइट चेक करने की
            सलाह दी जाती है।
          </p>
        </>
      ),
    },
    {
      heading: "आज का Dwarka Satta Result",
      description: (
        <>
          <p>
            आज का Dwarka Satta Result देखने वाले यूजर्स इस पेज पर आसानी से
            नवीनतम अपडेट प्राप्त कर सकते हैं। रिजल्ट की सटीकता सुनिश्चित करने के
            लिए उचित जांच के बाद ही जानकारी प्रकाशित की जाती है।
          </p>

          <p className="mt-3">
            नया रिजल्ट और उससे जुड़ी जानकारी देखने के लिए बस इस पेज को रिफ्रेश
            करें।
          </p>
        </>
      ),
    },
    {
      heading: "Dwarka Satta Chart 2026",
      description: (
        <>
          <p>
            Dwarka Satta Chart 2026 में 1 जनवरी 2026 से लेकर वर्तमान तारीख तक के
            दैनिक रिजल्ट व्यवस्थित रूप में दिए गए हैं। इससे यूजर्स समय के साथ
            नंबरों में होने वाले बदलावों को देख सकते हैं।
          </p>

          <p className="mt-3">
            मासिक चार्ट में किसी विशेष महीने के रिजल्ट का सारांश दिया जाता है,
            जिससे अलग-अलग समय में होने वाले बदलावों और पैटर्न को समझना आसान हो
            जाता है।
          </p>
        </>
      ),
    },
    {
      heading: "मासिक और वार्षिक चार्ट की जानकारी",
      description: (
        <>
          <p>
            मासिक और वार्षिक चार्ट नंबरों की आवृत्ति और उनके रुझानों को बेहतर
            तरीके से समझने में मदद करते हैं।
          </p>

          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>मासिक चार्ट कम समय में होने वाले बदलावों को दिखाते हैं।</li>
            <li>
              वार्षिक चार्ट लंबे समय के पैटर्न को ट्रैक करने में मदद करते हैं।
            </li>
            <li>यूजर्स अलग-अलग समय के डेटा की तुलना कर सकते हैं।</li>
          </ul>

          <p className="mt-3">
            इन जानकारियों से यूजर्स यह देख सकते हैं कि समय के साथ नंबर किस तरह
            दोहराए जाते हैं या उनमें किस प्रकार बदलाव होते हैं।
          </p>
        </>
      ),
    },
    {
      heading: "यूजर्स Dwarka Satta का पुराना रिकॉर्ड क्यों देखते हैं?",
      description: (
        <>
          <p>यूजर्स बेहतर समझ और जानकारी के लिए पुराने डेटा को देखते हैं।</p>

          <p className="mt-3 font-bold">इसके मुख्य कारण हैं:</p>

          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>जनवरी 2026 से वर्तमान तारीख तक का पूरा चार्ट डेटा।</li>
            <li>नंबरों के पैटर्न को आसानी से पहचानने की सुविधा।</li>
            <li>एक ही जगह पर कई बाजारों के अपडेट।</li>
            <li>विश्लेषण के लिए आसान और व्यवस्थित डेटा।</li>
          </ul>
        </>
      ),
    },
    {
      heading: "A7 Satta King क्यों चुनें?",
      description: (
        <>
          <p>A7 Satta King को इन सुविधाओं के लिए पसंद किया जाता है:</p>

          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>तेज और सत्यापित रिजल्ट अपडेट।</li>
            <li>साफ और आसानी से पढ़े जाने वाले चार्ट।</li>
            <li>मोबाइल के अनुकूल इंटरफेस।</li>
            <li>आसान नेविगेशन और बेहतर यूजर अनुभव।</li>
            <li>कई Satta बाजारों की जानकारी एक ही जगह।</li>
          </ul>
        </>
      ),
    },
    {
      heading: "Dwarka Satta की ताजा खबरों से अपडेट रहें",
      description:
        "A7 Satta King नियमित रूप से चार्ट में होने वाले बदलावों, रुझानों और दैनिक रिजल्ट से जुड़ी जानकारी साझा करता है। यूजर्स नवीनतम जानकारी जल्दी और आसानी से प्राप्त करने के लिए वेबसाइट पर अपडेट चेक कर सकते हैं।",
    },
    {
      heading: "रोजाना के अन्य Satta Result विकल्पों के बारे में जानें",
      description: (
        <>
          Dwarka के अपडेट देखने के साथ-साथ, यूजर्स अलग-अलग रिजल्ट टाइमिंग की
          जानकारी पाने के लिए{" "}
          <Link href="/disawar" className="text-blue-600 underline">
            Disawar Satta Result
          </Link>
          ,{" "}
          <Link href="/shri-ganesh" className="text-blue-600 underline">
            Shri Ganesh Satta Result
          </Link>{" "}
          और{" "}
          <Link href="/gali" className="text-blue-600 underline">
            Gali Satta Result
          </Link>{" "}
          जैसे गेम भी देखते हैं। इसके अलावा, आप दिनभर के अन्य अपडेट प्राप्त करने
          के लिए{" "}
          <Link href="/raj-shree" className="text-blue-600 underline">
            Raj Shree Satta Result
          </Link>{" "}
          और{" "}
          <Link href="/udaipur-city" className="text-blue-600 underline">
            Udaipur City Satta Result
          </Link>{" "}
          को भी फॉलो कर सकते हैं।
        </>
      ),
    },
    {
      heading: "महत्वपूर्ण डिस्क्लेमर",
      description:
        "A7 Satta King पर Dwarka Satta Result और चार्ट से जुड़ी जानकारी केवल सूचनात्मक उद्देश्यों के लिए दी जाती है। यह प्लेटफॉर्म किसी भी गैरकानूनी गतिविधि को बढ़ावा नहीं देता है। यूजर्स को अपने स्थानीय कानूनों का पालन करना चाहिए और इस जानकारी का उपयोग अपने जोखिम पर करना चाहिए।",
    },
  ];

  //   const faqItems = [
  //     {
  //       question: "What is Dwarka Satta?",
  //       answer:
  //         "Dwarka Satta is a number-based system where users check daily results and charts.",
  //     },
  //     {
  //       question: "Where can I check today’s Dwarka Satta Result?",
  //       answer: "You can check the latest result on A7 Satta King.",
  //     },
  //     {
  //       question: "How often are results updated?",
  //       answer: "Results are updated daily after verification.",
  //     },
  //     {
  //       question: "What is the result timing?",
  //       answer: "Results are usually announced between 10:10 PM and 10:15 PM.",
  //     },
  //     {
  //       question: "Can I view old charts?",
  //       answer: "Yes, charts from January 2026 till today are available.",
  //     },
  //     {
  //       question: "Is A7 Satta King reliable?",
  //       answer: "Yes, it provides accurate and verified results.",
  //     },
  //     {
  //       question: "Do I need to register?",
  //       answer: "No, all results and charts are free.",
  //     },
  //     {
  //       question: "Does the platform provide predictions?",
  //       answer: "No, only results and charts are shared.",
  //     },
  //     {
  //       question: "Can I check results on mobile?",
  //       answer: "Yes, the website is fully mobile-friendly.",
  //     },
  //     {
  //       question: "Are results updated daily?",
  //       answer: "Yes, all results and charts are updated every day.",
  //     },
  //   ];

  const faqItems = [
    {
      question: "Dwarka Satta क्या है?",
      answer:
        "Dwarka Satta एक नंबर आधारित सिस्टम है, जिसमें यूजर्स दैनिक रिजल्ट और चार्ट देखते हैं।",
    },
    {
      question: "आज का Dwarka Satta Result कहाँ देख सकते हैं?",
      answer: "आप आज का नवीनतम रिजल्ट A7 Satta King पर देख सकते हैं।",
    },
    {
      question: "रिजल्ट कितनी बार अपडेट किए जाते हैं?",
      answer: "रिजल्ट की जांच के बाद उन्हें हर दिन अपडेट किया जाता है।",
    },
    {
      question: "Dwarka Satta Result का समय क्या है?",
      answer:
        "रिजल्ट आमतौर पर रात 10:10 बजे से 10:15 बजे के बीच घोषित किए जाते हैं।",
    },
    {
      question: "क्या मैं पुराने चार्ट देख सकता हूँ?",
      answer: "हाँ, जनवरी 2026 से लेकर आज तक के पुराने चार्ट उपलब्ध हैं।",
    },
    {
      question: "क्या A7 Satta King भरोसेमंद है?",
      answer:
        "यह प्लेटफॉर्म रिजल्ट और चार्ट से जुड़ी सत्यापित जानकारी उपलब्ध कराने का दावा करता है।",
    },
    {
      question: "क्या वेबसाइट पर रजिस्ट्रेशन करना जरूरी है?",
      answer: "नहीं, सभी रिजल्ट और चार्ट मुफ्त में देखे जा सकते हैं।",
    },
    {
      question: "क्या यह प्लेटफॉर्म भविष्यवाणी भी करता है?",
      answer:
        "नहीं, यहाँ केवल रिजल्ट और चार्ट से जुड़ी जानकारी साझा की जाती है।",
    },
    {
      question: "क्या मैं मोबाइल पर रिजल्ट देख सकता हूँ?",
      answer: "हाँ, यह वेबसाइट मोबाइल के अनुकूल बनाई गई है।",
    },
    {
      question: "क्या रिजल्ट रोजाना अपडेट किए जाते हैं?",
      answer: "हाँ, रिजल्ट और चार्ट की जानकारी हर दिन अपडेट की जाती है।",
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
