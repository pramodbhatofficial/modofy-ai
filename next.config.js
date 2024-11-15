/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  distDir: '.next',
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
