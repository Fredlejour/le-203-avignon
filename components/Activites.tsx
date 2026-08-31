"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type Persona = {
  image: string;
  alt: string;
  persona: string;
  situation: string;
  projection: string;
  benefit: string;
};

const personas: Persona[] = [
  {
    image: "/images/persona-kine-profession-liberale.webp",
    alt: "Profession libérale — kiné ou thérapeute",
    persona: "Kiné, thérapeute ou profession libérale",
    situation:
      "Louez-vous actuellement votre cabinet ou envisagez-vous d'acquérir vos propres locaux ?",
    projection:
      "Le 203 vous permet d'installer votre activité dans une partie du centre et de mettre les autres espaces à disposition de professionnels complémentaires.",
    benefit:
      "Constituer votre actif immobilier tout en développant des revenus complémentaires potentiels.",
  },
  {
    image: "/images/persona-coworking-centre-professionnel.webp",
    alt: "Exploitant de centre professionnel",
    persona: "Exploitant de coworking / centre professionnel",
    situation:
      "Exploitez-vous déjà un espace partagé ou maîtrisez-vous un modèle de location de bureaux et de cabinets ?",
    projection:
      "Le 203 est un centre de 193 m² déjà structuré à Avignon-Montfavet, prêt à accueillir votre modèle d'exploitation.",
    benefit:
      "Accélérer votre développement sans repartir d'un local entièrement à créer.",
  },
  {
    image: "/images/persona-dirigeant-entreprise.webp",
    alt: "Dirigeant d'entreprise",
    persona: "Dirigeant d'entreprise / PME",
    situation:
      "Aimeriez-vous devenir propriétaire des locaux professionnels de votre entreprise ?",
    projection:
      "Le 203 permet d'installer votre siège ou vos équipes dans une partie des locaux et de valoriser les espaces que vous n'utilisez pas directement.",
    benefit:
      "Associer immobilier d'entreprise, usage professionnel et potentiel de revenus complémentaires.",
  },
  {
    image: "/images/persona-investisseur-exploitant.webp",
    alt: "Investisseur-exploitant",
    persona: "Entrepreneur / investisseur-exploitant",
    situation:
      "Recherchez-vous un actif immobilier capable de conjuguer patrimoine et exploitation économique ?",
    projection:
      "Le 203 offre plusieurs espaces indépendants pour construire votre propre modèle d'exploitation.",
    benefit:
      "Combiner détention d'un actif immobilier et exploitation économique potentielle.",
  },
  {
    image: "/images/persona-centre-pluridisciplinaire.webp",
    alt: "Créateur de centre pluridisciplinaire",
    persona: "Créateur d'un centre pluridisciplinaire",
    situation:
      "Souhaitez-vous réunir plusieurs professionnels, activités ou compétences dans un même lieu ?",
    projection:
      "Le 203 utilise sa configuration existante pour créer un centre de professionnels indépendants autour d'un positionnement commun.",
    benefit:
      "Créer des complémentarités, favoriser les recommandations croisées et mutualiser certains espaces.",
  },
];

export default function Activites() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);

  return (
    <section ref={ref} id="autofiltrage" className="section-padding bg-white">
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
            Le 203 est-il fait pour vous&nbsp;?
          </h2>
          <p className="section-subtitle mx-auto">
            <span className="md:block">
              Le 203 peut répondre à des projets très différents.
            </span>
            <span className="md:hidden">{" "}</span>
            <span className="md:block">
              Dans lequel vous reconnaissez-vous&nbsp;?
            </span>
          </p>
        </div>

        {/* Personas grid : 3 sur la première ligne, 2 sur la seconde */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8 mb-12">
          {personas.map((p, i) => (
            <div
              key={i}
              className={`group flex flex-col rounded-2xl bg-white border border-warm-200 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-700 lg:col-span-2 ${
                i === 3 ? "lg:col-start-2" : ""
              } ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              {/* Image */}
              <div className="relative h-44 sm:h-52 md:h-60 w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 lg:p-7">
                <p className="text-gold-600 text-[10px] font-bold tracking-[0.18em] uppercase mb-3">
                  {p.persona}
                </p>
                <div className="space-y-3 text-navy-600 text-sm leading-relaxed flex-1">
                  <p className="font-semibold text-navy-800">{p.situation}</p>
                  <p className="text-navy-300">{p.projection}</p>
                </div>

                {/* Bénéfice mis en avant */}
                <div className="mt-5 p-4 rounded-xl bg-warm-50 border border-warm-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-gold-500 flex-shrink-0 mt-0.5"
                    />
                    <p className="text-navy-700 text-sm leading-snug">
                      {p.benefit}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mention + CTA */}
        <div
          className={`text-center transition-all duration-700 delay-500 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-navy-300 text-sm max-w-2xl mx-auto mb-8">
            Ces projections sont des hypothèses d&apos;exploitation.{" "}
            <br className="hidden md:block" />
            Les usages effectifs restent soumis aux règles applicables à chaque
            profession.
          </p>
          <a href="#contact-form" className="btn-secondary group">
            PARLONS DE VOTRE PROJET
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
