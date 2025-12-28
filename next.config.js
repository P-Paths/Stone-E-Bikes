/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  // No rewrites: API is handled by Next.js route handlers under app/api
  // Silence workspace root inference warning by pinning tracing root to this project
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
