/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["triple-9.fr", "media-cldnry.s-nbcnews.com", "cdn.shopify.com" ],
  }
}

module.exports = nextConfig
