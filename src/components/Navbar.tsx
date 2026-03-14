// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Templates", href: "/templates" },
    { name: "Library", href: "/library" },
    { name: "About", href: "/about" },
    { name: "FAQs", href: "/faqs" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="text-2xl font-bold">
                    <span className="text-emerald-500">Haya</span>
                    <span className="text-cyan-500">Tech</span>
                </Link>


                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-gray-300 hover:text-cyan-400 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>


                {/* Desktop CTA */}
                <a
                    href="https://wa.me/918828278210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:block bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                    Free Consultation
                </a>


                {/* Mobile Menu Button */}
                <button
                    aria-label="Toggle navigation menu"
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

            </div>


            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-gray-900 border-b border-gray-800">
                    <div className="px-6 py-4 flex flex-col space-y-4">

                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-300 hover:text-cyan-400 transition-colors py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Mobile CTA */}
                        <a
                            href="https://wa.me/918828278210"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors"
                        >
                            Book Free Consultation
                        </a>

                    </div>
                </div>
            )}
        </nav>
    );
}

