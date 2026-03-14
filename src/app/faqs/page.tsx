// src/app/faqs/page.tsx
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "What is n8n and why do you use it?",
        answer:
            "n8n is a powerful open-source workflow automation platform similar to Zapier, but more customizable and self-hosted. I use n8n because it allows advanced integrations, AI automation, and production-grade error handling, making it ideal for building reliable business automation systems.",
    },
    {
        question: "How long does it take to build a custom automation?",
        answer:
            "Simple automation workflows usually take 2–5 days to build and deploy. More complex systems such as AI agents, voice bots, or multi-channel automation can take 7–14 days depending on the scope. During the free consultation, we define the exact requirements and timeline.",
    },
    {
        question: "How much does automation cost?",
        answer:
            "Ready-to-use automation templates typically range between ₹299 and ₹999. Custom automation systems start from around ₹5,000 depending on complexity. Ongoing maintenance and monitoring plans usually range between ₹2,000 and ₹5,000 per month. Final pricing is discussed during the consultation with full transparency.",
    },
    {
        question: "Will I receive support after the system is delivered?",
        answer:
            "Yes. Every automation system includes ongoing support. If you ever face an issue or need an update, you can contact me directly and I will assist you. The goal is to ensure your automation continues running smoothly.",
    },
    {
        question: "Are these automation systems ethical and transparent?",
        answer:
            "Absolutely. All systems are built with ethical and transparent practices. There are no black-hat techniques, hidden scripts, or misleading tools. Every automation workflow is delivered clearly so you understand how your system works.",
    },
    {
        question: "Do you work with international clients?",
        answer:
            "Yes. I work with businesses globally including clients from the UAE, United States, Europe, and the Middle East. Communication and delivery are handled online, making it easy to collaborate regardless of location.",
    },
    {
        question: "What happens during the free consultation?",
        answer:
            "During the consultation, we discuss your business workflow, identify repetitive tasks that can be automated, and explore possible automation solutions. I may also share examples of similar systems to help you understand what is possible.",
    },
    {
        question: "What if I still have questions?",
        answer:
            "You can send a message directly on WhatsApp and I will personally respond. I'm always happy to discuss your automation ideas and answer any questions.",
    },
];

export default function FAQsPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main className="min-h-screen bg-gray-950 text-white pt-20 pb-20">
            <div className="max-w-4xl mx-auto px-6">

                {/* Hero */}
                <section className="py-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Frequently Asked <span className="text-cyan-500">Questions</span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Common questions about AI automation systems, workflows, pricing,
                        and how HayaTech helps businesses automate repetitive work.
                    </p>
                </section>


                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-700 transition-colors"
                            >
                                <h3 className="text-lg md:text-xl font-semibold text-white">
                                    {faq.question}
                                </h3>

                                {openIndex === index ? (
                                    <ChevronUp size={24} className="text-cyan-400" />
                                ) : (
                                    <ChevronDown size={24} className="text-cyan-400" />
                                )}
                            </button>

                            {openIndex === index && (
                                <div className="px-6 pb-6 text-gray-300">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>


                {/* Final CTA */}
                <div className="text-center mt-16">
                    <p className="text-xl text-gray-400 mb-6">
                        Still have questions? Let's discuss your automation needs.
                    </p>

                    <a
                        href="https://wa.me/918828278210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 hover:bg-green-500 text-white px-12 py-6 rounded-xl font-bold text-xl shadow-lg transition-all hover:scale-105 inline-block w-full md:w-auto"
                    >
                        Start a Free WhatsApp Consultation
                    </a>
                </div>

            </div>
        </main>
    );
}