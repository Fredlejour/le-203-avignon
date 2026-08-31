"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, X } from "lucide-react";

const legalText = `MENTIONS LÉGALES

Éditeur du site

Le présent site est édité par :

Lejour Consulting
Représenté par Frédéric Lejour
Kirchstrasse 37
55218 Ingelheim am Rhein
Allemagne

Email : frederic.lejour@lejourconsulting.com
Téléphone : +33 6 52 64 68 90

Activité

Lejour Consulting exerce une activité de conseil, accompagnement commercial et transaction immobilière.

Informations réglementaires

Titulaire du récépissé de Libre Prestation de Services immobilier en France n° LPS75012025000000015 délivré par la CCI Paris Île-de-France, valable jusqu'au 22/09/2026.

Titulaire de la Carte Professionnelle Européenne d'Agent Immobilier n° 05-7511-z2T4 attribuée le 14/07/2021 par l'Union Européenne, valable jusqu'au 12/01/2026.

Titulaire d'une licence de transaction immobilière allemande délivrée le 10/03/2021 par la Stadtverwaltung Ingelheim am Rhein.

Assurance professionnelle

Lejour Consulting est couvert par AXA Assurance au titre des risques professionnels liés à l'activité immobilière, contrat n° 60242463490/5M.

Responsable de publication

Frédéric Lejour.

Propriété intellectuelle

Toute reproduction, diffusion ou utilisation des contenus du site sans autorisation préalable est interdite.

Responsabilité

Les informations présentées sur ce site sont fournies à titre informatif et ne constituent pas une offre contractuelle définitive.`;

const privacyText = `POLITIQUE DE CONFIDENTIALITÉ

Collecte des données

Les données personnelles collectées via ce site peuvent inclure : nom, prénom, adresse email, numéro de téléphone, société et message.

Finalité

Ces données sont utilisées uniquement pour répondre aux demandes de contact, transmettre le dossier d'acquisition, organiser une visite ou assurer le suivi commercial lié au projet Le 203 à Avignon-Montfavet.

Destinataire

Les données sont destinées exclusivement à Lejour Consulting. Elles ne sont ni vendues, ni louées, ni transmises à des tiers sans consentement préalable, sauf obligation légale.

Durée de conservation

Les données sont conservées pendant une durée maximale de 3 ans à compter du dernier échange.

Droits des utilisateurs

Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition concernant vos données personnelles.

Pour exercer ces droits, vous pouvez écrire à :

frederic.lejour@lejourconsulting.com

Cookies

Le site peut utiliser des cookies techniques nécessaires à son bon fonctionnement.`;

export default function Footer() {
  const [modalContent, setModalContent] = useState<string | null>(null);

  return (
    <footer className="bg-navy-900 text-white/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16 pb-32 lg:pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-sm bg-gold-500 flex items-center justify-center font-serif font-bold text-sm text-white">
                203
              </div>
              <div>
                <div className="font-serif font-semibold text-white text-sm tracking-wide">
                  LE 203
                </div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-white/40">
                  Avignon-Montfavet
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/40 max-w-xs">
              Le 203.<br />
              Centre professionnel<br />
              pluridisciplinaire à vendre.<br />
              193 m² aménagés et équipés.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Proposition", href: "#proposition" },
                { label: "En bref", href: "#en-20-secondes" },
                { label: "Les espaces", href: "#espaces" },
                { label: "Modèle", href: "#modele" },
                { label: "Acquisition", href: "#reprise-sci" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm hover:text-gold-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Ressources
            </h4>
            <ul className="space-y-2.5">
              {["Dossier d'acquisition", "Inventaire des équipements", "Plans des locaux", "FAQ"].map((text) => (
                <li key={text}>
                  <a href="#contact-form" className="text-sm hover:text-gold-400 transition-colors">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin size={14} className="text-gold-500 mt-0.5 shrink-0" />
                <span>
                  203 Cours Cardinal Bertrand de Montfavet
                  <br />
                  84140 Avignon
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone size={14} className="text-gold-500 shrink-0" />
                <a href="tel:+33652646890" className="hover:text-gold-400 transition-colors">
                  +33 6 52 64 68 90
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail size={14} className="text-gold-500 shrink-0" />
                <a href="mailto:frederic.lejour@lejourconsulting.com" className="hover:text-gold-400 transition-colors">
                  frederic.lejour@lejourconsulting.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Lejour Consulting. Tous droits réservés.
          </p>

          <div className="flex items-center gap-6 text-xs text-white/30">
            <button
              type="button"
              onClick={() => setModalContent(legalText)}
              className="hover:text-white/50 transition-colors"
            >
              Mentions légales
            </button>

            <button
              type="button"
              onClick={() => setModalContent(privacyText)}
              className="hover:text-white/50 transition-colors"
            >
              Politique de confidentialité
            </button>
          </div>
        </div>
      </div>

      {modalContent && (
        <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center px-4">
          <div className="bg-white text-navy-900 max-w-3xl w-full max-h-[80vh] overflow-y-auto rounded-lg shadow-2xl p-8 relative">
            <button
              type="button"
              onClick={() => setModalContent(null)}
              className="absolute top-4 right-4 text-navy-500 hover:text-navy-900"
              aria-label="Fermer"
            >
              <X size={24} />
            </button>

            <div className="whitespace-pre-line text-sm leading-relaxed pr-6">
              {modalContent}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}