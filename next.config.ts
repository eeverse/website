import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // GitHub Pages için static export
  output: "export",
  // Varsayılan image loader static export'ta desteklenmiyor
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
