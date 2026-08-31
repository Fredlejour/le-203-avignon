"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Building2,
  Receipt,
  Euro,
  FileText,
  CalendarDays,
  ShieldCheck,
} from "lucide-react";

const contactRows = [
  {
    icon: MapPin,
    content: (
      <span>
        Kirchstrasse 37
        <br />
        55218 Ingelheim am Rhein
        <br />
        Allemagne
      </span>
    ),
  },
  {
    icon: Phone,
    content: (
      <a href="tel:+33652646890" className="hover:text-gold-600 transition-colors">
        France : +33 6 52 64 68 90
      </a>
    ),
  },
  {
    icon: Phone,
    content: (
      <a
        href="tel:+4917646073361"
        className="hover:text-gold-600 transition-colors"
      >
        Allemagne : +49 176 46073361
      </a>
    ),
  },
  {
    icon: Mail,
    content: (
      <a
        href="mailto:frederic.lejour@lejourconsulting.com"
        className="hover:text-gold-600 transition-colors break-all"
      >
        frederic.lejour@lejourconsulting.com
      </a>
    ),
  },
  {
    icon: Globe,
    content: (
      <a
        href="https://lejourconsulting.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gold-600 transition-colors"
      >
        lejourconsulting.com
      </a>
    ),
  },
  { icon: Building2, content: <span>IHK Rheinhessen : 152 00 686043</span> },
  { icon: Receipt, content: <span>Steuernummer : 08/103/51926</span> },
  { icon: Euro, content: <span>TVA intracommunautaire : DE287643129</span> },
];

export default function AgentContact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);

  return (
    <section ref={ref} id="contact-frederic" className="section-padding bg-warm-100">
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
          <h2 className="section-title mb-5">
            Contactez-moi <span className="text-gold-500">en direct</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Vous souhaitez recevoir le dossier complet, obtenir des informations
            complémentaires{" "}
            <br className="hidden md:block" />
            ou organiser une visite des locaux&nbsp;?{" "}
            <br className="hidden md:block" />
            <br className="hidden md:block" />
            Je suis à votre disposition pour échanger personnellement avec vous{" "}
            <br className="hidden md:block" />
            et répondre à vos questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Colonne gauche — Photo + présentation */}
          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="max-w-sm mx-auto lg:mx-0">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/frederic-lejour.jpg"
                  alt="Frédéric Lejour — Agent immobilier, Lejour Consulting"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6">
                <h3 className="font-serif text-2xl font-semibold text-navy-800">
                  Frédéric Lejour
                </h3>
                <p className="text-navy-600 text-sm mt-1.5">
                  Agent immobilier en charge de la commercialisation du 203
                </p>
                <p className="text-gold-600 text-sm font-semibold mt-1">
                  Lejour Consulting
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-navy-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              <p>
                Après plus de 20 années d&apos;expérience dans le développement
                commercial, la négociation et l&apos;investissement immobilier,
                j&apos;accompagne aujourd&apos;hui la commercialisation de
                projets à forte valeur ajoutée.
              </p>
              <p>
                Je serai heureux d&apos;échanger avec vous afin de vous présenter
                le potentiel de ce site, répondre à vos questions et vous
                accompagner dans votre réflexion.
              </p>
            </div>
          </div>

          {/* Colonne droite — Coordonnées + actions + confiance */}
          <div
            className={`transition-all duration-700 delay-300 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white rounded-2xl border border-warm-300 shadow-sm p-7 md:p-9">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-navy-800 mb-1">
                Vos coordonnées de contact
              </h3>
              <p className="text-navy-800 font-medium text-sm">
                Frédéric Lejour · Lejour Consulting
              </p>

              <div className="mt-6 space-y-3.5">
                {contactRows.map((row, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                      <row.icon size={17} className="text-gold-600" />
                    </div>
                    <div className="text-navy-600 text-sm md:text-[15px] leading-relaxed pt-1.5">
                      {row.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Boutons d'action */}
              <div className="mt-8 flex flex-col gap-3">
                <a href="#contact-form" className="btn-primary w-full">
                  <FileText size={18} />
                  Recevoir le dossier complet
                </a>
                <a
                  href="mailto:frederic.lejour@lejourconsulting.com?subject=Planifier%20un%20%C3%A9change%20-%20Le%20203%20Avignon"
                  className="btn-secondary w-full"
                >
                  <CalendarDays size={18} />
                  Planifier un échange
                </a>
                <a
                  href="mailto:frederic.lejour@lejourconsulting.com?subject=Organiser%20une%20visite%20-%20Le%20203%20Avignon"
                  className="btn-secondary w-full"
                >
                  <Building2 size={18} />
                  Organiser une visite
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bloc de confiance — bandeau pleine largeur */}
        <div
          className={`mt-12 bg-navy-800 rounded-2xl px-7 py-9 md:px-12 md:py-11 transition-all duration-700 delay-400 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-white font-serif text-2xl md:text-3xl font-semibold mb-5">
            Chaque projet mérite une analyse personnalisée.
          </p>
          <p className="text-navy-100/80 text-base md:text-lg leading-relaxed max-w-5xl">
            Que vous soyez investisseur, organisme de formation, entrepreneur,
            dirigeant ou professionnel de la santé, un échange permet souvent
            d&apos;identifier rapidement les opportunités et les synergies
            possibles autour de ce site.
          </p>
        </div>

        {/* Informations réglementaires & assurances */}
        <div
          className={`mt-12 bg-white rounded-2xl border border-warm-300 px-6 py-8 md:px-10 md:py-9 transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <ShieldCheck size={20} className="text-gold-600" />
            <h3 className="font-serif text-lg md:text-xl font-semibold text-navy-800 text-center">
              Informations réglementaires & assurances
            </h3>
          </div>
          <div className="max-w-4xl mx-auto space-y-3 text-navy-300 text-xs md:text-sm leading-relaxed text-center">
            <p>
              Titulaire du récépissé de Libre Prestation de Services immobilier
              en France n° LPS75012025000000015 délivré par la CCI Paris
              Île-de-France, valable jusqu&apos;au 22/09/2026 (Loi n°70-9 du 2
              janvier 1970).
            </p>
            <p>
              Titulaire de la Carte Professionnelle Européenne (EPC) d&apos;Agent
              Immobilier n° 05-7511-z2T4 attribuée le 14/07/2021 par l&apos;Union
              Européenne, valable jusqu&apos;au 12/01/2026 (Décret n°2017-1481 du
              17 octobre 2017).
            </p>
            <p>
              Titulaire d&apos;une licence de transaction immobilière allemande
              (Erlaubnis Immobilienmakler) délivrée le 10/03/2021 par la
              Stadtverwaltung Ingelheim am Rhein (Allemagne).
            </p>
            <p>
              Couvert par AXA Assurance au titre des risques professionnels liés
              à l&apos;activité immobilière (Profi-Schutz für Dienstleister
              Immobilienmakler), contrat n° 60242463490/5M.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
