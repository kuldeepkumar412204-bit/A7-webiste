"use client";

import React, { useState } from "react";

export interface InfoSection {
  heading: string;
  description: React.ReactNode;
}

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  // State to track which FAQ accordion item is open
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  // Main H2 Text Content Sections
  // const infoSections: InfoSection[] = [
  //   {
  //     heading: "What is A7 Satta King?",
  //     description:
  //       "A7 Satta King is a famous platform for announcing many satta results. While several websites announce the satta results, they are not reliable, and there is a lack of consistency; on the other hand, A7 Satta King is a trustworthy and consistent website for checking everyday satta results, and players can check the whole year's satta chart here, which is crucial for the game.",
  //   },
  //   {
  //     heading: "How do a7 satta King work",
  //     description: (
  //       <>
  //         On the A7 Satta King website, the Satta King or Satta Matka charts are
  //         simply there to show the latest game results. The names or entries you
  //         see on the chart page are part of the most recently announced results
  //         for each game and its timing.
  //         <br />
  //         We keep things simple and easy to follow, so you don’t have to spend
  //         time trying to figure anything out. You can easily check the latest
  //         updates and keep up with the results without any confusion. Everything
  //         is designed to be simple and user-friendly, so your experience feels
  //         smooth and stress-free.
  //       </>
  //     ),
  //   },
  //   {
  //     heading: "Understanding A7 Satta King Chart",
  //     description:
  //       "A7 Satta King Charts are easy to check and comprehend. The chart page is made to display results in an easy-to-understand, step-by-step fashion. Every result entry is presented on a daily, monthly, and annual basis. A lot of SATTA players look at earlier charts to observe how results have changed over time. Examining chart history maintains transparency and aids users in understanding patterns.",
  //   },
  //   {
  //     heading: "Games Covered on A7 Satta King",
  //     description: (
  //       <>
  //         A7 Satta King provides thorough details about every well-known Satta
  //         game that Satta players regularly play. For several well-known Satta
  //         games, including{" "}
  //         <a
  //           href="https://www.a7sattaking.co/sadar-bazar"
  //           className="internal-link"
  //         >
  //           Sadar Bazar
  //         </a>
  //         ,{" "}
  //         <a
  //           href="https://www.a7sattaking.co/gwalior"
  //           className="internal-link"
  //         >
  //           Gwalior Satta
  //         </a>
  //         , Satta King Disawar, A7 Satta,{" "}
  //         <a
  //           href="https://www.a7sattaking.co/delhi-bazar"
  //           className="internal-link"
  //         >
  //           Delhi Bazar
  //         </a>
  //         ,{" "}
  //         <a
  //           href="https://www.a7sattaking.co/delhi-matka"
  //           className="internal-link"
  //         >
  //           Delhi Matka
  //         </a>
  //         ,{" "}
  //         <a
  //           href="https://www.a7sattaking.co/gali-satta"
  //           className="internal-link"
  //         >
  //           Gali Satta
  //         </a>
  //         , and{" "}
  //         <a
  //           href="https://www.a7sattaking.co/shri-ganesh"
  //           className="internal-link"
  //         >
  //           Shri Ganesh
  //         </a>
  //         , players can access the most recent Satta charts and results.
  //         Regional updates for{" "}
  //         <a href="https://www.a7sattaking.co/agra" className="internal-link">
  //           Agra Satta
  //         </a>
  //         ,{" "}
  //         <a
  //           href="https://www.a7sattaking.co/faridabad"
  //           className="internal-link"
  //         >
  //           Faridabad Satta
  //         </a>
  //         ,{" "}
  //         <a href="https://www.a7sattaking.co/alwar" className="internal-link">
  //           Alwar Satta
  //         </a>
  //         ,{" "}
  //         <a
  //           href="https://www.a7sattaking.co/gaziabad"
  //           className="internal-link"
  //         >
  //           Ghaziabad Satta
  //         </a>
  //         , A7 Satta, and{" "}
  //         <a href="https://www.a7sattaking.co/dwarka" className="internal-link">
  //           Dwarka Satta
  //         </a>{" "}
  //         are also available on the website.
  //       </>
  //     ),
  //   },
  //   {
  //     heading: "How to play A7 Satta King games?",
  //     description:
  //       "A7 Satta does not promote or organise any Satta King games, though individuals may advertise on this website. To play Satta King games, you must get in touch with people who are involved in the industry. Typically, they take your bet money, place it, and give you the winning amount if your prediction is correct.",
  //   },
  //   {
  //     heading: "Why Do Users Trust A7 Satta King?",
  //     description: (
  //       <>
  //         Every STA player frequently searches for an A7 Satta STA website that
  //         offers concise explanations, trustworthy results, up-to-date charts,
  //         and an easy-to-use interface. A7 Satta King.co's primary goal is to
  //         make information clear and easy to access so that users can locate
  //         what they're looking for. Satta players may stay up to date with ease
  //         thanks to well-organised records, a simple design, and often updated
  //         results charts.
  //         <br />
  //         <br />
  //         <strong>Real-time updates:</strong> Users can keep informed without
  //         needless waits because results are updated rapidly. This facilitates
  //         their ability to verify results as soon as they are declared.
  //         <br />
  //         <br />
  //         <strong>Reliability of results:</strong> The platform is renowned for
  //         disseminating reliable and consistent results, which gradually fosters
  //         user confidence. Because the information is reliably and plainly
  //         delivered, people rely on it.
  //       </>
  //     ),
  //   },
  //   {
  //     heading: "Can I Check A7 Satta Results on This Website?",
  //     description:
  //       "Users can examine A7 Satta result-related information on the A7 Satta website, since both platforms often include comparable Satta game games, result updates, and historical chart records. These websites are frequently used by visitors to examine past performance charts, daily number updates, game timing data, and historical record archives related to frequently searched Satta markets.",
  //   },
  //   {
  //     heading: "Legal Disclaimer",
  //     description: (
  //       <>
  //         This platform is solely intended for informative reasons. We do not
  //         encourage or condone unlawful betting or gambling. Before
  //         participating in any such activity, users should abide by their local
  //         laws.
  //         <br />
  //         <br />
  //         The correctness of the information supplied is not guaranteed by us.
  //         You use our platform at your own risk, and we have no liability for
  //         any damages or legal problems.
  //       </>
  //     ),
  //   },
  // ];

  const infoSections: InfoSection[] = [
  {
    heading: "A7 Satta King क्या है?",
    description:
      "A7 Satta King कई सट्टा रिजल्ट की जानकारी देने वाला एक प्रसिद्ध प्लेटफॉर्म है। जहां कई वेबसाइटें सट्टा रिजल्ट घोषित करती हैं, वहीं वे विश्वसनीय नहीं होती हैं और उनमें निरंतरता की कमी होती है। दूसरी ओर, A7 Satta King दैनिक सट्टा रिजल्ट देखने के लिए एक भरोसेमंद और नियमित वेबसाइट है। यहां खिलाड़ी पूरे साल का सट्टा चार्ट भी देख सकते हैं, जो इस गेम के लिए महत्वपूर्ण है।",
  },
  {
    heading: "A7 Satta King कैसे काम करता है?",
    description: (
      <>
        A7 Satta King वेबसाइट पर Satta King या Satta Matka के चार्ट केवल नवीनतम गेम रिजल्ट दिखाने के लिए उपलब्ध होते हैं। चार्ट पेज पर दिखाई देने वाले नाम या एंट्री प्रत्येक गेम के हाल ही में घोषित परिणामों और उनके समय का हिस्सा होते हैं।
        <br />
        हम चीजों को सरल और आसान रखते हैं, ताकि आपको कुछ भी समझने में समय बर्बाद न करना पड़े। आप बिना किसी परेशानी के नवीनतम अपडेट देख सकते हैं और रिजल्ट की जानकारी प्राप्त कर सकते हैं। सब कुछ सरल और उपयोगकर्ता के अनुकूल बनाया गया है, ताकि आपका अनुभव सहज और तनावमुक्त रहे।
      </>
    ),
  },
  {
    heading: "A7 Satta King चार्ट को समझें",
    description:
      "A7 Satta King Charts को देखना और समझना आसान है। चार्ट पेज को इस तरह बनाया गया है कि रिजल्ट को आसानी से समझ आने वाले क्रम में दिखाया जा सके। प्रत्येक रिजल्ट एंट्री दैनिक, मासिक और वार्षिक आधार पर प्रस्तुत की जाती है। कई SATTA खिलाड़ी समय के साथ रिजल्ट में हुए बदलावों को देखने के लिए पुराने चार्ट देखते हैं। चार्ट के पुराने रिकॉर्ड की जांच करने से पारदर्शिता बनी रहती है और यूजर्स को पैटर्न समझने में मदद मिलती है।",
  },
  {
    heading: "A7 Satta King पर कवर किए गए गेम",
    description: (
      <>
        A7 Satta King नियमित रूप से खेले जाने वाले सभी प्रसिद्ध सट्टा गेम्स के बारे में विस्तृत जानकारी प्रदान करता है। कई लोकप्रिय सट्टा गेम्स, जिनमें{" "}
        <a
          href="https://a7sattaking.co/sadar-bazar"
          className="internal-link"
        >
          Sadar Bazar
        </a>
        ,{" "}
        <a
          href="https://a7sattaking.co/gwalior"
          className="internal-link"
        >
          Gwalior Satta
        </a>
        , Satta King Disawar, A7 Satta,{" "}
        <a
          href="https://a7sattaking.co/delhi-bazar"
          className="internal-link"
        >
          Delhi Bazar
        </a>
        ,{" "}
        <a
          href="https://a7sattaking.co/delhi-matka"
          className="internal-link"
        >
          Delhi Matka
        </a>
        ,{" "}
        <a
          href="https://a7sattaking.co/Gali"
          className="internal-link"
        >
          Gali Satta
        </a>
        {" "}और{" "}
        <a
          href="https://a7sattaking.co/shri-ganesh"
          className="internal-link"
        >
          Shri Ganesh
        </a>
        {" "}शामिल हैं, उनके नवीनतम सट्टा चार्ट और रिजल्ट देखे जा सकते हैं।
        <br />
        <br />
        <a
          href="https://a7sattaking.co/agra"
          className="internal-link"
        >
          Agra Satta
        </a>
        ,{" "}
        <a
          href="https://a7sattaking.co/faridabad"
          className="internal-link"
        >
          Faridabad Satta
        </a>
        ,{" "}
        <a
          href="https://a7sattaking.co/alwar"
          className="internal-link"
        >
          Alwar Satta
        </a>
        ,{" "}
        <a
          href="https://a7sattaking.co/ghaziabad"
          className="internal-link"
        >
          Gaziabad Satta
        </a>
        , A7 Satta और{" "}
        <a
          href="https://a7sattaking.co/dwarka"
          className="internal-link"
        >
          Dwarka Satta
        </a>
        {" "}के क्षेत्रीय अपडेट भी वेबसाइट पर उपलब्ध हैं।
      </>
    ),
  },
  {
    heading: "A7 Satta King गेम कैसे खेलें?",
    description:
      "A7 Satta King किसी भी सट्टा किंग गेम का प्रचार या आयोजन नहीं करता, हालाँकि इस वेबसाइट पर लोग विज्ञापन दे सकते हैं। सट्टा किंग गेम खेलने के लिए आपको इस कारोबार से जुड़े लोगों से संपर्क करना होगा। आमतौर पर वे आपकी दाँव की रकम लेकर उसे लगाते हैं और आपका अनुमान सही निकलने पर जीती हुई रकम आपको देते हैं।",
  },
  {
    heading: "यूज़र A7 Satta King पर भरोसा क्यों करते हैं?",
    description: (
      <>
        हर सट्टा खिलाड़ी अक्सर ऐसी A7 Satta King वेबसाइट खोजता है जो संक्षिप्त जानकारी, भरोसेमंद रिज़ल्ट, अप-टू-डेट चार्ट और आसान इंटरफ़ेस देती हो। A7 Satta King.co का मुख्य लक्ष्य जानकारी को स्पष्ट और आसानी से उपलब्ध कराना है, ताकि यूज़र्स को वही मिले जो वे खोज रहे हैं। अच्छी तरह व्यवस्थित रिकॉर्ड, सरल डिज़ाइन और बार-बार अपडेट होने वाले रिज़ल्ट चार्ट की वजह से सट्टा खिलाड़ी आसानी से अपडेट रह सकते हैं।
        <br />
        <br />
        <strong>रियल-टाइम अपडेट:</strong> रिज़ल्ट तेज़ी से अपडेट होते हैं, इसलिए यूज़र्स को बेवजह इंतज़ार नहीं करना पड़ता। रिज़ल्ट घोषित होते ही वे उसे जाँच सकते हैं।
        <br />
        <br />
        <strong>रिज़ल्ट की विश्वसनीयता:</strong> यह प्लेटफ़ॉर्म भरोसेमंद और एकसमान रिज़ल्ट देने के लिए जाना जाता है, जिससे धीरे-धीरे यूज़र्स का विश्वास बढ़ता है। जानकारी लगातार और साफ़ ढंग से दी जाती है, इसीलिए लोग इस पर भरोसा करते हैं।
      </>
    ),
  },
  {
    heading: "क्या मैं इस वेबसाइट पर A7 Satta रिज़ल्ट देख सकता हूँ?",
    description:
      "चूँकि दोनों प्लेटफ़ॉर्म पर अक्सर एक जैसे सट्टा मार्केट गेम, रिज़ल्ट अपडेट और पुराने चार्ट रिकॉर्ड होते हैं, इसलिए यूज़र A7 Satta वेबसाइट पर A7 Satta रिज़ल्ट से जुड़ी जानकारी देख सकते हैं। विज़िटर अक्सर इन वेबसाइटों पर पिछले प्रदर्शन के चार्ट, रोज़ाना के नंबर अपडेट, मार्केट टाइमिंग की जानकारी और अक्सर खोजे जाने वाले सट्टा मार्केट के पुराने रिकॉर्ड का आर्काइव देखते हैं।",
  },
  {
    heading: "कानूनी अस्वीकरण (Legal Disclaimer)",
    description: (
      <>
        यह प्लेटफ़ॉर्म केवल जानकारी के उद्देश्य से बनाया गया है। हम गैरकानूनी सट्टेबाज़ी या जुए को बढ़ावा या समर्थन नहीं देते। ऐसी किसी भी गतिविधि में भाग लेने से पहले यूज़र्स को अपने स्थानीय कानूनों का पालन करना चाहिए।
        <br />
        <br />
        हम दी गई जानकारी की सटीकता की गारंटी नहीं देते। हमारे प्लेटफ़ॉर्म का उपयोग आप अपने जोखिम पर करते हैं, और किसी भी नुकसान या कानूनी समस्या के लिए हम ज़िम्मेदार नहीं हैं।
      </>
    ),
  },
];

  // Accordion FAQs
  // const faqItems: FAQItem[] = [
  //   {
  //     question: "A7 Satta King results: What is it?",
  //     answer:
  //       "Satta King and Matka result tables, daily winning numbers, historical records, and updates for other Satta games are all available on A7 Satta. People go to the website to compare historical data and view results.",
  //   },
  //   {
  //     question: "What is Satta Matka or A7 Satta King?",
  //     answer:
  //       "The number-based lottery-style game A7 Satta King, also called Satta Matka, has its roots in India. It gained popularity over time as a type of betting where winning numbers are revealed every day.",
  //   },
  //   {
  //     question: "Is it possible to play Satta on the A7 Satta website?",
  //     answer:
  //       "No, this website does not allow you to play satta. Only results and historical record charts are offered by A7 Satta. In several regions of India, playing satta may be prohibited.",
  //   },
  //   {
  //     question: "Are there more kinds of Satta games available at A7 Satta?",
  //     answer:
  //       "Yes, in addition to frequent updates, the portal offers charts and results for a number of well-known satta games.",
  //   },
  //   {
  //     question: "How frequently are A7 Satta results updated?",
  //     answer:
  //       "Users may quickly review the most recent results because charts and results are updated often.",
  //   },
  //   {
  //     question: "Can I view the chart records from prior years on A7 Satta?",
  //     answer:
  //       "Indeed, users can access chart records from previous years, which facilitates the tracking of historical data and trends.",
  //   },
  //   {
  //     question: "Which games are available on A7 Satta?",
  //     answer:
  //       "Disawar, Gali, Delhi Bazar, Delhi Matka, Sadar Bazar, Shri Ganesh, Faridabad, Agra, Alwar, Ghaziabad, Dwarka, and other regional marketplaces are among the games covered by the platform.",
  //   },
  //   {
  //     question: "Is it permissible to use this website in India?",
  //     answer:
  //       "In several regions of India, satta activities are prohibited. This website shows findings and charts for reference and is solely intended for informational purposes.",
  //   },
  //   {
  //     question:
  //       "Do I have to register in order to view my Alwar Satta results?",
  //     answer:
  //       "There is no need to register. The charts and results are all free.",
  //   },
  //   {
  //     question: "How can I interpret the A7 Satta charts?",
  //     answer:
  //       "Charts are arranged by to winning numbers, game names, and dates. Users can peruse previous data or verify daily outcomes with ease.",
  //   },
  //   {
  //     question: "Can I use this website to anticipate winning numbers?",
  //     answer:
  //       "No, the website only displays previous outcomes. Future predictions cannot be guaranteed because Satta results are dependent on chance.",
  //   },
  //   {
  //     question: "Does A7 Satta provide leak numbers?",
  //     answer:
  //       "No, neither leaks nor guaranteed figures are offered by the platform. Such claims should be avoided by users elsewhere.",
  //   },
  //   {
  //     question: "What time is Gali Satta?",
  //     answer: "Results for Gali Satta are typically released at 11:50 p.m.",
  //   },
  //   {
  //     question: "What is the Sadar Bazar Satta outcome timing?",
  //     answer: "Usually, the outcome is announced about 1:40 PM.",
  //   },
  //   {
  //     question: "What time does Delhi Bazar Satta take place?",
  //     answer: "The outcome is often declared at 3:10 PM.",
  //   },
  //   {
  //     question: "What time is Shri Ganesh?",
  //     answer: "The time of the outcome is around 04:40 PM.",
  //   },
  //   {
  //     question: "What time is Faridabad?",
  //     answer: "Usually, the outcome is declared at 6:10 PM.",
  //   },
  //   {
  //     question: "What time is Disawar?",
  //     answer:
  //       "Disawar results are often announced between 5:00 and 5:05 in the morning.",
  //   },
  // ];

  const faqItems: FAQItem[] = [
    {
      question: "A7 Satta क्या है?",
      answer:
        "A7 Satta पर Satta King और Matka रिजल्ट टेबल, दैनिक जीतने वाले नंबर, पुराने रिकॉर्ड और अन्य सट्टा गेम्स के अपडेट उपलब्ध हैं। लोग पुराने डेटा की तुलना करने और रिजल्ट देखने के लिए इस वेबसाइट पर आते हैं।",
    },
    {
      question: "Satta Matka या A7 Satta King क्या है?",
      answer:
        "A7 Satta King, जिसे Satta Matka भी कहा जाता है, एक नंबर-आधारित लॉटरी जैसा गेम है जिसकी शुरुआत भारत में हुई थी। समय के साथ यह सट्टेबाजी के एक प्रकार के रूप में लोकप्रिय हुआ, जिसमें हर दिन जीतने वाले नंबर घोषित किए जाते हैं।",
    },
    {
      question: "क्या A7 Satta वेबसाइट पर सट्टा खेलना संभव है?",
      answer:
        "नहीं, यह वेबसाइट सट्टा खेलने की सुविधा नहीं देती है। A7 Satta पर केवल रिजल्ट और पुराने रिकॉर्ड के चार्ट उपलब्ध कराए जाते हैं। भारत के कई क्षेत्रों में सट्टा खेलना प्रतिबंधित हो सकता है।",
    },
    {
      question: "क्या A7 Satta पर अन्य प्रकार के सट्टा गेम्स भी उपलब्ध हैं?",
      answer:
        "हां, नियमित अपडेट के अलावा यह पोर्टल कई प्रसिद्ध सट्टा गेम्स के चार्ट और रिजल्ट भी उपलब्ध कराता है।",
    },
    {
      question: "A7 Satta के रिजल्ट कितनी बार अपडेट किए जाते हैं?",
      answer:
        "यूजर्स नवीनतम रिजल्ट आसानी से देख सकते हैं, क्योंकि चार्ट और रिजल्ट नियमित रूप से अपडेट किए जाते हैं।",
    },
    {
      question:
        "क्या मैं A7 Satta पर पिछले वर्षों के चार्ट रिकॉर्ड देख सकता हूं?",
      answer:
        "हां, यूजर्स पिछले वर्षों के चार्ट रिकॉर्ड देख सकते हैं, जिससे पुराने डेटा और ट्रेंड को ट्रैक करना आसान हो जाता है।",
    },
    {
      question: "A7 Satta पर कौन-कौन से गेम उपलब्ध हैं?",
      answer:
        "इस प्लेटफॉर्म पर Disawar, Gali, Delhi Bazar, Delhi Matka, Sadar Bazar, Shri Ganesh, Faridabad, Agra, Alwar, Gaziabad, Dwarka और अन्य मार्केट से संबंधित जानकारी उपलब्ध है।",
    },
    {
      question: "क्या भारत में इस वेबसाइट का उपयोग करना कानूनी है?",
      answer:
        "भारत के कई क्षेत्रों में सट्टा गतिविधियां प्रतिबंधित हैं। यह वेबसाइट केवल जानकारी के उद्देश्य से रिजल्ट और चार्ट दिखाती है।",
    },
    {
      question:
        "क्या मुझे Alwar Satta का रिजल्ट देखने के लिए रजिस्ट्रेशन करना होगा?",
      answer:
        "नहीं, रजिस्ट्रेशन करने की कोई आवश्यकता नहीं है। सभी चार्ट और रिजल्ट मुफ्त में उपलब्ध हैं।",
    },
    {
      question: "मैं A7 Satta चार्ट को कैसे समझ सकता हूं?",
      answer:
        "चार्ट को जीतने वाले नंबरों, गेम के नाम और तारीखों के अनुसार व्यवस्थित किया जाता है। यूजर्स पुराने डेटा को आसानी से देख सकते हैं या दैनिक परिणामों की जांच कर सकते हैं।",
    },
    {
      question:
        "क्या मैं इस वेबसाइट का उपयोग जीतने वाले नंबरों का अनुमान लगाने के लिए कर सकता हूं?",
      answer:
        "नहीं, वेबसाइट केवल पुराने परिणाम दिखाती है। भविष्य के परिणामों की गारंटी नहीं दी जा सकती, क्योंकि सट्टा के परिणाम संयोग पर निर्भर करते हैं।",
    },
    {
      question: "क्या A7 Satta लीक नंबर प्रदान करता है?",
      answer:
        "नहीं, यह प्लेटफॉर्म किसी भी प्रकार के लीक नंबर या गारंटीड आंकड़े उपलब्ध नहीं कराता है। यूजर्स को अन्य जगहों पर किए जाने वाले ऐसे दावों से बचना चाहिए।",
    },
    {
      question: "Gali Satta का समय क्या है?",
      answer: "Gali Satta के रिजल्ट आमतौर पर रात 11:50 बजे जारी किए जाते हैं।",
    },
    {
      question: "Sadar Bazar Satta का रिजल्ट कितने बजे आता है?",
      answer:
        "आमतौर पर इसका रिजल्ट दोपहर 1:40 बजे के आसपास घोषित किया जाता है।",
    },
    {
      question: "Delhi Bazar Satta का समय क्या है?",
      answer: "इसका रिजल्ट अक्सर दोपहर 3:15 बजे घोषित किया जाता है।",
    },
    {
      question: "Shri Ganesh का रिजल्ट कितने बजे आता है?",
      answer: "इसका रिजल्ट लगभग शाम 04:40 बजे घोषित किया जाता है।",
    },
    {
      question: "Faridabad का रिजल्ट कितने बजे आता है?",
      answer: "आमतौर पर इसका रिजल्ट शाम 6:10 बजे घोषित किया जाता है।",
    },
    {
      question: "Disawar का रिजल्ट कितने बजे आता है?",
      answer: "Disawar का रिजल्ट आमतौर पर सुबह 5:15 बजे घोषित किया जाता है।",
    },
  ];

  return (
    <>
      {/* FAQ Schema Script Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqItems) }}
      />

      <div className="w-full bg-white my-[16px] text-[16px]">
        <div className="w-full flex flex-col">
          {/* Render Main Content Blocks */}
          {infoSections.map((section, idx) => (
            <>
              <div key={idx} className="w-full text-primary">
                <div className="w-full p-4 py-2 mb-1">
                  <h2 className="text-[calc(1.3rem+.6vw)] font-semibold mb-[0.5rem]">
                    {section.heading}
                  </h2>
                  <p className="text-[20px]"> {section.description}</p>
                </div>
              </div>

              {/* <div key={idx} className="w-full">
            <div className="w-full bg-[#ffd800] p-4 mb-2 text-center border-b border-black/10">
              <h2 className="text-[#212529] font-bold text-[20px] tracking-wide">
                {section.heading}
              </h2>
            </div>

            <div className="w-full bg-white p-4 pt-0 md:px-6 max-w-8xl mx-auto">
              <div className="text-[#212529] font-medium leading-relaxed text-justify md:text-left tracking-normal">
                {section.description}
              </div>
            </div>
          </div> */}
            </>
          ))}

          {/* --- FREQUENTLY ASKED QUESTIONS (ACCORDION SECTION) --- */}
          <div className="w-full">
            {/* FAQ Main Yellow Header */}
            <div className="w-full bg-[#ffd200] py-3.5 px-4 text-center border-b border-black/10">
              <h2 className="text-black font-semibold text-sm sm:text-lg md:text-xl tracking-wide uppercase">
                Frequently Asked Questions
              </h2>
            </div>

            {/* Accordion List Container */}
            <div className="w-full bg-white py-6 px-4 md:px-6 max-w-4xl mx-auto">
              <div className="space-y-3">
                {faqItems.map((item, idx) => {
                  const isOpen = openFaqIdx === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 shadow-sm"
                    >
                      {/* Accordion Trigger Trigger button */}
                      <button
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex justify-between items-center text-left py-4 px-4 bg-[#ffd200] hover:bg-[#c4a000] transition-colors focus:outline-none"
                      >
                        <span className="text-black font-semibold text-xs sm:text-base pr-4">
                          {item.question}
                        </span>
                        {/* Accordion Indicator Icon */}
                        <span
                          className={`transform transition-transform duration-200 text-gray-600 font-bold text-sm sm:text-lg shrink-0`}
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      {/* Accordion Content Box */}
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          isOpen
                            ? "max-h-[500px] border-t border-gray-100"
                            : "max-h-0"
                        }`}
                      >
                        <div className="p-4 bg-white text-gray-800 text-xs sm:text-sm md:text-base leading-relaxed">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
