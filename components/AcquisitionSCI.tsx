"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import {
  Building2,
  PieChart,
  Landmark,
  Banknote,
  Info,
  ArrowRight,
  ArrowDown,
  FileText,
  User,
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function AcquisitionSCI() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);

  return (
    <section ref={ref} id="reprise-sci" className="section-padding bg-warm-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center mb-5">
            <div className="w-12 h-0.5 bg-gold-500" />
          </div>
          <h2 className="section-title mb-5">
            Acquérir l&apos;immeuble, ou{" "}
            <span className="text-gold-500">reprendre la structure</span> qui le
            possède ?
          </h2>
          <p className="section-subtitle mx-auto">
            Les locaux sont aujourd&apos;hui détenus par une SCI, qui porte par
            ailleurs un financement immobilier existant. Une modalité
            alternative d&apos;acquisition peut donc être étudiée : celle des
            parts de la société propriétaire. Données indicatives, sous réserve
            des validations et accords nécessaires, à examiner avec vos
            conseils.
          </p>
        </div>

        {/* Hook block */}
        <div
          className={`rounded-2xl bg-navy-800 text-white shadow-xl px-7 py-10 md:px-12 md:py-14 mb-12 transition-all duration-700 delay-100 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-serif text-4xl md:text-6xl font-semibold text-white leading-tight mb-2">
              271 660 €{" "}
              <span className="font-sans text-2xl md:text-4xl font-normal text-white/80">
                d&apos;immobilier.
              </span>
            </p>
            <p className="font-serif text-4xl md:text-6xl font-semibold text-gold-400 leading-tight mb-6">
              110 100 €
            </p>
            <p className="text-lg md:text-2xl text-white/80 font-light leading-snug mb-6">
              pour acquérir les parts et reprendre le compte courant de la SCI
              propriétaire.
            </p>

            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4">
              La SCI porte par ailleurs un financement immobilier existant dont
              le capital restant dû est d&apos;environ 161 000 €, sous réserve
              des validations et accords nécessaires.
            </p>
            <p className="text-white/60 text-xs md:text-sm leading-relaxed max-w-3xl mx-auto">
              Ces 110 100 € ne constituent ni le prix du bien, ni sa valeur
              immobilière : ils correspondent à l&apos;acquisition des parts
              sociales et à la reprise du compte courant d&apos;associé. Données
              indicatives, sous réserve de validation.
            </p>
          </div>
        </div>

        {/* Reference banner */}
        <div
          className={`max-w-3xl mx-auto rounded-2xl bg-warm-100 border border-warm-300 px-6 py-4 text-center mb-14 transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-serif text-2xl md:text-3xl font-semibold text-navy-800">
            271 660 €
          </p>
          <p className="text-navy-300 text-sm md:text-base">
            net vendeur — soit environ 1 408 €/m² pour 193 m²
          </p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Col A */}
          <div
            className={`group h-full flex flex-col rounded-2xl bg-white border border-warm-300 shadow-sm p-7 lg:p-9 transition-all duration-700 hover:shadow-lg ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0">
                <Building2 size={24} className="text-gold-500" />
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wide text-gold-600 mb-1">
                  Voie 1
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-navy-800 leading-tight">
                  Acheter l&apos;immeuble
                </h3>
              </div>
            </div>

            <div className="space-y-4 mt-auto">
              <div className="flex items-baseline justify-between border-b border-warm-200 pb-3">
                <span className="text-navy-600 text-sm">Valeur du bien</span>
                <span className="text-navy-800 font-semibold font-serif text-lg">
                  271 660 €
                </span>
              </div>
              <div className="flex items-baseline justify-between border-b border-warm-200 pb-3">
                <span className="text-navy-600 text-sm">
                  Honoraires Lejour Consulting
                </span>
                <span className="text-navy-800 font-semibold text-sm">
                  17 000 €
                </span>
              </div>
              <div className="flex items-baseline justify-between border-b border-warm-200 pb-3">
                <span className="text-navy-600 text-sm">
                  Frais d&apos;acquisition estimés
                </span>
                <span className="text-navy-800 font-semibold text-sm">
                  ≈ 21 680 €
                </span>
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <span className="text-navy-800 font-semibold">
                  Coût global indicatif
                </span>
                <span className="text-gold-600 font-semibold font-serif text-2xl">
                  ≈ 310 340 €
                </span>
              </div>
            </div>
          </div>

          {/* Col B */}
          <div
            className={`group h-full flex flex-col rounded-2xl bg-white border-2 border-gold-500/40 shadow-sm p-7 lg:p-9 transition-all duration-700 hover:shadow-lg ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "350ms" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0">
                <PieChart size={24} className="text-gold-500" />
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wide text-gold-600 mb-1">
                  Voie 2 — à l&apos;étude
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-navy-800 leading-tight">
                  Acquérir les parts et reprendre le compte courant
                </h3>
              </div>
            </div>

            <div className="space-y-4 mt-auto">
              <div className="flex items-baseline justify-between border-b border-warm-200 pb-3">
                <span className="text-navy-600 text-sm">
                  Acquisition des parts sociales
                </span>
                <span className="text-navy-800 font-semibold text-sm">
                  100 €
                </span>
              </div>
              <div className="flex items-baseline justify-between border-b border-warm-200 pb-3">
                <span className="text-navy-600 text-sm">
                  Reprise du compte courant d&apos;associé
                </span>
                <span className="text-navy-800 font-semibold text-sm">
                  110 000 €
                </span>
              </div>
              <div className="flex items-baseline justify-between border-b border-warm-200 pb-3">
                <span className="text-navy-800 font-semibold">
                  Total parts + compte courant
                </span>
                <span className="text-gold-600 font-semibold font-serif text-xl">
                  110 100 €
                </span>
              </div>
              <div className="flex items-baseline justify-between border-b border-warm-200 pb-3">
                <span className="text-navy-600 text-sm">
                  Honoraires Lejour Consulting
                </span>
                <span className="text-navy-800 font-semibold text-sm">
                  17 000 €
                </span>
              </div>
              <div className="flex items-baseline justify-between border-b border-warm-200 pb-3">
                <span className="text-navy-600 text-sm">
                  Frais avocat / audit estimatifs
                </span>
                <span className="text-navy-800 font-semibold text-sm">
                  ≈ 10 084 €
                </span>
              </div>

              {/* Navy box: existing financing */}
              <div className="mt-4 rounded-xl bg-navy-800 text-white p-5">
                <p className="text-white/60 text-xs uppercase tracking-wide mb-2">
                  Par ailleurs, porté par la société
                </p>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-white/80 text-sm">
                    Capital restant dû du financement immobilier existant
                  </span>
                  <span className="font-serif text-2xl font-semibold text-gold-400">
                    ≈ 161 000 €
                  </span>
                </div>
                <p className="text-white/60 text-xs leading-relaxed">
                  Ce montant n&apos;est pas un poste de décaissement à
                  l&apos;entrée : il reste une dette portée par la SCI.
                </p>
              </div>

              <div className="pt-2">
                <p className="text-navy-300 text-xs leading-relaxed">
                  Sous réserve des validations et accords nécessaires, notamment
                  de l&apos;établissement bancaire, et sous réserve
                  d&apos;audit.
                </p>
                <p className="text-navy-400 text-xs leading-relaxed mt-2">
                  Le coût global de cette voie dépend du traitement du
                  financement existant et ne peut être arrêté à ce stade.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Two bars visual */}
        <div
          className={`max-w-4xl mx-auto mb-16 transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-navy-800 text-center mb-4">
            Deux postes de nature différente
          </h3>
          <p className="text-navy-300 text-center text-sm md:text-base mb-8 max-w-2xl mx-auto">
            Les montants ci-dessous ne s&apos;additionnent pas pour former la
            valeur du bien.{" "}
            <br className="hidden md:block" />
            Ils ont des natures économiques distinctes.
          </p>

          {/* Bar A */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-navy-600">
                Parts sociales + compte courant d&apos;associé
              </span>
              <span className="font-serif text-xl font-semibold text-gold-600">
                110 100 €
              </span>
            </div>
            <div className="w-full bg-warm-200 rounded-lg h-12 overflow-hidden">
              <div
                className="h-full bg-gold-500 rounded-r-lg transition-all duration-1000 ease-out"
                style={{ width: inView ? "68%" : "0%" }}
              />
            </div>
          </div>

          {/* Bar B */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-navy-600">
                Financement immobilier existant porté par la SCI
              </span>
              <span className="font-serif text-xl font-semibold text-navy-800">
                ≈ 161 000 €
              </span>
            </div>
            <div className="w-full bg-warm-200 rounded-lg h-12 overflow-hidden">
              <div
                className="h-full bg-navy-700 rounded-r-lg transition-all duration-1000 ease-out"
                style={{ width: inView ? "100%" : "0%" }}
              />
            </div>
          </div>

          <div className="bg-warm-100 border border-warm-300 rounded-lg p-4 text-center">
            <p className="text-navy-300 text-sm leading-relaxed">
              Le capital restant dû reste une dette portée par la société. Son
              traitement dépend de l&apos;accord de l&apos;établissement
              bancaire et des conditions de reprise de la SCI.
            </p>
          </div>
        </div>

        {/* 3-step flow */}
        <div
          className={`mb-16 transition-all duration-700 delay-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-navy-800 text-center mb-8">
            Pourquoi cette différence change la lecture de l&apos;opération
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Building2,
                title: "Une société détient déjà l'actif",
                text: "Les locaux sont détenus par une SCI.",
              },
              {
                icon: Banknote,
                title: "Un financement est déjà porté",
                text: "≈ 161 000 € de capital restant dû, sous réserve des validations et accords nécessaires.",
              },
              {
                icon: Landmark,
                title: "Acquérir les parts plutôt que les murs",
                text: "Au lieu de financer l'intégralité de la valeur, l'acquéreur peut étudier l'acquisition des parts et la reprise du compte courant d'associé.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="relative rounded-2xl bg-white border border-warm-300 shadow-sm p-6 lg:p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-4">
                  <step.icon size={24} className="text-gold-500" />
                </div>
                <h4 className="font-serif text-lg font-semibold text-navy-800 mb-2">
                  {step.title}
                </h4>
                <p className="text-navy-300 text-sm leading-relaxed">
                  {step.text}
                </p>
                {i < 2 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight size={24} className="text-gold-500" />
                  </div>
                )}
                {i < 2 && (
                  <div className="md:hidden flex justify-center mt-4">
                    <ArrowDown size={24} className="text-gold-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Warning + CTAs */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 delay-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="rounded-2xl bg-warm-100 border border-warm-300 p-6 md:p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                <Info size={19} className="text-gold-600" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-lg font-semibold text-navy-800">
                  Ce que cette option implique
                </h3>
                <p className="text-navy-600 text-sm md:text-[15px] leading-relaxed">
                  Cette voie n&apos;est pas moins chère : elle est de nature
                  différente. Le financement existant reste une dette portée par
                  la société. L&apos;opération nécessite une due diligence
                  approfondie et l&apos;accord de l&apos;établissement
                  bancaire.
                </p>
                <p className="text-navy-300 text-xs leading-relaxed">
                  Aucune affirmation fiscale, juridique ou comptable définitive
                  n&apos;est formulée. Les montants sont indicatifs, non
                  contractuels, et doivent faire l&apos;objet d&apos;une
                  validation par les conseils de l&apos;acquéreur.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4">
            <a
              href="#contact-form"
              onClick={() =>
                trackEvent("cta_dossier_click", {
                  cta_location: "acquisition",
                  cta_label: "Recevoir le dossier juridique & financier",
                })
              }
              className="btn-primary"
            >
              <FileText size={18} />
              Recevoir le dossier juridique &amp; financier
            </a>
            <div className="flex flex-col items-center gap-1.5">
              <a href="#contact-frederic" className="btn-secondary">
                <User size={18} />
                Échanger avec Frédéric Lejour
              </a>
              <span className="text-navy-300 text-xs">
                Chargé de la commercialisation du 203
              </span>
            </div>
          </div>
          <div className="mt-6 text-center">
            <a
              href="#acquisition"
              className="text-gold-500 text-sm font-semibold hover:text-gold-600 transition-colors"
            >
              Cadre juridique et due diligence →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
