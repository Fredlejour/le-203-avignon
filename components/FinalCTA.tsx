"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { FileText, Calendar, ClipboardCheck, Lock, Clock, User } from "lucide-react";

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.2);

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-24 lg:py-32 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900" />
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, rgba(200,150,90,0.4) 0%, transparent 50%)",
          }}
        />
      </div>

      <div
        className={`relative max-w-3xl mx-auto text-center transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex justify-center mb-6">
          <div className="w-16 h-0.5 bg-gold-500" />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-5">
          Recevez le dossier complet{" "}
          <br className="hidden sm:block" />
          et découvrez <span className="text-gold-400">Le 203</span>
        </h2>

        {/* Deliverables list */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-10 text-white/50 text-sm">
          {[
            "Dossier d'acquisition",
            "Plans des locaux",
            "Inventaire des équipements",
            "Visite virtuelle",
            "Modes d'acquisition",
          ].map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-gold-500" />
              {item}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center sm:items-start justify-center gap-4 mb-12">
          <a href="#contact-form" className="btn-primary text-base">
            <FileText size={18} />
            Recevoir le dossier complet
          </a>
          <a
            href="#contact-form"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold text-sm tracking-wide uppercase rounded-sm hover:bg-white/10 transition-all duration-300"
          >
            <Calendar size={18} />
            Planifier une visite
          </a>
          <div className="flex flex-col items-center gap-1.5">
            <a
              href="#contact-frederic"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold text-sm tracking-wide uppercase rounded-sm hover:bg-white/10 transition-all duration-300"
            >
              <User size={18} />
              Contacter Frédéric Lejour
            </a>
            <span className="text-white/50 text-xs">
              Chargé de la commercialisation du 203
            </span>
          </div>
        </div>

        {/* Reassurance icons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl mx-auto">
          {[
            {
              icon: ClipboardCheck,
              text: "Dossier technique complet et transparent",
            },
            { icon: Lock, text: "Vos données restent confidentielles" },
            { icon: Clock, text: "Réponse garantie sous 24h" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/[0.07] border border-white/10 flex items-center justify-center">
                <item.icon size={18} className="text-gold-400" />
              </div>
              <span className="text-white/50 text-xs text-center leading-snug">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
