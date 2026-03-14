// src/app/page.tsx
import { Bot, Workflow, Mic, Settings } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white">

      {/* Hero Section */}
      <section className="py-24 px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-emerald-500">Haya</span>
          <span className="text-cyan-500">Tech</span>
          <span className="text-white"> AI Automation Systems</span>
        </h1>

        <p className="text-xl md:text-3xl mb-8 max-w-4xl mx-auto">
          AI automation systems that capture leads, respond to customers,
          and run business workflows automatically.
        </p>

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Ethical and reliable automation systems designed for modern businesses.
          Built in Mumbai, serving clients worldwide.
        </p>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
          <a
            href="https://wa.me/918828278210"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-600 hover:bg-cyan-500 text-white px-10 py-5 rounded-lg font-bold text-lg transition-colors w-full md:w-auto"
          >
            Get Your Business Automated
          </a>

          <a
            href="/templates"
            className="bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-10 py-5 rounded-lg font-bold text-lg transition-colors w-full md:w-auto"
          >
            Browse Automation Templates
          </a>
        </div>
      </section>


      {/* Services Teaser Section */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            What I Build
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Card 1 */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all flex flex-col min-h-[380px]">
              <div className="flex justify-center mb-4">
                <Bot size={40} className="text-cyan-400" />
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-4 text-center">
                Custom AI Agents
              </h3>

              <p className="text-gray-300 mb-4 text-center">
                AI agents that qualify leads, schedule appointments,
                and handle customer conversations automatically.
              </p>

              <ul className="text-sm text-gray-400 list-disc pl-5 space-y-2 mt-auto">
                <li>WhatsApp and email triggers</li>
                <li>Memory and vector database support</li>
                <li>Integrations with calendars, sheets, and APIs</li>
              </ul>
            </div>


            {/* Card 2 */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all flex flex-col min-h-[380px]">
              <div className="flex justify-center mb-4">
                <Workflow size={40} className="text-cyan-400" />
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-4 text-center">
                n8n Workflow Automation
              </h3>

              <p className="text-gray-300 mb-4 text-center">
                Automate repetitive tasks like email sorting,
                invoice processing, and CRM updates.
              </p>

              <ul className="text-sm text-gray-400 list-disc pl-5 space-y-2 mt-auto">
                <li>Advanced error handling</li>
                <li>Human fallback systems</li>
                <li>Multi-app integrations</li>
              </ul>
            </div>


            {/* Card 3 */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all flex flex-col min-h-[380px]">
              <div className="flex justify-center mb-4">
                <Mic size={40} className="text-cyan-400" />
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-4 text-center">
                Voice & Chat Bots
              </h3>

              <p className="text-gray-300 mb-4 text-center">
                AI-powered voice callers and messaging bots
                for customer support and order automation.
              </p>

              <ul className="text-sm text-gray-400 list-disc pl-5 space-y-2 mt-auto">
                <li>Voice-to-text AI interactions</li>
                <li>Order and menu handling</li>
                <li>Calendar and notification systems</li>
              </ul>
            </div>


            {/* Card 4 */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all flex flex-col min-h-[380px]">
              <div className="flex justify-center mb-4">
                <Settings size={40} className="text-cyan-400" />
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-4 text-center">
                Automation Maintenance
              </h3>

              <p className="text-gray-300 mb-4 text-center">
                Ongoing monitoring, updates, and scaling
                support for automation systems.
              </p>

              <ul className="text-sm text-gray-400 list-disc pl-5 space-y-2 mt-auto">
                <li>24/7 workflow monitoring</li>
                <li>Updates and improvements</li>
                <li>Backup and security management</li>
              </ul>
            </div>

          </div>


          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="https://wa.me/918828278210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-600 hover:bg-cyan-500 text-white px-10 py-5 rounded-lg font-bold text-lg transition-colors inline-block w-full md:w-auto"
            >
              Book a Free Automation Consultation
            </a>
          </div>

        </div>
      </section>


      <section className="py-16 px-6 bg-gray-900"> <div className="max-w-4xl mx-auto text-center"> {/* Heading */} <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-6 text-white"> Meet the Builder </h2> {/* Founder Photo */} <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-500/20"> <Image src="/maaz-founder.png" alt="Maaz Shaikh - Founder of HayaTech" fill className="object-cover" /> </div> {/* Founder Title */} <p className="text-cyan-400 font-medium mb-4"> Founder – HayaTech </p> {/* Intro */} <p className="text-lg md:text-xl text-gray-300 mb-6"> Hi, I'm Maaz, an AI Automation Architect based in Mumbai. </p> {/* Description */} <p className="text-gray-400 mb-8 max-w-2xl mx-auto"> I design AI automation systems that help freelancers and businesses eliminate repetitive work and scale operations using AI agents, automation workflows, and smart integrations. </p>

        <a
          href="https://wa.me/918828278210"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan-600 hover:bg-cyan-500 text-white px-10 py-5 rounded-lg font-bold text-lg transition-colors inline-block w-full md:w-auto"
        >
          Let's Discuss Your Automation Needs
        </a>

      </div>
      </section>


      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-900/30 to-emerald-900/30 text-center">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Automate Your Business?
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-10">
            Tell me about your business workflow and I will suggest the best
            automation system for your needs. The consultation is free.
          </p>

          <a
            href="https://wa.me/918828278210?text=Hi%20Maaz,%20I'd%20like%20to%20automate%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-500 text-white px-12 py-6 rounded-xl font-bold text-xl shadow-lg transition-all hover:scale-105 inline-block w-full md:w-auto"
          >
            Start Free Consultation
          </a>

          <p className="mt-6 text-gray-400 text-sm">
            Or email: skmaaz8828@gmail.com
          </p>

        </div>

      </section>

    </main>
  );
}

