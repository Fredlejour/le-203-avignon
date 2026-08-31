"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "@/hooks/useInView";
import {
  Building2,
  X,
  ZoomIn,
  Boxes,
  LayoutGrid,
  Maximize,
  Armchair,
  Trees,
  Accessibility,
  GraduationCap,
  Droplets,
  Wind,
  MonitorPlay,
  Video,
  Printer,
  ShieldCheck,
  Camera,
  KeyRound,
  Network,
  Leaf,
  Sprout,
  Flame,
  Sparkles,
  Car,
  FileText,
  ArrowRight,
  Map,
  ChevronDown,
  ChevronUp,
  User,
  type LucideIcon,
} from "lucide-react";
import FloorPlan from "@/components/FloorPlan";

const physicalAssets: { icon: LucideIcon; label: string }[] = [
  { icon: Armchair, label: "5 cabinets professionnels équipés" },
  { icon: Armchair, label: "Tables de massage & mobilier" },
  { icon: Droplets, label: "Points d'eau" },
  { icon: Flame, label: "Sauna japonais" },
  { icon: Sparkles, label: "Salle Snoezelen / multisensorielle" },
  { icon: MonitorPlay, label: "Écran interactif professionnel ≈ 75/77\"" },
  { icon: GraduationCap, label: "Salle de conférence" },
  { icon: Video, label: "Studio vidéo professionnel" },
  { icon: Printer, label: "Photocopieur multifonctions" },
  { icon: KeyRound, label: "Contrôle d'accès" },
  { icon: ShieldCheck, label: "Alarme" },
  { icon: Camera, label: "Vidéosurveillance" },
  { icon: Droplets, label: "Filtration & traitement de l'eau" },
  { icon: Wind, label: "Traitement de l'air" },
  { icon: Network, label: "Réseau RJ45" },
  { icon: Leaf, label: "Murs végétalisés" },
  { icon: Sprout, label: "Systèmes de cultures intégrés / FarmBot" },
  { icon: Car, label: "2 places de parking privatives" },
];

const equipmentFamilies = [
  {
    title: "Infrastructure & réseaux",
    benefit:
      "Un environnement déjà préparé pour travailler, communiquer et connecter plusieurs espaces sans repartir de zéro.",
    items: [
      "Points d'eau",
      "Filtration & traitement de l'eau",
      "Traitement de l'air",
      "Réseau RJ45",
      "Contrôle d'accès",
      "Alarme",
      "Vidéosurveillance",
      "2 places de parking privatives",
    ],
  },
  {
    title: "Confort & aménagement",
    benefit:
      "Des équipements pensés pour faciliter l'accueil, le confort quotidien et l'usage professionnel des lieux.",
    items: [
      "5 cabinets professionnels équipés",
      "Tables de massage & mobilier",
      "Salle de conférence",
      "Murs végétalisés",
    ],
  },
  {
    title: "Équipements professionnels",
    benefit:
      "Du matériel de productivité et de présentation déjà en place pour démarrer rapidement l'activité.",
    items: [
      "Écran interactif professionnel ≈ 75/77\"",
      "Photocopieur multifonctions",
      "Studio vidéo professionnel",
    ],
  },
  {
    title: "Installations spécialisées",
    benefit:
      "Des installations singulières, rarement livrées en l'état, qui différencient le 203 des locaux standards.",
    items: [
      "Sauna japonais",
      "Salle Snoezelen / multisensorielle",
      "Systèmes de cultures intégrés / FarmBot",
    ],
  },
];

const spaces: { name: string; fn: string; image: string }[] = [
  {
    name: "Accueil & orientation",
    fn: "Réception • Premier contact",
    image: "/images/entree.webp",
  },
  {
    name: "Salle de formation & conférences",
    fn: "Former • Transmettre",
    image: "/images/salle-reunion-2-4.webp",
  },
  {
    name: "Salle polyvalente",
    fn: "Réunions • Ateliers • Séminaires",
    image: "/images/salle-formation.webp",
  },
  {
    name: "Cabinet 1",
    fn: "Consultation • Accompagnement",
    image: "/images/bureau-1.webp",
  },
  {
    name: "Cabinet 2",
    fn: "Consultation • Bureau",
    image: "/images/bureau-2-2.webp",
  },
  {
    name: "Cabinet 3",
    fn: "Consultation • Entretiens",
    image: "/images/bureau-3.webp",
  },
  {
    name: "Cabinet 4",
    fn: "Consultation • Bureau",
    image: "/images/bureau-4-2.webp",
  },
  {
    name: "Cabinet 5 — espace multisensoriel",
    fn: "Détente • Récupération",
    image: "/images/bureau-5.webp",
  },
  {
    name: "Espace d'attente",
    fn: "Transition • Confort",
    image: "/images/salle-attente.webp",
  },
  {
    name: "Espace collectif & coin repas",
    fn: "Pause • Échanges • Convivialité",
    image: "/images/cafetaria.jpg",
  },
  {
    name: "Véranda & showroom",
    fn: "Présentation • Cultures intégrées",
    image: "/images/veranda.webp",
  },
  {
    name: "Patio extérieur",
    fn: "Respiration • Nature",
    image: "/images/patio-jardin-2.jpg",
  },
];

function BlockHeader({
  number,
  title,
  icon: Icon,
}: {
  number: string;
  title: string;
  icon: LucideIcon;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-navy-800 text-gold-400 font-serif text-lg font-semibold flex-shrink-0">
        {number}
      </div>
      <div className="flex items-center gap-2.5">
        <Icon size={20} className="text-gold-500" />
        <h3 className="font-serif text-2xl md:text-3xl font-semibold text-navy-800">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default function LeCentre() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [showAllSpaces, setShowAllSpaces] = useState(false);
  const [openFamily, setOpenFamily] = useState<number | null>(0);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox]);

  return (
    <section
      ref={ref}
      id="espaces"
      className="section-padding bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-navy-800/5 border border-navy-800/10 rounded-full px-4 py-1.5 mb-6">
            <span className="text-navy-800 text-xs font-semibold tracking-[0.2em] uppercase">
              Le centre
            </span>
          </div>
          <h2 className="section-title mb-5">
            Le 203 : 193&nbsp;m² conçus pour accueillir{" "}
            <br className="hidden md:block" />
            plusieurs{" "}
            <span className="text-gold-500">activités professionnelles</span>.
          </h2>
          <p className="section-subtitle mx-auto">
            <span className="md:block">
              Un plateau déjà structuré en cabinets, espaces collectifs et espaces
              de formation,
            </span>
            <span className="md:hidden">{" "}</span>
            <span className="md:block">
              accessible au public et aux personnes à mobilité réduite.
            </span>
          </p>
        </div>

        {/* Bloc 1 — Le plateau */}
        <div
          className={`mb-16 transition-all duration-700 delay-100 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center">
            <BlockHeader number="1" title="Le plateau" icon={Building2} />
          </div>

          {/* Plan — élément dominant, pleine largeur */}
          <div className="mt-10 mx-auto max-w-full lg:max-w-[52rem]">
            <FloorPlan
              showHotspots={false}
              enableZoom={false}
              showLegend={false}
              showStats={false}
              caption=""
            />
          </div>

          {/* Texte explicatif centré */}
          <p className="mt-10 max-w-3xl mx-auto text-center text-navy-700 text-xl md:text-2xl font-light leading-relaxed">
            Un plateau de{" "}
            <span className="text-navy-900 font-medium">193&nbsp;m²</span> déjà
            structuré, accessible PMR, ancien centre médical, immédiatement
            exploitable.
          </p>

          {/* 3 indicateurs clés centrés */}
          <div className="mt-10 max-w-xl mx-auto grid grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: Maximize, value: "193 m²", label: "Surface" },
              { icon: LayoutGrid, value: "12", label: "Espaces" },
              { icon: Accessibility, value: "PMR", label: "Accessible" },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-xl bg-warm-100 border border-warm-200 px-4 py-5 text-center"
              >
                <s.icon size={22} className="text-gold-600 mx-auto mb-2" />
                <div className="font-serif text-lg font-semibold text-navy-800">
                  {s.value}
                </div>
                <div className="text-navy-300 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href="#visite"
              className="btn-secondary group"
            >
              <Map size={18} />
              Explorer le plan détaillé
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* Bloc 2 — Les espaces */}
        <div
          className={`mb-20 transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center">
            <BlockHeader
              number="2"
              title="Les espaces"
              icon={LayoutGrid}
            />
          </div>
          <p className="text-navy-300 text-base mt-4 mb-8 max-w-2xl mx-auto text-center">
            12 espaces distincts, entièrement aménagés et équipés. Cliquez sur
            une photo pour l&apos;agrandir.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {(showAllSpaces
              ? spaces.map((_, i) => i)
              : [0, 2, 1, 3, 7, 10]
            ).map((spaceIndex) => {
              const space = spaces[spaceIndex];
              return (
                <button
                  type="button"
                  key={spaceIndex}
                  onClick={() => setLightbox(spaceIndex)}
                  aria-label={`Agrandir ${space.name}`}
                  className="group relative overflow-hidden rounded-xl aspect-[4/3] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                >
                  <img
                    src={space.image}
                    alt={`${space.name} — Le 203, Avignon-Montfavet`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn size={15} className="text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-white font-serif text-sm md:text-base font-semibold leading-snug drop-shadow-md">
                      {space.name}
                    </div>
                    <div className="text-gold-300 text-[10px] md:text-[11px] font-medium tracking-wide mt-1">
                      {space.fn}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllSpaces((v) => !v)}
              className="btn-secondary group"
            >
              {showAllSpaces ? "Réduire la galerie" : "Voir les 12 espaces"}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>

        {/* Bloc 3 — Les équipements */}
        <div
          className={`mb-12 transition-all duration-700 delay-300 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center">
            <BlockHeader number="3" title="Les équipements" icon={Boxes} />
          </div>
          <p className="text-navy-300 text-base mt-4 mb-8 max-w-3xl mx-auto text-center">
            Le 203 est proposé avec des équipements et installations déjà en place : un investissement déjà réalisé qui permet à l&apos;acquéreur de disposer immédiatement d&apos;un environnement professionnel équipé.
          </p>
          <div className="max-w-3xl mx-auto space-y-3">
            {equipmentFamilies.map((family, i) => (
              <div
                key={family.title}
                className="rounded-xl bg-warm-50 border border-warm-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenFamily(openFamily === i ? null : i)
                  }
                  className="w-full flex items-center justify-between gap-4 p-4 text-left"
                >
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-navy-800">
                      {family.title}
                    </h4>
                    <p className="text-navy-300 text-sm mt-0.5">
                      {family.benefit}
                    </p>
                  </div>
                  {openFamily === i ? (
                    <ChevronUp
                      size={20}
                      className="text-gold-500 flex-shrink-0"
                    />
                  ) : (
                    <ChevronDown
                      size={20}
                      className="text-gold-500 flex-shrink-0"
                    />
                  )}
                </button>
                {openFamily === i && (
                  <div className="px-4 pb-4">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {family.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-navy-700 text-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-navy-300 text-xs max-w-2xl mx-auto">
            Liste indicative, sous réserve de vérification finale de
            l&apos;inventaire. L&apos;inventaire détaillé est communiqué dans le
            dossier d&apos;acquisition.
          </p>
        </div>

        {/* CTA */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a href="#contact-form" className="btn-primary">
            <FileText size={18} />
            Recevoir le dossier d&apos;acquisition
          </a>
          <a href="#visite" className="btn-secondary group">
            <Map size={18} />
            EXPLORER LE 203 EN DÉTAIL
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>

      {/* Lightbox galerie des espaces */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={spaces[lightbox].name}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Fermer"
          >
            <X size={22} className="text-white" />
          </button>
          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={spaces[lightbox].image}
              alt={`${spaces[lightbox].name} — Le 203, Avignon-Montfavet`}
              className="w-full max-h-[78vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-5 text-center">
              <div className="text-white font-serif text-lg md:text-2xl font-semibold">
                {spaces[lightbox].name}
              </div>
              <div className="text-gold-300 text-sm md:text-base mt-1.5">
                {spaces[lightbox].fn}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
