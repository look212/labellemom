import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Seo from "@/components/Seo";
import FloatingButtons from "@/components/FloatingButtons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Navbar />
    <Seo />
    <Component {...pageProps} />
    <FloatingButtons />
    <Footer />
    </>
  );
}
