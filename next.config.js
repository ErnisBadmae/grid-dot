/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Статический экспорт для GoDaddy
  images: {
    unoptimized: true, // Для статического экспорта
  },
  trailingSlash: true,
}

module.exports = nextConfig
