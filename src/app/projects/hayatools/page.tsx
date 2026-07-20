import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ExternalLink, FileImage, Gauge, LockKeyhole, Search, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "HayaTools Case Study | HayaTech",
  description: "How HayaTech built and launched nine free, privacy-first browser tools with Next.js, client-side file processing, SEO, analytics, and automated deployment.",
  alternates: { canonical: "https://hayatech.dev/projects/hayatools" },
  openGraph: {
    title: "HayaTools — Privacy-First File Tools Case Study",
    description: "From product idea to a live collection of nine browser-based image and PDF tools.",
    url: "https://hayatech.dev/projects/hayatools",
    type: "article",
    images: [{ url: "/hayatools-home-desktop.png", width: 1350, height: 636, alt: "HayaTools homepage" }],
  },
};

const tools = ["Image to PDF", "Compress Image", "Resize Image", "JPG/PNG to WebP", "Merge PDF", "PNG to JPG", "JPG to PNG", "Crop Image", "Rotate & Flip Image"];
const stack = ["Next.js 16", "React 19", "TypeScript", "Canvas API", "jsPDF", "pdf-lib", "Vercel", "Search Console"];

export default function HayaToolsCaseStudy() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <section className="relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.16),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.13),transparent_35%)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300 mb-7"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Live product</div>
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 items-center">
            <div>
              <p className="text-cyan-400 font-medium mb-4">PRODUCT DESIGN · DEVELOPMENT · DEPLOYMENT</p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-7">Everyday file tools, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">without the nonsense.</span></h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-9">HayaTools is a free, privacy-first collection of image and PDF utilities. Supported files are processed locally in the browser—without accounts, watermarks, or application-server uploads.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://tools.hayatech.dev" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 px-7 py-4 rounded-lg font-semibold">Open live product <ExternalLink size={18} /></a>
                <Link href="#case-study" className="inline-flex items-center justify-center gap-2 border border-gray-700 hover:border-cyan-500 px-7 py-4 rounded-lg font-semibold text-gray-200">Read the case study <ArrowRight size={18} /></Link>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-700 bg-gray-900/70 p-3 shadow-2xl shadow-cyan-950/40">
              <Image src="/hayatools-home-mobile.png" width={306} height={495} alt="HayaTools responsive mobile homepage" className="rounded-xl mx-auto h-[470px] w-auto" priority />
            </div>
          </div>
        </div>
      </section>

      <main id="case-study" className="max-w-7xl mx-auto px-6 py-20">
        <section className="grid md:grid-cols-2 gap-8 mb-24">
          <article className="rounded-2xl border border-gray-800 bg-gray-900 p-8">
            <p className="text-sm font-semibold tracking-widest text-rose-400 mb-4">THE PROBLEM</p>
            <h2 className="text-3xl font-bold mb-5">Basic file tasks often create unnecessary friction.</h2>
            <p className="text-gray-400 leading-relaxed">Many online utilities require accounts, upload private files to remote servers, add watermarks, or place the final download behind a subscription. The experience can feel disproportionate to the task.</p>
          </article>
          <article className="rounded-2xl border border-cyan-900/60 bg-cyan-950/20 p-8">
            <p className="text-sm font-semibold tracking-widest text-cyan-400 mb-4">THE SOLUTION</p>
            <h2 className="text-3xl font-bold mb-5">Focused tools with a browser-first privacy model.</h2>
            <p className="text-gray-300 leading-relaxed">Each HayaTools page solves one task. Files are validated and processed in browser memory, then returned as temporary local downloads. No user database or file-storage layer is required.</p>
          </article>
        </section>

        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {[{value:"9",label:"Live tools"},{value:"0",label:"Accounts required"},{value:"0",label:"HayaTools watermarks"},{value:"100%",label:"Browser-first processing"}].map((item)=><div key={item.label} className="rounded-xl border border-gray-800 bg-gray-900 p-6"><strong className="block text-3xl md:text-4xl text-emerald-400 mb-2">{item.value}</strong><span className="text-sm text-gray-400">{item.label}</span></div>)}
        </section>

        <section className="mb-24">
          <div className="max-w-3xl mb-10"><p className="text-cyan-400 font-semibold tracking-widest text-sm mb-3">SHIPPED FEATURES</p><h2 className="text-4xl font-bold mb-4">Nine tools in one consistent system</h2><p className="text-gray-400">A shared tool definition layer generates focused pages with their own metadata, instructions, FAQs, upload rules, and processing behavior.</p></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{tools.map((tool)=><div key={tool} className="flex items-center gap-3 rounded-xl border border-gray-800 bg-gray-900/70 p-5"><span className="grid place-items-center h-9 w-9 rounded-lg bg-emerald-500/10 text-emerald-400"><Check size={18} /></span><span className="font-medium text-gray-200">{tool}</span></div>)}</div>
        </section>

        <section className="mb-24 rounded-3xl border border-gray-800 bg-gray-900 overflow-hidden">
          <div className="p-8 md:p-12"><p className="text-emerald-400 font-semibold tracking-widest text-sm mb-3">PRIVACY ARCHITECTURE</p><h2 className="text-4xl font-bold mb-5">The file stays on the user&apos;s device.</h2><p className="text-gray-400 max-w-3xl">The workflow intentionally avoids an upload endpoint. Native browser APIs and client-side libraries perform the supported transformations.</p></div>
          <div className="grid md:grid-cols-4 border-t border-gray-800">{[{icon:FileImage,label:"Select",text:"Choose a local file"},{icon:LockKeyhole,label:"Validate",text:"Check type in browser"},{icon:Gauge,label:"Process",text:"Transform in memory"},{icon:ArrowRight,label:"Download",text:"Create a temporary result"}].map(({icon:Icon,label,text},index)=><div key={label} className="relative p-7 border-b md:border-b-0 md:border-r last:border-0 border-gray-800"><Icon className="text-cyan-400 mb-5" /><span className="text-xs text-gray-600">0{index+1}</span><h3 className="text-xl font-semibold mt-2 mb-2">{label}</h3><p className="text-sm text-gray-400">{text}</p></div>)}</div>
        </section>

        <section className="grid lg:grid-cols-[1.3fr_0.7fr] gap-6 mb-24">
          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-3"><Image src="/hayatools-home-desktop.png" width={1350} height={636} alt="HayaTools desktop homepage" className="rounded-xl w-full h-auto" /></div>
          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-3"><Image src="/hayatools-image-to-pdf.png" width={1093} height={638} alt="HayaTools Image to PDF interface" className="rounded-xl w-full h-full object-cover object-left" /></div>
        </section>

        <section className="grid lg:grid-cols-2 gap-12 mb-24">
          <div><p className="text-cyan-400 font-semibold tracking-widest text-sm mb-3">TECHNOLOGY</p><h2 className="text-4xl font-bold mb-6">Production-ready web stack</h2><div className="flex flex-wrap gap-3">{stack.map((item)=><span key={item} className="rounded-full border border-gray-700 bg-gray-900 px-4 py-2 text-sm text-gray-300">{item}</span>)}</div></div>
          <div className="grid gap-4">{[{icon:Search,title:"Search foundation",text:"Route metadata, canonical URLs, Open Graph image, robots.txt, XML sitemap, and Search Console submission."},{icon:Gauge,title:"Quality checks",text:"Dependency audit, ESLint, TypeScript, optimized builds, responsive testing, and representative file-processing tests."},{icon:Smartphone,title:"Responsive experience",text:"The same focused workflow is available across desktop and mobile layouts."}].map(({icon:Icon,title,text})=><div key={title} className="flex gap-4 rounded-xl border border-gray-800 p-5"><Icon className="shrink-0 text-emerald-400" /><div><h3 className="font-semibold mb-1">{title}</h3><p className="text-sm text-gray-400">{text}</p></div></div>)}</div>
        </section>

        <section className="rounded-3xl bg-gradient-to-r from-cyan-600 to-emerald-600 p-10 md:p-14 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">Try the finished product</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">HayaTools is live, free to use, and actively improving based on real usage and feedback.</p>
          <a href="https://tools.hayatech.dev" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-gray-950 px-8 py-4 font-bold hover:bg-gray-900">Open HayaTools <ExternalLink size={18} /></a>
        </section>
      </main>
    </div>
  );
}
