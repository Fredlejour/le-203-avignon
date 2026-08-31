import type { MetadataRoute } from "next";

/**
 * Domaine de production du site Le 203.
 * Doit rester aligné avec metadataBase / canonical / openGraph.url dans app/layout.tsx.
 */
const SITE_URL = "https://le-203-avignon.vercel.app";

/**
 * robots.txt — route générée automatiquement par Next.js sur /robots.txt
 *
 * Exploration publique totalement ouverte : aucune page utile n'est bloquée.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
