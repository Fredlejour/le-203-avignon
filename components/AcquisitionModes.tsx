"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { Building2, PieChart, Scale, Check, type LucideIcon } from "lucide-react";

type Mode = {
  icon: LucideIcon;
  badge: string;
  title: string;
  items: string[];
};

const modes: Mode[] = [
  {
    icon: Building2,
    badge: "Option A",
    title: "Acquisition immobilière classique",
    items: [
      "Frais de notaire applicables",
      "Structure d'acquisition libre (personne physique, SCI, société)",
      "Solution simple et connue des banques",
    ],
  },
  {
    icon: PieChart,
    badge: "Option B",
    title: "Étude d'une acquisition des parts de la société propriétaire",
    items: [
      "Reprise éventuelle de la structure déjà en place",
      "Audit juridique, fiscal, comptable et bancaire requis",
      "Accord de l'établissement bancaire nécessaire",
      "Traitement du compte courant d'associé à formaliser",
      "Validation avec avocat, notaire, expert-comptable et banque",
    ],
  },
];

export default function AcquisitionModes() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);

  return (
    <section
      ref={ref}
      id="acquisition"
      className="section-padding bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center mb-5">
            <div className="w-12 h-0.5 bg-gold-500" />
          </div>
          <h2 className="section-title mb-5">
            Le cadre juridique de{" "}
            <span className="text-gold-500">l&apos;acquisition</span>
          </h2>
          <p className="max-w-3xl mx-auto text-navy-300 text-base md:text-lg leading-relaxed">
            La comparaison chiffrée des deux voies et les montants associés sont
            présentés dans la section{" "}
            <a
              href="#reprise-sci"
              className="text-gold-500 hover:text-gold-600 transition-colors font-semibold"
            >
              Acquisition
            </a>
            . Les points ci-dessous rappellent les cadres juridique et
            prudentiel qui s&apos;appliquent, selon la situation de chaque
            acquéreur.
          </p>
        </div>

        {/* Cartes comparatives */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {modes.map((mode, i) => (
            <div
              key={i}
              className={`group h-full flex flex-col rounded-2xl bg-white border border-warm-300 shadow-sm p-7 lg:p-9 transition-all duration-700 hover:shadow-lg hover:border-gold-500/30 hover:-translate-y-1 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-gold-500/15">
                  <mode.icon size={24} className="text-gold-500" />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-gold-600 mb-1">
                    {mode.badge}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-navy-800 leading-tight">
                    {mode.title}
                  </h3>
                </div>
              </div>
              <ul className="space-y-3 mt-auto">
                {mode.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="text-gold-500 mt-1 flex-shrink-0"
                    />
                    <span className="text-navy-600 text-sm md:text-[15px] leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bloc central de synthèse */}
        <div
          className={`max-w-3xl mx-auto rounded-2xl bg-navy-800 text-white shadow-xl px-7 py-9 md:px-10 md:py-10 transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
              <Scale size={22} className="text-gold-400" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-white">
              Avertissement
            </h3>
          </div>
          <div className="space-y-4 text-white/70 text-base md:text-lg leading-relaxed">
            <p>
              Aucune affirmation fiscale, juridique ou comptable définitive
              n&apos;est formulée sur ce site. Les deux options présentées
              ci-dessus sont mentionnées à titre informatif et doivent faire
              l&apos;objet d&apos;une étude personnalisée.
            </p>
            <p>
              L&apos;étude d&apos;une acquisition des parts de la société
              propriétaire, ou de la SCI propriétaire des locaux, nécessite en
              particulier un audit juridique, fiscal, comptable et bancaire,
              mené avec les conseils de l&apos;acquéreur (avocat, notaire,
              expert-comptable, banque).
            </p>
            <p className="text-white/50 text-sm">
              Les montants présentés dans la section précédente sont
              indicatifs, non contractuels, et ne constituent pas une
              décomposition de la valeur immobilière du bien.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
