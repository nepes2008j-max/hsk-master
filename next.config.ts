import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/hsk-master",
  images: { unoptimized: true },
};

export default nextConfig;
