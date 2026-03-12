import type { APIRoute } from 'astro';
import { getAssetPath } from '../i18n/site';

export const prerender = true;

const baseUrl = import.meta.env.BASE_URL || '/';

export const GET: APIRoute = () => {
  const manifest = {
    name: 'Mensa Canada Scholarship Programme',
    short_name: 'MCSP',
    icons: [
      {
        src: getAssetPath('android-chrome-192x192.png'),
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: getAssetPath('android-chrome-512x512.png'),
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    theme_color: '#fcfaf7',
    background_color: '#fcfaf7',
    display: 'standalone',
    start_url: baseUrl,
    scope: baseUrl,
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: {
      'Content-Type': 'application/manifest+json; charset=utf-8',
    },
  });
};