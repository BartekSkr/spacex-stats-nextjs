/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/launches',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
