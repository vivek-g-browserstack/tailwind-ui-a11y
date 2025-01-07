import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  assetPrefix: process.env.NODE_ENV === "development" ? "" : "/tailwind-ui-ally",
  basePath: process.env.NODE_ENV === "development" ? "" : "/tailwind-ui-ally"
}

export default nextConfig
