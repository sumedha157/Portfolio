# Sumedha Kataria — Developer Portfolio

A responsive React + Vite portfolio with Tailwind CSS, Framer Motion, and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Personalize before publishing

1. In `src/App.jsx`, replace `linkedinUrl` with your actual LinkedIn profile URL.
2. In `src/data/projects.js`, add each project's actual `github` and `demo` URLs. Empty URLs are intentional placeholders; do not publish fake links.
3. Verify each certification name and add credential URLs if available.
4. Add screenshots of real projects when you have them; the current project panels are CSS illustrations, not screenshots of deployed products.
5. Review project descriptions so they accurately represent your individual contribution.

## Deploy

Push the repository to GitHub, import it into Vercel, and deploy with the default Vite settings. Build command: `npm run build`; output directory: `dist`.
