// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HayaTech – AI Automation Systems",
  description:
    "HayaTech builds AI automation systems including n8n workflows, AI agents, WhatsApp bots, and business automation solutions that help companies save time and scale operations.",

  openGraph: {
    title: "HayaTech – AI Automation Systems",
    description:
      "Custom AI automation systems including n8n workflows, AI agents, and WhatsApp bots.",
    url: "https://hayatech.dev",
    siteName: "HayaTech",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HayaTech AI Automation Systems",
      },
    ],
  },

  icons: {
    icon: [
      "/favicon.ico",
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-950 text-white min-h-screen flex flex-col`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EW2BT26CPP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EW2BT26CPP');
          `}
        </Script>

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="pt-20 flex-grow">{children}</main>

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp Button */}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}