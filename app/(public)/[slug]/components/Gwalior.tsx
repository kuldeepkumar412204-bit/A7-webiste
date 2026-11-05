import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "./FAQSection";
import type { LatestResult } from "@/app/lib/homeData";
import { formatDrawDate } from "./formatDrawDate";

export const metadata: Metadata = {
  title: "Gwalior Satta Result 2026 Today | Chart & Daily Updates",
  description:
    "Check the latest Gwalior Satta Result 2026 with today’s updates, full chart, and previous records. Get fast, right results only on A7 Satta King.",
  keywords: [
    "Gwalior Satta Result",
    "Gwalior Result Today",
    "Gwalior Chart 2026",
    "Satta King Gwalior",
    "Gwalior Satta Chart",
    "Satta Result Gwalior",
  ],
  alternates: {
    canonical: `${process.env.SITE_URL}/gwalior`,
  },
  openGraph: {
    title: "Gwalior Satta Result 2026 Today | Chart & Daily Updates",
    description:
      "Check the latest Gwalior Satta Result 2026 with today’s updates, full chart, and previous records. Get fast, right results only on A7 Satta King.",
    url: `${process.env.SITE_URL}/gwalior`,
    siteName: "A7 Satta King",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gwalior Satta Result 2026 Today | Chart & Daily Updates",
    description:
      "Check the latest Gwalior Satta Result 2026 with today’s updates, full chart, and previous records. Get fast, right results only on A7 Satta King.",
  },
};

interface InfoSection {
  heading: string;
  description: React.ReactNode;
}

export default function Gwalior({ latest }: { latest?: LatestResult | null }) {
  // Main Content Blocks - styled like FAQSection
  // const infoSections: InfoSection[] = [
  //   {
  //     heading: "Gwalior Satta Result and Yearly Chart 2026",
  //     description:
  //       "Gwalior is an early afternoon game. On this page, you can check today's Gwalior Satta Result, the 2026 chart, and older records in one place, instead of searching across several pages.\n\nThe chart lists every date of the year. Below it, you will find the result time, how to check today's result, how to read the chart, how results are updated, and links to other games you may follow.",
  //   },
  //   {
  //     heading: "Latest Gwalior Satta Result",
  //     description: latest
  //       ? `Last chart update: ${formatDrawDate(latest.drawDate)}, ${latest.time} IST\nLatest available result: ${latest.result} (${formatDrawDate(latest.drawDate)})\nStatus: ${latest.isToday ? "Updated" : "Waiting for today's result"}`
  //       : "Latest available result: Not available yet\nStatus: Waiting for result",
  //   },
  //   {
  //     heading: "Gwalior Satta Result Time and Today's Result",
  //     description: (
  //       <>
  //         <p className="mb-3">The Gwalior result is declared at 2:20 PM. Plan to check the page shortly after that time. You can see the day's result on this Gwalior page or in the <Link href="/" className="text-blue-600 underline">home page</Link> table, where all game results are listed.</p>
  //         <p>If you open the page before 2:20 PM, today's result may not be added yet. Refresh the page after the result time to see the new entry.</p>
  //       </>
  //     ),
  //   },
  //   {
  //     heading: "Gwalior Result Time Compared With Other Games",
  //     description: (
  //       <>
  //         Gwalior comes shortly after <Link href="/sadar-bazar" className="text-blue-600 underline">Sadar Bazar</Link>, whose result is declared at 1:40 PM, and well before <Link href="/sialkot" className="text-blue-600 underline">Sialkot</Link>, which is declared at about 8:20 PM. If you follow several games, this gives you an idea of the order in which results appear during the day.
  //       </>
  //     ),
  //   },
  //   {
  //     heading: "How to Check Gwalior Satta Result Today",
  //     description: (
  //       <>
  //         <ol className="list-decimal list-inside space-y-1">
  //           <li>Open this page a few minutes after 2:20 PM.</li>
  //           <li>Find today's date in the chart. Dates run down the left side.</li>
  //           <li>Follow that row across to the column for the current month.</li>
  //           <li>The number in that cell is today's Gwalior result.</li>
  //         </ol>
  //         <p className="mt-3">If the cell shows a wait icon, the result has not been added yet. Wait a few minutes and refresh the page. You can also check the table at <Link href="/" className="text-blue-600 underline">home page</Link>, which lists the day's results for all games.</p>
  //       </>
  //     ),
  //   },
  //   {
  //     heading: "Why Check the Gwalior Chart?",
  //     description: (
  //       <>
  //         <p className="mb-3">The 2026 chart is a record of the Gwalior results by date. Dates 1 to 31 run down the left side and the months run across the top. Each result sits where its date row meets its month column.</p>
  //         <p className="mb-3">A wait icon means that date's result has not been added yet. This can be a date that has not happened yet, or a result that has not been added. Months at the start of the year may have fewer entries than the current month.</p>
  //         <h3 className="mb-3"><span className="font-bold">Look Up a Specific Date:</span> Find what was declared on any date already recorded this year, including days you missed. This is useful when you want to confirm a result rather than rely on memory.</h3>
  //         <h3 className="mb-3"><span className="font-bold">Compare Months:</span> Read across a row to compare the same date in different months, or read down a column to see one full month at a glance.</h3>
  //         <h3 className="mb-3"><span className="font-bold">Keep a Record:</span> Older entries stay in place, so the year's record remains complete, and you can return to it at any time.</h3>
  //         <p>The chart is a record of what was declared. It is not a prediction of future results, and earlier numbers do not show what the next result will be.</p>
  //       </>
  //     ),
  //   },
  //   {
  //     heading: "How Gwalior Results Are Updated",
  //     description: (
  //       <>
  //         <h3 className="mb-3"><span className="font-bold">Result Declared:</span> The Gwalior result is declared at 2:20 PM.</h3>
  //         <h3 className="mb-3"><span className="font-bold">Result Added:</span> After it is declared, the result is added to this page and to the home page table.</h3>
  //         <h3><span className="font-bold">Chart Updated:</span> The new result is added to the yearly chart, and older entries stay as they are. If you correct a result, the chart updates.</h3>
  //       </>
  //     ),
  //   },
  //   {
  //     heading: "What You Can Find on This Page",
  //     description: (
  //       <>
  //         <h3 className="mb-3"><span className="font-bold">Daily Gwalior Satta Result:</span> Today's result, added after 2:20 PM.</h3>
  //         <h3 className="mb-3"><span className="font-bold">Gwalior Satta Chart 2026:</span> The yearly chart with every recorded date.</h3>
  //         <h3 className="mb-3"><span className="font-bold">Previous Records:</span> Earlier results so that you can review past dates.</h3>
  //         <h3><span className="font-bold">Mobile and Desktop:</span> The page works on phones and desktops, and the chart scrolls sideways on smaller screens.</h3>
  //       </>
  //     ),
  //   },
  //   {
  //     heading: "More Satta Game Results",
  //     description: (
  //       <>
  //         Along with Gwalior, users on A7 Satta King also check <Link href="/sadar-bazar" className="text-blue-600 underline">Sadar Bazar Satta Result</Link>, <Link href="/gali" className="text-blue-600 underline">Gali Satta Result</Link>, <Link href="/delhi-bazar" className="text-blue-600 underline">Delhi Bazar Satta Result</Link>, and <Link href="/gaziabad" className="text-blue-600 underline">Ghaziabad Satta Result</Link>. Each game has its own page with its own result time and yearly chart.
  //       </>
  //     ),
  //   },
  //   {
  //     heading: "Quick Disclaimer",
  //     description:
  //       "This page is for information only. We do not promote or support betting or gambling, and we do not give gaming advice or guarantee any outcome. Follow the laws that apply where you live. We are not responsible for any loss arising from the use of this information.",
  //   },
  // ];

  const infoSections: InfoSection[] = [
    {
      heading: "Gwalior Satta Result और Yearly Chart 2026",
      description:
        "Gwalior एक दोपहर में रिजल्ट घोषित होने वाला गेम है। इस पेज पर आप आज का Gwalior Satta Result, 2026 का चार्ट और पुराने रिकॉर्ड एक ही जगह देख सकते हैं, ताकि आपको अलग-अलग पेजों पर जानकारी खोजने की जरूरत न पड़े। चार्ट में साल की हर तारीख दी गई है। इसके नीचे आपको रिजल्ट का समय, आज का रिजल्ट कैसे चेक करें, चार्ट कैसे पढ़ें, रिजल्ट कैसे अपडेट किए जाते हैं और अन्य गेम्स के लिंक मिलेंगे जिन्हें आप फॉलो कर सकते हैं।",
    },
    {
      heading: "नया Gwalior Satta Result",
      description: latest
        ? `चार्ट का आखिरी अपडेट: ${formatDrawDate(latest.drawDate)}, ${latest.time} IST\nसबसे नया उपलब्ध रिजल्ट: ${latest.result} (${formatDrawDate(latest.drawDate)})\nस्टेटस: ${latest.isToday ? "Updated" : "आज के रिजल्ट का इंतजार है"}`
        : "सबसे नया उपलब्ध रिजल्ट: अभी उपलब्ध नहीं है\nस्टेटस: रिजल्ट का इंतजार है",
    },
    {
      heading: "Gwalior Satta Result समय और आज का रिजल्ट",
      description: (
        <>
          <p className="mb-3">
            Gwalior का रिजल्ट दोपहर 2:20 PM पर घोषित किया जाता है। आप इस समय के
            कुछ देर बाद पेज चेक कर सकते हैं। आज का रिजल्ट आप इसी Gwalior पेज पर
            या{" "}
            <Link href="/" className="text-blue-600 underline">
              A7 Satta King
            </Link>{" "}
            की टेबल में देख सकते हैं, जहां सभी गेम्स के रिजल्ट दिए जाते हैं।
          </p>
          <p>
            अगर आप दोपहर 2:20 PM से पहले पेज खोलते हैं, तो आज का रिजल्ट अभी
            अपडेट नहीं हुआ हो सकता है। नया रिजल्ट देखने के लिए घोषित समय के बाद
            पेज को रिफ्रेश करें।
          </p>
        </>
      ),
    },
    {
      heading: "अन्य खेलों की तुलना में Gwalior के परिणाम का समय",
      description: (
        <>
          Gwalior का रिजल्ट{" "}
          <Link href="/sadar-bazar" className="text-blue-600 underline">
            Sadar Bazar
          </Link>{" "}
          के कुछ समय बाद आता है, जिसका रिजल्ट दोपहर 1:40 PM पर घोषित होता है।
          वहीं,{" "}
          <Link href="/sialkot" className="text-blue-600 underline">
            Sialkot
          </Link>{" "}
          का रिजल्ट रात करीब 8:20 PM पर आता है। अगर आप कई गेम्स के रिजल्ट देखते
          हैं, तो इससे आपको पूरे दिन में रिजल्ट आने का क्रम समझने में मदद मिलती
          है।
        </>
      ),
    },
    {
      heading: "Gwalior Satta Result आज कैसे चेक करें?",
      description: (
        <>
          <ol className="list-decimal list-inside space-y-1">
            <li>दोपहर 2:20 PM के कुछ मिनट बाद यह पेज खोलें।</li>
            <li>
              चार्ट में आज की तारीख खोजें। तारीखें बाईं तरफ नीचे की ओर दी गई
              हैं।
            </li>
            <li>आज की तारीख वाली रो को मौजूदा महीने के कॉलम तक देखें।</li>
            <li>उस सेल में दिया गया नंबर आज का Gwalior रिजल्ट है।</li>
          </ol>
          <p className="mt-3">
            अगर सेल में वेट आइकन दिखाई देता है, तो इसका मतलब है कि रिजल्ट अभी
            अपडेट नहीं हुआ है। कुछ मिनट इंतजार करें और पेज को रिफ्रेश करें। आप{" "}
            <Link href="/" className="text-blue-600 underline">
              A7 Satta King
            </Link>{" "}
            की टेबल भी चेक कर सकते हैं, जहां सभी गेम्स के दैनिक रिजल्ट दिए जाते
            हैं।
          </p>
        </>
      ),
    },
    {
      heading: "Gwalior Chart क्यों चेक करें?",
      description: (
        <>
          <p className="mb-3">
            2026 का चार्ट तारीख के अनुसार Gwalior के रिजल्ट का रिकॉर्ड है। इसमें
            1 से 31 तक की तारीखें बाईं तरफ और महीने ऊपर की ओर दिए गए हैं। हर
            रिजल्ट उस सेल में दिखाई देता है जहां तारीख की रो और महीने का कॉलम
            एक-दूसरे से मिलते हैं।
          </p>
          <p className="mb-3">
            वेट आइकन का मतलब है कि उस तारीख का रिजल्ट अभी तक नहीं जोड़ा गया है।
            यह आने वाली तारीख भी हो सकती है या ऐसा रिजल्ट जिसे अभी अपडेट नहीं
            किया गया है। साल की शुरुआत वाले महीनों में मौजूदा महीने की तुलना में
            कम एंट्री हो सकती हैं।
          </p>
          <h3 className="mb-3">
            <span className="font-bold">किसी खास तारीख का रिजल्ट देखें:</span>{" "}
            इस साल की किसी भी रिकॉर्ड की गई तारीख का रिजल्ट चेक करें, जिसमें वे
            दिन भी शामिल हैं जिन्हें आप पहले मिस कर चुके हैं। इससे आपको पुराना
            रिजल्ट याद रखने के बजाय सही रिकॉर्ड देखने में मदद मिलती है।
          </h3>
          <h3 className="mb-3">
            <span className="font-bold">अलग-अलग महीनों की तुलना करें:</span> एक
            ही तारीख के रिजल्ट की तुलना करने के लिए रो में आगे की ओर देखें या
            किसी एक महीने का पूरा रिकॉर्ड देखने के लिए उसके कॉलम को नीचे तक
            पढ़ें।
          </h3>
          <h3 className="mb-3">
            <span className="font-bold">पुराना रिकॉर्ड देखें:</span> पुरानी
            एंट्री चार्ट में बनी रहती हैं, जिससे पूरे साल का रिकॉर्ड एक जगह
            उपलब्ध रहता है। आप जरूरत पड़ने पर इसे दोबारा देख सकते हैं।
          </h3>
          <p>
            यह चार्ट केवल घोषित किए गए रिजल्ट का रिकॉर्ड है। इसका उपयोग भविष्य
            के रिजल्ट का अनुमान लगाने के लिए नहीं किया जाना चाहिए। पुराने नंबर
            यह नहीं बताते कि अगला रिजल्ट क्या होगा।
          </p>
        </>
      ),
    },
    {
      heading: "Gwalior Results कैसे अपडेट किए जाते हैं?",
      description: (
        <>
          <h3 className="mb-3">
            <span className="font-bold">रिजल्ट घोषित होता है:</span> Gwalior का
            रिजल्ट दोपहर 2:20 PM पर घोषित किया जाता है।
          </h3>
          <h3 className="mb-3">
            <span className="font-bold">रिजल्ट अपडेट किया जाता है:</span> रिजल्ट
            घोषित होने के बाद इसे इस पेज और होम पेज की टेबल में जोड़ा जाता है।
          </h3>
          <h3>
            <span className="font-bold">चार्ट अपडेट होता है:</span> नया रिजल्ट
            सालाना चार्ट में जोड़ दिया जाता है और पुरानी एंट्री पहले की तरह बनी
            रहती हैं। अगर किसी रिजल्ट में सुधार किया जाता है, तो चार्ट में भी
            उसे अपडेट कर दिया जाता है।
          </h3>
        </>
      ),
    },
    {
      heading: "इस पेज पर आपको क्या मिलेगा?",
      description: (
        <>
          <h3 className="mb-3">
            <span className="font-bold">दैनिक Gwalior Satta Result:</span> आज का
            Gwalior रिजल्ट, जिसे दोपहर 2:20 PM के बाद अपडेट किया जाता है।
          </h3>
          <h3 className="mb-3">
            <span className="font-bold">Gwalior Satta Chart 2026:</span> पूरे
            साल की सभी रिकॉर्ड की गई तारीखों और रिजल्ट का सालाना चार्ट।
          </h3>
          <h3 className="mb-3">
            <span className="font-bold">पिछले रिकॉर्ड:</span> पुरानी तारीखों के
            रिजल्ट, जिन्हें आप पहले के रिकॉर्ड देखने के लिए चेक कर सकते हैं।
          </h3>
          <h3>
            <span className="font-bold">मोबाइल और डेस्कटॉप:</span> यह पेज मोबाइल
            और डेस्कटॉप दोनों पर काम करता है। छोटी स्क्रीन पर चार्ट को देखने के
            लिए आप उसे साइड में स्क्रॉल कर सकते हैं।
          </h3>
        </>
      ),
    },
    {
      heading: "और अधिक Satta Game Results",
      description: (
        <>
          Gwalior के साथ A7 Satta King पर यूजर्स{" "}
          <Link href="/sadar-bazar" className="text-blue-600 underline">
            Sadar Bazar Satta Result
          </Link>
          ,{" "}
          <Link href="/gali" className="text-blue-600 underline">
            Gali Satta Result
          </Link>
          ,{" "}
          <Link href="/delhi-bazar" className="text-blue-600 underline">
            Delhi Bazar Satta Result
          </Link>{" "}
          और{" "}
          <Link href="/gaziabad" className="text-blue-600 underline">
            Ghaziabad Satta Result
          </Link>{" "}
          भी चेक करते हैं। हर गेम का अपना अलग पेज है, जहां उसका रिजल्ट टाइम और
          सालाना चार्ट दिया गया है।
        </>
      ),
    },
    {
      heading: "कानूनी अस्वीकरण",
      description:
        "यह पेज केवल जानकारी देने के उद्देश्य से बनाया गया है। हम सट्टेबाजी या जुए को बढ़ावा या समर्थन नहीं देते हैं और न ही किसी प्रकार की गेमिंग सलाह देते हैं या किसी परिणाम की गारंटी देते हैं। अपने क्षेत्र में लागू कानूनों का पालन करें। इस जानकारी के उपयोग से होने वाले किसी भी नुकसान के लिए हम जिम्मेदार नहीं हैं।",
    },
  ];

  // Accordion FAQs - styled like FAQSection
  // const faqItems = [
  //   {
  //     question: "What time is the Gwalior result declared?",
  //     answer: "The Gwalior result is declared at 2:20 PM.",
  //   },
  //   {
  //     question: "Where can I check today's Gwalior result?",
  //     answer:
  //       "On this page, in the chart in the cell for today's date, or in the home page table.",
  //   },
  //   {
  //     question: "Why does today's cell show a wait icon?",
  //     answer:
  //       "A wait icon means that date's result has not been added yet. Check again after 2:20 PM.",
  //   },
  //   {
  //     question: "Can I see old Gwalior results?",
  //     answer: "Yes. Earlier dates stay in the yearly chart on this page.",
  //   },
  //   {
  //     question: "How do I read the Gwalior chart?",
  //     answer:
  //       "Dates run down the left and months run across the top. A result sits where its date row meets its month column.",
  //   },
  //   {
  //     question: "Is the Gwalior Satta Result declared before or after Sadar Bazar?",
  //     answer: "After. Sadar Bazar is declared at 1:40 PM and Gwalior at 2:20 PM.",
  //   },
  //   {
  //     question: "Can I check Gwalior results on my phone?",
  //     answer: "Yes. The page works on mobile phones and desktops.",
  //   },
  //   {
  //     question: "Can past results predict the next Gwalior result?",
  //     answer:
  //       "No. The chart is a record of what was declared and should not be treated as a prediction.",
  //   },
  // ];

  const faqItems = [
    {
      question: "Gwalior का रिजल्ट किस समय घोषित होता है?",
      answer: "Gwalior का रिजल्ट दोपहर 2:20 PM पर घोषित किया जाता है।",
    },
    {
      question: "आज का Gwalior रिजल्ट कहां चेक कर सकते हैं?",
      answer:
        "आप आज का रिजल्ट इसी पेज के चार्ट में आज की तारीख वाले सेल में या होम पेज की टेबल में देख सकते हैं।",
    },
    {
      question: "आज के रिजल्ट वाले सेल में वेट आइकन क्यों दिखाई देता है?",
      answer:
        "वेट आइकन का मतलब है कि उस तारीख का रिजल्ट अभी अपडेट नहीं किया गया है। दोपहर 2:20 PM के बाद दोबारा चेक करें।",
    },
    {
      question: "क्या मैं Gwalior के पुराने रिजल्ट देख सकता हूं?",
      answer:
        "हां, इस पेज के सालाना चार्ट में पिछली तारीखों के रिजल्ट उपलब्ध रहते हैं।",
    },
    {
      question: "Gwalior चार्ट कैसे पढ़ें?",
      answer:
        "चार्ट में तारीखें बाईं तरफ नीचे की ओर और महीने ऊपर की तरफ दिए गए हैं। तारीख की रो और महीने के कॉलम के मिलने वाले सेल में रिजल्ट दिखाई देता है।",
    },
    {
      question: "Gwalior Satta Result, Sadar Bazar से पहले आता है या बाद में?",
      answer:
        "Gwalior का रिजल्ट Sadar Bazar के बाद आता है। Sadar Bazar का रिजल्ट दोपहर 1:40 PM और Gwalior का रिजल्ट दोपहर 2:20 PM पर घोषित होता है।",
    },
    {
      question: "क्या मैं मोबाइल पर Gwalior के रिजल्ट चेक कर सकता हूं?",
      answer:
        "हां, यह पेज मोबाइल फोन और डेस्कटॉप दोनों पर इस्तेमाल किया जा सकता है।",
    },
    {
      question:
        "क्या पुराने रिजल्ट अगले Gwalior रिजल्ट का अनुमान लगा सकते हैं?",
      answer:
        "नहीं, चार्ट केवल पहले घोषित किए गए रिजल्ट का रिकॉर्ड है। इसे भविष्य के रिजल्ट का अनुमान लगाने के लिए इस्तेमाल नहीं करना चाहिए।",
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
