"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { Users, ShieldCheck, Zap, LayoutGrid } from "lucide-react";

const proofs = [
  {
    icon: Users,
    text: "Jusqu'à 21 praticiens accueillis simultanément",
  },
  {
    icon: ShieldCheck,
    text: "Ancien centre médical ERP",
  },
  {
    icon: Zap,
    text: "Infrastructure immédiatement exploitable",
  },
  {
    icon: LayoutGrid,
    text: "Plusieurs modèles économiques possibles",
  },
];

export default function Reassurance() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.2);

  return (
    <section ref={ref} className="py-16 lg:py-20 px-6 bg-warm-100">
      <div
        className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-navy-800 mb-10">
          Pourquoi ce lieu{" "}
          <span className="text-gold-500">fonctionne déjà</span>&nbsp;?
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {proofs.map((p, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 bg-white rounded-lg px-5 py-4 shadow-sm border border-warm-200 transition-all duration-500 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                <p.icon size={20} className="text-gold-600" />
              </div>
              <span className="text-navy-800 text-sm font-medium text-left">
                {p.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
