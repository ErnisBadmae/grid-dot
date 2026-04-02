/** @type {import('next').NextConfig} */
const isStaticExport = process.env.NEXT_OUTPUT_MODE === 'export'
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  ...(isStaticExport ? { output: 'export' } : {}),
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: isStaticExport,
  },
  trailingSlash: true,
}

module.exports = nextConfig
