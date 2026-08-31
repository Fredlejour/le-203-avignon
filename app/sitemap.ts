import type { MetadataRoute } from "next";

/**
 * Domaine de production du site Le 203.
 * Doit rester aligné avec metadataBase / canonical / openGraph.url dans app/layout.tsx.
 */
const SITE_URL = "https://le-203-avignon.vercel.app";

/**
 * Sitemap — route générée automatiquement par Next.js sur /sitemap.xml
 *
 * Le site est actuellement une landing page unique (app/page.tsx).
 * Aucune autre URL n'est déclarée pour éviter de soumettre des pages inexistantes.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
