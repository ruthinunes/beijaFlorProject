/** @type {import('next').NextConfig} */
const dotenv = require('dotenv');
dotenv.config();
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    EMAIL_TO: process.env.EMAIL_TO
  }
}

module.exports = nextConfig
