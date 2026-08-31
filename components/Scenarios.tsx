"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import {
  DoorOpen,
  Presentation,
  GraduationCap,
  CalendarDays,
  Boxes,
  ArrowRight,
  Check,
  ShieldCheck,
  Repeat,
  Users,
  Layers,
} from "lucide-react";

const scenarios = [
  {
    icon: DoorOpen,
    title: "Louer les 5 cabinets",
    desc: "Cinq cabinets professionnels équipés, utilisables indépendamment les uns des autres.",
    model: "Mise à disposition • Récurrent",
    benefits: [
      "Cabinets déjà aménagés et équipés",
      "Occupation à la journée, au mois ou à l'année",
      "Plusieurs professionnels accueillis simultanément",
    ],
    image: "/images/bureau-3.webp",
    alt: "Cabinet professionnel équipé — Le 203",
    accent: "text-gold-400",
  },
  {
    icon: Presentation,
    title: "Louer les salles",
    desc: "Salle de formation, salle polyvalente et espaces collectifs mobilisables séparément.",
    model: "Location ponctuelle • Modulable",
    benefits: [
      "Salles équipées pour réunions et présentations",
      "Écran interactif professionnel disponible",
      "Configuration modulable selon les besoins",
    ],
    image: "/images/salle-reunion.webp",
    alt: "Salle de réunion — Le 203",
    accent: "text-white",
  },
  {
    icon: GraduationCap,
    title: "Organiser des formations",
    desc: "Espaces de formation déjà configurés pour accueillir des sessions collectives.",
    model: "Activité propre • Sessions",
    benefits: [
      "Salle de conférence intégrée",
      "Espaces adaptés aux sessions collectives",
      "Locaux accessibles au public (ERP / PMR)",
    ],
    image: "/images/salle-formation.webp",
    alt: "Salle de formation — Le 203",
    accent: "text-gold-400",
  },
  {
    icon: CalendarDays,
    title: "Accueillir ateliers & événements",
    desc: "Un lieu identifié pouvant recevoir des ateliers, des rencontres et des événements professionnels.",
    model: "Événementiel • Ponctuel",
    benefits: [
      "Espaces collectifs et patio extérieur",
      "Studio vidéo professionnel sur place",
      "Contrôle d'accès et équipements de réunion",
    ],
    image: "/images/veranda.webp",
    alt: "Véranda et espace de présentation — Le 203",
    accent: "text-gold-300",
  },
  {
    icon: Boxes,
    title: "Exploiter les équipements spécialisés",
    desc: "Sauna japonais, salle multisensorielle, studio vidéo et systèmes de cultures intégrés.",
    model: "Exploitation directe • Mise à disposition",
    benefits: [
      "Équipements spécialisés déjà installés",
      "Utilisables en propre ou mis à disposition",
      "Investissement initial déjà réalisé",
    ],
    image: "/images/bureau-5.webp",
    alt: "Espace multisensoriel équipé — Le 203",
    accent: "text-white",
  },
];

const businessPillars = [
  {
    icon: Repeat,
    title: "Usages cumulables",
    desc: "Les espaces peuvent être exploités séparément ou ensemble",
  },
  {
    icon: Users,
    title: "Plusieurs occupants",
    desc: "Le lieu peut accueillir plusieurs professionnels simultanément",
  },
  {
    icon: Layers,
    title: "Espaces modulables",
    desc: "Cabinets, salles et espaces collectifs dissociables",
  },
  {
    icon: ShieldCheck,
    title: "Actif déjà équipé",
    desc: "Espaces aménagés, exploitation rapide possible",
  },
];

export default function Scenarios() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);

  return (
    <section ref={ref} id="projection" className="section-padding bg-warm-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center mb-4">
            <div className="gold-divider" />
          </div>
          <h2 className="section-title mb-4">
            Et si votre projet pouvait commencer{" "}
            <span className="text-gold-500">ici</span>&nbsp;?
          </h2>
          <p className="section-subtitle mx-auto">
            Les différents espaces du 203 peuvent être exploités séparément ou
            combinés, selon le projet de l&apos;acquéreur.
          </p>
          <p className="text-navy-400 text-sm md:text-base italic mt-4 max-w-2xl mx-auto">
            Les usages présentés ci-dessous sont des possibilités
            d&apos;exploitation. Ils ne constituent ni une promesse de revenus,
            ni une prévision d&apos;exploitation.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {scenarios.map((s, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-lg transition-all duration-700 hover:shadow-2xl hover:-translate-y-1 ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              } ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 120 + 200}ms` }}
            >
              {/* Top image section */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-800/50 to-navy-800/20" />
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-5">
                  <s.icon size={24} className={`${s.accent} mb-2`} />
                  <h3 className="font-serif text-xl font-semibold text-white mb-1">
                    {s.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
                    {s.desc}
                  </p>
                </div>
              </div>

              {/* Bottom section — modèle & atouts */}
              <div className="bg-white px-6 py-5 flex flex-col gap-4">
                <div>
                  <div className="text-navy-300 text-[10px] font-semibold uppercase tracking-wider mb-1.5">
                    Type d&apos;exploitation
                  </div>
                  <span className="inline-flex items-center rounded-full bg-gold-500/10 border border-gold-500/20 px-3 py-1 text-[11px] font-semibold text-gold-700">
                    {s.model}
                  </span>
                </div>

                <ul className="space-y-1.5 pt-1 border-t border-warm-200">
                  {s.benefits.map((b, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="mt-0.5 w-4 h-4 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                        <Check size={11} className="text-gold-600" />
                      </span>
                      <span className="text-navy-600 text-xs leading-snug">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Synthèse */}
        <div
          className={`mb-12 transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-navy-800 rounded-2xl px-6 py-8 md:px-10 md:py-10">
            <div className="text-center mb-8">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-white mb-2">
                Un lieu, plusieurs usages possibles
              </h3>
              <p className="text-navy-100/70 text-sm max-w-2xl mx-auto">
                Ces usages ne s&apos;excluent pas : ils peuvent se combiner pour
                diversifier l&apos;exploitation et optimiser l&apos;occupation
                des 193&nbsp;m².
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {businessPillars.map((p, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 transition-colors"
                >
                  <div className="w-11 h-11 mx-auto mb-3 rounded-lg bg-gold-500/15 flex items-center justify-center">
                    <p.icon size={20} className="text-gold-400" />
                  </div>
                  <div className="font-serif text-base md:text-lg font-semibold text-white mb-1">
                    {p.title}
                  </div>
                  <div className="text-navy-100/60 text-xs leading-snug">
                    {p.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 delay-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a href="#modele" className="btn-secondary group">
            Découvrir le modèle économique
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
