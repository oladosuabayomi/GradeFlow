import React, { useState } from "react";
import { Plus, X, Mail } from "lucide-react";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "Is this calculator for the 5.0 grading scale?",
            answer: "Yes, our system is specifically engineered for the 5.0 grading scale used by LASU and other institutions. A score of 70-100 equals 5.0 points.",
        },
        {
            question: "How do I handle carryover courses?",
            answer: "Simply add the carryover course as a new entry in your current semester. Ensure you use the correct unit load and your new grade.",
        },
        {
            question: "Is my data saved?",
            answer: "We prioritize your privacy. Your data is processed locally in your browser and is not stored on our servers. You can download a PDF for your records.",
        },
        {
            question: "Can I calculate GP for a single semester?",
            answer: "Absolutely! You can use the calculator for a single semester (GPA) or combine multiple semesters to calculate your Cumulative GPA (CGPA).",
        },
        {
            question: "Is the calculator free to use?",
            answer: "Yes, GradeFlow is completely free for all students. Our goal is to help you achieve academic clarity without any barriers.",
        },
    ];

    return (
        <section className="py-24 bg-white" id="faq">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Left Column: Header */}
                    <div className="lg:col-span-5">
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
                            Got Questions?
                        </h2>
                        <p className="text-2xl text-slate-600 mb-8 font-medium">
                            We've calculated the answers.
                        </p>
                        <a
                            href="mailto:help@lasucgpa.com"
                            className="inline-flex items-center text-brand-green font-medium hover:text-brand-blue transition-colors text-lg"
                        >
                            <Mail className="h-5 w-5 mr-2" />
                            Support: gradeflowhq@gmail.com
                        </a>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="lg:col-span-7 space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`border rounded-2xl transition-all duration-300 ${
                                    openIndex === index
                                        ? "border-brand-green/30 shadow-sm bg-white"
                                        : "border-slate-200 hover:border-brand-green/30 bg-slate-50/50"
                                }`}
                            >
                                <button
                                    onClick={() =>
                                        setOpenIndex(
                                            openIndex === index ? -1 : index
                                        )
                                    }
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <span
                                        className={`text-lg font-bold ${
                                            openIndex === index
                                                ? "text-brand-blue"
                                                : "text-slate-700"
                                        }`}
                                    >
                                        {faq.question}
                                    </span>
                                    <span
                                        className={`ml-4 shrink-0 transition-transform duration-300 ${
                                            openIndex === index
                                                ? "rotate-180 text-brand-green"
                                                : "text-brand-green"
                                        }`}
                                    >
                                        {openIndex === index ? (
                                            <X className="h-6 w-6" />
                                        ) : (
                                            <Plus className="h-6 w-6" />
                                        )}
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        openIndex === index
                                            ? "max-h-48 opacity-100"
                                            : "max-h-0 opacity-0"
                                    }`}
                                >
                                    <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
