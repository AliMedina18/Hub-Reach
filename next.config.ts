import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Hub-Reach",
  assetPrefix: "/Hub-Reach/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
