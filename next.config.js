/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'localhost'],
  },
  // No rewrites: API is handled by Next.js route handlers under app/api
  // Silence workspace root inference warning by pinning tracing root to this project
  outputFileTracingRoot: process.cwd(),
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};

export default nextConfig;
