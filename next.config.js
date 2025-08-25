/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    domains: ['images.unsplash.com', 'localhost'],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};

export default nextConfig;
