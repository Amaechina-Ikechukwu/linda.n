/** @type {import('next').NextConfig} */
const nextConfig = {
  // distDir: "dist",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

module.exports = nextConfig;
