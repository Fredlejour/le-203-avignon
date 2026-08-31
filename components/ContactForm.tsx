"use client";

import { useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";
import {
  FileText,
  Calendar,
  Send,
  CheckCircle2,
  User,
  Mail,
  Phone,
  MessageSquare,
  Clock,
  CalendarDays,
} from "lucide-react";

type FormType = "dossier" | "visite";

const profiles = [
  "Investisseur",
  "Professionnel santé / bien-être",
  "Organisme de formation",
  "Entrepreneur",
  "Repreneur de structure",
  "Autre",
];

const creneaux = [
  "Matin (9h–12h)",
  "Début d'après-midi (14h–16h)",
  "Fin d'après-midi (16h–18h)",
  "Soirée (18h–20h)",
];

export default function ContactForm() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);
  const [activeForm, setActiveForm] = useState<FormType>("dossier");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  // Form state — dossier
  const [dossierData, setDossierData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    profil: "",
    message: "",
  });

  // Form state — visite
  const [visiteData, setVisiteData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    date: "",
    creneau: "",
    message: "",
  });

  const validateDossier = () => {
    const e: Record<string, boolean> = {};
    if (!dossierData.prenom.trim()) e.prenom = true;
    if (!dossierData.nom.trim()) e.nom = true;
    if (!dossierData.email.trim() || !dossierData.email.includes("@")) e.email = true;
    if (!dossierData.telephone.trim()) e.telephone = true;
    if (!dossierData.profil) e.profil = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateVisite = () => {
    const e: Record<string, boolean> = {};
    if (!visiteData.prenom.trim()) e.prenom = true;
    if (!visiteData.nom.trim()) e.nom = true;
    if (!visiteData.email.trim() || !visiteData.email.includes("@")) e.email = true;
    if (!visiteData.telephone.trim()) e.telephone = true;
    if (!visiteData.date) e.date = true;
    if (!visiteData.creneau) e.creneau = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid =
      activeForm === "dossier" ? validateDossier() : validateVisite();
    if (!isValid) return;

    setSubmitting(true);
    setSubmitError(false);

    const data = activeForm === "dossier" ? dossierData : visiteData;

    const payload: Record<string, string> = {
      access_key: "21d49848-72e4-4d6c-99d2-6ed4c93e1a6d",
      subject: activeForm === "dossier"
        ? "🏢 Le 203 — Demande de dossier d'acquisition"
        : "📅 Le 203 — Demande de visite",
      from_name: `${data.prenom} ${data.nom}`,
      email: data.email,
      "Type de demande": activeForm === "dossier" ? "Recevoir le dossier complet" : "Planifier une visite",
      "Prénom": data.prenom,
      "Nom": data.nom,
      "Téléphone": data.telephone,
    };

    if (activeForm === "dossier") {
      payload["Profil"] = dossierData.profil;
      payload["Message"] = dossierData.message || "(aucun)";
    } else {
      payload["Date souhaitée"] = visiteData.date;
      payload["Créneau"] = visiteData.creneau;
      payload["Message"] = visiteData.message || "(aucun)";
    }

    // Anti-spam honeypot
    payload["botcheck"] = "";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setErrors({});
    setDossierData({ prenom: "", nom: "", email: "", telephone: "", profil: "", message: "" });
    setVisiteData({ prenom: "", nom: "", email: "", telephone: "", date: "", creneau: "", message: "" });
  };

  const inputBase =
    "w-full bg-white border rounded-lg px-4 py-3 text-sm text-navy-800 placeholder:text-navy-300/60 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all";
  const inputError = "border-red-400 bg-red-50/50";
  const inputNormal = "border-warm-300";

  return (
    <section ref={ref} id="contact-form" className="section-padding bg-warm-100">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center mb-4">
            <div className="gold-divider" />
          </div>
          <h2 className="section-title mb-4">
            Contactez-nous
          </h2>
          <p className="section-subtitle mx-auto">
            Choisissez votre demande et recevez une réponse sous 24h.
          </p>
        </div>

        {/* Tab switcher */}
        <div
          className={`flex bg-white rounded-xl p-1.5 shadow-sm border border-warm-200 mb-8 transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            type="button"
            onClick={() => { setActiveForm("dossier"); setSubmitted(false); setErrors({}); }}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
              activeForm === "dossier"
                ? "bg-navy-800 text-white shadow-md"
                : "text-navy-400 hover:text-navy-600"
            }`}
          >
            <FileText size={16} />
            Recevoir le dossier
          </button>
          <button
            type="button"
            onClick={() => { setActiveForm("visite"); setSubmitted(false); setErrors({}); }}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
              activeForm === "visite"
                ? "bg-navy-800 text-white shadow-md"
                : "text-navy-400 hover:text-navy-600"
            }`}
          >
            <Calendar size={16} />
            Planifier une visite
          </button>
        </div>

        {/* Form card */}
        <div
          className={`bg-white rounded-xl border border-warm-200 shadow-lg p-6 md:p-8 transition-all duration-700 delay-300 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {submitted ? (
            /* Success state */
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center">
                <CheckCircle2 size={32} className="text-green-500" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-navy-800 mb-3">
                Demande envoyée
              </h3>
              <p className="text-navy-300 text-sm mb-8 max-w-sm mx-auto">
                {activeForm === "dossier"
                  ? "Vous recevrez le dossier complet dans votre boîte mail sous 24h."
                  : "Nous reviendrons vers vous rapidement pour confirmer le créneau de visite."}
              </p>
              <button
                type="button"
                onClick={resetForm}
                className="text-gold-600 text-sm font-semibold hover:text-gold-700 underline underline-offset-4"
              >
                Envoyer une autre demande
              </button>
            </div>
          ) : (
            <>
              {/* Form description */}
              <div className="mb-6">
                <h3 className="font-serif text-xl font-semibold text-navy-800 mb-2">
                  {activeForm === "dossier"
                    ? "Recevoir le dossier complet"
                    : "Planifier une visite"}
                </h3>
                <p className="text-navy-300 text-sm">
                  {activeForm === "dossier"
                    ? "Indiquez vos coordonnées pour recevoir le dossier d'acquisition, les plans, l'inventaire des équipements et les modes d'acquisition."
                    : "Choisissez un créneau pour organiser une visite physique ou un échange de qualification."}
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                {/* Shared fields: Prénom / Nom */}
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-medium text-navy-600 mb-1.5">
                      <User size={12} />
                      Prénom *
                    </label>
                    <input
                      type="text"
                      placeholder="Votre prénom"
                      className={`${inputBase} ${errors.prenom ? inputError : inputNormal}`}
                      value={activeForm === "dossier" ? dossierData.prenom : visiteData.prenom}
                      onChange={(e) =>
                        activeForm === "dossier"
                          ? setDossierData({ ...dossierData, prenom: e.target.value })
                          : setVisiteData({ ...visiteData, prenom: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-medium text-navy-600 mb-1.5">
                      <User size={12} />
                      Nom *
                    </label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      className={`${inputBase} ${errors.nom ? inputError : inputNormal}`}
                      value={activeForm === "dossier" ? dossierData.nom : visiteData.nom}
                      onChange={(e) =>
                        activeForm === "dossier"
                          ? setDossierData({ ...dossierData, nom: e.target.value })
                          : setVisiteData({ ...visiteData, nom: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className="flex items-center gap-1.5 text-xs font-medium text-navy-600 mb-1.5">
                    <Mail size={12} />
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
                    value={activeForm === "dossier" ? dossierData.email : visiteData.email}
                    onChange={(e) =>
                      activeForm === "dossier"
                        ? setDossierData({ ...dossierData, email: e.target.value })
                        : setVisiteData({ ...visiteData, email: e.target.value })
                    }
                  />
                </div>

                {/* Telephone */}
                <div className="mb-4">
                  <label className="flex items-center gap-1.5 text-xs font-medium text-navy-600 mb-1.5">
                    <Phone size={12} />
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    placeholder="06 12 34 56 78"
                    className={`${inputBase} ${errors.telephone ? inputError : inputNormal}`}
                    value={activeForm === "dossier" ? dossierData.telephone : visiteData.telephone}
                    onChange={(e) =>
                      activeForm === "dossier"
                        ? setDossierData({ ...dossierData, telephone: e.target.value })
                        : setVisiteData({ ...visiteData, telephone: e.target.value })
                    }
                  />
                </div>

                {/* Dossier-specific: Profil */}
                {activeForm === "dossier" && (
                  <div className="mb-4">
                    <label className="flex items-center gap-1.5 text-xs font-medium text-navy-600 mb-1.5">
                      Votre profil *
                    </label>
                    <select
                      className={`${inputBase} ${errors.profil ? inputError : inputNormal}`}
                      value={dossierData.profil}
                      onChange={(e) =>
                        setDossierData({ ...dossierData, profil: e.target.value })
                      }
                    >
                      <option value="">Sélectionnez votre profil</option>
                      {profiles.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Visite-specific: Date + Créneau */}
                {activeForm === "visite" && (
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-medium text-navy-600 mb-1.5">
                        <CalendarDays size={12} />
                        Date souhaitée *
                      </label>
                      <input
                        type="date"
                        className={`${inputBase} ${errors.date ? inputError : inputNormal}`}
                        value={visiteData.date}
                        onChange={(e) =>
                          setVisiteData({ ...visiteData, date: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-medium text-navy-600 mb-1.5">
                        <Clock size={12} />
                        Créneau souhaité *
                      </label>
                      <select
                        className={`${inputBase} ${errors.creneau ? inputError : inputNormal}`}
                        value={visiteData.creneau}
                        onChange={(e) =>
                          setVisiteData({ ...visiteData, creneau: e.target.value })
                        }
                      >
                        <option value="">Choisir un créneau</option>
                        {creneaux.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* Message */}
                <div className="mb-6">
                  <label className="flex items-center gap-1.5 text-xs font-medium text-navy-600 mb-1.5">
                    <MessageSquare size={12} />
                    Message (facultatif)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Précisez votre projet ou vos questions..."
                    className={`${inputBase} ${inputNormal} resize-none`}
                    value={activeForm === "dossier" ? dossierData.message : visiteData.message}
                    onChange={(e) =>
                      activeForm === "dossier"
                        ? setDossierData({ ...dossierData, message: e.target.value })
                        : setVisiteData({ ...visiteData, message: e.target.value })
                    }
                  />
                </div>

                {/* Validation error */}
                {Object.keys(errors).length > 0 && (
                  <div className="mb-4 text-red-500 text-xs font-medium bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">
                    Veuillez remplir tous les champs obligatoires (*).
                  </div>
                )}

                {/* Submit error */}
                {submitError && (
                  <div className="mb-4 text-red-600 text-xs font-medium bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">
                    Une erreur est survenue lors de l&apos;envoi. Veuillez réessayer ou nous contacter directement par email.
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn-primary justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      {activeForm === "dossier"
                        ? "Demander le dossier"
                        : "Demander une visite"}
                    </>
                  )}
                </button>

                {/* Reassurance */}
                <p className="text-center text-navy-300/60 text-xs mt-4">
                  Vos données sont confidentielles · Réponse sous 24h
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
