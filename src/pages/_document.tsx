import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko" className="dark:bg-gray-900 dark:text-gray-100">
      <Head>
        <meta name="naver-site-verification" content="e46a566a12cf5eaa343ee6e1eca5ce21512c2eab" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
