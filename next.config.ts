import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allows local images to fail gracefully in dev before they're provided
    unoptimized: false,
  },
};

export default nextConfig;
