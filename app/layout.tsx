import type { Metadata } from 'next';
import './styles/globals.scss';
import { Analytics } from '@vercel/analytics/react';
import WebVitals from './_lib/WebVitals';
import { GoogleTagManager } from '@next/third-parties/google';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  metadataBase: new URL('https://julianaijal.com'),
  title: 'Julian Aijal',
  description: 'Personal website and blog of Julian Aijal.',
  applicationName: 'julianaijal.com',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Julian Aijal',
    description: 'Personal website and blog of Julian Aijal.',
    url: 'https://julianaijal.com',
    siteName: 'julianaijal.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Julian Aijal',
    description: 'Personal website and blog of Julian Aijal.',
  },
  other: {
    'content-signal': 'search=yes, ai-train=no, ai-input=yes',
    'ai-content-format': 'text/markdown',
    'ai-markdown-endpoint': 'https://julianaijal.com/api/markdown',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="alternate"
          type="text/markdown"
          href="https://julianaijal.com/api/markdown"
        />
        <link rel="alternate" type="text/plain" href="/llms.txt" />
        <link rel="help" href="/AGENTS.md" />
        <link rel="describedby" href="/skill.md" />
        <GoogleTagManager gtmId="GTM-M8PS5F6" />
        <SpeedInsights />
      </head>
      <body>
        <WebVitals />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
