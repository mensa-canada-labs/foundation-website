# Repository Agent Guide

This file gives repository-specific instructions to AI coding agents working on the Mensa Canada Scholarship Programme website.

## Project Overview

- Framework: Astro 6
- Language split: English and French
- Styling: Tailwind CSS v4
- Production site: `https://foundation.mensa.ca`
- Preview site: `https://mensa-canada-labs.github.io/foundation-website/`

## Core Editing Model

Most page content lives in shared page components under `src/components/pages/`.

Route files under `src/pages/` and `src/pages/fr/` are thin wrappers that pass `locale="en"` or `locale="fr"` into shared components.

When updating content:

- prefer editing the shared page component instead of wrapper routes
- keep English and French content in sync inside the same component when both locales are present
- do not duplicate logic across route wrappers unless a new route is actually required

## High-Value Maintenance Tasks

### Updating Scholarship Recipients

The source of truth for published recipients is `src/data/winners.ts`.

Rules:

- keep `winnersByYear` sorted newest year first
- keep recipient objects consistent with the existing shape: `name`, optional `school`, `award`, `amount`
- valid `award` values are `general`, `kerstan`, and `woodhams`
- use display-ready amount strings such as `$1,500`

Important follow-up:

- `src/components/pages/WinnersPage.astro` reads the newest year automatically from `winnersByYear[0]`
- `src/components/pages/HomePage.astro` also uses the newest recipient data automatically for the cards
- but the homepage section title is currently hard-coded as `2025 Winners` and `Gagnants 2025`, so update that text manually when the latest published year changes

After recipient updates, verify at least:

- homepage winners section
- winners archive page
- amount formatting and school names

### Updating Annual Dates and Competition Cycle Copy

Date-related content is currently distributed across several components. If the competition cycle changes, update all affected places together.

Primary files to check:

- `src/components/Header.astro`
- `src/components/pages/HomePage.astro`
- `src/components/pages/FaqPage.astro`
- `src/components/pages/RulesPage.astro`
- `src/components/pages/SubmitPage.astro`

Look for content such as:

- January 31 / 31 janvier
- September 1 / 1 septembre
- September results announcements
- academic-year labels such as `2025-2026`
- age eligibility dates such as `at least 18 years old on January 31, 2026`

Do not update only one page when the cycle changes. Keep the deadline, eligibility year, and results timing aligned everywhere.

### Updating Build and Deployment Guidance

The build and deployment behavior is defined by these files:

- `astro.config.mjs`
- `.github/workflows/deploy-pages.yml`
- `src/i18n/site.ts`
- `src/layouts/Layout.astro`
- `src/pages/robots.txt.ts`
- `src/pages/site.webmanifest.ts`

If you change deployment behavior:

- preserve the `github-pages` target behavior unless the user explicitly wants it changed
- keep `/foundation-website` as the preview base path unless the repository slug changes
- keep `PUBLIC_SITE_INDEXABLE='false'` for preview builds unless the user explicitly requests indexable preview builds

## Validation Workflow

For ordinary site changes, run:

```sh
npm run build
```

For GitHub Pages validation, run the preview-target build:

### PowerShell

```powershell
$env:DEPLOY_TARGET = 'github-pages'
$env:PUBLIC_SITE_INDEXABLE = 'false'
npm run build
```

### Bash

```sh
DEPLOY_TARGET=github-pages PUBLIC_SITE_INDEXABLE=false npm run build
```

If the task affects winners or dates, also check the relevant generated pages in `dist/` when practical.

## Git and Release Safety Rules

Do not execute commits or pushes directly for this repository.

Never run these commands yourself unless the user explicitly overrides this policy:

- `git commit`
- `git push`
- `git tag`
- `gh release create`

Instead, when the user asks to prepare a commit or publish a change:

1. inspect the repository state
2. identify staged files and unstaged files separately
3. summarize what the commit should contain
4. generate the exact Git commands for the user to run
5. suggest a commit message based on the actual staged or intended file set

## Commit Command Generation Rules

When generating Git commands:

- prefer explicit `git add <file>` paths over `git add .`
- if files are already staged, do not suggest re-adding them without reason
- if the working tree contains unrelated modified files, avoid including them in the suggested add command
- tailor the commit message to the real scope of the changes

Suggested commit message patterns:

- docs only: `docs: update project documentation`
- winners or date content: `content: update scholarship recipients and competition dates`
- deployment or build config: `chore: update GitHub Pages deployment configuration`
- mixed content and docs: `docs: refresh site maintenance and deployment guidance`

Example output pattern:

```sh
git add README.md AGENTS.md
git commit -m "docs: rewrite README and add repository agent guidance"
git push origin main
```

If some files are already staged, adjust the commands accordingly.

## Content Accuracy Rules

Preserve these established content constraints unless the user explicitly requests a change:

- the programme is the charitable arm of Mensa Canada
- Canada Helps handles donation processing and tax receipts
- the GitHub Pages preview remains non-indexable by default
- bilingual routes must stay aligned between English and French

## Practical Search Tips for Agents

When updating time-sensitive content, search for these terms together before editing:

- `January 31|31 janvier|September|septembre|2026|2025-2026`
- `winnersTitle|Gagnants 2025|2025 Winners`
- `winnersByYear`

When updating assets or links:

- prefer the localized and asset helpers in `src/i18n/site.ts`
- avoid introducing hard-coded preview-only paths outside the existing deployment helpers