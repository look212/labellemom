import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: "", 
  assetPrefix: '',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/', // 환경 변수 설정
    NEXT_PUBLIC_GITHUB_PAGES: 'true', // GitHub Pages 여부 설정
    NEXT_PUBLIC_SITE_URL: 'https://www.labellemom.co.kr/', // 사이트 URL 설정
    NEXT_PUBLIC_SITE_NAME: '라벨르맘(Labellemom)  - 1인샵 산전,산후 전문 관리', // 사이트 이름 설정
    NEXT_PUBLIC_SITE_DESCRIPTION: '라벨르맘 - 1인샵 산전,산후 전문 관리', // 사이트 설명 설정
    NEXT_PUBLIC_SITE_IMAGE: 'https://www.labellemom.co.kr/images/logo.jpeg', // 사이트 이미지 설정
    NEXT_PUBLIC_SITE_LOCALE: 'ko', // 사이트 로케일 설정
    NEXT_PUBLIC_SITE_TYPE: 'website', // 사이트 타입 설정
    NEXT_PUBLIC_SITE_KEYWORDS: '라벨르맘, 산전관리, 산후관리, 1인샵, 전문관리, 산모케어, 산후마사지' // 사이트 키워드 설정
  },
};


export default nextConfig;
