import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  basePath: '/personal-project',
  assetPrefix: '/personal-project/',
  images: {
    unoptimized: true, // Disable Next.js image optimization for static exports
  },
};

export default nextConfig;
