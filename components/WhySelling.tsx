"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { UserRound } from "lucide-react";

export default function WhySelling() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);

  return (
    <section
      ref={ref}
      id="pourquoi-vendre"
      className="section-padding bg-warm-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center mb-4">
            <div className="gold-divider" />
          </div>
          <p className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Pourquoi le 203 change de main
          </p>
          <h2 className="section-title">
            Une transmission,{" "}
            <span className="text-gold-500">non une cession par défaut</span>
          </h2>
        </div>

        {/* Bloc premium unique */}
        <div
          className={`mx-auto rounded-2xl bg-white border border-warm-300 shadow-sm px-7 py-9 md:px-12 md:py-12 transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ maxWidth: "900px" }}
        >
          {/* Identification du fondateur */}
          <div className="flex items-center gap-4 pb-7 mb-7 border-b border-warm-200">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0">
              <UserRound size={22} className="text-gold-600" />
            </div>
            <div>
              <p className="font-serif text-lg md:text-xl font-semibold text-navy-800 leading-tight">
                Jean-Charles Orozco
              </p>
              <p className="text-navy-300 text-sm mt-0.5">Fondateur du lieu</p>
            </div>
          </div>

          <div className="space-y-5 text-navy-600 text-base md:text-lg leading-relaxed text-left">
            <p>
              Après plusieurs années consacrées à concevoir, aménager, équiper
              et faire vivre ces 193&nbsp;m², Jean-Charles Orozco a rejoint sa
              famille installée en Amérique du Sud, où il développe désormais de
              nouveaux projets autour de l&apos;intelligence artificielle et de
              la prévention du déclin cognitif.
            </p>
            <p>
              Son départ crée aujourd&apos;hui l&apos;opportunité de
              transmettre un lieu professionnel déjà constitué à un nouvel
              acquéreur.
            </p>
            <p>
              Celui-ci reprend un actif achevé, équipé et accessible, situé à
              proximité immédiate d&apos;Agroparc, avec la liberté d&apos;y
              installer sa propre activité, d&apos;en faire évoluer
              l&apos;usage et d&apos;exploiter les espaces disponibles selon son
              propre projet.
            </p>
          </div>

          {/* Phrase de conclusion mise en valeur */}
          <div className="mt-9 pt-8 border-t border-warm-200">
            <p className="font-serif text-xl md:text-2xl font-semibold text-navy-800 leading-snug text-center">
              Le lieu ne change pas de vocation.
              <br />
              Il change simplement{" "}
              <span className="text-gold-600">de mains</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
