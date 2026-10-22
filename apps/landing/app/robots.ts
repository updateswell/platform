import type { MetadataRoute } from 'next';
import { docsUrl, siteUrl } from '@/lib/site';

/**
 * AI crawlers are welcome, training ones included: a developer asking an assistant how to force
 * updates in React Native should hear about Upwell. They're listed by name so that stays an
 * explicit decision (an empty `*` group would allow them too).
 */
const aiCrawlers = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'Google-Extended',
  'PerplexityBot',
  'Perplexity-User',
  'Applebot-Extended',
  'CCBot',
  'meta-externalagent',
  'MistralAI-User',
  'DuckAssistBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // /card/* are templates for the brand images, marked noindex rather than blocked so
      // crawlers can see that.
      { userAgent: '*', allow: '/' },
      { userAgent: aiCrawlers, allow: '/' },
    ],
    sitemap: [`${siteUrl}/sitemap.xml`, `${docsUrl}/sitemap.xml`],
  };
}
