import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ThemeProvider } from 'next-themes';
import { Geist_Mono } from 'next/font/google';
import './global.css';
import { appDescription, appName, gaId, githubUrl, siteUrl } from '@/lib/site';

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

const title = `${appName}: OTA, forced and in-app updates for React Native & Expo`;
const ogImage = { url: '/og.png', width: 1200, height: 630, alt: `${appName}: ${appDescription}` };

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? siteUrl),
  title: { template: `%s | ${appName}`, default: title },
  description: appDescription,
  applicationName: appName,
  authors: [{ name: 'Upwell contributors', url: githubUrl }],
  category: 'technology',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: appName,
    locale: 'en_US',
    title,
    description: appDescription,
    images: ogImage,
  },
  twitter: { card: 'summary_large_image', title, description: appDescription, images: ogImage },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} font-sans antialiased`}
      suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
      {/* Production deploys only: previews and local dev stay out of the numbers. */}
      {process.env.VERCEL_ENV === 'production' && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
