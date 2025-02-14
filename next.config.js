/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  headers: [
    {
      key: 'Strict-Transport-Security',
      value: 'max-age=63072000; includeSubDomains; preload',
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
  ],
  sassOptions: {
    silenceDeprecations: ['legacy-js-api']
  },
  images: {
    // Use remotePatterns to allow specific external images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eu-central-1-shared-euc1-02.graphassets.com',
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