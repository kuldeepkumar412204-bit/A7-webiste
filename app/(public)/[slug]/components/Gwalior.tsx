import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "./FAQSection";
import type { LatestResult } from "@/app/lib/homeData";
import { formatDrawDate } from "./formatDrawDate";
import type { AllYearlyDataResponse } from "@/app/lib/satta";
import {
  getGwaliorStats,
  scheduleSection,
  recordSections,
  chartGuideSections,
  dynamicFaqs,
} from "./gwaliorDynamic";

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

export default function Gwalior({
  latest,
  initialData,
}: {
  latest?: LatestResult | null;
  initialData?: AllYearlyDataResponse;
}) {
  const stats = getGwaliorStats(initialData);

  const infoSections: InfoSection[] = [
    {
      heading: "Gwalior Satta Result Today – दोपहर का रिकॉर्ड और Gwalior Satta Chart 2026",
      description: <>
        <p className="mb-3">

          Gwalior Satta Result Today और Gwalior Satta Chart 2026 से जुड़ी जानकारी इस पेज पर एक ही जगह उपलब्ध है। ग्वालियर के वार्षिक चार्ट में जनवरी से लेकर अब तक दर्ज किए गए ऐतिहासिक रिजल्ट का तारीख के अनुसार रिकॉर्ड दिया गया है।
        </p>
        <p>
          इस पेज पर आपको Gwalior Satta Result Today का नवीनतम उपलब्ध रिकॉर्ड, दोपहर के रिजल्ट का निर्धारित समय, नवंबर 2026 की एंट्री और Gwalior Satta Chart 2026 में महीने के अनुसार उपलब्ध ऐतिहासिक जानकारी मिलेगी। इसका उद्देश्य पुराने रिकॉर्ड को व्यवस्थित और आसानी से समझने योग्य फॉर्मेट में प्रस्तुत करना है।
        </p>
      </>,
    },
    {
      heading: "Gwalior Satta Result Today – नवीनतम रिजल्ट रिकॉर्ड",
      description: <>
        <div>
          {latest
            ? <>
              <div className="space-y-2">
                <p><strong>नवीनतम दर्ज रिजल्ट:</strong> {latest.result}</p>
                <p><strong>रिकॉर्ड की तारीख:</strong> {formatDrawDate(latest.drawDate)}</p>
                <p><strong>निर्धारित समय:</strong> {latest.time} IST</p>
                <p><strong>चार्ट में शामिल अवधि:</strong> 1 जनवरी – {formatDrawDate(latest.drawDate)}</p>
              </div>
              <p className="mb-3">
                दिए गए ऐतिहासिक डेटा के अनुसार, {formatDrawDate(latest.drawDate)} के लिए {latest.result} दर्ज किया गया है।
              </p>
            </>
            : "सबसे नया उपलब्ध रिजल्ट: अभी उपलब्ध नहीं है\nस्टेटस: रिजल्ट का इंतजार है"}
        </div>
        <p className="mb-3">
          Gwalior Satta Result Today का रिकॉर्ड देखते समय निर्धारित समय की पुष्टि करना आवश्यक है, क्योंकि वेबसाइट के मौजूदा कंटेंट और एम्बेडेड चार्ट डेटा में समय को लेकर अंतर दिखाई देता है।
        </p>
      </>
    },
    scheduleSection(stats),
    ...recordSections(stats),
    ...chartGuideSections,
    {
      heading: "Gwalior Satta Chart 2026 को कैसे समझें?",
      description: (
        <>
          <p className="mb-3">
            ग्वालियर का वार्षिक चार्ट तारीख और महीने के आधार पर तैयार किए गए एक व्यवस्थित फॉर्मेट में उपलब्ध है।
          </p>
          <p className="mb-3">

            इसमें पहला कॉलम तारीख को दर्शाता है, जबकि बाकी कॉलम अलग-अलग महीनों के लिए दिए गए हैं।
          </p>
          <p className="mb-3">
            उदाहरण के लिए, यदि किसी विजिटर को 12 जून का रिकॉर्ड देखना है, तो उसे चार्ट में तारीख 12 की पंक्ति खोजकर जून वाले कॉलम में संबंधित एंट्री देखनी होगी।

          </p>
          <p className="mb-3">
            इस फॉर्मेट की मदद से विजिटर आसानी से:

          </p>
          <ul className="list-disc list-inside space-y-1 mt-4">
            <li>किसी विशेष तारीख का पुराना रिकॉर्ड खोज सकते हैं।</li>
            <li>किसी एक महीने की उपलब्ध एंट्री देख सकते हैं।</li>
            <li>तारीख के अनुसार ऐतिहासिक चार्ट की पूर्णता जांच सकते हैं।</li>
            <li>अलग-अलग दैनिक पेज खोले बिना पुराने रिकॉर्ड देख सकते हैं।</li>
          </ul>
        </>
      ),
    },
    {
      heading: "ग्वालियर के ऐतिहासिक रिकॉर्ड को सही तरीके से बनाए रखना",
      description: (
        <>
          <p className="mb-3">
            एक व्यवस्थित ऐतिहासिक चार्ट तैयार करने के लिए केवल रोजाना नया नंबर जोड़ना पर्याप्त नहीं है। प्रत्येक एंट्री का सही तारीख और महीने से जुड़ा होना भी जरूरी है।

          </p>
          <p className="mb-3">

            चार्ट को अपडेट करते समय निम्नलिखित बातों का ध्यान रखना चाहिए:

          </p>
          <p className="mb-2">
            <strong> तारीख की सटीकता:</strong> प्रत्येक नंबर को उसकी सही तारीख और महीने वाले कॉलम में ही दर्ज किया जाना चाहिए।
          </p>
          <p className="mb-2">
            <strong> रिकॉर्ड में निरंतरता:</strong> पहले से प्रकाशित नंबरों में बदलाव तभी किया जाना चाहिए, जब संबंधित सुधार की पुष्टि हो जाए।

          </p>
          <p className="mb-2">
            <strong>खाली रिकॉर्ड की स्पष्ट जानकारी:</strong> खाली सेल और डैश (-) को वास्तविक दर्ज नंबर से अलग दिखाना चाहिए।
          </p>
          <p className="mb-3">
            <strong>अपडेट की पारदर्शिता:</strong> नवीनतम अपडेट की तारीख वही होनी चाहिए, जिस दिन चार्ट में वास्तव में बदलाव किया गया हो।
          </p>
          <p className="mb-3">
            इन सभी बातों से विजिटर्स को प्रकाशित ऐतिहासिक रिकॉर्ड और उन तारीखों के बीच अंतर समझने में मदद मिलती है, जिनके लिए कोई नंबर उपलब्ध नहीं है।

          </p>

        </>
      ),
    },
    {
      heading: "अन्य ऐतिहासिक रिजल्ट पेज",
      description: (
        <>
          <p className="mb-3">
            विजिटर्स A7 Satta King पर उपलब्ध अन्य तारीख-आधारित रिजल्ट चार्ट भी देख सकते हैं:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-3">
            <li>
              <Link href="/sadar-bazar" className="text-blue-600 underline">
                सदर बाजार रिजल्ट
              </Link>
            </li>
            <li>
              <Link href="/gaziabad" className="text-blue-600 underline">
                गाजियाबाद रिजल्ट
              </Link>
            </li>
            <li>
              <Link href="/delhi-bazar" className="text-blue-600 underline">
                दिल्ली बाजार रिजल्ट
              </Link>
            </li>
            <li>
              <Link href="/gali" className="text-blue-600 underline">
                गली रिजल्ट
              </Link>
            </li>
          </ul>
          <p className="mb-3">
            इन सभी पेजों पर अलग-अलग ऐतिहासिक चार्ट और संबंधित शेड्यूल की जानकारी उपलब्ध है।
          </p>
        </>
      ),
    },

    {
      heading: "अस्वीकरण (Disclaimer)",
      description:
        "इस पेज पर उपलब्ध जानकारी केवल ऐतिहासिक संदर्भ और रिकॉर्ड देखने के उद्देश्य से प्रस्तुत की गई है। यहां किसी प्रकार की सट्टेबाजी संबंधी सलाह, भविष्यवाणी या जीत की गारंटी नहीं दी जाती है। यह पेज किसी भी गैरकानूनी जुआ गतिविधि को प्रोत्साहित नहीं करता। विजिटर्स को अपने क्षेत्र में लागू कानूनों और नियमों का पालन करना चाहिए।",
    },
  ];

  const faqItems = dynamicFaqs(stats);

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

  const pageUrl = "https://www.a7sattaking.co/gwalior";

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Gwalior Satta Result Today – Gwalior Satta Chart 2026",
    description:
      "Gwalior Satta Result Today and Gwalior Satta Chart 2026. View historical records, monthly entries and date-wise chart information.",
    isPartOf: { "@id": "https://www.a7sattaking.co/#website" },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    inLanguage: "hi-IN",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.a7sattaking.co/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Gwalior Satta Result",
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
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
