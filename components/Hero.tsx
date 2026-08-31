"use client";

import { useEffect, useState } from "react";
import { Compass, Calendar, CheckCircle2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/nouvelle facade 203.webp"
          alt="Le 203 — Nouvelle façade du centre professionnel, Avignon-Montfavet"
          className="w-full h-full object-cover"
          style={{ objectPosition: "50% 35%" }}
          fetchPriority="high"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/85 via-navy-800/75 to-navy-700/65" />
        {/* Bottom gradient reinforcement */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-navy-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 pt-12 pb-20">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="gold-divider" />
            <span className="text-gold-400 text-xs font-semibold tracking-[0.25em] uppercase">
              Centre professionnel pluridisciplinaire à vendre ·
              Avignon-Montfavet
            </span>
          </div>

          {/* Title */}
          <h1
            className={`font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.08] tracking-tight mb-4 transition-all duration-700 delay-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Offrez-vous{" "}
            <span className="text-gold-400">vos propres locaux</span> pour
            installer votre activité professionnelle&hellip;
          </h1>


          {/* Subtitle */}
          <div
            className={`max-w-3xl mb-8 transition-all duration-700 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              Tout en développant votre patrimoine immobilier et, pourquoi pas,
              en générant des revenus locatifs complémentaires grâce aux espaces
              que vous n&apos;occupez pas.
            </p>
          </div>

          {/* Informations rapides */}
          <div
            className={`flex flex-wrap items-center gap-x-4 gap-y-3 mb-8 transition-all duration-700 delay-[520ms] ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              "193 m²",
              "5 cabinets",
              "Salles de formation",
              "ERP & PMR",
              "2 parkings",
            ].map((text, i) => (
              <span
                key={i}
                className="flex items-center gap-2 text-white/70 text-sm md:text-base"
              >
                <CheckCircle2
                  size={14}
                  className="text-gold-500/70 flex-shrink-0"
                />
                {text}
                {i < 4 && (
                  <span className="hidden md:inline text-white/30 ml-2">·</span>
                )}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 delay-600 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a href="#proposition" className="btn-primary text-base">
              <Compass size={18} />
              Découvrir l&apos;opportunité
            </a>
            <a
              href="#visite"
              onClick={() =>
                trackEvent("cta_visite_click", {
                  cta_location: "hero",
                  cta_label: "Visiter le centre",
                })
              }
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold text-sm tracking-wide uppercase rounded-sm hover:bg-white/10 transition-all duration-300"
            >
              <Calendar size={18} />
              Visiter le centre
            </a>
          </div>

          {/* Micro-reassurance */}
          <div
            className={`transition-all duration-700 delay-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/40 text-xs tracking-wide">
              {[
                "Centre déjà aménagé",
                "Visite virtuelle disponible",
                "Dossier technique complet",
              ].map((text, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-gold-500/60" />
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-9 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-gold-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
