import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Geist_Mono } from 'next/font/google';
import './global.css';
import { appDescription, appName, siteUrl } from '@/lib/site';

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? siteUrl),
  title: {
    template: `%s | ${appName}`,
    default: `${appName}: update orchestrator for React Native and Expo`,
  },
  description: appDescription,
  openGraph: { images: '/og.png', siteName: appName },
  twitter: { card: 'summary_large_image', images: '/og.png' },
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
    </html>
  );
}
