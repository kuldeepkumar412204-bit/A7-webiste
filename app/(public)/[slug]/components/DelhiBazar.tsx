import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "./FAQSection";
import type { LatestResult } from "@/app/lib/homeData";
import { formatDrawDate } from "./formatDrawDate";

export const metadata: Metadata = {
  title: "Delhi Bazar Satta Result Live 2026 | Chart & Updates",
  description:
    "Check Delhi Bazar Satta Result 2026 with the latest charts, daily updates, and fast results on A7 Satta King.",
  keywords: [
    "Delhi Bazar Satta Result",
    "DB Result 2026",
    "Delhi Bazar chart",
    "Satta King Delhi Bazar",
    "DB Satta result today",
    "Delhi Bazar live result",
    "Satta Matka Delhi Bazar",
    "A7 Satta King DB result",
  ],
  alternates: {
    canonical: `${process.env.SITE_URL}/delhi-bazar`,
  },
  openGraph: {
    title: "Delhi Bazar Satta Result Live 2026 | Chart & Updates",
    description:
      "Check Delhi Bazar Satta Result 2026 with the latest charts, daily updates, and fast results on A7 Satta King.",
    url: `${process.env.SITE_URL}/delhi-bazar`,
    siteName: "A7 Satta King",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delhi Bazar Satta Result Live 2026 | Chart & Updates",
    description:
      "Check Delhi Bazar Satta Result 2026 with the latest charts, daily updates, and fast results on A7 Satta King.",
  },
};

interface InfoSection {
  heading: string;
  description: React.ReactNode;
}

export default function DelhiBazar({
  latest,
}: {
  latest?: LatestResult | null;
}) {
  // Main Content Blocks - styled like FAQSection
  //   const infoSections: InfoSection[] = [
  //     {
  //       heading: "Delhi Bazar Satta Result Today 2026 and Yearly Chart",
  //       description:
  //         "On this page, you can check today's Delhi Bazar result and the 2026 chart, see how Delhi Bazar sits among the other Delhi games, and find older records in one place instead of searching across several pages.\n\nThe chart lists every date of the year. Below it, you will find the result time, how to check today's result, how the Delhi games follow each other during the day, how to read the chart, and links to other games.",
  //     },
  //     {
  //       heading: "Delhi Bazar Satta Result Time and Today's Result",
  //       description: (
  //         <>
  //           <p className="mb-3">
  //             The Delhi Satta Bazar result is declared at 3:15 PM. Plan to check
  //             the page shortly after that time. You can see the day's result on
  //             this page or in the{" "}
  //             <Link href="/" className="text-blue-600 underline">
  //               home page
  //             </Link>{" "}
  //             table, where all game results are listed.
  //           </p>
  //           <p>
  //             If you open the page before 3:15 PM, today's result may not be added
  //             yet. Refresh the page after the result time to see the new entry.
  //           </p>
  //         </>
  //       ),
  //     },
  //     {
  //       heading: "How to Check Delhi Bazar Satta Result Today",
  //       description: (
  //         <>
  //           <ol className="list-decimal list-inside space-y-1">
  //             <li>Open this page a few minutes after 3:15 PM.</li>
  //             <li>
  //               Find today's date in the chart. Dates run down the left side.
  //             </li>
  //             <li>Follow that row across to the column for the current month.</li>
  //             <li>The number in that cell is today's Delhi Bazar result.</li>
  //           </ol>
  //           <p className="mt-3">
  //             If the cell shows a wait icon, the result has not been added yet.
  //             Wait a few minutes and refresh the page.
  //           </p>
  //         </>
  //       ),
  //     },
  //     {
  //       heading: "Delhi Games on A7 Satta King: Which Page Is Which",
  //       description: (
  //         <>
  //           <p className="mb-3">
  //             Several games on A7 Satta King have Delhi in their name, and all
  //             four are declared in the afternoon. This is the order in which they
  //             come during the day:
  //           </p>
  //           <ul className="list-disc list-inside space-y-1 mb-3">
  //             <li>
  //               <strong>Delhi Savera:</strong> 12:40 PM
  //             </li>
  //             <li>
  //               <strong>Delhi Darbar:</strong> 2:10 PM
  //             </li>
  //             <li>
  //               <strong>Delhi Bazar:</strong> 3:15 PM
  //             </li>
  //             <li>
  //               <strong>Delhi Matka:</strong> 3:40 PM
  //             </li>
  //           </ul>
  //           <p className="mb-3">
  //             Delhi Savera comes first, well before the others. Delhi Bazar is the
  //             third of the four. It is declared 1 hour 5 minutes after Delhi
  //             Darbar and 25 minutes before Delhi Matka. If you are waiting for a
  //             Delhi result after 3 PM, Delhi Bazar is the first of the two that
  //             remain.
  //           </p>
  //           <p>
  //             Each of these games has its own page and its own yearly chart. The
  //             result on this page is for Delhi Bazar at 3:15 PM only. To check the
  //             others, open{" "}
  //             <Link href="/delhi-savera" className="text-blue-600 underline">
  //               Delhi Savera
  //             </Link>
  //             ,{" "}
  //             <Link href="/delhi-darbar" className="text-blue-600 underline">
  //               Delhi Darbar
  //             </Link>
  //             , or{" "}
  //             <Link href="/delhi-matka" className="text-blue-600 underline">
  //               Delhi Matka
  //             </Link>
  //             .
  //           </p>
  //         </>
  //       ),
  //     },
  //     {
  //       heading: "Where Delhi Bazar Falls in the Day",
  //       description: (
  //         <>
  //           <p className="mb-3">
  //             Delhi Bazar is an afternoon result.{" "}
  //             <Link href="/sadar-bazar" className="text-blue-600 underline">
  //               Sadar Bazar
  //             </Link>{" "}
  //             is declared earlier, at 1:40 PM, and{" "}
  //             <Link href="/gwalior" className="text-blue-600 underline">
  //               Gwalior
  //             </Link>{" "}
  //             at 2:40 PM, which is 35 minutes before Delhi Bazar. After Delhi
  //             Bazar and Delhi Matka,{" "}
  //             <Link href="/shri-ganesh" className="text-blue-600 underline">
  //               Shri Ganesh
  //             </Link>{" "}
  //             follows at 4:45 PM. Later games such as{" "}
  //             <Link href="/sialkot" className="text-blue-600 underline">
  //               Sialkot
  //             </Link>
  //             , at 8:20 PM, come in the evening.
  //           </p>
  //           <p>
  //             If you follow several games, checking them in this order lets you go
  //             through the day's results one after another without opening pages at
  //             the wrong time.
  //           </p>
  //         </>
  //       ),
  //     },
  //     {
  //       heading: "New Delhi Bazar Satta Result",
  //       description: latest
  //         ? `Last chart update: ${formatDrawDate(latest.drawDate)}, ${latest.time} IST\nLatest available result: ${latest.result} (${formatDrawDate(latest.drawDate)})\nStatus: ${latest.isToday ? "Updated" : "Waiting for today's result"}`
  //         : "Latest available result: Not available yet\nStatus: Waiting for result",
  //     },
  //     {
  //       heading: "Reading the Delhi Bazar Chart 2026",
  //       description:
  //         'The yearly chart is one grid: 31 date rows and 12 month columns. The 3:15 PM result goes into the row for that day and the column for that month, so by evening you should see today\'s number in its cell. You will find the steps for locating it in the "How to Check" section above, so here is what else the grid is good for.\n\nReading down a column shows you a single month from the 1st to the 31st. Reading along a row puts the same date from different months side by side. A cell that shows an icon rather than a number is still pending. That is normal for every date after today, and for today until the 3:15 PM result is in. Months that have not started yet will stay pending.',
  //     },
  //     {
  //       heading: "Finding an Older Delhi Bazar Satta Result",
  //       description:
  //         "Suppose you missed yesterday's result, or you want the number from a date two months ago. You don't need to search anywhere else: go to that date's row, move to the month you want, and read the cell. Every day that has already passed this year stays in the grid, so the full run of results from January to today is in one place.\n\nThe chart is a reference for what was declared. It doesn't say anything about what the next result will be.",
  //     },
  //     {
  //       heading: "What Happens After 3:15 PM",
  //       description:
  //         "The result is declared at 3:15 PM. After that, the number is added to the Delhi Bazar chart and appears in the home page table alongside the other games. That is why the page can look unchanged at 3:10 PM and different at 3:25 PM: nothing new is shown until the result is in. Delhi Matka is declared only 25 minutes later, so people who follow both often check this page first and Delhi Matka next.",
  //     },
  //     {
  //       heading: "Games Declared After Delhi Bazar",
  //       description: (
  //         <>
  //           Once Delhi Bazar is done, the next results of the day are{" "}
  //           <Link href="/delhi-matka" className="text-blue-600 underline">
  //             Delhi Matka
  //           </Link>{" "}
  //           at 3:40 PM,{" "}
  //           <Link href="/shri-ganesh" className="text-blue-600 underline">
  //             Shri Ganesh
  //           </Link>{" "}
  //           at 4:45 PM, and{" "}
  //           <Link href="/agra" className="text-blue-600 underline">
  //             Agra
  //           </Link>{" "}
  //           at 5:30 PM. Results declared before Delhi Bazar include{" "}
  //           <Link href="/delhi-darbar" className="text-blue-600 underline">
  //             Delhi Darbar
  //           </Link>{" "}
  //           at 2:10 PM and{" "}
  //           <Link href="/sadar-bazar" className="text-blue-600 underline">
  //             Sadar Bazar
  //           </Link>{" "}
  //           at 1:40 PM.
  //         </>
  //       ),
  //     },
  //     {
  //       heading: "Disclaimer",
  //       description:
  //         "This page is for information only. We do not promote or support betting or gambling, and we do not give gaming advice or guarantee any outcome. Follow the laws that apply where you live. We are not responsible for any loss arising from the use of this information.",
  //     },
  //   ];

  const infoSections: InfoSection[] = [
    {
      heading: "Delhi Bazar Satta Result Today 2026 और Yearly Chart",
      description:
        "इस पेज पर आप आज का Delhi Bazar रिजल्ट और 2026 का चार्ट देख सकते हैं। साथ ही, आप जान सकते हैं कि दिल्ली के अन्य गेम्स के मुकाबले Delhi Bazar का रिजल्ट किस समय आता है और पुराने रिजल्ट कहां देख सकते हैं। इसके लिए आपको अलग-अलग पेजों पर जाने की जरूरत नहीं है।\n\nइस चार्ट में पूरे साल की हर तारीख दी गई है। इसके नीचे आपको रिजल्ट का समय, आज का रिजल्ट चेक करने का तरीका, दिनभर में दिल्ली के अलग-अलग गेम्स का क्रम, चार्ट पढ़ने का तरीका और दूसरे गेम्स के लिंक मिलेंगे।",
    },
    {
      heading: "Delhi Bazar Satta Result Time और Today's Result",
      description: (
        <>
          <p className="mb-3">
            Delhi Satta Bazar का रिजल्ट दोपहर 3:15 PM पर घोषित किया जाता है। इस
            समय के कुछ देर बाद आप इस पेज पर रिजल्ट चेक कर सकते हैं। आप दिन का
            रिजल्ट इस पेज पर या{" "}
            <Link href="/" className="text-blue-600 underline">
              A7 Satta King होम पेज
            </Link>{" "}
            की टेबल में देख सकते हैं, जहां सभी गेम्स के रिजल्ट दिए जाते हैं।
          </p>
          <p>
            अगर आप दोपहर 3:15 PM से पहले पेज खोलते हैं, तो हो सकता है कि आज का
            रिजल्ट अभी तक अपडेट न हुआ हो। नया रिजल्ट देखने के लिए घोषित समय के
            बाद पेज को रिफ्रेश करें।
          </p>
        </>
      ),
    },
    {
      heading: "आज का Delhi Bazar Satta Result कैसे चेक करें?",
      description: (
        <>
          <ol className="list-decimal list-inside space-y-1">
            <li>दोपहर 3:15 PM के कुछ मिनट बाद इस पेज को खोलें।</li>
            <li>
              चार्ट में आज की तारीख खोजें। सभी तारीखें बाईं तरफ दी गई हैं।
            </li>
            <li>उस तारीख की रो (Row) को मौजूदा महीने के कॉलम तक देखें।</li>
            <li>उस सेल में दिया गया नंबर आज का Delhi Bazar रिजल्ट है।</li>
          </ol>
          <p className="mt-3">
            अगर सेल में वेट आइकन दिखाई देता है, तो इसका मतलब है कि रिजल्ट अभी
            अपडेट नहीं हुआ है। कुछ मिनट इंतजार करें और पेज को दोबारा रिफ्रेश
            करें।
          </p>
        </>
      ),
    },
    {
      heading: "A7 Satta King पर Delhi Games: कौन-सा पेज किसके लिए है?",
      description: (
        <>
          <p className="mb-3">
            A7 Satta King पर कई गेम्स के नाम में Delhi शामिल है और इन चारों के
            रिजल्ट दोपहर के समय घोषित किए जाते हैं। दिनभर में इनका क्रम इस
            प्रकार है:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-3">
            <li>
              <strong>Delhi Savera:</strong> 12:40 PM
            </li>
            <li>
              <strong>Delhi Darbar:</strong> 2:10 PM
            </li>
            <li>
              <strong>Delhi Bazar:</strong> 3:15 PM
            </li>
            <li>
              <strong>Delhi Matka:</strong> 3:40 PM
            </li>
          </ul>
          <p className="mb-3">
            इनमें सबसे पहले Delhi Savera का रिजल्ट आता है, जो बाकी गेम्स से काफी
            पहले घोषित होता है। Delhi Bazar इन चारों गेम्स में तीसरे नंबर पर आता
            है। इसका रिजल्ट Delhi Darbar के 1 घंटे 5 मिनट बाद और Delhi Matka से
            25 मिनट पहले घोषित होता है। अगर आप दोपहर 3 बजे के बाद दिल्ली के
            रिजल्ट का इंतजार कर रहे हैं, तो Delhi Bazar उन दो गेम्स में पहला है
            जिनका रिजल्ट आना बाकी होता है।
          </p>
          <p>
            इन सभी गेम्स के अपने अलग-अलग पेज और Yearly Charts हैं। इस पेज पर
            केवल Delhi Bazar का 3:15 PM वाला रिजल्ट दिया जाता है। बाकी गेम्स के
            रिजल्ट देखने के लिए{" "}
            <Link href="/delhi-savera" className="text-blue-600 underline">
              Delhi Savera
            </Link>
            ,{" "}
            <Link href="/delhi-darbar" className="text-blue-600 underline">
              Delhi Darbar
            </Link>{" "}
            या{" "}
            <Link href="/delhi-matka" className="text-blue-600 underline">
              Delhi Matka
            </Link>{" "}
            के पेज पर जाएं।
          </p>
        </>
      ),
    },
    {
      heading: "दिनभर के रिजल्ट में Delhi Bazar का स्थान",
      description: (
        <>
          <p className="mb-3">
            Delhi Bazar का रिजल्ट दोपहर में घोषित किया जाता है।{" "}
            <Link href="/sadar-bazar" className="text-blue-600 underline">
              Sadar Bazar
            </Link>{" "}
            का रिजल्ट इससे पहले दोपहर 1:40 PM पर आता है। वहीं,{" "}
            <Link href="/gwalior" className="text-blue-600 underline">
              Gwalior
            </Link>{" "}
            का रिजल्ट 2:40 PM पर घोषित होता है, जो Delhi Bazar से 35 मिनट पहले
            है। Delhi Bazar और Delhi Matka के बाद{" "}
            <Link href="/shri-ganesh" className="text-blue-600 underline">
              Shri Ganesh
            </Link>{" "}
            का रिजल्ट शाम 4:45 PM पर आता है। इसके बाद{" "}
            <Link href="/sialkot" className="text-blue-600 underline">
              Sialkot
            </Link>
            , जैसे गेम्स के रिजल्ट रात के समय 8:20 PM पर घोषित होते हैं।
          </p>
          <p>
            अगर आप एक से अधिक गेम्स के रिजल्ट देखते हैं, तो इस क्रम में सभी पेज
            चेक करने से आपको दिनभर के रिजल्ट सही समय पर एक के बाद एक मिल सकते
            हैं।
          </p>
        </>
      ),
    },
    {
      heading: "New Delhi Bazar Satta Result",
      description: latest
        ? `Last chart update: ${formatDrawDate(latest.drawDate)}, ${latest.time} IST\nLatest available result: ${latest.result} (${formatDrawDate(latest.drawDate)})\nStatus: ${latest.isToday ? "Updated" : "Waiting for today's result"}`
        : "Latest available result: Not available yet\nStatus: Waiting for result",
    },
    {
      heading: "Delhi Bazar Chart 2026 को कैसे पढ़ें?",
      description:
        'इस Yearly Chart में एक ग्रिड दिया गया है, जिसमें तारीखों की 31 रो (Rows) और 12 महीनों के कॉलम (Columns) हैं। दोपहर 3:15 PM पर घोषित होने वाला रिजल्ट उसी दिन की तारीख और संबंधित महीने के कॉलम में अपडेट किया जाता है। इसलिए शाम तक आपको आज का नंबर उसके निर्धारित सेल में दिखाई दे सकता है।\n\nआज का रिजल्ट खोजने के तरीके के बारे में ऊपर दिए गए "How to Check" सेक्शन में बताया गया है। इसके अलावा, इस चार्ट की मदद से आप पुराने रिजल्ट भी आसानी से देख सकते हैं।\n\nकिसी एक महीने के रिजल्ट देखने के लिए उस महीने के कॉलम को ऊपर से नीचे तक पढ़ें। इसमें 1 तारीख से लेकर 31 तारीख तक के रिजल्ट मिलेंगे। वहीं, एक ही तारीख के अलग-अलग महीनों के रिजल्ट देखने के लिए उस तारीख की रो को बाएं से दाएं पढ़ें।\n\nअगर किसी सेल में नंबर की जगह कोई आइकन दिखाई देता है, तो इसका मतलब है कि रिजल्ट अभी अपडेट होना बाकी है। आज की तारीख के लिए 3:15 PM से पहले ऐसा दिखना सामान्य है। आने वाले दिनों की तारीखों के सेल भी पेंडिंग रहेंगे। इसी तरह, जो महीने अभी शुरू नहीं हुए हैं, उनके रिजल्ट भी पेंडिंग दिखाई देंगे।',
    },
    {
      heading: "पुराने Delhi Bazar Satta Result कैसे खोजें?",
      description:
        "मान लीजिए कि आप कल का रिजल्ट देखना भूल गए या दो महीने पहले की किसी तारीख का नंबर जानना चाहते हैं। इसके लिए आपको कहीं और सर्च करने की जरूरत नहीं है। चार्ट में उस तारीख की रो खोजें, फिर संबंधित महीने के कॉलम तक जाएं और वहां दिया गया नंबर देखें।\n\nइस साल की सभी बीती हुई तारीखों के रिजल्ट चार्ट में उपलब्ध रहते हैं। इस तरह जनवरी से लेकर आज तक के सभी पुराने रिजल्ट आपको एक ही जगह मिल सकते हैं।\n\nध्यान रखें कि यह चार्ट पहले घोषित किए गए रिजल्ट का रिकॉर्ड है। इससे आने वाले रिजल्ट के बारे में कोई जानकारी या अनुमान नहीं लगाया जा सकता।",
    },
    {
      heading: "3:15 PM के बाद क्या होता है?",
      description:
        "Delhi Bazar का रिजल्ट दोपहर 3:15 PM पर घोषित किया जाता है। इसके बाद नंबर Delhi Bazar के चार्ट में अपडेट किया जाता है और होम पेज की टेबल में दूसरे गेम्स के रिजल्ट के साथ दिखाई देने लगता है।\n\nइसी वजह से दोपहर 3:10 PM पर पेज देखने पर आपको कोई बदलाव नहीं दिख सकता, जबकि 3:25 PM पर नया रिजल्ट दिखाई दे सकता है। ऐसा इसलिए होता है क्योंकि रिजल्ट घोषित होने के बाद ही नई एंट्री अपडेट की जाती है।\n\nDelhi Matka का रिजल्ट इसके केवल 25 मिनट बाद 3:40 PM पर आता है। इसलिए जो लोग दोनों गेम्स को फॉलो करते हैं, वे पहले Delhi Bazar और फिर Delhi Matka का रिजल्ट चेक कर सकते हैं।",
    },
    {
      heading: "Delhi Bazar के बाद घोषित होने वाले Games",
      description: (
        <>
          Delhi Bazar का रिजल्ट आने के बाद दिन के अगले रिजल्ट इस क्रम में घोषित
          होते हैं:
          <ul className="list-disc list-inside space-y-1 my-3">
            <li>
              <Link href="/delhi-matka" className="text-blue-600 underline">
                Delhi Matka
              </Link>{" "}
              – 3:40 PM
            </li>
            <li>
              <Link href="/shri-ganesh" className="text-blue-600 underline">
                Shri Ganesh
              </Link>{" "}
              – 4:45 PM
            </li>
            <li>
              <Link href="/agra" className="text-blue-600 underline">
                Agra
              </Link>{" "}
              – 5:30 PM
            </li>
          </ul>
          वहीं, Delhi Bazar से पहले घोषित होने वाले रिजल्ट में{" "}
          <Link href="/delhi-darbar" className="text-blue-600 underline">
            Delhi Darbar
          </Link>{" "}
          का समय 2:10 PM और{" "}
          <Link href="/sadar-bazar" className="text-blue-600 underline">
            Sadar Bazar
          </Link>{" "}
          का समय 1:40 PM है।
        </>
      ),
    },
    {
      heading: "अस्वीकरण",
      description:
        "यह पेज केवल जानकारी देने के उद्देश्य से बनाया गया है। हम सट्टेबाजी या जुए को बढ़ावा या समर्थन नहीं देते हैं। हम किसी भी प्रकार की गेमिंग सलाह नहीं देते और न ही किसी परिणाम की गारंटी देते हैं। अपने क्षेत्र में लागू कानूनों का पालन करें। इस जानकारी के उपयोग से होने वाले किसी भी नुकसान के लिए हम जिम्मेदार नहीं हैं।",
    },
  ];

  // Accordion FAQs - styled like FAQSection
  //   const faqItems = [
  //     {
  //       question: "What time is the Delhi Bazar result declared?",
  //       answer: "The Delhi Bazar result is declared at 3:15 PM.",
  //     },
  //     {
  //       question: "Which Delhi game is declared first?",
  //       answer: "Delhi Savera, at 12:40 PM.",
  //     },
  //     {
  //       question: "Is Delhi Bazar declared before Delhi Matka?",
  //       answer:
  //         "Yes. Delhi Bazar is declared at 3:15 PM and Delhi Matka at 3:40 PM, 25 minutes later.",
  //     },
  //     {
  //       question: "How long after Delhi Darbar is Delhi Bazar declared?",
  //       answer:
  //         "Delhi Darbar is declared at 2:10 PM, so Delhi Bazar comes 1 hour and 5 minutes later.",
  //     },
  //     {
  //       question: "Where can I check today's Delhi Bazar result?",
  //       answer:
  //         "On this page, in the chart in the cell for today's date, or in the home page table.",
  //     },
  //     {
  //       question: "Which game is declared right after Delhi Bazar?",
  //       answer: "Delhi Matka, at 3:40 PM, 25 minutes later.",
  //     },
  //     {
  //       question: "What is the next result after Delhi Matka?",
  //       answer: "Shri Ganesh, at 4:45 PM.",
  //     },
  //     {
  //       question: "How do I read the Delhi Bazar chart?",
  //       answer:
  //         "Dates run down the left and months run across the top. A result sits where its date row meets its month column.",
  //     },
  //     {
  //       question: "Does this page give tips or predictions?",
  //       answer: "No. It shows results and charts for reference only.",
  //     },
  //     {
  //       question: "Can past results predict the next Delhi Bazar result?",
  //       answer:
  //         "No. The chart is a record of what was declared and should not be treated as a prediction.",
  //     },
  //   ];

  const faqItems = [
    {
      question: "Delhi Bazar का रिजल्ट कितने बजे घोषित होता है?",
      answer: "Delhi Bazar का रिजल्ट दोपहर 3:15 PM पर घोषित किया जाता है।",
    },
    {
      question: "सबसे पहले कौन-सा Delhi Game घोषित होता है?",
      answer:
        "Delhi Savera का रिजल्ट सबसे पहले दोपहर 12:40 PM पर घोषित होता है।",
    },
    {
      question: "क्या Delhi Bazar का रिजल्ट Delhi Matka से पहले आता है?",
      answer:
        "हां, Delhi Bazar का रिजल्ट 3:15 PM पर आता है और Delhi Matka का रिजल्ट 3:40 PM पर, यानी 25 मिनट बाद घोषित होता है।",
    },
    {
      question: "Delhi Darbar के कितनी देर बाद Delhi Bazar का रिजल्ट आता है?",
      answer:
        "Delhi Darbar का रिजल्ट 2:10 PM पर आता है, जबकि Delhi Bazar का रिजल्ट 3:15 PM पर घोषित होता है। दोनों के बीच 1 घंटा 5 मिनट का अंतर है।",
    },
    {
      question: "आज का Delhi Bazar Satta Result कहां चेक कर सकते हैं?",
      answer:
        "आप आज का रिजल्ट इसी पेज के चार्ट में आज की तारीख वाले सेल में या वेबसाइट के होम पेज की टेबल में देख सकते हैं।",
    },
    {
      question: "Delhi Bazar के तुरंत बाद कौन-सा गेम घोषित होता है?",
      answer:
        "Delhi Matka का रिजल्ट 3:40 PM पर घोषित होता है, जो Delhi Bazar के रिजल्ट के 25 मिनट बाद आता है।",
    },
    {
      question: "Delhi Matka के बाद अगला रिजल्ट कौन-सा होता है?",
      answer:
        "Delhi Matka के बाद Shri Ganesh का रिजल्ट शाम 4:45 PM पर घोषित होता है।",
    },
    {
      question: "Delhi Bazar Chart कैसे पढ़ें?",
      answer:
        "चार्ट में बाईं तरफ तारीखें और ऊपर की तरफ महीनों के नाम दिए गए हैं। किसी तारीख और महीने के मिलने वाले सेल में उस दिन का रिजल्ट दिखाई देता है।",
    },
    {
      question: "क्या इस पेज पर Tips या Predictions दी जाती हैं?",
      answer:
        "नहीं, इस पेज पर केवल रिजल्ट और पुराने चार्ट की जानकारी दी जाती है। किसी प्रकार की टिप्स या भविष्यवाणी नहीं दी जाती है।",
    },
    {
      question:
        "क्या पुराने रिजल्ट से अगले Delhi Bazar रिजल्ट का अनुमान लगाया जा सकता है?",
      answer:
        "नहीं, चार्ट केवल पहले घोषित किए गए रिजल्ट का रिकॉर्ड है। इसे आने वाले रिजल्ट की भविष्यवाणी के रूप में नहीं देखना चाहिए।",
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
