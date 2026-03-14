// src/components/FloatingWhatsApp.tsx
"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {

    const handleClick = () => {
        if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag("event", "whatsapp_click", {
                event_category: "contact",
                event_label: "whatsapp_consultation",
                value: 1,
            });
        }
    };

    return (
        <a
            href="https://wa.me/918828278210?text=Hi%20Maaz,%20I'd%20like%20to%20automate%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Maaz on WhatsApp"
            title="Chat on WhatsApp"
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-500 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        >
            <MessageCircle size={30} />
        </a>
    );
}