/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/]
});

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
    domains: ['images2.imgbox.com', 'i.imgur.com', 'imgur.com'],
  },
});

module.exports = nextConfig;
