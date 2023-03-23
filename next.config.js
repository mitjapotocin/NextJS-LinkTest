/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ["de", "es", "fr", "default"],
    defaultLocale: "default",
  },
};

module.exports = nextConfig;
