import FAQSection from "./FAQSection";
import { Market } from "./staticMarkets";

interface Props {
    market: Market;
}

export default function StaticMarketPage({
    market,
}: Props) {

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: market?.faqs?.map((faq) => ({
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
                                {market.sections?.map((section, idx) => (
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
                                <FAQSection faqItems={market?.faqs} />
                            </div>
                        </div>
        </>
    );
}