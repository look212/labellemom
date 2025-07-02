import { Html, Head, Main, NextScript } from "next/document";
import { env } from "@/config/env";

export default function Document() {
  return (
    <Html lang={env.siteLocale}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="naver-site-verification" content="434f1d1c9e1f4880ce8892fedae7b77ffe5a5cc6" />
        <link rel="canonical" href={env.siteUrl} />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
