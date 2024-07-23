/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
    unoptimized: true,
  },
  basePath: isProd ? '/PilgrimsProgress' : '',
  assetPrefix: isProd ? '/PilgrimsProgress/' : '',
}

module.exports = nextConfig;
