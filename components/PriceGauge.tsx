"use client";

import { Tag, Crosshair, LineChart, Euro, Info } from "lucide-react";

/* ---------- Échelle de la jauge ----------
   La médiane marché (2 073 €/m²) est placée exactement à l'apex de l'arc,
   donc à la verticale du pivot de l'aiguille. L'échelle est symétrique
   autour de cette médiane. */
const MIN = 1100;
const MEDIAN = 2073;
const MAX = 2 * MEDIAN - MIN; // 3046
const LE203 = 1408;

const GREEN_END = 1762; // fin de la zone « prix très attractif »
const AMBER_END = 2 * MEDIAN - GREEN_END; // 2384, fin de la fourchette marché

/* ---------- Géométrie ---------- */
const CX = 410;
const CY = 350;
const R = 262;
const SW = 40;

const COLORS = {
  green: "#4E9B6E",
  gold: "#D4A86A",
  red: "#E15A4C",
  greenText: "#2F7D4F",
  goldText: "#B07D3F",
  redText: "#CF4A3C",
  navy: "#0B1D2E",
  slate: "#7190AC",
};

function angleFor(value: number) {
  const t = (value - MIN) / (MAX - MIN);
  return 180 - t * 180;
}

function polar(angleDeg: number, radius: number) {
  const a = (angleDeg * Math.PI) / 180;
  return {
    x: CX + radius * Math.cos(a),
    y: CY - radius * Math.sin(a),
  };
}

function bandPath(from: number, to: number) {
  const p1 = polar(angleFor(from), R);
  const p2 = polar(angleFor(to), R);
  return `M ${p1.x.toFixed(2)} ${p1.y.toFixed(2)} A ${R} ${R} 0 0 1 ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`;
}

const NEEDLE_ANGLE = angleFor(LE203);
const NEEDLE_TIP = polar(NEEDLE_ANGLE, R - 24);
const NEEDLE_BACK_A = polar(NEEDLE_ANGLE + 90, 9);
const NEEDLE_BACK_B = polar(NEEDLE_ANGLE - 90, 9);


const cards = [
  {
    icon: Tag,
    label: "LE 203",
    value: "1 408 €/m²",
    caption: "Net vendeur",
    badge: "Très attractif",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    valueClass: "text-navy-800",
    iconClass: "text-emerald-600",
  },
  {
    icon: Crosshair,
    label: "MARCHÉ (RÉFÉRENCE)",
    value: "2 073 €/m²",
    caption: "Prix médian constaté",
    badge: "Prix de marché",
    badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
    valueClass: "text-navy-800",
    iconClass: "text-navy-400",
  },
  {
    icon: LineChart,
    label: "POSITIONNEMENT",
    value: "-32 %",
    caption: "vs. référence marché",
    badge: "Avantage significatif",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    valueClass: "text-emerald-600",
    iconClass: "text-rose-500",
  },
  {
    icon: Euro,
    label: "ÉCART EN VALEUR",
    value: "-128 000 €",
    caption: "d'économie vs. marché",
    badge: "Sur 193 m²",
    badgeClass: "bg-warm-100 text-navy-600 border-warm-300",
    valueClass: "text-emerald-600",
    iconClass: "text-navy-400",
  },
];

export default function PriceGauge() {
  return (
    <div className="rounded-2xl bg-warm-50 border border-warm-200 p-6 md:p-10 shadow-sm">
      {/* Titre */}
      <div className="text-center mb-2">
        <h3 className="font-serif text-2xl md:text-3xl font-semibold text-navy-800">
          Un prix au m² positionné sous le marché
        </h3>
        <p className="text-navy-300 text-sm md:text-base mt-2">
          Comparaison basée sur les transactions récentes de locaux
          professionnels similaires à Avignon
        </p>
      </div>

      {/* Jauge */}
      <svg
        viewBox="0 0 820 380"
        className="w-full h-auto"
        role="img"
        aria-label="Jauge de positionnement : LE 203 à 1 408 €/m² net vendeur, contre une référence marché médiane de 2 073 €/m², soit -32 %."
      >
        {/* Intitulés de zones */}
        <text
          x={CX}
          y={26}
          textAnchor="middle"
          fontSize="15"
          fontWeight="700"
          fill={COLORS.goldText}
          letterSpacing="0.5"
        >
          PRIX DE MARCHÉ
        </text>
        <text x={CX} y={46} textAnchor="middle" fontSize="13" fill={COLORS.slate}>
          Fourchette habituelle
        </text>

        <text
          x={160}
          y={116}
          textAnchor="middle"
          fontSize="15"
          fontWeight="700"
          fill={COLORS.greenText}
          letterSpacing="0.5"
        >
          PRIX TRÈS ATTRACTIF
        </text>
        <text x={160} y={136} textAnchor="middle" fontSize="13" fill={COLORS.slate}>
          En dessous du marché
        </text>

        <text
          x={662}
          y={116}
          textAnchor="middle"
          fontSize="15"
          fontWeight="700"
          fill={COLORS.redText}
          letterSpacing="0.5"
        >
          PRIX ÉLEVÉ
        </text>
        <text x={662} y={136} textAnchor="middle" fontSize="13" fill={COLORS.slate}>
          Au-dessus du marché
        </text>

        {/* Bandes de l'arc */}
        <g fill="none" strokeWidth={SW} strokeLinecap="butt">
          <path d={bandPath(MIN, GREEN_END)} stroke={COLORS.green} />
          <path d={bandPath(GREEN_END, AMBER_END)} stroke={COLORS.gold} />
          <path d={bandPath(AMBER_END, MAX)} stroke={COLORS.red} />
        </g>

        {/* Repère médiane marché à l'apex, à la verticale du pivot */}
        <line
          x1={CX}
          y1={CY - R - SW / 2}
          x2={CX}
          y2={CY - R + SW / 2}
          stroke={COLORS.navy}
          strokeWidth="4.5"
        />
        <line
          x1={CX}
          y1={CY - R + SW / 2 + 2}
          x2={CX}
          y2={250}
          stroke={COLORS.navy}
          strokeWidth="1.5"
          strokeOpacity="0.55"
        />

        {/* Aiguille — pivot au centre exact de l'arc */}
        <polygon
          points={`${NEEDLE_TIP.x.toFixed(2)},${NEEDLE_TIP.y.toFixed(2)} ${NEEDLE_BACK_A.x.toFixed(2)},${NEEDLE_BACK_A.y.toFixed(2)} ${NEEDLE_BACK_B.x.toFixed(2)},${NEEDLE_BACK_B.y.toFixed(2)}`}
          fill={COLORS.navy}
        />
        <circle cx={CX} cy={CY} r={13} fill={COLORS.navy} />
        <circle cx={CX} cy={CY} r={6} fill="#FFFFFF" />

        {/* Repère LE 203 */}
        <circle cx={NEEDLE_TIP.x} cy={NEEDLE_TIP.y} r={5} fill={COLORS.navy} />
        <line
          x1={NEEDLE_TIP.x}
          y1={NEEDLE_TIP.y}
          x2={NEEDLE_TIP.x}
          y2={282}
          stroke={COLORS.navy}
          strokeWidth="1.5"
          strokeOpacity="0.55"
        />
        <text
          x={NEEDLE_TIP.x}
          y={300}
          textAnchor="middle"
          fontSize="23"
          fontWeight="700"
          fill={COLORS.greenText}
        >
          1 408 €/m²
        </text>
        <rect
          x={NEEDLE_TIP.x - 42}
          y={314}
          width="84"
          height="23"
          rx="5"
          fill={COLORS.greenText}
        />
        <text
          x={NEEDLE_TIP.x}
          y={330}
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fill="#FFFFFF"
          letterSpacing="0.5"
        >
          LE 203
        </text>
        <text
          x={NEEDLE_TIP.x}
          y={356}
          textAnchor="middle"
          fontSize="13"
          fill={COLORS.slate}
        >
          hors honoraires
        </text>

        {/* Repère médiane marché */}
        <text
          x={CX}
          y={278}
          textAnchor="middle"
          fontSize="23"
          fontWeight="700"
          fill={COLORS.navy}
        >
          2 073 €/m²
        </text>
        <text x={CX} y={298} textAnchor="middle" fontSize="13" fill={COLORS.slate}>
          Référence marché
        </text>
        <text x={CX} y={315} textAnchor="middle" fontSize="13" fill={COLORS.slate}>
          (médiane)
        </text>

        {/* Repère haut de marché */}
        <text
          x={662}
          y={310}
          textAnchor="middle"
          fontSize="19"
          fontWeight="700"
          fill={COLORS.redText}
        >
          2 700 €/m²
        </text>
        <text x={662} y={330} textAnchor="middle" fontSize="13" fill={COLORS.slate}>
          et plus
        </text>
      </svg>

      {/* Cartes de synthèse */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {cards.map((c) => (
          <div
            key={c.label}
            className="rounded-xl bg-white border border-warm-200 px-4 py-5 text-center"
          >
            <div className="flex justify-center mb-3">
              <c.icon size={22} className={c.iconClass} />
            </div>
            <p className="text-navy-300 text-[10px] font-bold tracking-[0.14em] uppercase mb-2">
              {c.label}
            </p>
            <p className={`font-serif text-xl md:text-2xl font-bold mb-1 ${c.valueClass}`}>
              {c.value}
            </p>
            <p className="text-navy-300 text-xs mb-3">{c.caption}</p>
            <span
              className={`inline-block rounded-md border px-2.5 py-1 text-[11px] font-semibold ${c.badgeClass}`}
            >
              {c.badge}
            </span>
          </div>
        ))}
      </div>

      {/* Source */}
      <div className="mt-5 rounded-xl bg-white border border-warm-200 px-4 py-4 flex items-start gap-3">
        <Info size={16} className="text-navy-300 flex-shrink-0 mt-0.5" />
        <p className="text-navy-300 text-xs leading-relaxed">
          Comparaison réalisée à partir de transactions de locaux
          professionnels similaires à Avignon (source&nbsp;: Cadastre.com
          &ndash; 109 transactions sur les 12 derniers mois).
        </p>
      </div>
    </div>
  );
}
