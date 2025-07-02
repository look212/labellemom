import Head from "next/head";
import { env } from "@/config/env";

type SeoProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

export default function Seo({
  title = env.siteName,
  description = env.siteDescription,
  image = env.siteImage,
  url = env.siteUrl,
}: SeoProps) {
    return (
        <Head>
            <title>{title ? title : env.siteName}</title>
            <meta name="description" content={description ? description : env.siteDescription} />
            <meta name="keywords" content={env.siteKeywords} />
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content={title ? title : env.siteName} />
            <meta property="og:description" content={description ? description : env.siteDescription} />
            <meta property="og:url" content={url ? url : env.siteUrl} />
            <meta property="og:site_name" content={title ? title : env.siteName} />
            <meta property="og:image" content={image ? image : env.siteImage} />
            <meta property="og:locale" content={env.siteLocale} />
            <meta property="og:type" content={env.siteType} />
            <meta name="robots" content="index,follow" />
        </Head>
    )
}