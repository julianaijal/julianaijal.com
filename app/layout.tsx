import type { Metadata } from 'next';
import './styles/globals.scss';
import { Analytics } from '@vercel/analytics/react';
import WebVitals from './_lib/WebVitals';

export const metadata: Metadata = {
  title: 'julianaijal.com',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body>
        <WebVitals/>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
