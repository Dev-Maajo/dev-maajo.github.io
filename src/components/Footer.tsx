// src/components/Footer.tsx
import Link from "next/link";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Templates", href: "/templates" },
    { name: "Library", href: "/library" },
    { name: "About", href: "/about" },
    { name: "FAQs", href: "/faqs" },
];

export default function Footer() {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 py-10">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">

                    {/* Brand */}
                    <div>
                        <Link href="/" className="text-2xl font-bold">
                            <span className="text-emerald-500">Haya</span>
                            <span className="text-cyan-500">Tech</span>
                        </Link>

                        <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                            AI automation systems built using tools like n8n, AI agents,
                            and workflow integrations to help businesses save time and
                            eliminate repetitive work.
                        </p>

                        <p className="mt-3 text-gray-500 text-xs">
                            Built in Mumbai • Serving clients worldwide
                        </p>
                    </div>


                    {/* Navigation */}
                    <div>
                        <h3 className="text-white font-medium mb-4">
                            Navigation
                        </h3>

                        <ul className="space-y-2 text-gray-400 text-sm">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="hover:text-cyan-400 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-medium mb-4">
                            Contact
                        </h3>

                        <ul className="space-y-2 text-gray-400 text-sm">

                            <li>
                                <a
                                    href="https://wa.me/918828278210"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-cyan-400 transition-colors"
                                >
                                    WhatsApp: +91 88282 78210
                                </a>
                            </li>

                            <li>
                                <a
                                    href="mailto:skmaaz8828@gmail.com"
                                    className="hover:text-cyan-400 transition-colors"
                                >
                                    Email: skmaaz8828@gmail.com
                                </a>
                            </li>

                        </ul>
                    </div>


                    {/* Social / Legal */}
                    <div>
                        <h3 className="text-white font-medium mb-4">
                            Social
                        </h3>

                        <p className="text-gray-400 text-sm">
                            LinkedIn and X profiles coming soon.
                        </p>

                        <p className="mt-6 text-gray-500 text-xs">
                            © {new Date().getFullYear()} HayaTech. All rights reserved.
                        </p>
                    </div>

                </div>

            </div>
        </footer>
    );
}

