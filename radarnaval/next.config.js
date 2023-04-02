/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["triple-9.fr"],
  }
}

module.exports = nextConfig
