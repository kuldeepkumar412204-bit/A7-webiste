import { ReactNode } from "react";

interface FAQItem {
    question: string;
    answer: ReactNode | string;
}

export default function FAQSection(
    { faqItems }: {
        faqItems?: FAQItem[]
    }
) {
    if (!faqItems || faqItems.length === 0) {
        return null; // Don't render the FAQ section if there are no items
    }
    return (
        <>

            <div className="w-full">
                {/* FAQ Main Yellow Header */}
                <div className="w-full bg-[#ffd200] py-3.5 px-4 text-center border-b border-black/10">
                    <h2 className="text-black font-bold text-sm sm:text-lg md:text-xl tracking-wide uppercase">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* Accordion List Container */}
                <div className="w-full bg-white py-6 px-4 md:px-6 max-w-4xl mx-auto">
                    <div className="space-y-3">
                        {faqItems?.map((item, idx) => (
                            <details
                                key={idx}
                                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm group"
                            >
                                <summary className="list-none cursor-pointer flex justify-between items-center py-4 px-4 bg-[#ffd200] hover:bg-[#c4a000] transition-colors">
                                    <span className="text-black font-semibold text-xs sm:text-base pr-4">
                                        {item.question}
                                    </span>

                                    <span className="text-black font-bold text-lg group-open:hidden">
                                        +
                                    </span>
                                    <span className="text-black font-bold text-lg hidden group-open:block">
                                        −
                                    </span>
                                </summary>

                                <div className="p-4 bg-white text-gray-800 text-xs sm:text-sm md:text-base leading-relaxed">
                                    {item.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </div></>
    )
}