"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { Brain, Cog, HeartPulse } from "lucide-react";

const blocks = [
  {
    icon: Brain,
    title: "L'IA est déjà une réalité",
    stats: [
      {
        value: "53 %",
        desc: "des actifs utilisent déjà l'IA dans leur travail",
      },
      {
        value: "72 %",
        desc: "des utilisateurs professionnels estiment avoir besoin davantage de formation",
      },
    ],
    conclusion:
      "Les entreprises ne se demandent plus si elles doivent intégrer l'IA. Elles cherchent désormais à développer les compétences de leurs équipes.",
  },
  {
    icon: Cog,
    title: "Les métiers se transforment",
    stats: [
      {
        value: "27 %",
        desc: "des tâches pourraient être automatisées d'ici 2030",
      },
    ],
    conclusion:
      "Les organisations doivent adapter leurs pratiques, leurs processus et leurs méthodes de travail.",
  },
  {
    icon: HeartPulse,
    title: "L'humain devient un enjeu stratégique",
    stats: [
      {
        value: "9 / 10",
        desc: "salariés attendent davantage d'actions sur la santé mentale",
      },
      {
        value: "25 %",
        desc: "déclarent déjà une santé mentale dégradée",
      },
    ],
    conclusion:
      "Former à l'IA ne suffit plus. Les entreprises doivent également préserver les capacités cognitives et humaines de leurs collaborateurs.",
  },
];

export default function WhyNow() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.15);

  return (
    <section
      ref={ref}
      id="pourquoi-maintenant"
      className="section-padding bg-navy-900 text-white relative overflow-hidden"
    >
      {/* Gradient orbs */}
      <div className="absolute top-16 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gold-500/[0.04] rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center mb-5">
            <div className="w-16 h-0.5 bg-gold-500" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4">
            Pourquoi <span className="text-gold-400">maintenant</span> ?
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
            L&apos;intelligence artificielle transforme déjà le monde du travail.
            Les entreprises doivent s&apos;adapter.
          </p>
        </div>

        {/* Narrative blocks */}
        <div className="space-y-5 lg:space-y-6">
          {blocks.map((b, i) => (
            <div
              key={i}
              className={`bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-7 md:p-8 lg:p-10 grid lg:grid-cols-12 gap-6 lg:gap-10 lg:items-center hover:bg-white/[0.05] hover:border-gold-500/20 transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 150 + 150}ms` }}
            >
              {/* Narrative */}
              <div className="lg:col-span-5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0">
                    <b.icon size={24} className="text-gold-400" />
                  </div>
                  <span className="font-serif text-sm text-gold-500/50 tracking-[0.25em]">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-white font-semibold leading-snug mb-3">
                  {b.title}
                </h3>
                <p className="text-white/50 text-sm md:text-base leading-relaxed">
                  {b.conclusion}
                </p>
              </div>

              {/* Stats */}
              <div className="lg:col-span-7">
                <div
                  className={`grid gap-6 ${
                    b.stats.length > 1 ? "sm:grid-cols-2" : "grid-cols-1"
                  }`}
                >
                  {b.stats.map((s, j) => (
                    <div
                      key={j}
                      className="border-l-2 border-gold-500/30 pl-5"
                    >
                      <div className="font-serif text-4xl md:text-5xl font-bold text-gold-400 leading-none mb-2">
                        {s.value}
                      </div>
                      <p className="text-white/60 text-sm md:text-base leading-snug">
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transition vers Neuro Forma */}
        <div
          className={`mt-16 lg:mt-20 max-w-2xl mx-auto text-center transition-all duration-700 delay-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center mb-5">
            <div className="w-12 h-0.5 bg-gold-500" />
          </div>
          <h3 className="font-serif text-2xl md:text-3xl text-white font-semibold mb-6">
            La réponse : <span className="text-gold-400">Neuro Forma</span>
          </h3>
          <p className="text-white/60 text-base md:text-lg leading-relaxed mb-6">
            Les entreprises doivent désormais relever trois enjeux complémentaires :
          </p>
          <ul className="inline-block text-left space-y-3 mb-7">
            {[
              "intégrer l'intelligence artificielle",
              "développer les compétences de leurs équipes",
              "préserver les capacités cognitives et humaines",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-white/70 text-base md:text-lg leading-relaxed"
              >
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            <strong className="text-gold-400 font-semibold">Neuro Forma</strong>{" "}
            a été conçu pour répondre à ces trois enjeux au sein d&apos;un même lieu.
          </p>
        </div>

        {/* Sources */}
        <p className="mt-12 text-center text-white/30 text-xs leading-relaxed max-w-3xl mx-auto">
          Sources : Microsoft Work Trend Index, McKinsey Global Institute, Ipsos,
          Santé Publique France.
        </p>
      </div>
    </section>
  );
}
