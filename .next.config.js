/** @type {import('next').NextConfig} */

// next.config.js
module.exports = {
  headers: async () => [
    {
      source: "/:all*(svg|jpg|png|webp)",
      locale: false,
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=2592000, stale-while-revalidate"
        }
      ]
    }
  ],
  reactStrictMode: true,
  images: {
    domains: ["localhost:3000", ""],
    deviceSizes: [280, 600, 640, 750, 828, 1080, 1200, 1920, 2048, 3840]
  },
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://tusharshahiportfolio.vercel.app"
      : "",
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  }
};
