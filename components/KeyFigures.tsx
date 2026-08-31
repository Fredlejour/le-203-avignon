"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { FileText, User } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const metrics = [
  { value: "193 m²", label: "Surface totale" },
  { value: "5 cabinets", label: "Cabinets professionnels" },
  { value: "2 places", label: "Parkings privatifs" },
  { value: "ERP / PMR", label: "Accessible au public" },
];

export default function KeyFigures() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.2);

  return (
    <section
      ref={ref}
      id="en-20-secondes"
      className="px-6 md:px-12 lg:px-20 xl:px-32 py-14 lg:py-16 bg-navy-800 text-white relative overflow-hidden"
    >
      {/* Background texture — mur végétal */}
      <div className="absolute inset-0">
        <img
          src="/images/mur-vegetal.webp"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-800/90" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-0.5 bg-gold-500" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight">
            Le 203 en <span className="text-gold-400">20 secondes</span>
          </h2>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-10">
          {metrics.map((m, i) => (
            <div
              key={i}
              className={`text-center px-4 py-6 rounded-lg border border-white/10 bg-white/[0.03] transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 80 + 150}ms` }}
            >
              <div className="font-serif text-2xl lg:text-3xl font-bold text-gold-400 mb-1.5 leading-tight">
                {m.value}
              </div>
              <div className="text-white/70 text-sm leading-snug">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4">
            <a
              href="#contact-form"
              onClick={() =>
                trackEvent("cta_dossier_click", {
                  cta_location: "key_figures",
                  cta_label: "Recevoir le dossier",
                })
              }
              className="btn-primary text-base"
            >
              <FileText size={18} />
              Recevoir le dossier
            </a>
            <div className="flex flex-col items-center gap-1.5">
              <a
                href="#contact-frederic"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-semibold text-sm tracking-wide uppercase rounded-sm hover:bg-white/10 transition-all duration-300"
              >
                <User size={18} />
                Contacter Frédéric Lejour
              </a>
              <span className="text-white/50 text-xs">
                Chargé de la commercialisation du 203
              </span>
            </div>
          </div>
          <p className="text-white/30 text-xs mt-5">
            Surfaces et équipements donnés sous réserve de vérification finale
            de l&apos;inventaire. Informations non contractuelles.
          </p>
        </div>
      </div>
    </section>
  );
}
