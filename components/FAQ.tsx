"use client";

import { useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Quel est le prix exact du bien ?",
    a: "Le prix net vendeur est de 271 660 €, soit environ 1 408 €/m² pour 193 m². Honoraires inclus : 288 660 € (17 000 € d'honoraires). Les conditions de vente et les frais estimés sont détaillés dans le dossier d'acquisition.",
    cta: { label: "Recevoir le dossier", href: "#contact-form" },
  },
  {
    q: "Quelle est la surface et comment les locaux sont-ils configurés ?",
    a: "Le centre développe environ 193 m². Il comprend notamment 5 cabinets professionnels équipés, des espaces collectifs, des espaces de formation, un patio et 2 places de parking privatives.",
    cta: { label: "Voir les espaces", href: "#espaces" },
  },
  {
    q: "Le bien est-il aux normes (ERP, accessibilité PMR) ?",
    a: "Les locaux sont un ancien centre médical relevant du régime ERP et disposent d'une accessibilité PMR. L'ensemble des diagnostics et attestations est communiqué dans le dossier technique.",
  },
  {
    q: "Quels équipements sont inclus dans la vente ?",
    a: "Le centre n'est pas vendu vide. Sont notamment présents : cabinets équipés, tables de massage, mobilier, points d'eau, sauna japonais, salle Snoezelen, écran interactif professionnel, salle de conférence, studio vidéo, photocopieur, contrôle d'accès, alarme, vidéosurveillance, traitement de l'eau et de l'air, réseau RJ45, murs végétalisés et systèmes de cultures intégrés. Cette liste est indicative et sous réserve de vérification finale de l'inventaire.",
    cta: { label: "Voir les équipements", href: "#espaces" },
  },
  {
    q: "Y a-t-il des travaux à prévoir ?",
    a: "Les locaux sont déjà aménagés et ont accueilli plusieurs professionnels et activités. Un état des lieux technique détaillé est disponible sur demande.",
  },
  {
    q: "Peut-on visiter physiquement les locaux ?",
    a: "Oui. Les visites se font sur rendez-vous. Une visite virtuelle 360° est également disponible en ligne pour un premier aperçu.",
    cta: { label: "Planifier une visite", href: "#contact-form" },
  },
  {
    q: "Quels sont les modes d'acquisition possibles ?",
    a: "Deux voies peuvent être envisagées : une acquisition immobilière classique, ou l'étude d'une acquisition des parts de la SCI propriétaire des locaux. Cette seconde option doit faire l'objet d'un audit juridique, fiscal, comptable et bancaire avec vos conseils.",
    cta: { label: "Voir les modes d'acquisition", href: "#reprise-sci" },
  },
  {
    q: "Acquérir les parts de la SCI, cela signifie-t-il que le bien coûte 110 100 € ?",
    a: "Non. Les 110 100 € correspondent à l'acquisition des parts sociales (100 €) et à la reprise du compte courant d'associé (110 000 €). La valeur immobilière du bien reste de 271 660 € net vendeur. La SCI porte par ailleurs un financement immobilier existant dont le capital restant dû est d'environ 161 000 €, sous réserve des validations et accords nécessaires.",
    cta: { label: "Voir le mécanisme de reprise", href: "#reprise-sci" },
  },
  {
    q: "Le financement immobilier existant est-il automatiquement transféré ?",
    a: "Non. Le traitement du financement existant porté par la SCI dépend de l'accord de l'établissement bancaire, d'une due diligence et des conditions de reprise. Aucune reprise n'est automatique ou garantie.",
  },
  {
    q: "Peut-on financer cet achat par emprunt ?",
    a: "Le bien peut faire l'objet d'un financement bancaire immobilier classique. Les modalités dépendent de votre situation et de l'analyse de votre établissement bancaire.",
  },
  {
    q: "Quel est le potentiel d'exploitation du lieu ?",
    a: "Le centre peut accueillir plusieurs professionnels simultanément : location des cabinets, location des salles, exploitation des équipements spécialisés, formations, ateliers et événements. Ces usages sont des possibilités et ne constituent ni une promesse de revenus, ni une garantie de clientèle.",
    cta: { label: "Voir l'exploitation", href: "#projection" },
  },
  {
    q: "Quel est le délai de disponibilité ?",
    a: "Le calendrier est à convenir ensemble. Une transition accompagnée peut être envisagée pour faciliter la reprise du lieu.",
  },
  {
    q: "Quels sont les frais annexes ?",
    a: "Les estimations (frais de notaire ou frais juridiques selon l'option retenue, charges courantes, taxe foncière) sont détaillées dans le dossier d'acquisition.",
    cta: { label: "Recevoir le dossier", href: "#contact-form" },
  },
];

export default function FAQ() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} id="faq" className="section-padding bg-warm-100">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center mb-4">
            <div className="gold-divider" />
          </div>
          <h2 className="section-title mb-4">
            Vos questions,{" "}
            <span className="text-gold-500">nos réponses</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-lg border border-warm-300 overflow-hidden transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 80 + 200}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-warm-50 transition-colors"
              >
                <span className="font-medium text-navy-800 pr-4 text-sm lg:text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-gold-500 shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`accordion-content ${
                  openIndex === i ? "open" : ""
                }`}
              >
                <div>
                  <div className="px-6 pb-5 border-t border-warm-200 pt-4">
                    <p className="text-navy-300 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                    {faq.cta && (
                      <a
                        href={faq.cta.href}
                        className="inline-flex items-center gap-1 text-gold-500 text-sm font-semibold mt-3 hover:text-gold-600 transition-colors"
                      >
                        {faq.cta.label} →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
