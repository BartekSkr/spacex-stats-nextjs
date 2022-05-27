/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
    domains: ['images2.imgbox.com', 'i.imgur.com', 'imgur.com'],
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/launches': { page: '/launches' },
      '/rockets': { page: '/rockets' },
      '/about': { page: '/about' },
    };
  },
};

module.exports = nextConfig;
