import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    domains: ['res.cloudinary.com'], // Add any external image domains you use
    // Optional: Configure image quality
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96],
  },
  // Ignore ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
