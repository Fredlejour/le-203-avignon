import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-YGP1Z9PRPV";

export const metadata: Metadata = {
  metadataBase: new URL("https://le-203-avignon.vercel.app"),
  title: "Le 203 — Centre professionnel pluridisciplinaire à vendre",
  description:
    "Achetez un local professionnel de 193 m² déjà aménagé et équipé à Avignon-Montfavet. Murs, équipements, modèle économique et structure juridique existante.",
  keywords:
    "Le 203, locaux professionnels Avignon, local commercial Montfavet, 193 m², bureaux à vendre Avignon, centre pluridisciplinaire, Avignon-Montfavet",
  openGraph: {
    title: "Le 203 — Centre professionnel pluridisciplinaire à vendre",
    description:
      "193 m² professionnels aménagés et équipés à Avignon-Montfavet. Murs, équipements, modèle économique et structure juridique existante.",
    url: "https://le-203-avignon.vercel.app",
    siteName: "Le 203",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/devanture.webp",
        width: 1729,
        height: 910,
        alt: "Le 203 — Centre professionnel pluridisciplinaire à Avignon-Montfavet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Le 203 — Centre professionnel pluridisciplinaire à vendre",
    description:
      "193 m² professionnels aménagés et équipés à Avignon-Montfavet. Murs, équipements, modèle économique et structure juridique existante.",
    images: ["/images/devanture.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "S7ZRsc_rOWU3SkM_VmcxTfq6ri-gylArkquqgjoYIJg",
  },
  alternates: {
    canonical: "https://le-203-avignon.vercel.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  name: "Le 203 — Centre professionnel pluridisciplinaire à vendre",
  description:
    "Achetez un local professionnel de 193 m² déjà aménagé et équipé à Avignon-Montfavet. Murs, équipements, modèle économique et structure juridique existante.",
  url: "https://le-203-avignon.vercel.app",
  image: "/images/devanture.webp",
  address: {
    "@type": "PostalAddress",
    streetAddress: "203 Cours Cardinal Bertrand de Montfavet",
    addressLocality: "Avignon",
    addressRegion: "Provence-Alpes-Côte d'Azur",
    postalCode: "84140",
    addressCountry: "FR",
  },
  floorSize: {
    "@type": "QuantitativeValue",
    value: 193,
    unitCode: "MTK",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    price: "271660",
    availability: "https://schema.org/InStock",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        <Analytics />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
