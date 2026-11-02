// robots.txt generated at build time with absolute sitemap URL.
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) =>
  new Response(
    `User-agent: *\nAllow: /\nDisallow: /styleguide/\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\nSitemap: ${new URL('sitemap.xml', site).href}\n`,
    {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    },
  );
