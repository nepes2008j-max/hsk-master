import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/hsk-master" : "",
  env: { NEXT_PUBLIC_BASE_PATH: isGitHubPages ? "/hsk-master" : "" },
  images: { unoptimized: true },
};

export default nextConfig;
