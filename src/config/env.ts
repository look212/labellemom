export const env = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  githubPages: process.env.NEXT_PUBLIC_GITHUB_PAGES === "true",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "",
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || "",
  siteDescription: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "",
  siteImage: process.env.NEXT_PUBLIC_SITE_IMAGE || "",
  siteLocale: process.env.NEXT_PUBLIC_SITE_LOCALE || "ko",
  siteType: process.env.NEXT_PUBLIC_SITE_TYPE || "website",
  siteKeywords: process.env.NEXT_PUBLIC_SITE_KEYWORDS || "라벨르맘, 산전관리, 산후관리, 1인샵, 전문관리",                     
};