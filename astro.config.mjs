// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const runtimeProcess = /** @type {{ env?: Record<string, string | undefined> } | undefined} */ (Reflect.get(globalThis, 'process'));
const deployTarget = runtimeProcess?.env?.DEPLOY_TARGET ?? 'production';
const repoName = 'foundation-website';
const githubPagesOrigin = 'https://mensa-canada-labs.github.io';
const productionOrigin = 'https://foundation.mensa.ca';
const isGitHubPages = deployTarget === 'github-pages';
const base = isGitHubPages ? `/${repoName}` : '/';
const site = isGitHubPages ? `${githubPagesOrigin}${base}` : productionOrigin;

export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()],
  },
});
