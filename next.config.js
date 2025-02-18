/** @type {import('next').NextConfig} */

const cspHeader = `
   default-src 'self';
   img-src 'self' data: blob: *;
   script-src 'self' 'unsafe-inline' 'unsafe-eval' *.googletagmanager.com *.google-analytics.com *.clarity.ms *.vercel-scripts.com va.vercel-scripts.com *.vercel.live;
   style-src 'self' 'unsafe-inline';
   connect-src 'self' *.vercel-insights.com *.google-analytics.com *.clarity.ms;
   font-src 'self' data: *;
   media-src 'self' *;
   frame-src 'self' *;
`
const stsHeader = `
  max-age=63072000;
  includeSubDomains; preload
`

const ppHeader = `
  camera=(),
  microphone=(),
  geolocation=()
`
const nextConfig = {
  images: {
    domains: ['media.graphassets.com'],
    formats: ['image/avif', 'image/webp'],
    quality: 85,
    minimumCacheTTL: 2592000,

  },
  
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\s+/g, ' ').trim()
          },
          {
            key: 'Strict-Transport-Security',
            value: stsHeader.replace(/\s+/g, ' ').trim()
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin'
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
            value: ppHeader.replace(/\s+/g, ' ').trim()
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