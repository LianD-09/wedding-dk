import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost'],
    },
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.tls = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.child_process = false;
    }

    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      bufferutil: 'commonjs bufferutil',
    });

    return config;
  },
  env: {
    GOOGLE_SERVICE_PRIVATE_KEY: process.env.GOOGLE_SERVICE_PRIVATE_KEY,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'i.imgur.com',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
