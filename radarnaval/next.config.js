
/** @type {import('next').NextConfig} */

const { withContentlayer } = require('next-contentlayer')

module.exports = withContentlayer({
  
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["triple-9.fr", "media-cldnry.s-nbcnews.com", "cdn.shopify.com", "assets.meretmarine.com", "upload.wikimedia.org"],
  },
})