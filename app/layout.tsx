import type { Metadata } from "next";
import "./styles/globals.scss";
import { Analytics } from "@vercel/analytics/react";
import WebVitals from "./_lib/WebVitals";
import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "julianaijal.com",
  description: "Hallo met mij",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-M8PS5F6" />
      <SpeedInsights/>
      <body>
        <WebVitals />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
