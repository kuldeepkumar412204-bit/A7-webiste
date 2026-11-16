import type { ReactNode } from "react";
import type { AllYearlyDataResponse, YearlyGameData } from "@/app/lib/satta";

export interface GwaliorSection {
  heading: string;
  description: ReactNode;
}

const MONTHS_EN = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const MONTHS_HI = [
  "जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून",
  "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर",
];

// A real record has a digit; "-" / "--" / empty are placeholders, not results.
const isRecord = (v: unknown): v is string =>
  typeof v === "string" && /\d/.test(v);

const thCls =
  "border border-black/20 bg-[#ffd200]/60 px-3 py-2 text-left font-bold";
const tdCls = "border border-black/20 px-3 py-2 md:w-12";

interface MonthInfo {
  name: string;
  hi: string;
  entries: { day: number; value: string }[];
}

export function getGwaliorStats(initialData?: AllYearlyDataResponse) {
  const games: YearlyGameData[] = initialData?.data ?? [];
  const gwalior = games.find((g) => g.slug === "gwalior");
  if (!gwalior) return null;
  const sadar = games.find((g) => g.slug === "sadar-bazar");
  const year = initialData?.year ?? new Date().getFullYear();

  const months: MonthInfo[] = MONTHS_EN.map((name, i) => {
    const days = gwalior.months?.[name] ?? {};
    const entries: MonthInfo["entries"] = [];
    for (let d = 1; d <= 31; d++) {
      if (isRecord(days[d])) entries.push({ day: d, value: days[d] });
    }
    return { name, hi: MONTHS_HI[i], entries };
  });

  let lastIdx = -1;
  months.forEach((m, i) => {
    if (m.entries.length) lastIdx = i;
  });
  const current = lastIdx >= 0 ? months[lastIdx] : null;
  const total = months.reduce((n, m) => n + m.entries.length, 0);
  const lastDay = current ? current.entries[current.entries.length - 1].day : 0;

  return { gwalior, sadar, year, months, current, lastIdx, total, lastDay };
}

type Stats = NonNullable<ReturnType<typeof getGwaliorStats>>;

export function scheduleSection(stats: Stats | null): GwaliorSection {
  return {
    heading: "दोपहर के रिजल्ट शेड्यूल में ग्वालियर का स्थान",
    description: (
      <>
        <p className="mb-3">
          दिए गए रिजल्ट टाइमटेबल में ग्वालियर दोपहर के शेड्यूल में शामिल है। इसके आसपास निर्धारित रिजल्ट एंट्री इस प्रकार हैं:
        </p>
        <div className="overflow-x-auto mb-3">
          <table className="w-full max-w-xl border-collapse text-sm">
            <thead>
              <tr>
                <th className={thCls}>रिजल्ट</th>
                <th className={thCls}>निर्धारित समय</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={tdCls}>सदर बाजार</td>
                <td className={tdCls}>{stats?.sadar?.time || "पुष्टि करना बाकी"}</td>
              </tr>
              <tr>
                <td className={tdCls}>ग्वालियर</td>
                <td className={tdCls}>{stats?.gwalior.time || "पुष्टि करना बाकी"}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          मौजूदा शेड्यूल की जानकारी के अनुसार, ग्वालियर से पहले सदर बाजार का रिजल्ट निर्धारित है। इस सेक्शन का उद्देश्य दोपहर के रिजल्ट की समयानुसार व्यवस्था को समझाना है, न कि सभी उपलब्ध गेम्स की सामान्य जानकारी को दोहराना।
        </p>
      </>
    ),
  };
}

export function recordSections(stats: Stats | null): GwaliorSection[] {
  if (!stats) return [];
  const { current, months, lastIdx, lastDay, total, year } = stats;
  const out: GwaliorSection[] = [];

  if (current) {
    out.push({
      heading: `Gwalior Satta Result ${current.name} ${year} – ऐतिहासिक रिकॉर्ड`,
      description: (
        <>
          <p className="mb-3">
            दिए गए ग्वालियर चार्ट के {current.hi} महीने के सेक्शन में {lastDay} {current.hi} तक कुल {current.entries.length} रिकॉर्ड दर्ज हैं।
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full max-w-xl border-collapse text-sm">
              <thead>
                <tr>
                  <th className={thCls}>तारीख</th>
                  <th className={thCls}>दर्ज नंबर</th>
                </tr>
              </thead>
              <tbody>
                {current.entries.map((e) => (
                  <tr key={e.day}>
                    <td className={tdCls}>
                      {e.day} {current.hi}
                    </td>
                    <td className={tdCls}>{e.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            ये सभी नंबर दिए गए चार्ट डेटा से लिए गए ऐतिहासिक रिकॉर्ड हैं। इन्हें केवल पुराने रिकॉर्ड की जानकारी के उद्देश्य से दिखाया गया है। इनसे भविष्य के परिणामों का अनुमान नहीं लगाया जा सकता।
          </p>
        </>
      ),
    });
  }

  out.push({
    heading: `Gwalior Satta Chart ${year} – महीने के अनुसार रिकॉर्ड`,
    description: (
      <>
        <p className="mb-3">
          Gwalior Satta Chart {year} में{" "}
          {current ? `${lastDay} ${current.hi} ${year}` : year} तक कुल {total} रिकॉर्ड दर्ज हैं। महीने के अनुसार रिकॉर्ड का विवरण नीचे दिया गया है:
        </p>
        <div className="overflow-x-auto mb-3">
          <table className="w-full max-w-xl border-collapse text-sm">
            <thead>
              <tr>
                <th className={thCls}>महीना</th>
                <th className={thCls}>दर्ज एंट्री</th>
              </tr>
            </thead>
            <tbody>
              {months.slice(0, Math.max(lastIdx + 1, 0)).map((m, i) => (
                <tr key={m.name}>
                  <td className={tdCls}>
                    {m.hi}
                    {i === lastIdx && lastDay < 28 ? ` (${lastDay} तारीख तक)` : ""}
                  </td>
                  <td className={tdCls}>{m.entries.length}</td>
                </tr>
              ))}
              <tr className="font-bold">
                <td className={tdCls}>कुल</td>
                <td className={tdCls}>{total}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-3">
          महीने के अनुसार दिए गए आंकड़े संबंधित कैलेंडर तारीखों के लिए उपलब्ध चार्ट में मौजूद खाली और डैश वाली एंट्री को छोड़कर गिने गए रिकॉर्ड की संख्या दर्शाते हैं।
        </p>
        <p>
          यह अंतर समझना जरूरी है, क्योंकि चार्ट में कुछ ऐसी तारीखें भी शामिल हैं जिनके सामने कोई नंबर दर्ज नहीं है। डैश (-) को रिजल्ट नहीं माना जाना चाहिए और इसे वास्तविक नंबर से अलग दिखाना चाहिए।
        </p>
      </>
    ),
  });

  return out;
}

export const chartGuideSections: GwaliorSection[] = [
  {
    heading: "Gwalior Satta Chart को कैसे समझें?",
    description: (
      <>
        <p className="mb-3">
          ग्वालियर का वार्षिक चार्ट तारीख और महीने के आधार पर तैयार किए गए एक व्यवस्थित फॉर्मेट में उपलब्ध है। इसमें पहला कॉलम तारीख को दर्शाता है, जबकि बाकी कॉलम अलग-अलग महीनों के लिए दिए गए हैं।
        </p>
        <p className="mb-3">
          उदाहरण के लिए, यदि किसी विजिटर को 12 जून का रिकॉर्ड देखना है, तो उसे चार्ट में तारीख 12 की पंक्ति खोजकर जून वाले कॉलम में संबंधित एंट्री देखनी होगी। इस फॉर्मेट की मदद से विजिटर आसानी से:
        </p>
        <ul className="list-disc list-inside space-y-1">
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
          एक व्यवस्थित ऐतिहासिक चार्ट तैयार करने के लिए केवल रोजाना नया नंबर जोड़ना पर्याप्त नहीं है। प्रत्येक एंट्री का सही तारीख और महीने से जुड़ा होना भी जरूरी है। चार्ट को अपडेट करते समय निम्नलिखित बातों का ध्यान रखना चाहिए:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-3">
          <li><strong>तारीख की सटीकता:</strong> प्रत्येक नंबर को उसकी सही तारीख और महीने वाले कॉलम में ही दर्ज किया जाना चाहिए।</li>
          <li><strong>रिकॉर्ड में निरंतरता:</strong> पहले से प्रकाशित नंबरों में बदलाव तभी किया जाना चाहिए, जब संबंधित सुधार की पुष्टि हो जाए।</li>
          <li><strong>खाली रिकॉर्ड की स्पष्ट जानकारी:</strong> खाली सेल और डैश (-) को वास्तविक दर्ज नंबर से अलग दिखाना चाहिए।</li>
          <li><strong>अपडेट की पारदर्शिता:</strong> नवीनतम अपडेट की तारीख वही होनी चाहिए, जिस दिन चार्ट में वास्तव में बदलाव किया गया हो।</li>
        </ul>
        <p>
          इन सभी बातों से विजिटर्स को प्रकाशित ऐतिहासिक रिकॉर्ड और उन तारीखों के बीच अंतर समझने में मदद मिलती है, जिनके लिए कोई नंबर उपलब्ध नहीं है।
        </p>
      </>
    ),
  },
];

export function dynamicFaqs(stats: Stats | null, latest?: { result: string; drawDate: string } | null) {
  const items: { question: string; answer: string }[] = [];
  if (stats?.current) {
    const { current, lastDay, year, total } = stats;
    const lastEntry = current.entries[current.entries.length - 1];
    items.push({
      question: "Gwalior Satta Result Today का नवीनतम दर्ज रिजल्ट क्या है?",
      answer: `दिए गए चार्ट के अनुसार, ${lastDay} ${current.hi} ${year} के लिए ${lastEntry.value} दर्ज किया गया है।`,
    });
    items.push({
      question: `Gwalior Satta Chart ${year} में कितनी एंट्री उपलब्ध हैं?`,
      answer: `दिए गए चार्ट डेटा के अनुसार, ${lastDay} ${current.hi} ${year} तक कुल ${total} रिकॉर्ड दर्ज हैं।`,
    });
  }
  items.push(
    {
      question: `Gwalior Satta Chart ${stats?.year ?? new Date().getFullYear()} किस प्रकार व्यवस्थित किया गया है?`,
      answer:
        "इस चार्ट में तारीखों को ऊपर से नीचे की ओर और महीनों को अलग-अलग कॉलम में व्यवस्थित किया गया है।",
    },
    {
      question: "ग्वालियर के चार्ट में डैश (-) का क्या मतलब है?",
      answer:
        "डैश (-) का अर्थ है कि उस विशेष तारीख के सामने कोई दर्ज नंबर उपलब्ध नहीं है।",
    },
    {
      question: "क्या ग्वालियर के पुराने रिजल्ट चार्ट से भविष्य के परिणामों का अनुमान लगाया जा सकता है?",
      answer:
        "नहीं। यह चार्ट केवल पुराने रिकॉर्ड का संग्रह है। इसका उपयोग भविष्य के परिणामों की विश्वसनीय भविष्यवाणी करने के लिए नहीं किया जा सकता।",
    },
  );
  return items;
}
