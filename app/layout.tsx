import type { Metadata } from "next";
import "./styles/globals.scss";
import { Analytics } from "@vercel/analytics/react";
import WebVitals from "./_lib/WebVitals";
import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Monitoring } from "react-scan/monitoring/next";


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
      <GoogleTagManager gtmId="GTM-M8PS5F6" />
      <SpeedInsights/>
      <body>
        <Monitoring
          apiKey={process.env.REACT_SCAN_API_KEY}
          url="https://monitoring.react-scan.com/api/v1/ingest"
        />
        <WebVitals />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
