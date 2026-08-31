"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Profondeur de lecture de la page.
 *
 * GA4 Enhanced Measurement mesure déjà nativement le seuil 90 %
 * (événement natif "scroll"). On ne le redéclare donc pas ici pour éviter
 * un tracking redondant. Seuls les paliers intermédiaires manquants
 * (25 / 50 / 75 %) sont ajoutés, chacun envoyé une seule fois par
 * chargement de page.
 *
 * Composant purement technique : il ne rend aucun élément visible.
 */
const THRESHOLDS = [25, 50, 75] as const;

export default function ScrollTracker() {
  useEffect(() => {
    const sent = new Set<number>();

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const percent = (window.scrollY / scrollable) * 100;

      for (const threshold of THRESHOLDS) {
        if (percent >= threshold && !sent.has(threshold)) {
          sent.add(threshold);
          trackEvent(`scroll_${threshold}`, { percent_scrolled: threshold });
        }
      }

      if (sent.size === THRESHOLDS.length) {
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
