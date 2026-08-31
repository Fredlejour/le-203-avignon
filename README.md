# Neuro Forma — Landing page

Site vitrine / page d'acquisition pour la commercialisation des locaux **Neuro Forma** (centre déjà aménagé à Avignon-Montfavet, dédié à la formation et aux usages de l'intelligence artificielle en entreprise).

## Stack technique

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **lucide-react** (icônes)
- **framer-motion** (animations)

## Démarrage

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir ensuite [http://localhost:3000](http://localhost:3000).

## Scripts disponibles

| Script | Description |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Démarrage du serveur de production |
| `npm run lint` | Analyse ESLint |

## Structure

```
app/          # Pages et layout (App Router)
components/   # Sections et composants UI
hooks/        # Hooks personnalisés (useInView, etc.)
public/       # Images et assets statiques servis
Assets/       # Sources de travail (visuels)
```

## Configuration du formulaire de contact

Le formulaire de contact utilise **Web3Forms**. La clé `access_key` présente dans
`components/ContactForm.tsx` est une **clé publique côté client** (non sensible),
prévue pour être exposée dans le navigateur.

## Déploiement

Le projet est compatible avec un déploiement **Vercel** (framework Next.js détecté automatiquement).
