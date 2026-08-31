"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { MapPin, Building2, Users, Check } from "lucide-react";

const pillars = [
  {
    icon: MapPin,
    label: "La localisation",
    title: "Au cœur d'un bassin économique majeur",
    points: [
      "Avignon-Montfavet",
      "À seulement 1,5 km d'Agroparc",
      "Plus de 600 entreprises implantées à proximité",
      "Accès rapide à la gare, aux autoroutes et à l'aéroport",
      "2 places de parking privatives",
    ],
    conclusion: "",
  },
  {
    icon: Building2,
    label: "L'infrastructure",
    title: "Prête à être exploitée",
    points: [
      "193 m² de surface privative",
      "5 cabinets professionnels équipés",
      "Espaces collectifs et espaces de formation",
      "Ancien centre médical (ERP)",
      "Accessibilité PMR",
      "Patio extérieur",
    ],
    conclusion: "",
  },
  {
    icon: Users,
    label: "La mutualisation",
    title: "Plusieurs professionnels dans un même lieu",
    points: [
      "Un centre pluridisciplinaire plutôt que des cabinets isolés",
      "Une personne venant consulter découvre le centre et les autres activités",
      "Visibilité croisée entre professionnels",
      "Recommandations possibles entre praticiens",
      "Complémentarité des activités présentes",
      "Un environnement professionnel clairement identifié",
    ],
    conclusion:
      "Ces effets sont des dynamiques possibles, propres à un lieu partagé. Ils ne constituent en aucun cas une garantie de clientèle ou de revenus.",
  },
];

export default function WhyHere() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);

  return (
    <section
      ref={ref}
      id="interet"
      className="section-padding bg-warm-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center mb-4">
            <div className="gold-divider" />
          </div>
          <h2 className="section-title mb-4">
            Trois grandes raisons de s&apos;intéresser au{" "}
            <span className="text-gold-500">203</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Une localisation stratégique, une infrastructure déjà aménagée et{" "}
            <br className="hidden md:block" />
            la mutualisation propre à un lieu partagé entre plusieurs
            professionnels.
          </p>
        </div>

        {/* 3 pillars */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-7">
          {pillars.map((p, i) => (
            <div
              key={i}
              className={`flex flex-col bg-white border border-warm-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 150 + 150}ms` }}
            >
              {/* Icon + label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-navy-900 flex items-center justify-center flex-shrink-0">
                  <p.icon size={22} className="text-gold-400" />
                </div>
                <span className="text-gold-600 text-xs font-bold tracking-[0.18em] uppercase">
                  {p.label}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl lg:text-2xl text-navy-900 font-semibold mb-6 leading-snug">
                {p.title}
              </h3>

              {/* Points */}
              <ul className="space-y-3 mb-6 flex-1">
                {p.points.map((point, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2.5 text-navy-600 text-sm leading-relaxed"
                  >
                    <Check
                      size={16}
                      className="text-gold-500 mt-0.5 flex-shrink-0"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Conclusion */}
              {p.conclusion && (
                <p className="text-navy-400 text-sm leading-relaxed pt-5 border-t border-warm-200">
                  {p.conclusion}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Synthèse premium */}
        <div
          className={`mt-12 transition-all duration-700 delay-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative overflow-hidden bg-navy-900 rounded-2xl px-8 py-12 md:px-14 md:py-14">
            {/* Background image (subtile) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/devanture.webp"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover opacity-[0.12]"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy-900/95 via-navy-900/90 to-navy-900/95" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/[0.06] rounded-full blur-3xl" />

            <div className="relative max-w-3xl mx-auto">
              <div className="flex justify-center mb-5">
                <div className="w-16 h-0.5 bg-gold-500" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-white font-semibold mb-6 text-center">
                Un lieu déjà pensé pour le partage
              </h3>
              <p className="text-white/70 text-base md:text-lg leading-relaxed text-center mb-7">
                Le 203 réunit trois atouts rarement présents au même endroit :
              </p>
              <ul className="space-y-3.5 mb-8 max-w-2xl mx-auto">
                {[
                  "un bassin économique de plus de 600 entreprises à proximité immédiate",
                  "une infrastructure de 193 m² déjà aménagée et équipée",
                  "une configuration permettant d'accueillir plusieurs professionnels simultanément",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-white/80 text-base md:text-lg leading-relaxed"
                  >
                    <Check
                      size={20}
                      className="text-gold-400 mt-1 flex-shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-center text-white/90 text-base md:text-lg leading-relaxed border-t border-white/10 pt-7">
                Vous acquérez un actif immobilier en achetant les murs et les
                équipements.{" "}
                <br className="hidden md:block" />
                <strong className="text-gold-400 font-semibold">
                  Vous reprenez ainsi un centre déjà structuré,{" "}
                  <br className="hidden md:block" />
                  prêt à accueillir plusieurs professionnels et plusieurs types
                  d&apos;activités.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
