# NEURO-CAMPUS AVIGNON — Maquette UX/UI Complète

> Spécification UX/UI pour la vente d'un actif immobilier professionnel de 193 m²
> à Avignon-Montfavet, porté par le concept Neuro-Campus.
> Prix cible : < 300 000 €

---

## TABLE DES MATIÈRES

1. [Arborescence complète](#1-arborescence-complète)
2. [Parcours utilisateur par profil](#2-parcours-utilisateur-par-profil)
3. [Landing page — Détail section par section](#3-landing-page--détail-section-par-section)
4. [Sous-pages détaillées](#4-sous-pages-détaillées)
5. [Éléments de preuve](#5-éléments-de-preuve)
6. [Éléments de réassurance](#6-éléments-de-réassurance)
7. [Hiérarchie de persuasion](#7-hiérarchie-de-persuasion)

---

## 1. ARBORESCENCE COMPLÈTE

```
NEURO-CAMPUS AVIGNON
│
├── LANDING PAGE (page principale — scroll persuasif)
│   ├── Hero / Accroche
│   ├── Le Concept Neuro-Campus
│   ├── L'Actif Immobilier
│   ├── Scénarios d'Exploitation (aperçu)
│   ├── Chiffres Clés & Rentabilité
│   ├── Visite Virtuelle (embed)
│   ├── Témoignage / Vision du Fondateur
│   ├── Localisation & Écosystème
│   ├── FAQ Express
│   ├── CTA Final / Prise de contact
│   └── Footer
│
├── /actif — L'ACTIF IMMOBILIER
│   ├── Description complète du bien
│   ├── Plans & Surfaces détaillées
│   ├── Galerie photos HD (pièce par pièce)
│   ├── État technique & conformités
│   └── CTA → Contact / Télécharger la fiche technique
│
├── /scenarios — SCÉNARIOS D'EXPLOITATION
│   ├── Scénario 1 : Centre de formation nouvelle génération
│   ├── Scénario 2 : Cabinet pluridisciplinaire santé & bien-être
│   ├── Scénario 3 : Espace de coworking thématique
│   ├── Scénario 4 : Incubateur / tiers-lieu d'innovation
│   ├── Scénario 5 : Modèle hybride (multi-activités)
│   ├── Comparatif rentabilité par scénario
│   └── CTA → Recevoir l'étude de rentabilité personnalisée
│
├── /investir — POURQUOI INVESTIR
│   ├── Analyse du marché immobilier Avignon
│   ├── Données démographiques & bassin d'emploi
│   ├── Projections financières
│   ├── Avantages fiscaux potentiels
│   └── CTA → Recevoir le dossier investisseur
│
├── /visite — VISITE VIRTUELLE
│   ├── Visite 360° interactive (plein écran)
│   ├── Vidéo de présentation avec le propriétaire
│   └── CTA → Planifier une visite physique
│
├── /contact — CONTACT & QUALIFICATION
│   ├── Formulaire intelligent (adapté au profil)
│   ├── Calendrier de prise de rendez-vous
│   └── Téléchargement du dossier complet (contre email)
│
└── ÉLÉMENTS TRANSVERSAUX
    ├── Navigation sticky (header)
    ├── Barre de réassurance flottante
    ├── CTA flottant mobile
    └── Footer avec mentions légales
```

### Navigation sticky (header)

| Position | Élément | Lien |
|----------|---------|------|
| Gauche | Logo Neuro-Campus + baseline | → Landing |
| Centre | L'Actif · Scénarios · Investir · Visite | → Pages respectives |
| Droite | **Bouton CTA primaire** "Recevoir le dossier" | → /contact |

---

## 2. PARCOURS UTILISATEUR PAR PROFIL

### 2.1 — Profil INVESTISSEUR

**Motivation** : ROI, sécurité de l'actif, potentiel de valorisation

```
Landing (Hero → Chiffres clés) → CTA "Projections financières"
  → /investir → CTA "Dossier investisseur" → /contact (profil investisseur) → Lead
```

**Objections à lever** : Prix justifié ? Rendement réel ? Travaux à prévoir ?

### 2.2 — Profil ORGANISME DE FORMATION

**Motivation** : Locaux adaptés, conformité ERP, modularité

```
Landing (Hero → Concept → Scénarios) → CTA "Scénario formation"
  → /scenarios#formation → CTA "Plans détaillés" → /actif → /contact (profil formation)
```

**Objections à lever** : Conformité ? Capacité d'accueil ? Modularité ?

### 2.3 — Profil ENTREPRENEUR SANTÉ / BIEN-ÊTRE

**Motivation** : Lieu clé en main, écosystème praticiens, visibilité

```
Landing (Hero → Concept → Vision fondateur) → CTA "Modèle santé"
  → /scenarios#sante → Visite virtuelle → /contact (profil praticien)
```

**Objections à lever** : Clientèle existante ? Exercice immédiat ? Différenciation ?

### 2.4 — Profil ENTREPRISE INNOVANTE

**Motivation** : Lieu atypique, image de marque, attractivité RH

```
Landing (Hero → Concept → Localisation) → CTA "Explorer"
  → /scenarios#innovation → /actif → /investir → /contact (profil entreprise)
```

**Objections à lever** : Bassin pertinent ? Image ? Budget total ?

### 2.5 — Profil EXPLOITANT COWORKING

**Motivation** : Modèle récurrent, communauté, emplacement

```
Landing (Hero → Chiffres → Scénarios) → CTA "Scénario coworking"
  → /scenarios#coworking → /investir → /contact (profil coworking)
```

**Objections à lever** : Marché porteur ? Postes possibles ? CA prévisionnel ?

---

## 3. LANDING PAGE — DÉTAIL SECTION PAR SECTION

### SECTION 1 — HERO

**Titre (H1)** : 193 m² à Avignon — L'opportunité immobilière qui change la donne

**Sous-titre (H2)** : Un actif professionnel aménagé, un concept éprouvé, un modèle économique prêt à exploiter. Moins de 300 000 €.

**PHOTO HERO** : Vue d'ensemble intérieure la plus impressionnante — plein écran, overlay sombre léger
**Badge flottant** : "Prix < marché · Rentabilité immédiate"

**CTAs** :
- **Primaire** : `Recevoir le dossier complet` → /contact
- **Secondaire** : `Lancer la visite virtuelle` → /visite

**Barre de métriques** : 193 m² | < 300 000 € | 6 espaces aménagés | Rentabilité dès le jour 1

**Micro-réassurance** : Bien en activité · Visite virtuelle disponible · Dossier technique complet

---

### SECTION 2 — LE CONCEPT NEURO-CAMPUS

**Titre (H2)** : Neuro-Campus : quand l'immobilier rencontre l'innovation santé

**Sous-titre** : Plus qu'un local. Un écosystème conçu pour la performance humaine, la formation et le bien-être — déjà opérationnel.

**3 colonnes** :

| Un lieu transformé | Un modèle validé | Une vision d'avenir |
|---|---|---|
| PHOTO : Espace clé aménagé | PHOTO : Praticiens/formation en activité | PHOTO : Vue extérieure ou espace commun |
| Conçu par un ingénieur, chaque m² repensé pour santé, formation, innovation. | L'association Neuro-Campus exploite déjà les lieux. Le modèle fonctionne. | Acquérir ce bien = reprendre un concept clé en main ou le faire évoluer. |

**CTA** : `Explorer les scénarios d'exploitation` → /scenarios

---

### SECTION 3 — L'ACTIF IMMOBILIER (aperçu)

**Titre (H2)** : 193 m² pensés pour la performance

**Sous-titre** : 6 espaces distincts, entièrement aménagés et équipés — prêts à générer du revenu.

**Grille : 6 vignettes photo cliquables** — chacune avec nom d'espace, surface, usage
**Sous la grille** : Mini-plan 2D simplifié du bien

**CTA** : `Voir les plans et la galerie complète` → /actif

---

### SECTION 4 — SCÉNARIOS D'EXPLOITATION (aperçu)

**Titre (H2)** : 5 façons de rentabiliser cet actif

**Sous-titre** : Chaque m² pensé pour la polyvalence. Voici les modèles les plus rentables.

**5 cartes (carrousel ou grille)** :

1. **Centre de formation** — Icône graduation · Salles équipées, certifiables Qualiopi · Rendement X%
2. **Cabinet santé & bien-être** — Icône santé · Espaces praticiens clé en main · Rendement X%
3. **Coworking thématique** — Icône réseau · XX postes, abonnements · Rendement X%
4. **Incubateur / Tiers-lieu** — Icône fusée · Santé-tech, aides mobilisables · Rendement X%
5. **Modèle hybride** — Icône puzzle · Multi-activités, occupation max · Rendement X%

Chaque carte : `Voir ce scénario →` → /scenarios#ancre

**CTA section** : `Comparer tous les scénarios` → /scenarios

---

### SECTION 5 — CHIFFRES CLÉS & RENTABILITÉ

**Titre (H2)** : Les chiffres parlent d'eux-mêmes

**Sous-titre** : Un prix sous le marché, une rentabilité prouvée, un potentiel exceptionnel.

**6 métriques animées (counter au scroll)** :
- Prix/m² : XXX €/m² (vs moyenne Avignon : XXX €/m²)
- Rendement locatif brut : X,X%
- Taux d'occupation actuel : XX%
- Praticiens accueillis : XX
- Surface exploitable : 193 m² (100% aménagés)
- Délai de mise en exploitation : 0 jour

**Visuel** : Graphique barres prix/m² bien vs marché

**CTA** : `Recevoir les projections financières détaillées` → /contact
**Mention** : "Projections indicatives, non contractuelles."

---

### SECTION 6 — VISITE VIRTUELLE (embed)

**Titre (H2)** : Visitez comme si vous y étiez

**Sous-titre** : Parcourez les 193 m² en 360° — chaque espace, chaque détail.

**Élément** : Embed visite 360° (iframe, 16:9, pleine largeur)

**CTAs** :
- **Primaire** : `Planifier une visite physique` → /contact
- **Secondaire** : `Voir la vidéo de présentation` → /visite#video

**Micro-réassurance** : Visite physique sur rendez-vous · Avignon-Montfavet, accès facile

---

### SECTION 7 — VISION DU FONDATEUR

**Titre (H2)** : La vision derrière Neuro-Campus

**Layout** : Split 50/50

**Gauche** : PHOTO portrait fondateur dans les locaux — Nom, "Ingénieur — Fondateur de Neuro-Campus"

**Droite** :
- Citation : *"J'ai transformé ces 193 m² en un centre bio-santé du possible. Ce lieu est prêt à écrire son prochain chapitre — avec vous."*
- Contexte (3 lignes) : ingénieur, neuroperformance, bien-être, praticiens et formations depuis [année].

**CTA** : `Regarder la vidéo de présentation` → /visite#video
**Preuve** : Compteur "Depuis [année] · XX praticiens · XX formations"

---

### SECTION 8 — LOCALISATION & ÉCOSYSTÈME

**Titre (H2)** : Avignon-Montfavet : un emplacement stratégique

**Sous-titre** : Bassin de 500 000 habitants, TGV, autoroute, quartier en mutation.

**Élément** : Carte interactive (Google Maps / Mapbox) + proximités avec icônes et distances (Gare TGV, A7, Aéroport, CHU, Université, Commerces, Parking)

**Encadré marché** : Population, croissance, entreprises, prix moyen pro vs ce bien

**CTA** : `Télécharger l'étude de marché locale` → /contact (contre email)

---

### SECTION 9 — FAQ EXPRESS

**Titre (H2)** : Vos questions, nos réponses

**Format accordéon** :
- Prix exact ? → < 300K€, détails dans le dossier. `Recevoir le dossier →`
- Normes ERP/accessibilité ? → Oui, détails dans fiche technique.
- Visite physique ? → Sur RDV. `Planifier →`
- Travaux à prévoir ? → Bien aménagé et en activité. État technique disponible.
- Frais annexes ? → Estimations dans le dossier investisseur.
- Concept transférable ? → Documenté et transmissible, modalités à discuter.
- Financement possible ? → Éligible financement bancaire classique.
- Délai de disponibilité ? → À convenir, transition accompagnée possible.

---

### SECTION 10 — CTA FINAL

**Fond** : Couleur sombre ou photo floutée du lieu

**Titre (H2)** : Cette opportunité ne restera pas longtemps disponible

**Sous-titre** : 193 m² aménagés, un concept validé, un prix sous le marché. Il ne manque que vous.

**CTAs** :
- **Primaire** : `Recevoir le dossier investisseur complet` → /contact
- **Secondaire** : `Planifier une visite en 30 secondes` → /contact#rdv

**Réassurance (3 icônes)** : Dossier transparent · Données confidentielles · Réponse sous 24h

---

### FOOTER

| Neuro-Campus | Navigation | Ressources | Contact |
|---|---|---|---|
| Logo + baseline | L'Actif | Dossier investisseur | Adresse |
| © 2025 | Scénarios | Étude de marché | Téléphone |
| Mentions légales | Investir | FAQ | Email |
| Confidentialité | Visite / Contact | | Réseaux sociaux |
