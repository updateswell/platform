import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';

// The docs pages are in docs.upwell.run/sitemap.xml.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl, changeFrequency: 'weekly', priority: 1 }];
}
