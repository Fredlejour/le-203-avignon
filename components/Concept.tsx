"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { Building2, Boxes, TrendingUp, Landmark, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Building2,
    title: "L'immobilier",
    image: "/images/nouvelle facade 203.webp",
    alt: "Entrée du centre professionnel Le 203",
    desc: "193 m² à Avignon-Montfavet, déjà aménagés et accessibles au public. Prix net vendeur de 271 660 €, soit environ 1 408 €/m².",
  },
  {
    icon: Boxes,
    title: "Les équipements",
    image: "/images/bureau-suna-japonais.webp",
    alt: "Espace d'attente aménagé du centre Le 203",
    desc: "Le centre n'est pas vendu vide : cabinets équipés, mobilier, équipements spécialisés et infrastructures techniques déjà installés.",
  },
  {
    icon: TrendingUp,
    title: "Le modèle économique",
    image: "/images/salle-formation.webp",
    alt: "Salle de formation du centre Le 203",
    desc: "Un lieu conçu pour accueillir plusieurs professionnels simultanément : cabinets, salles, formations, ateliers et événements.",
  },
  {
    icon: Landmark,
    title: "La structure existante",
    image: "/images/salle-reunion.webp",
    alt: "Salle de réunion du centre Le 203",
    desc: "Le bien appartient à une SCI propriétaire. Deux voies d'acquisition peuvent être étudiées, sous réserve d'audit juridique et fiscal.",
  },
];

export default function Concept() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.15);

  return (
    <section ref={ref} id="proposition" className="section-padding bg-warm-100">
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
          <h2 className="section-title mb-5">
            Vous n&apos;achetez pas un local à aménager.
            <br className="hidden md:block" />
            Vous achetez un{" "}
            <span className="text-gold-500">outil de travail déjà constitué</span>.
          </h2>
          <p className="section-subtitle mx-auto">
            Les murs, les équipements, un modèle économique et{" "}
            <br className="hidden md:block" />
            une structure juridique existante.
          </p>
          <p className="text-sm text-navy-300/80 mt-4 max-w-2xl mx-auto">
            Le futur acquéreur peut reprendre le lieu et démarrer rapidement son
            exploitation, sans repartir d&apos;un local vide.
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 mb-12">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-lg shadow-sm transition-all duration-700"
              style={{
                transitionDelay: `${(i + 1) * 150}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(3rem)",
              }}
            >
              {/* Photo */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pillar.image}
                  alt={pillar.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute top-4 left-4 w-10 h-10 bg-white/10 backdrop-blur rounded-sm flex items-center justify-center">
                  <pillar.icon size={20} className="text-white" />
                </div>
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-gold-300 text-[10px] font-bold tracking-[0.2em] uppercase">
                    0{i + 1}
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="bg-white p-6 h-full">
                <h3 className="font-serif text-xl font-semibold text-navy-800 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-navy-300 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 delay-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a href="#espaces" className="btn-ghost group">
            Découvrir le centre
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
