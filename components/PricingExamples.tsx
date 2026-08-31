"use client";

import { Fragment, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";
import {
  Calculator,
  ShieldCheck,
  Gauge,
  Rocket,
  Info,
  Plus,
  Equal,
  Briefcase,
  Users,
  Sprout,
  ChevronDown,
  FileText,
} from "lucide-react";

type RevenueItem = {
  icon: typeof Briefcase;
  title: string;
  desc: string;
};

const revenueItems: RevenueItem[] = [
  {
    icon: Briefcase,
    title: "Cabinets professionnels",
    desc: "Location de 4 bureaux modélisés, soit jusqu'à 24 locataires potentiels.",
  },
  {
    icon: Users,
    title: "Salles / formation / réunion",
    desc: "2 salles de 35 m² en location journalière.",
  },
  {
    icon: Sprout,
    title: "Espaces complémentaires",
    desc: "Showroom & cultures intégrées, en forfait mensuel.",
  },
];

type Scenario = {
  icon: typeof ShieldCheck;
  title: string;
  subtitle: string;
  total: string;
  totalLabel: string;
  highlighted?: boolean;
  rows: { label: string; value: string; accent?: boolean }[];
};

const scenarios: Scenario[] = [
  {
    icon: ShieldCheck,
    title: "Scénario prudent",
    subtitle: "50 % d'occupation",
    total: "68 640 €",
    totalLabel: "CA brut annuel simulé",
    rows: [
      { label: "Cabinets", value: "21 600 €" },
      { label: "Salles", value: "37 440 €" },
      { label: "Espaces complémentaires", value: "9 600 €" },
      { label: "Après charges estimées à 40 %", value: "≈ 41 184 €", accent: true },
    ],
  },
  {
    icon: Gauge,
    title: "Scénario développement",
    subtitle: "70 % d'occupation",
    total: "92 256 €",
    totalLabel: "CA brut annuel simulé",
    highlighted: true,
    rows: [
      { label: "Cabinets", value: "30 240 €" },
      { label: "Salles", value: "52 416 €" },
      { label: "Espaces complémentaires", value: "9 600 €" },
      { label: "Après charges estimées à 40 %", value: "≈ 55 354 €", accent: true },
    ],
  },
  {
    icon: Rocket,
    title: "Plein potentiel théorique",
    subtitle: "100 % d'occupation",
    total: "127 680 €",
    totalLabel: "CA brut annuel simulé",
    rows: [
      { label: "Cabinets", value: "43 200 €" },
      { label: "Salles", value: "74 880 €" },
      { label: "Espaces complémentaires", value: "9 600 €" },
      { label: "Après charges estimées à 40 %", value: "≈ 76 608 €", accent: true },
    ],
  },
];

type Assumption = {
  title: string;
  lines: string[];
};

const assumptions: Assumption[] = [
  {
    title: "Hypothèses de tarifs",
    lines: [
      "Cabinets : 150 € par mois et par locataire, sur la base d'une occupation d'un jour par semaine.",
      "Salles : 130 € par journée de location, incluant 70 € de mise à disposition et 60 € de prestation boissons pour 10 personnes.",
      "Espaces complémentaires : 800 € par mois, en forfait.",
    ],
  },
  {
    title: "Hypothèses de capacité",
    lines: [
      "4 bureaux modélisés, soit jusqu'à 24 locataires simultanés en occupation partagée.",
      "2 salles, soit jusqu'à 576 journées de location par an.",
      "Le centre compte 5 cabinets : le modèle historique est donc prudent de ce point de vue.",
    ],
  },
  {
    title: "Hypothèses d'occupation et de charges",
    lines: [
      "Les taux de 50 %, 70 % et 100 % s'appliquent aux cabinets et aux salles.",
      "L'espace complémentaire est modélisé à taux plein dans les trois scénarios.",
      "Charges estimées (électricité, eau, taxes) modélisées à 30 %, 40 % ou 50 % du CA brut. Le taux de 40 % est celui retenu à l'affichage.",
    ],
  },
];

export default function PricingExamples() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);
  const [showAssumptions, setShowAssumptions] = useState(false);

  return (
    <section ref={ref} id="modele" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
              <Calculator size={26} className="text-gold-500" />
            </div>
          </div>
          <h2 className="section-title mb-5">
            Un lieu conçu pour générer{" "}
            <span className="text-gold-500">plusieurs sources de revenus</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-3 text-navy-300 text-base md:text-lg leading-relaxed">
            <p>
              Un modèle d&apos;exploitation existant combinant cabinets
              professionnels, <br className="hidden md:block" />
              salles et espaces complémentaires.
            </p>
            <p className="text-sm md:text-base">
              Les montants ci-dessous sont des{" "}
              <span className="text-navy-500 font-medium">simulations</span>{" "}
              issues du modèle d&apos;exploitation historique du lieu, sur la
              base d&apos;hypothèses de tarifs et de taux d&apos;occupation.
            </p>
          </div>
        </div>

        {/* Équation pédagogique */}
        <div
          className={`max-w-5xl mx-auto mb-16 transition-all duration-700 delay-100 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col md:flex-row items-stretch gap-2 md:gap-4">
            {revenueItems.map((item, i) => (
              <Fragment key={item.title}>
                <div className="flex-1 rounded-2xl bg-warm-50 border border-warm-300 p-6 lg:p-8 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-4">
                    <item.icon size={22} className="text-gold-500" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-navy-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-navy-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                {i < revenueItems.length - 1 && (
                  <div className="flex items-center justify-center text-gold-500 py-1 md:px-0">
                    <Plus size={24} />
                  </div>
                )}
              </Fragment>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 my-6">
            <div className="h-px flex-1 bg-warm-300" />
            <Equal size={24} className="text-gold-500" />
            <div className="h-px flex-1 bg-warm-300" />
          </div>

          <div className="rounded-2xl bg-navy-800 text-white p-6 md:p-8 text-center shadow-lg">
            <p className="font-serif text-xl md:text-2xl font-semibold leading-tight">
              Plusieurs sources de revenus dans un même actif
            </p>
            <p className="text-white/60 text-sm mt-2 max-w-2xl mx-auto">
              J&apos;achète un actif immobilier déjà aménagé et équipé qui peut
              être exploité immédiatement selon plusieurs sources de revenus.
            </p>
          </div>
        </div>

        {/* 3 scénarios */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {scenarios.map((sc, i) => (
            <div
              key={i}
              className={`h-full flex flex-col rounded-2xl bg-white p-7 lg:p-8 transition-all duration-700 hover:shadow-lg ${
                sc.highlighted
                  ? "border-2 border-gold-500/40 shadow-md"
                  : "border border-warm-300 shadow-sm"
              } ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 120 + 200}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0">
                  <sc.icon size={22} className="text-gold-500" />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-gold-600 mb-1">
                    {sc.subtitle}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-navy-800 leading-tight">
                    {sc.title}
                  </h3>
                </div>
              </div>

              <div className="text-center pb-6 border-b border-warm-200 mb-6">
                <p className="font-serif text-4xl md:text-5xl font-semibold text-gold-600 mb-2">
                  {sc.total}
                </p>
                <p className="text-navy-300 text-sm">{sc.totalLabel}</p>
              </div>

              <ul className="space-y-3 mt-auto">
                {sc.rows.map((row, j) => (
                  <li
                    key={j}
                    className={`flex items-baseline justify-between gap-4 pt-3 ${
                      j === 0 ? "border-t border-warm-200" : ""
                    } ${row.accent ? "border-t border-warm-200" : ""}`}
                  >
                    <span
                      className={`text-sm leading-snug ${
                        row.accent
                          ? "text-navy-600 font-medium"
                          : "text-navy-600"
                      }`}
                    >
                      {row.label}
                    </span>
                    <span
                      className={`font-semibold text-sm whitespace-nowrap ${
                        row.accent ? "text-navy-800" : "text-navy-300"
                      }`}
                    >
                      {row.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Accordéon hypothèses */}
        <div
          className={`max-w-3xl mx-auto mb-12 transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            type="button"
            onClick={() => setShowAssumptions((s) => !s)}
            className="w-full flex items-center justify-between rounded-2xl bg-warm-50 border border-warm-300 px-6 py-5 hover:bg-warm-100 transition-colors"
          >
            <span className="font-medium text-navy-800 text-sm md:text-base">
              Voir les hypothèses de calcul
            </span>
            <ChevronDown
              size={20}
              className={`text-gold-500 transition-transform duration-300 ${
                showAssumptions ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              showAssumptions
                ? "max-h-[1000px] opacity-100 mt-4"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="rounded-2xl bg-warm-50 border border-warm-300 p-6 md:p-8 space-y-6">
              {assumptions.map((ass, i) => (
                <div key={i}>
                  <h4 className="font-serif text-lg font-semibold text-navy-800 mb-3">
                    {ass.title}
                  </h4>
                  <ul className="space-y-2">
                    {ass.lines.map((line, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-navy-600 text-sm leading-relaxed"
                      >
                        <span className="w-1 h-1 rounded-full bg-gold-500 mt-2.5 flex-shrink-0" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <p className="text-navy-300 text-xs leading-relaxed pt-4 border-t border-warm-200">
                Données indicatives et non contractuelles.
              </p>
            </div>
          </div>
        </div>

        {/* Avertissement */}
        <div
          className={`max-w-3xl mx-auto mb-10 transition-all duration-700 delay-600 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="rounded-2xl bg-warm-100 border border-warm-300 px-6 py-6 md:px-8 md:py-7">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                <Info size={19} className="text-gold-600" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-lg font-semibold text-navy-800">
                  Simulations indicatives
                </h3>
                <p className="text-navy-600 text-sm md:text-[15px] leading-relaxed">
                  Les montants présentés sont des simulations et des hypothèses
                  indicatives établies à partir du modèle d&apos;exploitation
                  historique du lieu. Ils ne constituent ni une promesse de
                  revenus, ni une prévision d&apos;exploitation, ni une promesse
                  de clientèle. Chaque acquéreur doit établir ses propres
                  hypothèses avec ses conseils.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 delay-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a href="#contact-form" className="btn-primary text-base">
            <FileText size={18} />
            Recevoir le détail du modèle économique
          </a>
        </div>
      </div>
    </section>
  );
}
