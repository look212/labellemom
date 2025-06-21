import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Seo from "@/components/Seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Seo />
    <Component {...pageProps} />
    </>
  );
}
