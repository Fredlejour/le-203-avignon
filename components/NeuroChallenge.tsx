"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { TrendingDown, Brain, Scale, CheckCircle2 } from "lucide-react";

const challenges = [
  {
    icon: TrendingDown,
    stat: "Décrochage",
    title: "Productivité menacée",
    desc: "Les entreprises qui n'intègrent pas l'IA s'exposent à un décrochage de productivité face à leurs concurrents.",
  },
  {
    icon: Brain,
    title: "Obésité cognitive",
    stat: "Surcharge",
    desc: "La surcharge informationnelle s'intensifie : délégation excessive à l'IA, perte d'autonomie intellectuelle, atrophie des capacités analytiques.",
  },
  {
    icon: Scale,
    title: "AI Act en vigueur",
    stat: "2025",
    desc: "Le cadre réglementaire européen impose désormais conformité, éthique et formation. Les entreprises doivent s'adapter ou s'exposer.",
  },
];

export default function NeuroChallenge() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.15);

  return (
    <section
      ref={ref}
      id="defi-ia"
      className="section-padding bg-navy-900 text-white relative overflow-hidden"
    >
      {/* Decorative neural network background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg
          className="w-full h-full"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="200" cy="150" r="4" fill="currentColor" />
          <circle cx="350" cy="80" r="3" fill="currentColor" />
          <circle cx="500" cy="200" r="5" fill="currentColor" />
          <circle cx="650" cy="100" r="3" fill="currentColor" />
          <circle cx="150" cy="350" r="4" fill="currentColor" />
          <circle cx="400" cy="400" r="5" fill="currentColor" />
          <circle cx="600" cy="350" r="4" fill="currentColor" />
          <circle cx="300" cy="500" r="3" fill="currentColor" />
          <circle cx="700" cy="500" r="4" fill="currentColor" />
          <line x1="200" y1="150" x2="350" y2="80" stroke="currentColor" strokeWidth="0.5" />
          <line x1="350" y1="80" x2="500" y2="200" stroke="currentColor" strokeWidth="0.5" />
          <line x1="500" y1="200" x2="650" y2="100" stroke="currentColor" strokeWidth="0.5" />
          <line x1="150" y1="350" x2="400" y2="400" stroke="currentColor" strokeWidth="0.5" />
          <line x1="400" y1="400" x2="600" y2="350" stroke="currentColor" strokeWidth="0.5" />
          <line x1="200" y1="150" x2="150" y2="350" stroke="currentColor" strokeWidth="0.5" />
          <line x1="500" y1="200" x2="400" y2="400" stroke="currentColor" strokeWidth="0.5" />
          <line x1="650" y1="100" x2="600" y2="350" stroke="currentColor" strokeWidth="0.5" />
          <line x1="300" y1="500" x2="400" y2="400" stroke="currentColor" strokeWidth="0.5" />
          <line x1="600" y1="350" x2="700" y2="500" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gold-500/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
            <span className="text-white/60 text-xs font-semibold tracking-[0.2em] uppercase">
              Le défi des entreprises
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-5">
            Former à l&apos;IA
            <br className="hidden md:block" />
            sans sacrifier{" "}
            <span className="text-gold-400">les capacités humaines</span>.
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
            Les entreprises doivent désormais relever trois enjeux
            complémentaires : adopter l&apos;intelligence artificielle,
            développer les compétences humaines et préserver les capacités
            cognitives nécessaires à une prise de décision de qualité.
          </p>
        </div>

        {/* 3 columns */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {challenges.map((c, i) => (
            <div
              key={i}
              className={`relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-xl p-8 text-center transition-all duration-700 hover:bg-white/[0.06] hover:border-gold-500/20 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${(i + 1) * 200}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                <c.icon size={24} className="text-gold-400" />
              </div>
              <div className="font-serif text-4xl lg:text-5xl font-bold text-gold-400 mb-3">
                {c.stat}
              </div>
              <h3 className="font-serif text-xl font-semibold text-white mb-3">
                {c.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Phrase de transition — lien logique problèmes ➜ solutions */}
        <div
          className={`text-center mb-12 transition-all duration-700 delay-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-serif text-2xl md:text-3xl text-white/90 max-w-4xl lg:max-w-none mx-auto leading-relaxed lg:whitespace-nowrap">
            <strong className="text-gold-400">Neuro Forma</strong> a été conçu
            pour répondre à ces trois enjeux.
          </p>
        </div>

        {/* 4 cartes solutions — pleine largeur */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 transition-all duration-700 delay-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            "Adopter l'intelligence artificielle",
            "Développer les compétences humaines",
            "Préserver l'attention",
            "Maintenir la qualité des décisions",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 h-full bg-white/[0.04] border border-white/10 rounded-lg px-5 py-5"
            >
              <CheckCircle2 size={18} className="text-gold-400 flex-shrink-0" />
              <span className="text-white/80 text-sm md:text-base leading-snug">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
