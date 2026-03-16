import type { APIRoute } from 'astro';

export const prerender = true;

const shouldIndexSite = import.meta.env.PUBLIC_SITE_INDEXABLE === 'true';

export const GET: APIRoute = () => {
  const lines = shouldIndexSite
    ? ['User-agent: *', 'Allow: /']
    : ['User-agent: *', 'Disallow: /'];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};