// src/app/templates/page.tsx
import Image from "next/image";

export default function TemplatesPage() {
    return (
        <main className="min-h-screen bg-gray-950 text-white pt-20 pb-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Hero */}
                <section className="py-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready-to-Use <span className="text-cyan-500">Automation Templates</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        Pre-built n8n workflows you can instantly import and use in your business.
                        Each template is tested, production-ready, and includes lifetime updates.
                    </p>
                </section>


                {/* Templates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


                    {/* Template 1 */}
                    <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all flex flex-col hover:shadow-xl">

                        <div className="relative h-56 w-full">
                            <Image
                                src="/gmail-automation.png"
                                alt="Gmail Smart Automation Workflow"
                                fill
                                className="object-cover"
                            />

                            <span className="absolute top-4 left-4 bg-cyan-600 text-xs px-3 py-1 rounded-full font-semibold">
                                Starter Template
                            </span>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">

                            <h3 className="text-2xl font-bold text-cyan-400 mb-3">
                                Gmail Smart Automation
                            </h3>

                            <p className="text-gray-300 mb-4 flex-grow">
                                Automatically classify incoming emails using AI, log important
                                messages into Google Sheets, store attachments in Drive,
                                and generate quick reply drafts.
                            </p>

                            <ul className="text-sm text-gray-400 mb-6 space-y-2">
                                <li>• Gmail trigger with AI-based classification</li>
                                <li>• Google Sheets and Drive integrations</li>
                                <li>• Error handling and automation safeguards</li>
                                <li>• Instant download</li>
                                <li>• n8n workflow file included</li>
                                <li>• Setup guide included</li>
                            </ul>

                            <div className="mt-auto">

                                <p className="text-xl font-bold text-white mb-4">
                                    ₹799
                                </p>

                                <a
                                    href="https://hayatechh.gumroad.com/l/ctryac"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-cyan-600 hover:bg-cyan-500 text-white py-4 rounded-lg font-bold text-center transition-all block w-full"
                                >
                                    Get Template
                                </a>

                                <p className="text-xs text-gray-500 mt-2 text-center">
                                    Secure checkout via Gumroad
                                </p>

                            </div>
                        </div>
                    </div>


                    {/* Template 2 */}
                    <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all flex flex-col hover:shadow-xl">

                        <div className="relative h-56 w-full">
                            <Image
                                src="/whatsapp-bot.png"
                                alt="WhatsApp Reservation Bot"
                                fill
                                className="object-cover"
                            />

                            <span className="absolute top-4 left-4 bg-green-600 text-xs px-3 py-1 rounded-full font-semibold">
                                🔥 Best Seller
                            </span>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">

                            <h3 className="text-2xl font-bold text-cyan-400 mb-3">
                                WhatsApp Reservation Bot
                            </h3>

                            <p className="text-gray-300 mb-4 flex-grow">
                                Automatically handle booking requests, check calendar
                                availability, and confirm reservations via WhatsApp.
                                Perfect for restaurants and service businesses.
                            </p>

                            <ul className="text-sm text-gray-400 mb-6 space-y-2">
                                <li>• WhatsApp message trigger with AI handling</li>
                                <li>• Calendar availability check</li>
                                <li>• Automatic confirmation messages</li>
                                <li>• Instant download</li>
                                <li>• n8n workflow file included</li>
                                <li>• Setup guide included</li>
                            </ul>

                            <div className="mt-auto">

                                <p className="text-xl font-bold text-white mb-4">
                                    ₹3599
                                </p>

                                <a
                                    href="https://hayatechh.gumroad.com/l/knzpdh"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-cyan-600 hover:bg-cyan-500 text-white py-4 rounded-lg font-bold text-center transition-all block w-full"
                                >
                                    Get Template
                                </a>

                                <p className="text-xs text-gray-500 mt-2 text-center">
                                    Secure checkout via Gumroad
                                </p>

                            </div>
                        </div>
                    </div>


                    {/* Template 3 */}
                    <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all flex flex-col hover:shadow-xl">

                        <div className="relative h-56 w-full">
                            <Image
                                src="/invoice-processor.png"
                                alt="AI Invoice Processor Workflow"
                                fill
                                className="object-cover"
                            />

                            <span className="absolute top-4 left-4 bg-purple-600 text-xs px-3 py-1 rounded-full font-semibold">
                                ⚡ Saves Hours
                            </span>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">

                            <h3 className="text-2xl font-bold text-cyan-400 mb-3">
                                AI Invoice Processor
                            </h3>

                            <p className="text-gray-300 mb-4 flex-grow">
                                Upload invoice PDFs, extract structured data using AI,
                                log the information into Google Sheets, and automatically
                                notify your team.
                            </p>

                            <ul className="text-sm text-gray-400 mb-6 space-y-2">
                                <li>• PDF upload with AI data extraction</li>
                                <li>• Google Sheets logging</li>
                                <li>• Automated notification system</li>
                                <li>• Instant download</li>
                                <li>• n8n workflow file included</li>
                                <li>• Setup guide included</li>
                            </ul>

                            <div className="mt-auto">

                                <p className="text-xl font-bold text-white mb-4">
                                    ₹3599
                                </p>

                                <a
                                    href="https://hayatechh.gumroad.com/l/ymqcea"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-cyan-600 hover:bg-cyan-500 text-white py-4 rounded-lg font-bold text-center transition-all block w-full"
                                >
                                    Get Template
                                </a>

                                <p className="text-xs text-gray-500 mt-2 text-center">
                                    Secure checkout via Gumroad
                                </p>

                            </div>
                        </div>
                    </div>

                </div>


                {/* CTA */}
                <div className="text-center mt-20">

                    <h2 className="text-3xl font-bold mb-4">
                        Need a Custom Automation System?
                    </h2>

                    <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                        I build custom AI automation systems for businesses —
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

                </div>


            </div>
        </main>
    );
}