"use client";

import { useState } from 'react';

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is 10Billion.Studio and what services do you offer?",
            answer: "10Billion.Studio specializes in building custom dashboards and SaaS solutions that help businesses work faster, smarter, and with complete clarity. We offer end-to-end development services including custom dashboard design, SaaS application development, data visualization solutions, and business intelligence tools tailored to your specific needs."
        },
        {
            question: "How long does it take to build a custom dashboard?",
            answer: "The timeline varies depending on complexity, but typically our custom dashboards take 4-8 weeks from initial consultation to deployment. This includes discovery, design, development, testing, and implementation phases."
        },
        {
            question: "What's your pricing model for custom development?",
            answer: "We offer flexible pricing models including fixed-price projects for well-defined scopes, time-and-materials for evolving projects, and retainer agreements for ongoing development."
        },
        {
            question: "Do you provide ongoing support and maintenance?",
            answer: "Yes, we offer comprehensive ongoing support and maintenance packages starting at $500/month. This includes bug fixes, performance monitoring, security updates, and minor feature enhancements."
        },
        {
            question: "Can you integrate with our existing systems and tools?",
            answer: "Absolutely. We have extensive experience integrating with various systems including CRM platforms, marketing tools, databases, payment processors, and custom APIs."
        },
        {
            question: "What technologies do you use for dashboard development?",
            answer: "We use modern, scalable technologies including React.js/Next.js for frontend, Node.js/Python for backend, PostgreSQL/MongoDB for databases, and visualization libraries like D3.js and Chart.js."
        },
        {
            question: "How do you ensure data security and privacy?",
            answer: "We implement enterprise-grade security measures including end-to-end encryption, secure API protocols, regular security audits, and compliance with GDPR, CCPA, and other regulations."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-white grid items-center">
            <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    {/* Left Column - Title */}
                    <div className="lg:w-2/5">
                        <h1 className="text-md sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-black mb-3 sm:mb-6">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-sm sm:text-md md:text-lg lg:text-xl font-light text-gray-600 mb-8">
                            Find answers to common questions about our custom dashboard development services.
                        </p>

                        {/* Contact Info */}
                        <div className="mt-8 p-0">
                            <h3 className="text-md sm:text-lg md:text-xl lg:text-2xl font-bold text-black mb-2 sm:mb-4">Still have questions?</h3>
                            <p className="text-gray-600 mb-4 text-sm md:text-md lg:text-lg font-light">
                                Can't find what you're looking for? Contact our team directly.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center px-4 py-2 bg-black text-white font-light tracking-tight rounded-lg hover:bg-gray-800 transition-colors duration-300">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Contact Support
                            </a>
                        </div>
                    </div>

                    {/* Right Column - FAQs */}
                    <div className="lg:w-3/5">
                        <div className="divide-y divide-gray-100">
                            {faqs.map((faq, index) => (
                                <div key={index} className="py-4 sm:py-7 first:pt-0 last:pb-0">
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full text-left flex items-start justify-between hover:opacity-80 transition-opacity duration-200 focus:outline-none"
                                    >
                                        <div className="flex-1">
                                            <h3 className="text-sm sm:text-md md:text-lg lg:text-xl tracking-tight font-semibold text-gray-900">
                                                {faq.question}
                                            </h3>
                                            <div
                                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
                                                    }`}
                                            >
                                                <p className="text-gray-600 text-sm sm:text-md md:text-lg lg:text-xl font-light">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="shrink-0 ml-6">
                                            <svg
                                                className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;