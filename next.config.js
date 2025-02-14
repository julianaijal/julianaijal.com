/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `default-src 'self'; connect-src 'self' vitals.vercel-insights.com https://www.google-analytics.com *.clarity.ms *.vercel-scripts.com; font-src 'self'; frame-ancestors 'none'; img-src 'self' data: blob: https://*.graphassets.com https://placehold.co *.clarity.ms *.bing.com *.virtualearth.net; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com *.clarity.ms *.vercel-scripts.com; style-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self'; form-action 'self'`
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin'
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ]
  },
  sassOptions: {
    // to do: fix dart sass warning
    silenceDeprecations: ['legacy-js-api']
  },
  images: {
    // Use remotePatterns to allow specific external images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.graphassets.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
    ],
    // Enable SVG images and allow dangerous SVGs
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

module.exports = nextConfig