"use client";

import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const navLinks = [
  { label: "Proposition", href: "#proposition" },
  { label: "En bref", href: "#en-20-secondes" },
  { label: "Les espaces", href: "#espaces" },
  { label: "Modèle", href: "#modele" },
  { label: "Acquisition", href: "#reprise-sci" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div
            className={`w-10 h-10 rounded-sm flex items-center justify-center font-serif font-bold text-lg transition-colors duration-500 ${
              scrolled
                ? "bg-navy-800 text-gold-500"
                : "bg-white/10 backdrop-blur text-white border border-white/20"
            }`}
          >
            203
          </div>
          <div className="hidden sm:block">
            <div
              className={`font-serif font-semibold text-lg leading-tight tracking-wide transition-colors duration-500 ${
                scrolled ? "text-navy-800" : "text-white"
              }`}
            >
              LE 203
            </div>
            <div
              className={`text-[10px] tracking-[0.2em] uppercase transition-colors duration-500 ${
                scrolled ? "text-navy-300" : "text-white/60"
              }`}
            >
              Avignon-Montfavet
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-gold-500 ${
                scrolled ? "text-navy-800" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact-form"
          onClick={() =>
            trackEvent("cta_dossier_click", {
              cta_location: "header_desktop",
              cta_label: "Dossier d'acquisition",
            })
          }
          className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-gold-500 text-white text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-gold-600 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <FileText size={14} />
          Dossier d&apos;acquisition
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 transition-colors ${
            scrolled ? "text-navy-800" : "text-white"
          }`}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-3 text-navy-800 font-medium tracking-wide border-b border-warm-200 last:border-0 hover:text-gold-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact-form"
            onClick={() => {
              setMobileOpen(false);
              trackEvent("cta_dossier_click", {
                cta_location: "header_mobile",
                cta_label: "Dossier d'acquisition",
              });
            }}
            className="mt-4 btn-primary text-center"
          >
            <FileText size={16} />
            Dossier d&apos;acquisition
          </a>
        </nav>
      </div>
    </header>
  );
}
