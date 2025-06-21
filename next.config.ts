import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: "/labellemom", // GitHub Pages용 경로 설정
};


export default nextConfig;
