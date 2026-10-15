# Developer Portfolio — V1

A responsive personal developer portfolio built with Next.js App Router, React, TypeScript, and custom CSS. The visual direction is a calm, premium dark interface with mint accents, editorial typography, and CSS-built project artwork (no image assets required).

## Features

- Responsive desktop, tablet, and mobile layouts
- Accessible page landmarks, navigation labels, and visible keyboard focus
- Project cards with clearly identified existing/planned status
- About, skills, and contact sections
- Page metadata and Open Graph basics
- Reduced-motion support
- No database, API keys, or environment variables required for the initial version

## Requirements

- Node.js 20.9 or newer
- npm 10 or newer

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

Or run all three with `npm run quality`.

## Personalise before publishing

1. Replace `YOUR NAME` in `src/app/page.tsx` with the display name you want to use.
2. Update the GitHub link in the contact section to your actual profile URL.
3. Update the metadata URL in `src/app/layout.tsx` before deploying to a real domain.
4. Keep project statuses honest: projects marked **Planned** are portfolio concepts, not completed software.
5. Add real screenshots and repository links only after each project is ready.

## Publish to GitHub

Create a new public repository named `developer-portfolio` on GitHub. Do not initialise it with a README, license, or `.gitignore` because this folder already contains them. Then run:

```bash
git init
git add .
git commit -m "Build developer portfolio v1"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/developer-portfolio.git
git push -u origin main
```

Replace `YOUR-USERNAME` with the GitHub username you choose.

## Project scope

This is the first portfolio version. Asman Shop remains a separate project and will not be overwritten by this repository.
