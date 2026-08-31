"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import {
  Train,
  Car,
  Plane,
  Hospital,
  GraduationCap,
  ShoppingBag,
  ParkingCircle,
  FileText,
  User,
} from "lucide-react";

const proximities = [
  { icon: Train, label: "Gare Avignon TGV", distance: "15 min" },
  { icon: Car, label: "Autoroute A7", distance: "5 min" },
  { icon: Plane, label: "Aéroport Avignon", distance: "12 min" },
  { icon: Hospital, label: "CHU Avignon", distance: "10 min" },
  { icon: GraduationCap, label: "Université d'Avignon", distance: "12 min" },
  { icon: ShoppingBag, label: "Commerces & services", distance: "3 min" },
  { icon: ParkingCircle, label: "Parkings privatifs", distance: "2 places" },
];

const marketData = [
  { label: "Surface du bien", value: "193 m²" },
  { label: "Parkings privatifs", value: "2 places" },
];

export default function Location() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);

  return (
    <section ref={ref} id="localisation" className="section-padding bg-white">
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
            Avignon-Montfavet :{" "}
            <span className="text-gold-500">un emplacement stratégique</span>
          </h2>
          <p className="section-subtitle mx-auto">
            203 Cours Cardinal Bertrand de Montfavet, 84140 Avignon — entre TGV
            et autoroute, à proximité immédiate d&apos;Agroparc.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Exterior photo */}
          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="aspect-square lg:aspect-[4/3] rounded-lg overflow-hidden relative group">
              <img
                src="/images/devanture.webp"
                alt="Façade du 203 — Cours Cardinal Bertrand de Montfavet, Avignon"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded px-3 py-2 shadow-lg">
                <span className="text-navy-800 text-xs font-semibold">
                  203 Cours Cardinal Bertrand de Montfavet · 84140 Avignon
                </span>
              </div>
            </div>
          </div>

          {/* Proximities + market data */}
          <div
            className={`transition-all duration-700 delay-400 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Proximities */}
            <h3 className="font-serif text-xl font-semibold text-navy-800 mb-6">
              Accessibilité & proximités
            </h3>
            <div className="space-y-3">
              {proximities.map((p, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-2.5 border-b border-warm-200 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-warm-100 flex items-center justify-center">
                      <p.icon size={16} className="text-gold-500" />
                    </div>
                    <span className="text-navy-800 text-sm font-medium">
                      {p.label}
                    </span>
                  </div>
                  <span className="text-navy-300 text-sm font-semibold">
                    {p.distance}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Données du marché local — pleine largeur, centré */}
        <div
          className={`mt-16 transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-navy-800 text-center mb-8">
            Les données du bien
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto">
            {marketData.map((d, i) => (
              <div
                key={i}
                className="bg-warm-100 rounded-lg p-6 border border-warm-300 text-center"
              >
                <div className="text-gold-600 font-serif text-2xl font-bold">
                  {d.value}
                </div>
                <div className="text-navy-300 text-sm mt-1">{d.label}</div>
              </div>
            ))}
          </div>


          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4">
            <a href="#contact-form" className="btn-primary">
              <FileText size={18} />
              Recevoir le dossier d&apos;acquisition
            </a>
            <div className="flex flex-col items-center gap-1.5">
              <a href="#contact-frederic" className="btn-secondary">
                <User size={18} />
                Contacter Frédéric Lejour
              </a>
              <span className="text-navy-300 text-xs">
                Chargé de la commercialisation du 203
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
