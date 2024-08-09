/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placehold.co', 'eu-central-1-shared-euc1-02.graphassets.com'],
  },
}

module.exports = nextConfig
