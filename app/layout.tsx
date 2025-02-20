import type { Metadata } from "next";
import "./styles/globals.scss";
import { Analytics } from "@vercel/analytics/react";
import WebVitals from "./_lib/WebVitals";
import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Monitoring } from "react-scan/monitoring/next";
import Script from "next/script";


export const metadata: Metadata = {
  title: "julianaijal.com",
  description: "Hallo met mij",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!process.env.REACT_SCAN_API_KEY) {
    throw new Error('REACT_SCAN_API_KEY environment variable is not set');
  }

  return (
    <html lang="en">
      <head>
        <GoogleTagManager gtmId="GTM-M8PS5F6" />
        <SpeedInsights/>
        <Script
          src="https://unpkg.com/react-scan/dist/install-hook.global.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <Monitoring
          apiKey={process.env.REACT_SCAN_API_KEY}
          url="https://monitoring.react-scan.com/api/v1/ingest"
          commit={process.env.VERCEL_GIT_COMMIT_SHA} 
          branch={process.env.VERCEL_GIT_COMMIT_REF}
        />
        <WebVitals />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
