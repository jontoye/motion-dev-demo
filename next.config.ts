import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/motion-dev-demo/' : '',
  basePath: isProd ? '/motion-dev-demo' : '',
  output: 'export',
}

export default nextConfig
