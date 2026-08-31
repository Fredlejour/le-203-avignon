/**
 * Couche de tracking GA4 centralisée pour Le 203.
 *
 * La balise GA4 (G-T3PYCM0WTS) est déjà chargée une seule fois dans
 * app/layout.tsx. Ce module ne charge AUCUN script supplémentaire :
 * il se contente d'envoyer des événements via window.gtag lorsqu'il existe.
 *
 * Règle absolue : aucune donnée personnelle (nom, prénom, email, téléphone,
 * message, date saisie) ne doit être passée en paramètre.
 */

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

export type TrackEventParams = Record<string, string | number | boolean>;

export function trackEvent(
  eventName: string,
  parameters: TrackEventParams = {}
): void {
  if (typeof window === "undefined") return;

  const gtag = window.gtag;
  if (typeof gtag !== "function") return;

  try {
    gtag("event", eventName, parameters);
  } catch {
    // Le tracking ne doit jamais casser l'expérience utilisateur.
  }
}
