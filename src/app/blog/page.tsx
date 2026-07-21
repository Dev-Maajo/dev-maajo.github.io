import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, LockKeyhole, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation & Privacy Blog | HayaTech",
  description:
    "Practical guides about AI automation, n8n workflows, AI agents, browser-based tools, and privacy-first software from HayaTech.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "AI Automation & Privacy Blog | HayaTech",
    description:
      "Practical, plain-English guides to smarter automation and privacy-first software.",
    url: "/blog",
    type: "website",
  },
};

const upcomingTopics = [
  "Browser Processing vs Cloud Uploads: Which Is Safer?",
  "How n8n Automates Repetitive Business Workflows",
  "What Are AI Agents and How Do Businesses Use Them?",
  "How to Build a Privacy-First PDF Tool",
  "AI Automation for Small Businesses: Practical Examples",
  "n8n vs Zapier: Choosing the Right Automation Platform",
  "How Local File Processing Works Inside Your Browser",
  "Building a WhatsApp Automation System Responsibly",
  "Five Business Tasks You Can Automate Without Replacing People",
  "How Custom AI Agents Connect With Existing Business Tools",
  "Privacy and Security Checklist for Online File Utilities",
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <section className="border-b border-gray-800 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.13),transparent_42%),radial-gradient(circle_at_top_right,rgba(6,182,212,0.12),transparent_38%)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
            HayaTech Blog
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Practical ideas for smarter automation and safer software.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            Clear, useful guides about AI agents, n8n workflows, browser-based
            tools, and privacy-first product design—written for builders and
            businesses, not just engineers.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
              Featured guide
            </p>
            <h2 className="mt-2 text-3xl font-bold">Start here</h2>
          </div>
        </div>

        <article className="overflow-hidden rounded-3xl border border-gray-800 bg-gray-900/80 shadow-2xl shadow-emerald-950/20">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex min-h-72 items-center justify-center bg-gradient-to-br from-emerald-500/20 via-gray-900 to-cyan-500/20 p-10">
              <div className="rounded-3xl border border-emerald-400/20 bg-gray-950/70 p-8 backdrop-blur">
                <LockKeyhole className="h-20 w-20 text-emerald-400" aria-hidden="true" />
              </div>
            </div>
            <div className="p-8 md:p-12">
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-300">Privacy</span>
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-cyan-300">Browser technology</span>
                <span className="px-1 py-1 text-gray-400">8 min read</span>
              </div>
              <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
                How Browser-Based File Tools Protect Your Privacy
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-300">
                Learn how local browser processing can convert and compress files
                without sending the original documents to a remote server—and
                where its privacy limits still matter.
              </p>
              <Link
                href="/blog/how-browser-based-file-tools-protect-your-privacy"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white hover:bg-cyan-500"
              >
                Read the guide <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </article>

        {/* Future ad slot: insert a responsive display unit here after approval. */}
        <div data-future-ad-slot="blog-index-after-featured" className="hidden" />

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Workflow, title: "Workflow automation", text: "Reliable n8n workflows and integrations that remove repetitive work." },
            { icon: Bot, title: "Practical AI agents", text: "Where custom agents help, how they connect, and when not to use one." },
            { icon: LockKeyhole, title: "Privacy-first tools", text: "How thoughtful architecture can reduce unnecessary exposure of user data." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-gray-800 bg-gray-900 p-7">
              <Icon className="h-8 w-8 text-emerald-400" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-gray-400">{text}</p>
            </div>
          ))}
        </div>

        <section className="mt-20" aria-labelledby="upcoming-heading">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">Editorial roadmap</p>
          <h2 id="upcoming-heading" className="mt-2 text-3xl font-bold">Topics we are researching next</h2>
          <p className="mt-4 max-w-3xl text-gray-400">Useful subjects at the intersection of business automation, AI, and browser privacy.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {upcomingTopics.map((topic, index) => (
              <div key={topic} className="flex gap-4 rounded-xl border border-gray-800 bg-gray-900/60 p-5">
                <span className="font-mono text-sm text-cyan-400">{String(index + 1).padStart(2, "0")}</span>
                <p className="font-medium text-gray-200">{topic}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
