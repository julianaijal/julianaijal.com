import type { Metadata } from 'next';
import './styles/globals.scss';
import { Analytics } from '@vercel/analytics/react';
import WebVitals from './_lib/WebVitals';
import { GoogleTagManager } from '@next/third-parties/google';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'julianaijal.com',
  description: 'Hi, I\u2019m Julian Aijal.',
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
