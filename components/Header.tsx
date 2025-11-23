"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [open, setOpen] = useState(false);

    const logoSrc = "/images/modulusinfosystemslogo.svg";

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 flex items-center justify-between h-16">

                {/* Logo - Left */}
                <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <img
                        src={logoSrc}
                        alt="Modulus Infosystems"
                        className="h-12 sm:h-14 lg:h-16 w-auto"
                    />
                    <span className="hidden sm:inline-block text-(--navy) font-semibold text-base sm:text-lg leading-none">
                        Modulus Infosystems
                    </span>
                </Link>


                {/* Desktop nav - Center */}
                <nav className="hidden lg:flex items-center gap-1 xl:gap-3 absolute left-1/2 transform -translate-x-1/2">
                    <Link
                        href="/about"
                        className="text-xs xl:text-sm text-(--charcoal) hover:text-(--deep-purple) transition px-2 xl:px-3 py-2 rounded-md hover:bg-(--lavender)/40 whitespace-nowrap"
                    >
                        About Us
                    </Link>

                    <Link
                        href="/services"
                        className="text-xs xl:text-sm text-(--charcoal) hover:text-(--deep-purple) transition px-2 xl:px-3 py-2 rounded-md hover:bg-(--lavender)/40 whitespace-nowrap"
                    >
                        Services
                    </Link>

                    <Link
                        href="/portfolio"
                        className="text-xs xl:text-sm text-(--charcoal) hover:text-(--deep-purple) transition px-2 xl:px-3 py-2 rounded-md hover:bg-(--lavender)/40 whitespace-nowrap"
                    >
                        Portfolio
                    </Link>

                    <Link
                        href="/technologies"
                        className="text-xs xl:text-sm text-(--charcoal) hover:text-(--deep-purple) transition px-2 xl:px-3 py-2 rounded-md hover:bg-(--lavender)/40 whitespace-nowrap"
                    >
                        Technologies
                    </Link>

                    <Link
                        href="/careers"
                        className="text-xs xl:text-sm text-(--charcoal) hover:text-(--deep-purple) transition px-2 xl:px-3 py-2 rounded-md hover:bg-(--lavender)/40 whitespace-nowrap"
                    >
                        Careers
                    </Link>
                </nav>

                {/* CTA - Right */}
                <Link
                    href="/contact"
                    className="hidden lg:inline-block px-3 xl:px-4 py-2 rounded-lg bg-(--deep-purple) text-white text-xs xl:text-sm shadow-sm hover:opacity-95 shrink-0 whitespace-nowrap"
                >
                    Get in Touch
                </Link>

                {/* Mobile menu button */}
                <button
                    aria-label="Toggle menu"
                    onClick={() => setOpen((v) => !v)}
                    className="lg:hidden p-2 rounded hover:bg-gray-100 shrink-0"
                >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        {open ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile panel */}
            {open && (
                <div className="lg:hidden bg-white/98 shadow-md border-t">
                    <div className="px-4 sm:px-6 py-4 flex flex-col gap-2">
                        <Link 
                            href="/about" 
                            onClick={() => setOpen(false)} 
                            className="text-(--charcoal) hover:text-(--deep-purple) px-3 py-2.5 rounded-md hover:bg-(--lavender)/40 transition"
                        >
                            About Us
                        </Link>
                        <Link 
                            href="/services" 
                            onClick={() => setOpen(false)} 
                            className="text-(--charcoal) hover:text-(--deep-purple) px-3 py-2.5 rounded-md hover:bg-(--lavender)/40 transition"
                        >
                            Services
                        </Link>
                        <Link 
                            href="/portfolio" 
                            onClick={() => setOpen(false)} 
                            className="text-(--charcoal) hover:text-(--deep-purple) px-3 py-2.5 rounded-md hover:bg-(--lavender)/40 transition"
                        >
                            Portfolio
                        </Link>
                        <Link 
                            href="/technologies" 
                            onClick={() => setOpen(false)} 
                            className="text-(--charcoal) hover:text-(--deep-purple) px-3 py-2.5 rounded-md hover:bg-(--lavender)/40 transition"
                        >
                            Technologies
                        </Link>
                        <Link 
                            href="/careers" 
                            onClick={() => setOpen(false)} 
                            className="text-(--charcoal) hover:text-(--deep-purple) px-3 py-2.5 rounded-md hover:bg-(--lavender)/40 transition"
                        >
                            Careers
                        </Link>
                        <Link
                            href="/contact"
                            onClick={() => setOpen(false)}
                            className="mt-2 inline-block px-4 py-2.5 rounded-lg bg-(--deep-purple) text-white text-center hover:opacity-95 transition"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}