/** @type {import('next').NextConfig} */
const nextConfig = {
    // Add your custom configurations here
    // For example, adding a custom webpack configuration:
    webpack: (config, { dev, isServer }) => {
      // Custom webpack configurations
      return config;
    },
  
    // Other configurations...
  };
  
  module.exports = nextConfig;
  