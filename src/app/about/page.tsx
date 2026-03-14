// src/app/about/page.tsx
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gray-950 text-white pt-20 pb-20">
            <div className="max-w-6xl mx-auto px-6">

                {/* Hero */}
                <section className="py-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        About <span className="text-cyan-500">HayaTech</span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        HayaTech builds AI automation systems that help businesses save time,
                        reduce repetitive work, and operate more efficiently using modern tools
                        like AI agents, workflow automation, and smart integrations.
                    </p>
                </section>


                {/* Founder Section */}
                <section className="py-12 flex flex-col md:flex-row items-center md:items-start gap-12">

                    {/* Photo */}
                    <div className="flex flex-col items-center shrink-0">
                        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-500/20">
                            <Image
                                src="/maaz-founder.png"
                                alt="Maaz Shaikh – Founder of HayaTech"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <p className="text-sm text-gray-500 mt-3 text-center">
                            Founder – HayaTech AI Automation
                        </p>
                    </div>


                    {/* Bio */}
                    <div className="text-center md:text-left max-w-2xl">

                        <h2 className="text-3xl font-bold mb-6 text-cyan-400">
                            Hi, I'm Maaz
                        </h2>

                        <p className="text-lg text-gray-300 mb-6">
                            I'm an AI Automation Architect based in Mumbai. I design automation
                            systems that help businesses eliminate repetitive work and operate
                            more efficiently using tools like AI agents, workflow automation,
                            and smart integrations.
                        </p>

                        <p className="text-gray-400 mb-6">
                            My interest in technology started early with coding and problem
                            solving. When I discovered automation tools like n8n, I began
                            building real-world solutions to automate everyday processes —
                            including email workflows, invoice handling, lead capture,
                            WhatsApp automation, and AI-powered assistants.
                        </p>

                        <p className="text-gray-400 mb-6">
                            I started HayaTech with a simple philosophy: build automation
                            systems that provide genuine value to businesses. No black-hat
                            tactics, no shortcuts — just reliable and ethical technology
                            solutions that make work easier.
                        </p>

                        <p className="text-gray-400 mb-6">
                            Today I work with freelancers and small businesses to build custom
                            automation systems that save time and simplify operations. The
                            mission is simple: automate repetitive work so businesses can
                            focus on growth, creativity, and the things that truly matter.
                        </p>


                        {/* CTA */}
                        <a
                            href="https://wa.me/918828278210?text=Hi%20Maaz,%20I%20saw%20your%20HayaTech%20website%20and%20I'd%20like%20to%20discuss%20automation%20for%20my%20business."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-cyan-600 hover:bg-cyan-500 text-white px-10 py-5 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg inline-block w-full md:w-auto mt-6"
                        >
                            Book a Free Automation Consultation
                        </a>

                    </div>

                </section>



                {/* Values */}
                <section className="py-12">

                    <h2 className="text-3xl font-bold text-center mb-10 text-white">
                        Core Principles
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div className="bg-gray-800 rounded-xl p-8 text-center border border-gray-700 hover:border-cyan-500 transition-all">
                            <h3 className="text-2xl font-semibold text-emerald-400 mb-4">
                                Ethical & Honest
                            </h3>

                            <p className="text-gray-300">
                                Every automation system is built with transparency,
                                integrity, and long-term reliability in mind.
                            </p>
                        </div>


                        <div className="bg-gray-800 rounded-xl p-8 text-center border border-gray-700 hover:border-cyan-500 transition-all">
                            <h3 className="text-2xl font-semibold text-emerald-400 mb-4">
                                Production-Ready Systems
                            </h3>

                            <p className="text-gray-300">
                                Workflows are tested, optimized, and built with proper
                                error handling so they can run reliably in real businesses.
                            </p>
                        </div>


                        <div className="bg-gray-800 rounded-xl p-8 text-center border border-gray-700 hover:border-cyan-500 transition-all">
                            <h3 className="text-2xl font-semibold text-emerald-400 mb-4">
                                Direct Founder Support
                            </h3>

                            <p className="text-gray-300">
                                Every client works directly with the builder of the system.
                                No outsourcing — clear communication and personal support.
                            </p>
                        </div>

                    </div>

                </section>

            </div>
        </main>
    );
}

