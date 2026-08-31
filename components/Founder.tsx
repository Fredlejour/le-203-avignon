"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { Play, Users, BookOpen, Clock } from "lucide-react";

export default function Founder() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.15);

  return (
    <section ref={ref} id="fondateur" className="section-padding bg-warm-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Photo */}
          <div
            className={`transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden relative group">
                <img
                  src="/images/mur-vegetal.webp"
                  alt="Mur végétal signature Neuro-Campus"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-navy-800/20" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white shadow-2xl rounded-lg p-5 max-w-[220px]">
                <div className="text-gold-500 font-serif text-2xl font-bold mb-1">
                  Ingénieur
                </div>
                <div className="text-navy-800 font-semibold text-sm">
                  Fondateur de Neuro-Campus
                </div>
                <div className="text-navy-300 text-xs mt-1">
                  Visionnaire · Bâtisseur · Passionné
                </div>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div
            className={`transition-all duration-700 delay-300 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="gold-divider mb-6" />
            <h2 className="section-title mb-8">
              La vision derrière{" "}
              <span className="text-gold-500">Neuro-Campus</span>
            </h2>

            {/* Quote */}
            <blockquote className="relative mb-8">
              <div className="absolute -top-4 -left-2 text-gold-500/20 font-serif text-7xl leading-none">
                &ldquo;
              </div>
              <p className="font-serif text-xl lg:text-2xl text-navy-800 leading-relaxed italic pl-6 border-l-2 border-gold-500">
                J&apos;ai transformé ces 193&nbsp;m² en un centre bio-santé du
                possible. Aujourd&apos;hui, ce lieu est prêt à écrire son
                prochain chapitre — avec vous.
              </p>
            </blockquote>

            <p className="text-navy-300 leading-relaxed mb-8">
              Ingénieur de formation, le fondateur a conçu chaque espace selon
              les principes de la neuroperformance et du bien-être. Le résultat :
              un lieu unique qui accueille praticiens, formations et innovation
              depuis sa création.
            </p>

            {/* Credentials */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-gold-500/10 text-gold-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-gold-500/20">
                Docteur en Pédagogie
              </span>
              <span className="inline-flex items-center gap-1.5 bg-navy-800/5 text-navy-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-navy-800/10">
                Expert Europe Régénération Sensorielle
              </span>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { icon: Clock, value: "5+ ans", label: "D'activité" },
                { icon: Users, value: "12+", label: "Praticiens" },
                { icon: BookOpen, value: "50+", label: "Formations" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-3 rounded-lg bg-white/60 border border-warm-300"
                >
                  <stat.icon
                    size={18}
                    className="text-gold-500 mx-auto mb-1.5"
                  />
                  <div className="font-serif text-lg font-bold text-navy-800">
                    {stat.value}
                  </div>
                  <div className="text-navy-300 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href="#visite" className="btn-ghost group pl-0">
              <Play size={16} />
              Regarder la vidéo de présentation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
