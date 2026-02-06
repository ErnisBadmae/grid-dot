/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Статический экспорт для GoDaddy
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true, // Для статического экспорта
  },
  trailingSlash: true,
}

module.exports = nextConfig
