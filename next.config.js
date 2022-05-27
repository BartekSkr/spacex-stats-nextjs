/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
    domains: ['images2.imgbox.com', 'i.imgur.com', 'imgur.com'],
  },
};

module.exports = nextConfig;
