import { Html, Head, Main, NextScript } from "next/document";
import { env } from "@/config/env";

export default function Document() {
  return (
    <Html lang={env.siteLocale}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="naver-site-verification" content="e46a566a12cf5eaa343ee6e1eca5ce21512c2eab" />
        <link rel="canonical" href={env.siteUrl} />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
