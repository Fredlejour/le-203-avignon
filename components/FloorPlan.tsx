"use client";

/**
 * FloorPlan — Composant de référence unique du plan du 203, Avignon-Montfavet.
 *
 * Source de l'image : Assets/images/Plan final v2- centre neuro forma.webp
 * Servie depuis     : public/images/plan-final-v2.webp  (=> /images/plan-final-v2.webp)
 *
 * Toute évolution du plan (image, espaces, positions, légende, descriptions)
 * doit être faite ICI. Les sections du site consomment ce composant via props.
 *
 * Architecture pensée pour le long terme :
 *  - Données centralisées (FLOOR_PLAN_SRC, FLOOR_PLAN_SPACES)
 *  - Points interactifs (hotspots) calibrés en pourcentage => responsive
 *  - Zoom interactif (molette / boutons / glisser) dans la lightbox plein écran
 *  - Légende élégante synchronisée avec les points
 *  - Variantes d'affichage par props (full / preview / compact)
 */

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type WheelEvent as ReactWheelEvent,
} from "react";
import {
  X,
  ZoomIn,
  ZoomOut,
  Maximize2,
  RotateCcw,
  Building2,
  LayoutGrid,
  ShieldCheck,
  MapPin,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  DONNÉES CENTRALISÉES — modifier ici pour faire évoluer le plan      */
/* ------------------------------------------------------------------ */

/** Chemin web de l'image officielle du plan. */
export const FLOOR_PLAN_SRC = "/images/plan-final-v2.webp";

/** Légende / source affichée sous le plan. */
export const FLOOR_PLAN_CAPTION =
  "Plan — Le 203 · Centre professionnel pluridisciplinaire · Avignon-Montfavet";

export interface FloorPlanSpace {
  /** Identifiant stable (utilisé pour le ciblage depuis les autres sections). */
  id: string;
  /** Nom marketing affiché en priorité. */
  name: string;
  /** Libellé technique réel inscrit sur le plan. */
  planLabel: string;
  /** Surface estimée. */
  surface?: string;
  /** Courte description premium. */
  description?: string;
  /** Position du point sur l'image, en pourcentage (responsive). */
  top: string;
  left: string;
}

/**
 * Les 10 espaces principaux + leur position calibrée sur le plan officiel.
 * top/left exprimés en % par rapport à l'image (origine haut-gauche).
 */
export const FLOOR_PLAN_SPACES: FloorPlanSpace[] = [
  {
    id: "salle-formation",
    name: "Salle de formation & conférences",
    planLabel: "Salle de formation & conférences — 15 pers.",
    surface: "≈ 35 m²",
    description:
      "Grande salle équipée pour la formation, les conférences et les ateliers collectifs.",
    top: "14%",
    left: "70%",
  },
  {
    id: "cabinet-4",
    name: "Cabinet 4",
    planLabel: "Bureau 4",
    surface: "≈ 16 m²",
    description:
      "Cabinet professionnel équipé, utilisable en consultation ou en bureau.",
    top: "12%",
    left: "41%",
  },
  {
    id: "espace-collectif",
    name: "Espace collectif & coin repas",
    planLabel: "Détente café-repas",
    surface: "≈ 15 m²",
    description:
      "Espace commun de pause et de convivialité partagé par les professionnels du centre.",
    top: "15%",
    left: "53%",
  },
  {
    id: "patio",
    name: "Patio extérieur",
    planLabel: "Patio extérieur — sol naturel",
    surface: "≈ 20 m²",
    description:
      "Patio extérieur végétalisé, prolongement calme des espaces intérieurs.",
    top: "13%",
    left: "25%",
  },
  {
    id: "cabinet-5",
    name: "Cabinet 5 — espace multisensoriel",
    planLabel: "Salle de détente & régénération — Bureau 5",
    surface: "≈ 18 m²",
    description:
      "Cabinet équipé pour les pratiques de détente, de récupération et de bien-être.",
    top: "38%",
    left: "50%",
  },
  {
    id: "salle-polyvalente",
    name: "Salle polyvalente",
    planLabel: "Salle conférences & formations + espace zen — ~15 pers.",
    surface: "≈ 35 m²",
    description:
      "Grand espace modulable pour réunions, ateliers, séminaires ou pratiques collectives.",
    top: "58%",
    left: "9%",
  },
  {
    id: "espace-showroom",
    name: "Espace showroom & cultures intégrées",
    planLabel: "Espace showroom — cultures indoor",
    surface: "≈ 25 m²",
    description:
      "Espace de présentation accueillant les systèmes de cultures intégrés et les murs végétalisés.",
    top: "57%",
    left: "27%",
  },
  {
    id: "cabinet-3",
    name: "Cabinet 3",
    planLabel: "Bureau 3",
    surface: "≈ 18 m²",
    description:
      "Cabinet professionnel équipé, adapté aux consultations et aux entretiens.",
    top: "85%",
    left: "27%",
  },
  {
    id: "cabinet-2",
    name: "Cabinet 2",
    planLabel: "Bureau 2",
    surface: "≈ 22 m²",
    description:
      "Cabinet professionnel équipé, le plus spacieux de l'ensemble des cabinets.",
    top: "82%",
    left: "45%",
  },
  {
    id: "cabinet-1",
    name: "Cabinet 1",
    planLabel: "Bureau 1",
    surface: "≈ 18 m²",
    description:
      "Cabinet professionnel équipé, situé à proximité immédiate de l'accueil.",
    top: "80%",
    left: "64%",
  },
];

/** Statistiques clés affichées sous le plan (variante full). */
const FLOOR_PLAN_STATS = [
  { icon: Building2, value: "193 m²", label: "Surface exploitable" },
  { icon: LayoutGrid, value: "10 espaces", label: "Espaces principaux" },
  { icon: ShieldCheck, value: "ERP / PMR", label: "Accessible au public" },
];

/* ------------------------------------------------------------------ */
/*  PROPS                                                              */
/* ------------------------------------------------------------------ */

export interface FloorPlanProps {
  /** Affiche les points interactifs sur le plan en ligne. Défaut: true. */
  showHotspots?: boolean;
  /** Active le zoom plein écran au clic (lightbox). Défaut: true. */
  enableZoom?: boolean;
  /** Affiche la légende des 10 espaces. Défaut: true. */
  showLegend?: boolean;
  /** Affiche la bande de statistiques sous le plan. Défaut: false. */
  showStats?: boolean;
  /**
   * Met en avant certains espaces (les autres sont atténués).
   * Utile pour relier un scénario à ses zones.
   */
  highlightIds?: string[];
  /** Légende personnalisée sous le plan (sinon FLOOR_PLAN_CAPTION). */
  caption?: string;
  /** Variante visuelle du cadre. */
  theme?: "light" | "dark";
  /** Classe additionnelle sur le conteneur racine. */
  className?: string;
}

/* ------------------------------------------------------------------ */
/*  COMPOSANT                                                          */
/* ------------------------------------------------------------------ */

export default function FloorPlan({
  showHotspots = true,
  enableZoom = true,
  showLegend = true,
  showStats = false,
  highlightIds,
  caption = FLOOR_PLAN_CAPTION,
  theme = "light",
  className = "",
}: FloorPlanProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const highlightSet = useMemo(
    () => (highlightIds && highlightIds.length ? new Set(highlightIds) : null),
    [highlightIds]
  );

  const openLightbox = useCallback((id?: string) => {
    if (id) setActiveId(id);
    setLightboxOpen(true);
  }, []);
  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const isDark = theme === "dark";

  return (
    <div className={className}>
      {/* ---- Plan inline ---- */}
      <div
        className={`relative rounded-xl border shadow-lg overflow-hidden group ${
          enableZoom ? "cursor-zoom-in" : ""
        } ${
          isDark
            ? "bg-navy-900 border-navy-700"
            : "bg-warm-50 border-warm-200"
        }`}
        onClick={enableZoom ? () => openLightbox() : undefined}
        role={enableZoom ? "button" : undefined}
        tabIndex={enableZoom ? 0 : undefined}
        aria-label={enableZoom ? "Agrandir le plan des locaux" : undefined}
        onKeyDown={
          enableZoom
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox();
                }
              }
            : undefined
        }
      >
        {/* Hint zoom */}
        {enableZoom && (
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-lg px-2.5 py-1.5 shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <ZoomIn size={16} className="text-navy-600" />
            <span className="text-navy-700 text-xs font-medium">Agrandir</span>
          </div>
        )}

        {/* Image HD */}
        <img
          src={FLOOR_PLAN_SRC}
          alt="Plan des locaux du 203 à Avignon-Montfavet — 193 m², 10 espaces principaux"
          loading="lazy"
          className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.01]"
        />

        {/* Hotspots */}
        {showHotspots && (
          <div className="absolute inset-0">
            {FLOOR_PLAN_SPACES.map((spot) => {
              const dimmed = highlightSet ? !highlightSet.has(spot.id) : false;
              return (
                <div
                  key={spot.id}
                  className={`absolute transition-opacity duration-300 ${
                    dimmed ? "opacity-30" : "opacity-100"
                  }`}
                  style={{ top: spot.top, left: spot.left }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveId(activeId === spot.id ? null : spot.id);
                  }}
                  onMouseEnter={() => setActiveId(spot.id)}
                  onMouseLeave={() => setActiveId(null)}
                  role="button"
                  tabIndex={0}
                  aria-label={spot.name}
                >
                  {/* Point pulsé */}
                  <div className="w-4 h-4 -ml-2 -mt-2 relative">
                    <div className="absolute inset-0 bg-gold-500/30 rounded-full animate-ping" />
                    <div className="absolute inset-0.5 bg-gold-500 rounded-full border-2 border-white shadow-md" />
                  </div>

                  {/* Tooltip */}
                  {activeId === spot.id && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-20 pointer-events-none">
                      <div className="bg-navy-800 text-white rounded-lg px-3 py-2 shadow-xl w-52 max-w-[60vw] text-left">
                        <div className="font-semibold text-xs leading-snug">
                          {spot.name}
                        </div>
                        <div className="text-gold-400 text-[11px] mt-0.5">
                          {spot.planLabel}
                        </div>
                        {spot.surface && (
                          <div className="text-white/60 text-[11px] mt-0.5">
                            {spot.surface}
                          </div>
                        )}
                      </div>
                      <div className="w-2 h-2 bg-navy-800 rotate-45 mx-auto -mt-1" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Caption */}
      {caption && (
        <p
          className={`mt-3 text-center text-xs tracking-wide ${
            isDark ? "text-navy-100/70" : "text-navy-300"
          }`}
        >
          {caption}
        </p>
      )}

      {/* ---- Légende ---- */}
      {showLegend && (
        <div className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2">
          {FLOOR_PLAN_SPACES.map((spot) => {
            const dimmed = highlightSet ? !highlightSet.has(spot.id) : false;
            return (
              <button
                key={spot.id}
                type="button"
                onMouseEnter={() => setActiveId(spot.id)}
                onMouseLeave={() => setActiveId(null)}
                onClick={() => openLightbox(spot.id)}
                className={`flex items-start gap-3 text-left rounded-lg px-3 py-2 transition-all ${
                  activeId === spot.id
                    ? isDark
                      ? "bg-white/10"
                      : "bg-gold-500/10"
                    : "hover:bg-black/[0.03]"
                } ${dimmed ? "opacity-40" : "opacity-100"}`}
              >
                <span className="mt-1 w-2.5 h-2.5 rounded-full bg-gold-500 border border-white shadow flex-shrink-0" />
                <span>
                  <span
                    className={`block text-sm font-semibold leading-tight ${
                      isDark ? "text-white" : "text-navy-800"
                    }`}
                  >
                    {spot.name}
                  </span>
                  <span
                    className={`block text-[11px] leading-tight mt-0.5 ${
                      isDark ? "text-navy-100/60" : "text-navy-300"
                    }`}
                  >
                    {spot.planLabel}
                    {spot.surface ? ` · ${spot.surface}` : ""}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* ---- Statistiques ---- */}
      {showStats && (
        <div className="grid grid-cols-3 gap-4 mt-6">
          {FLOOR_PLAN_STATS.map((stat, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 border ${
                isDark
                  ? "bg-white/5 border-white/10"
                  : "bg-warm-50 border-warm-200"
              }`}
            >
              <div className="w-9 h-9 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                <stat.icon size={18} className="text-gold-600" />
              </div>
              <div>
                <div
                  className={`font-serif font-semibold text-sm ${
                    isDark ? "text-white" : "text-navy-800"
                  }`}
                >
                  {stat.value}
                </div>
                <div
                  className={`text-xs ${
                    isDark ? "text-navy-100/60" : "text-navy-300"
                  }`}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ---- Lightbox plein écran avec zoom ---- */}
      {enableZoom && lightboxOpen && (
        <FloorPlanLightbox
          activeId={activeId}
          setActiveId={setActiveId}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  LIGHTBOX — zoom interactif (molette / boutons / glisser)           */
/* ------------------------------------------------------------------ */

interface LightboxProps {
  activeId: string | null;
  setActiveId: (id: string | null) => void;
  onClose: () => void;
}

const MIN_SCALE = 1;
const MAX_SCALE = 4;

function FloorPlanLightbox({ activeId, setActiveId, onClose }: LightboxProps) {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragRef = useRef<{ x: number; y: number; ox: number; oy: number } | null>(
    null
  );
  const [dragging, setDragging] = useState(false);

  const clampScale = (s: number) => Math.min(MAX_SCALE, Math.max(MIN_SCALE, s));

  const reset = useCallback(() => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  }, []);

  const zoomBy = useCallback((delta: number) => {
    setScale((prev) => {
      const next = clampScale(prev + delta);
      if (next === 1) setOffset({ x: 0, y: 0 });
      return next;
    });
  }, []);

  // Fermeture au clavier + verrou du scroll body
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "+" || e.key === "=") zoomBy(0.3);
      if (e.key === "-") zoomBy(-0.3);
      if (e.key === "0") reset();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, zoomBy, reset]);

  const onWheel = (e: ReactWheelEvent) => {
    e.preventDefault();
    zoomBy(e.deltaY > 0 ? -0.25 : 0.25);
  };

  const onPointerDown = (e: ReactPointerEvent) => {
    if (scale <= 1) return;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    dragRef.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y };
    setDragging(true);
  };

  const onPointerMove = (e: ReactPointerEvent) => {
    if (!dragRef.current) return;
    const dx = e.clientX - dragRef.current.x;
    const dy = e.clientY - dragRef.current.y;
    setOffset({ x: dragRef.current.ox + dx, y: dragRef.current.oy + dy });
  };

  const endDrag = () => {
    dragRef.current = null;
    setDragging(false);
  };

  const active = FLOOR_PLAN_SPACES.find((s) => s.id === activeId) || null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-navy-900/95 backdrop-blur-sm flex flex-col"
      onClick={onClose}
    >
      {/* Barre d'outils */}
      <div
        className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 text-white/60 text-xs">
          <MapPin size={14} className="text-gold-400" />
          <span className="hidden sm:inline">
            Plan des locaux — Le 203, Avignon-Montfavet
          </span>
          <span className="sm:hidden">Plan des locaux</span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            onClick={() => zoomBy(-0.4)}
            aria-label="Dézoomer"
          >
            <ZoomOut size={18} className="text-white" />
          </button>
          <span className="text-white/70 text-xs w-10 text-center tabular-nums">
            {Math.round(scale * 100)}%
          </span>
          <button
            className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            onClick={() => zoomBy(0.4)}
            aria-label="Zoomer"
          >
            <ZoomIn size={18} className="text-white" />
          </button>
          <button
            className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            onClick={reset}
            aria-label="Réinitialiser le zoom"
          >
            <RotateCcw size={16} className="text-white" />
          </button>
          <button
            className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors ml-1"
            onClick={onClose}
            aria-label="Fermer"
          >
            <X size={20} className="text-white" />
          </button>
        </div>
      </div>

      {/* Zone image zoomable */}
      <div
        className="flex-1 overflow-hidden flex items-center justify-center select-none"
        onClick={(e) => e.stopPropagation()}
        onWheel={onWheel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        style={{ cursor: scale > 1 ? (dragging ? "grabbing" : "grab") : "default" }}
      >
        <div
          className="relative"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
            transition: dragging ? "none" : "transform 0.2s ease-out",
          }}
        >
          <img
            src={FLOOR_PLAN_SRC}
            alt="Plan des locaux du 203 à Avignon-Montfavet — vue plein écran"
            className="max-w-[92vw] max-h-[78vh] w-auto h-auto rounded-lg shadow-2xl"
            draggable={false}
          />

          {/* Hotspots dans la lightbox */}
          <div className="absolute inset-0">
            {FLOOR_PLAN_SPACES.map((spot) => (
              <button
                key={spot.id}
                type="button"
                className="absolute"
                style={{ top: spot.top, left: spot.left }}
                onClick={() =>
                  setActiveId(activeId === spot.id ? null : spot.id)
                }
                aria-label={spot.name}
              >
                <span className="block w-5 h-5 -ml-2.5 -mt-2.5 relative">
                  <span className="absolute inset-0 bg-gold-500/30 rounded-full animate-ping" />
                  <span
                    className={`absolute inset-0.5 rounded-full border-2 border-white shadow-lg ${
                      activeId === spot.id ? "bg-white" : "bg-gold-500"
                    }`}
                  />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Panneau d'information espace actif */}
      <div
        className="px-4 md:px-6 py-3 border-t border-white/10 min-h-[64px] flex items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {active ? (
          <div className="flex items-start gap-3">
            <span className="mt-1 w-2.5 h-2.5 rounded-full bg-gold-500 border border-white flex-shrink-0" />
            <div>
              <div className="text-white font-serif font-semibold text-sm md:text-base">
                {active.name}
                {active.surface && (
                  <span className="text-gold-400 font-sans font-normal text-xs ml-2">
                    {active.surface}
                  </span>
                )}
              </div>
              <div className="text-white/50 text-xs mt-0.5">
                {active.planLabel}
              </div>
              {active.description && (
                <div className="text-white/70 text-xs mt-1 max-w-2xl">
                  {active.description}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-white/40 text-xs">
            <Maximize2 size={14} />
            Molette ou boutons pour zoomer · cliquez sur un point doré pour
            découvrir un espace
          </div>
        )}
      </div>
    </div>
  );
}
