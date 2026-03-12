# Mensa Canada Scholarship Programme Website

This is the bilingual Astro website for the Mensa Canada Scholarship Programme.

The repository supports two deployment targets:

- the official site at `https://foundation.mensa.ca`
- a shareable GitHub Pages preview at `https://mensa-canada-labs.github.io/foundation-website/`

The GitHub Pages build is intentionally configured as non-indexable until the official site is ready.

## Requirements

- Node.js `>= 22.12.0`
- npm

## Install

From the project root:

```sh
npm install
```

## Useful Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Astro development server |
| `npm run build` | Build the official production version into `dist/` |
| `npm run preview` | Serve the current build locally |
| `npm run astro -- --help` | Show Astro CLI help |

## Local Development

Start the development server:

```sh
npm run dev
```

Astro runs on `http://localhost:4321` by default.

## Deployment Model

The project changes its `site` and `base` configuration depending on the build target.

- `production`
  - canonical origin: `https://foundation.mensa.ca`
  - base path: `/`
- `github-pages`
  - canonical origin: `https://mensa-canada-labs.github.io/foundation-website`
  - base path: `/foundation-website`

The target is selected with the `DEPLOY_TARGET` environment variable.

Indexing behavior is controlled by `PUBLIC_SITE_INDEXABLE`.

- `true`: pages are allowed to be indexed
- any other value: pages are built with `noindex` metadata

## Official Production Build

The official site build does not require any custom environment variables.

```sh
npm run build
```

This writes a production-ready build to `dist/` using the official domain settings.

## GitHub Pages Build

The GitHub Pages build must use the dedicated target so that:

- all assets are prefixed with `/foundation-website`
- internal links use the correct base path
- canonical URLs point to GitHub Pages
- preview pages remain non-indexable

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

After the build finishes, the generated site in `dist/` matches this preview URL:

`https://mensa-canada-labs.github.io/foundation-website/`

## Publishing to GitHub Pages

The repository already contains the deployment workflow at [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml).

That workflow:

- runs on every push to `main`
- installs dependencies with `npm ci`
- builds the site with `DEPLOY_TARGET=github-pages`
- forces `PUBLIC_SITE_INDEXABLE='false'`
- uploads `dist/` and deploys it to GitHub Pages

### Publish Steps

1. Confirm that the target repository is `mensa-canada-labs/foundation-website`.
2. Commit your local changes.
3. Push to the `main` branch.
4. In GitHub, open `Settings > Pages`.
5. Confirm that the source is set to `GitHub Actions`.
6. Wait for the `Deploy GitHub Pages` workflow to finish in the `Actions` tab.
7. Open the published preview at `https://mensa-canada-labs.github.io/foundation-website/`.

### Minimal Git Commands

```sh
git add .
git commit -m "Prepare GitHub Pages deployment"
git push origin main
```

## Indexing Behavior

The GitHub Pages preview is intentionally built with `PUBLIC_SITE_INDEXABLE=false`.

In practice, that means:

- generated pages include `noindex` robots metadata
- `robots.txt` is still generated, but the main protection is the page-level metadata
- the preview URL can be shared directly, but it is not intended to be indexed before the official launch

## Key Files

- [astro.config.mjs](astro.config.mjs): build target selection, `site`, and `base`
- [src/i18n/site.ts](src/i18n/site.ts): localized routes and base-path helpers
- [src/layouts/Layout.astro](src/layouts/Layout.astro): global metadata, canonical URLs, favicons, and `noindex`
- [src/pages/robots.txt.ts](src/pages/robots.txt.ts): generated `robots.txt`
- [src/pages/site.webmanifest.ts](src/pages/site.webmanifest.ts): generated web manifest
- [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml): automated GitHub Pages deployment

## Quick Structure Overview

```text
src/
  components/
    pages/        shared EN/FR page components
  data/           editorial data, including winners
  i18n/           localization and path helpers
  layouts/        global layout shell
  pages/          Astro route wrappers for EN and FR
  styles/         global styles
public/           static assets and favicon pack
```

## Pre-Publish Verification

Before pushing to `main`, the minimum recommended check is:

```sh
npm run build
```

To validate the GitHub Pages variant specifically:

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
