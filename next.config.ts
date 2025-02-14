import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  basePath: '/repo-name',
  assetPrefix: '/repo-name/',
  images: {
    unoptimized: true, // Disable Next.js image optimization for static exports
  },
};

export default nextConfig;
