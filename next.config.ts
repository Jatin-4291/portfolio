import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "leetcard.jacoblin.cool",
      },
    ],
  },
};

export default nextConfig;
