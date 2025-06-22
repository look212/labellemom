import { Html, Head, Main, NextScript } from "next/document";
import { env } from "@/config/env";

export default function Document() {
  return (
    <Html lang={env.siteLocale} className="dark:bg-gray-900 dark:text-gray-100">
      <Head>
        <title>{env.siteName}</title>
        <meta name="description" content={env.siteDescription} />
        <meta name="keywords" content={env.siteKeywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={env.siteName} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={env.siteName} />
        <meta property="og:description" content={env.siteDescription} />
        <meta property="og:image" content={env.siteImage} />
        <meta property="og:url" content={env.siteUrl} />
        <meta property="og:type" content={env.siteType} />
        <link rel="canonical" href={env.siteUrl} />
        <meta name="naver-site-verification" content="e46a566a12cf5eaa343ee6e1eca5ce21512c2eab" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
