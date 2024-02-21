// next.config.js
const nextConfig = {
  // Custom webpack configurations
  webpack: (config, { dev, isServer }) => {
    // Add your custom webpack configurations here if needed
    return config;
  },

  // Other configurations...

  // Images configuration
  images: {
    domains: ['example.com'],
  },

  // Environment variables configuration
  env: {
    MY_VARIABLE: process.env.MY_VARIABLE,
  },

  // Target configuration (e.g., serverless or server)
  target: 'serverless',

  // Automatic react import optimization
  reactStrictMode: true,

  // Generate Etags for caching
  generateEtags: true,

  // Custom headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
