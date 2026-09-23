"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Tentang", href: "#about" },
  { label: "Keahlian", href: "#skills" },
  { label: "Proyek", href: "#projects" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = scrolled ? "text-navy-ink" : "text-white";
  const borderColor = scrolled ? "border-navy-ink/30" : "border-white/50";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-white/70 backdrop-blur-md border-b border-navy-ink/10 py-3"
          : "bg-transparent py-6"
        }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Two-tone sticker logo */}
        <a href="#" className="flex rounded-full overflow-hidden font-heading font-bold text-sm">
          <span className="bg-white text-navy-ink px-3 py-1.5">G</span>
          <span className="bg-volt text-navy-ink px-3 py-1.5">Z</span>
        </a>

        {/* Desktop nav - pill links */}
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`border ${borderColor} ${textColor} rounded-full px-4 py-1.5 text-sm font-medium hover:bg-white/10 transition-colors`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu trigger */}
        <button
          className={`md:hidden ${textColor}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col items-center gap-6 bg-white py-8 border-t border-navy-ink/10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-body text-lg text-navy-ink font-semibold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}