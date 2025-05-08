import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",  // <=== enables static exports
  images: { unoptimized: true }, // <=== disables image optimization
  // basePath: "/seagate-electric", // <=== sets the base path for static exports
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
