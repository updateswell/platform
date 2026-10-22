import type { NextConfig } from 'next';

const docsUrl = 'https://docs.upwell.run';

const config: NextConfig = {
  reactStrictMode: true,
  // Keeps the dev badge out of the social image captures (scripts/social.sh).
  devIndicators: false,
  async redirects() {
    return [
      // The docs used to live at upwell.run/docs.
      { source: '/docs', destination: docsUrl, permanent: true },
      { source: '/docs/:path*', destination: `${docsUrl}/:path*`, permanent: true },
      { source: '/llms.txt', destination: `${docsUrl}/llms.txt`, permanent: true },
      { source: '/llms-full.txt', destination: `${docsUrl}/llms-full.txt`, permanent: true },
    ];
  },
  async rewrites() {
    // `$schema` URLs in users' files point here; the schemas are published with the docs (upwell repo).
    return [{ source: '/schemas/:file', destination: `${docsUrl}/schemas/:file` }];
  },
};

export default config;
