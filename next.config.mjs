/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'myportfolionextjs'; // GitHub repository adınız

const nextConfig = {
  output: 'export',              // next export kullanabilmek için
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
};

module.exports = nextConfig;
