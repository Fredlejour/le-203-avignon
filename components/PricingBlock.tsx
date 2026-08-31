"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import PriceGauge from "@/components/PriceGauge";

export default function PricingBlock() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);

  return (
    <section ref={ref} id="prix" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center mb-4">
            <div className="gold-divider" />
          </div>
          <h2 className="section-title mb-4">
            L&apos;investissement pour le{" "}
            <span className="text-gold-500">203</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Un prix positionné au regard du marché local d&apos;Avignon-Montfavet.
          </p>
        </div>

        {/* Price card */}
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 delay-100 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="rounded-2xl bg-navy-900 p-8 md:p-10 text-white shadow-xl text-center">
            <p className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Prix honoraires inclus
            </p>

            <p className="font-serif text-4xl md:text-5xl text-gold-400 font-semibold leading-tight mb-1">
              288 660 €
            </p>
            <p className="text-white/80 text-base mb-6">honoraires inclus</p>

            <div className="border-t border-white/10 my-6 w-full" />

            <p className="text-white/80 text-base mb-6">
              <span className="font-serif text-xl font-medium text-white">271 660 €</span> net vendeur + 17 000 € d&apos;honoraires
            </p>

            <p className="text-gold-400/90 text-base">
              ≈ 1 408 €/m² net vendeur
            </p>
          </div>
        </div>

        {/* Jauge / comparaison marché */}
        <div
          className={`mt-12 w-full max-w-5xl mx-auto transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <PriceGauge />
        </div>

        {/* Passerelle vers les modalités d'acquisition */}
        <div
          className={`mt-12 max-w-3xl mx-auto text-center transition-all duration-700 delay-300 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-navy-800 font-serif text-lg md:text-xl font-medium mb-4">
            Le prix est une chose. La façon de structurer l&apos;acquisition en est une autre.
          </p>
          <p className="text-navy-300 text-base mb-6">
            Découvrez les deux possibilités étudiées :{" "}
            <br className="hidden md:block" />
            acquérir directement l&apos;immeuble ou reprendre la structure qui le
            possède.
          </p>
          <div className="flex flex-col items-center gap-3">
            <a
              href="#reprise-sci"
              className="text-gold-500 text-sm font-semibold hover:text-gold-600 transition-colors"
            >
              Découvrir les possibilités d&apos;acquisition →
            </a>
            <a
              href="#acquisition"
              className="text-gold-500 text-sm font-semibold hover:text-gold-600 transition-colors"
            >
              Voir le cadre juridique de l&apos;acquisition →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
