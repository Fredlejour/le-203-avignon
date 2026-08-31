"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { Cpu, Leaf, Shield, Lightbulb, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Cpu,
    title: "Former",
    color: "from-navy-700 to-navy-600",
    borderColor: "border-gold-500/30",
    items: [
      "IA générative et automatisations",
      "Salariés référents IA",
      "Ingénierie de prompts",
      "Audit des processus",
    ],
  },
  {
    icon: Leaf,
    title: "Régénérer",
    color: "from-gold-600 to-gold-500",
    borderColor: "border-gold-500/50",
    items: [
      "Neurosciences appliquées",
      "Récupération cognitive",
      "Réduction fatigue mentale",
      "Optimisation de l'attention",
    ],
  },
  {
    icon: Shield,
    title: "Ancrer",
    color: "from-navy-600 to-navy-500",
    borderColor: "border-gold-500/30",
    items: [
      "AI Act & conformité",
      "Éthique de l'IA",
      "Responsabilité numérique",
      "Gouvernance cognitive",
    ],
  },
];

export default function ExampleNeuroForma() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);

  return (
    <section
      ref={ref}
      id="exemple-concept"
      className="section-padding bg-warm-100 relative overflow-hidden"
    >
      {/* Subtle decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 400 800" fill="none" className="w-full h-full">
          <circle cx="300" cy="200" r="150" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="300" cy="200" r="100" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="300" cy="200" r="50" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="200" cy="500" r="120" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="200" cy="500" r="80" stroke="currentColor" strokeWidth="0.5" />
          <line x1="300" y1="200" x2="200" y2="500" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-navy-800/5 border border-navy-800/10 rounded-full px-4 py-1.5 mb-6">
            <Lightbulb size={14} className="text-gold-600" />
            <span className="text-navy-800 text-xs font-semibold tracking-[0.2em] uppercase">
              Un exemple parmi d&apos;autres
            </span>
          </div>
          <h2 className="section-title mb-5">
            Exemple de concept :{" "}
            <span className="text-gold-500">Neuro Forma</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Neuro Forma est l&apos;un des concepts qui pourraient être
            développés dans ces locaux. Il est présenté ici à titre
            d&apos;illustration : l&apos;acquéreur reste entièrement libre de son
            propre projet.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-xl border-2 ${pillar.borderColor} p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${(i + 1) * 200}ms` }}
            >
              {/* Icon header */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 shadow-lg`}>
                <pillar.icon size={24} className="text-white" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-navy-800 mb-5">
                {pillar.title}
              </h3>

              <ul className="space-y-3">
                {pillar.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-navy-300 text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Video section */}
        <div
          className={`mb-12 mt-4 transition-all duration-700 delay-400 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-0.5 bg-gold-500" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-navy-800 mb-4">
              Comprendre ce concept{" "}
              <span className="text-gold-500">en quelques minutes</span>
            </h3>
            <p className="text-navy-300 text-base max-w-2xl mx-auto leading-relaxed">
              Cette vidéo présente le concept Neuro Forma tel qu&apos;il avait
              été imaginé pour ces locaux. Elle illustre le type de projet que le
              lieu permet de porter.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/8QmJOlnQRLs"
                title="Neuro Forma — Exemple de concept développable dans les locaux"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                suppressHydrationWarning
              />
            </div>
          </div>
        </div>

        {/* Rappel + CTA */}
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-navy-600 text-base md:text-lg leading-relaxed mb-8">
            Ce concept n&apos;est ni imposé ni inclus dans la vente. Les locaux
            se prêtent à de nombreux autres projets, comme présenté dans la
            section précédente.
          </p>
          <a href="#activites" className="btn-ghost group">
            Revoir les activités possibles
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
