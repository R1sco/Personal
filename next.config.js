/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.giphy.com',
        port: '',
        pathname: '/media/**',
      },
    ],
  },
  // Konfigurasi transpilasi untuk framer-motion
  transpilePackages: ['framer-motion'],
};

module.exports = nextConfig;
