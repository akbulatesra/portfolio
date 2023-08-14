/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  env: {
    PUBLIC_KEY: process.env.PUBLIC_KEY,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    SERVICE_ID: process.env.SERVICE_ID,
  },
};

module.exports = nextConfig;
/**
 * @type {import('next').NextConfig}
 */
