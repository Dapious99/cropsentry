import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/cropsentry",
  assetPrefix: "/cropsentry",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
