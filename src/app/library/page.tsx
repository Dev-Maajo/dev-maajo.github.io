// src/app/library/page.tsx

export default function LibraryPage() {

    const resources = [
        {
            title: "How to Build a WhatsApp Reservation Bot with n8n",
            description:
                "A step-by-step workflow showing how to receive WhatsApp messages, check calendar availability, and automatically confirm bookings. Ideal for restaurants and service businesses.",
            readTime: "8 min",
            category: "Automation Guide",
            link: "https://n8n.io/workflows/2465-building-your-first-whatsapp-chatbot/",
        },
        {
            title: "Automatically Classify Gmail Emails Using AI",
            description:
                "Use Gmail triggers, AI parsing, and Google Sheets logging to automatically organize important emails and reduce inbox clutter.",
            readTime: "6 min",
            category: "AI Automation",
            link: "https://n8n.io/workflows/3772-automatically-classify-and-label-gmail-emails-with-google-gemini-ai/",
        },
        {
            title: "Building a Smart AI Agent with Memory in n8n",
            description:
                "Learn how to use vector databases and memory nodes to create AI agents that remember previous conversations and respond more intelligently.",
            readTime: "10 min",
            category: "AI Agents",
            link: "https://n8n.io/workflows/6270-build-your-first-ai-agent/",
        },
        {
            title: "Extract Invoice Data from PDFs Using Automation",
            description:
                "Upload invoice PDFs, extract structured data using AI, log it into spreadsheets, and notify your team automatically.",
            readTime: "7 min",
            category: "Business Automation",
            link: "https://n8n.io/workflows/4763-extract-invoice-data-from-pdfs-with-ai-google-sheets-email-alerts/",
        },
        {
            title: "Common n8n Errors and How to Fix Them",
            description:
                "Learn how to solve common workflow issues such as webhook timeouts, missing nodes, and API rate limits.",
            readTime: "5 min",
            category: "Troubleshooting",
            link: "https://www.reddit.com/r/n8n/comments/1lprpoe/common_n8n_mistakes_i_see_beginners_make_and_how/",
        },
    ];


    return (
        <main className="min-h-screen bg-gray-950 text-white pt-20 pb-20">

            <div className="max-w-6xl mx-auto px-6">

                {/* Hero */}

                <section className="py-16 text-center">

                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Free <span className="text-cyan-500">Automation Library</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        Practical guides, automation workflows, and AI system ideas
                        used in real businesses. Learn how to automate repetitive work
                        using modern tools like n8n, AI agents, and workflow systems.
                    </p>

                    <p className="text-sm text-gray-500 mt-4">
                        Learn → Build → Automate
                    </p>

                </section>



                {/* Resources */}

                <div className="grid md:grid-cols-2 gap-8">

                    {resources.map((item, index) => (

                        <div
                            key={index}
                            className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 hover:shadow-xl transition-all flex flex-col"
                        >

                            {/* Category */}

                            <span className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full w-fit mb-3">
                                {item.category}
                            </span>


                            {/* Title */}

                            <h3 className="text-xl font-bold text-cyan-400 mb-3">
                                {item.title}
                            </h3>


                            {/* Description */}

                            <p className="text-gray-300 mb-6 flex-grow">
                                {item.description}
                            </p>


                            {/* Footer */}

                            <div className="flex justify-between items-center text-sm text-gray-400">

                                <span>{item.readTime} read</span>

                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                                >
                                    Read Article →
                                </a>

                            </div>

                        </div>

                    ))}

                </div>



                {/* CTA */}

                <div className="text-center mt-20">

                    <h2 className="text-3xl font-bold mb-4">
                        Want Automation Like This For Your Business?
                    </h2>

                    <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                        I design custom AI automation systems for businesses —
                        including WhatsApp bots, AI agents, CRM integrations,
                        and advanced n8n workflows.
                    </p>

                    <a
                        href="https://wa.me/918828278210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 hover:bg-green-500 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-lg transition-all hover:scale-105 inline-block w-full md:w-auto"
                    >
                        Book a Free Automation Consultation
                    </a>

                    <p className="text-sm text-gray-500 mt-4">
                        No sales pressure. Just discuss your automation idea.
                    </p>

                </div>


            </div>

        </main>
    );
}