// src/app/services/page.tsx
import Link from "next/link";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-gray-950 text-white pt-20 pb-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Hero */}
                <section className="py-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        AI Automation <span className="text-cyan-500">Services</span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Custom AI automation systems designed to reduce manual work,
                        streamline operations, and help businesses scale efficiently.
                    </p>

                    <p className="text-sm text-gray-500 mt-4">
                        Practical automation systems built for real business workflows.
                    </p>
                </section>

                {/* Services List */}
                <div className="space-y-16">

                    {/* Service 1 */}
                    <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                        <h2 className="text-3xl font-bold text-cyan-400 mb-6">
                            Custom AI Agents
                        </h2>

                        <p className="text-lg text-gray-300 mb-6">
                            Intelligent AI agents that automate lead qualification,
                            appointment scheduling, support routing, and customer
                            interactions across multiple platforms.
                        </p>

                        <ul className="text-gray-300 list-disc pl-6 space-y-3 mb-8">
                            <li>Triggers from WhatsApp, Telegram, Email, or Web Forms</li>
                            <li>Memory and vector databases for contextual conversations</li>
                            <li>Integrations with Calendar, Google Sheets, APIs, and voice systems</li>
                            <li>Human fallback and robust error handling</li>
                        </ul>

                        <div className="flex flex-col md:flex-row gap-4">
                            <a
                                href="https://wa.me/918828278210?text=Hi%20Maaz,%20I'm%20interested%20in%20building%20Custom%20AI%20Agents%20for%20my%20business."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-lg font-bold transition-colors text-center"
                            >
                                Book Free Consultation
                            </a>

                            <Link
                                href="/templates"
                                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-bold transition-colors text-center"
                            >
                                View Example Templates
                            </Link>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                        <h2 className="text-3xl font-bold text-cyan-400 mb-6">
                            n8n Workflows & Integrations
                        </h2>

                        <p className="text-lg text-gray-300 mb-6">
                            Advanced workflow automation connecting your apps,
                            databases, and AI services into powerful automated
                            systems that run your operations in the background.
                        </p>

                        <ul className="text-gray-300 list-disc pl-6 space-y-3 mb-8">
                            <li>Multi-step automation with logic, branching, and loops</li>
                            <li>AI-powered data parsing using OpenAI, Grok, or Gemini</li>
                            <li>Error handling, retries, and automated notifications</li>
                            <li>Integrations with Google Workspace, CRMs, APIs, and messaging platforms</li>
                        </ul>

                        <div className="flex flex-col md:flex-row gap-4">
                            <a
                                href="https://wa.me/918828278210?text=Hi%20Maaz,%20I'm%20interested%20in%20n8n%20Workflow%20Automation%20for%20my%20business."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-lg font-bold transition-colors text-center"
                            >
                                Book Free Consultation
                            </a>

                            <Link
                                href="/templates"
                                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-bold transition-colors text-center"
                            >
                                View Example Templates
                            </Link>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                        <h2 className="text-3xl font-bold text-cyan-400 mb-6">
                            Voice & Multi-Channel Bots
                        </h2>

                        <p className="text-lg text-gray-300 mb-6">
                            AI-powered voice and chat bots that allow customers
                            to interact with your business through natural
                            conversations across multiple platforms.
                        </p>

                        <ul className="text-gray-300 list-disc pl-6 space-y-3 mb-8">
                            <li>Voice AI integrations with advanced speech systems</li>
                            <li>WhatsApp ordering bots and customer support assistants</li>
                            <li>Automated appointment booking and notifications</li>
                            <li>Multi-channel deployment across messaging platforms</li>
                        </ul>

                        <div className="flex flex-col md:flex-row gap-4">
                            <a
                                href="https://wa.me/918828278210?text=Hi%20Maaz,%20I'm%20interested%20in%20Voice%20and%20Multi-Channel%20AI%20Bots%20for%20my%20business."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-lg font-bold transition-colors text-center"
                            >
                                Book Free Consultation
                            </a>

                            <Link
                                href="/templates"
                                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-bold transition-colors text-center"
                            >
                                View Example Templates
                            </Link>
                        </div>
                    </div>

                    {/* Service 4 */}
                    <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                        <h2 className="text-3xl font-bold text-cyan-400 mb-6">
                            Automation Maintenance & Scaling
                        </h2>

                        <p className="text-lg text-gray-300 mb-6">
                            Ongoing monitoring, updates, and scaling support to
                            ensure your automation systems remain stable,
                            secure, and optimized as your business grows.
                        </p>

                        <ul className="text-gray-300 list-disc pl-6 space-y-3 mb-8">
                            <li>System monitoring and automated alerts</li>
                            <li>Bug fixes, updates, and feature improvements</li>
                            <li>Performance optimization and backups</li>
                            <li>Priority technical support</li>
                        </ul>

                        <div className="flex flex-col md:flex-row gap-4">
                            <a
                                href="https://wa.me/918828278210?text=Hi%20Maaz,%20I'm%20interested%20in%20Automation%20Maintenance%20and%20Scaling%20support."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-lg font-bold transition-colors text-center"
                            >
                                Book Free Consultation
                            </a>
                        </div>
                    </div>

                </div>

                {/* Final CTA */}
                <div className="text-center mt-16">
                    <p className="text-xl text-gray-400 mb-6">
                        Interested in automating your business processes?
                    </p>

                    <a
                        href="https://wa.me/918828278210?text=Hi%20Maaz,%20I'd%20like%20to%20discuss%20automation%20solutions%20for%20my%20business."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 hover:bg-green-500 text-white px-12 py-6 rounded-xl font-bold text-xl shadow-lg transition-all hover:scale-105 inline-block w-full md:w-auto"
                    >
                        Start a Free Automation Consultation
                    </a>
                </div>

            </div>
        </main>
    );
}
