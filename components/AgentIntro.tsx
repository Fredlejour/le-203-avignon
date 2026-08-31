"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";

export default function AgentIntro() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.2);

  return (
    <section
      ref={ref}
      id="proposition"
      className="pt-28 pb-10 md:pt-32 md:pb-14 bg-navy-900"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div
          className={`grid lg:grid-cols-[200px,1fr] gap-8 lg:gap-12 items-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-28 h-36 md:w-36 md:h-44 lg:w-44 lg:h-56 rounded-2xl overflow-hidden border-2 border-gold-500/30 shadow-2xl flex-shrink-0">
              <img
                src="/images/frederic-lejour.jpg"
                alt="Frédéric Lejour — Agent immobilier, Lejour Consulting"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          {/* Texte */}
          <div className="text-center lg:text-left">
            <p className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Votre interlocuteur
            </p>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-4">
              Bienvenue, je suis{" "}
              <span className="text-gold-400">Frédéric Lejour</span>.
            </h2>
            <div className="max-w-2xl mx-auto lg:mx-0 space-y-3 text-white/80 text-sm md:text-base leading-relaxed">
              <p>
                Je suis en charge de la commercialisation du 203.
              </p>
              <p>
                Je vous propose de découvrir ce lieu non pas comme une simple
                surface professionnelle, mais comme un actif déjà structuré,
                équipé et prêt à accueillir votre projet.
              </p>
              <p>
                Mon rôle : vous aider à comprendre rapidement l&apos;opportunité,
                vérifier si elle correspond à votre projet et vous accompagner
                jusqu&apos;à la visite ou l&apos;étude du dossier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
