"use client";

import { useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { trackEvent } from "@/lib/analytics";
import { Calendar, Play, MapPin, Compass, Map } from "lucide-react";
import FloorPlan from "@/components/FloorPlan";

export default function VirtualTour() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.15);
  const [view, setView] = useState<"tour" | "plan">("tour");

  return (
    <section ref={ref} id="visite" className="section-padding bg-white">
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
          <h2 className="section-title mb-4">
            Visitez Le 203 comme si{" "}
            <span className="text-gold-500">vous y étiez</span>
          </h2>
          <p className="section-subtitle mx-auto">
            <span className="md:block">
              Parcourez les 193&nbsp;m² en visite virtuelle 360°,
            </span>
            <span className="md:hidden">{" "}</span>
            <span className="md:block">
              ou consultez le plan détaillé des locaux.
            </span>
          </p>
        </div>

        {/* Toggle Visite 360° / Plan 2D */}
        <div
          className={`flex justify-center mb-6 transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex p-1 bg-warm-100 border border-warm-200 rounded-full">
            <button
              type="button"
              onClick={() => {
                if (view !== "tour") {
                  trackEvent("virtual_tour_click", {
                    cta_location: "visite_toggle",
                    cta_label: "Visite 360°",
                  });
                }
                setView("tour");
              }}
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                view === "tour"
                  ? "bg-navy-800 text-white shadow"
                  : "text-navy-600 hover:text-navy-800"
              }`}
            >
              <Compass size={16} />
              Visite 360°
            </button>
            <button
              type="button"
              onClick={() => {
                if (view !== "plan") {
                  trackEvent("plan_click", {
                    cta_location: "visite_toggle",
                    cta_label: "Plan 2D",
                  });
                }
                setView("plan");
              }}
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                view === "plan"
                  ? "bg-navy-800 text-white shadow"
                  : "text-navy-600 hover:text-navy-800"
              }`}
            >
              <Map size={16} />
              Plan 2D
            </button>
          </div>
        </div>

        {/* Visite 360° ou Plan définitif (composant partagé) */}
        <div
          className={`mb-10 transition-all duration-700 delay-300 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {view === "tour" ? (
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-video relative">
                <iframe
                  src="https://tour.previsite.com/07ACD33D-6669-9864-FE25-5837B09139D6"
                  title="Visite virtuelle 360° — Le 203, Avignon-Montfavet"
                  className="w-full h-full border-0"
                  allow="fullscreen; gyroscope; accelerometer"
                  allowFullScreen
                  loading="lazy"
                />
                {/* Corner labels */}
                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded flex items-center gap-1.5 pointer-events-none">
                  <MapPin size={12} />
                  Avignon-Montfavet
                </div>
                <div className="absolute top-4 right-4 bg-gold-500 text-white text-xs font-semibold px-3 py-1.5 rounded pointer-events-none">
                  193 m² · Visite 360°
                </div>
              </div>
            </div>
          ) : (
            <FloorPlan showLegend showStats />
          )}
        </div>

        {/* CTAs + reassurance */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="https://tour.previsite.com/07ACD33D-6669-9864-FE25-5837B09139D6"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("virtual_tour_click", {
                cta_location: "visite_section",
                cta_label: "Lancer la visite virtuelle",
              })
            }
            className="btn-primary"
          >
            <Play size={18} />
            Lancer la visite virtuelle
          </a>
          <a
            href="#contact-form"
            onClick={() =>
              trackEvent("cta_visite_click", {
                cta_location: "visite_section",
                cta_label: "Planifier une visite physique",
              })
            }
            className="btn-ghost group"
          >
            <Calendar size={16} />
            Planifier une visite physique
          </a>
        </div>

        <p
          className={`text-center text-navy-300 text-sm transition-all duration-700 delay-600 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          Visite physique sur rendez-vous · Avignon-Montfavet, accès facile
        </p>
      </div>
    </section>
  );
}
