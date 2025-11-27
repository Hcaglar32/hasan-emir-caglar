/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/myportfolionextjs',
  assetPrefix: '/myportfolionextjs/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
