/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placehold.co'],
  },
  experimental: {
    appDir: true,
    serverActions: true,
  },
}

module.exports = nextConfig
