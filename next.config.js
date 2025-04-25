/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  output: 'export',
  basePath: isProd ? '/personalweb' : "",
  assetPrefix: isProd ? '/personalweb' : "",
  trailingSlash: true,
};

module.exports = nextConfig;
