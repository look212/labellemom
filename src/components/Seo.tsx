import Head from "next/head";
import { env } from "@/config/env";

export default function Seo() {
    return (
        <Head>
            <title>{env.siteName}</title>
            <meta name="description" content={env.siteDescription} />
            <meta name="keywords" content={env.siteKeywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href={`${env.basePath}/favicon.ico`} />
            <meta property="og:title" content={env.siteName} />
            <meta property="og:description" content={env.siteDescription} />
            <meta property="og:url" content={env.siteUrl} />
            <meta property="og:site_name" content={env.siteName} />
            <meta property="og:image" content={env.siteImage} />
            <meta property="og:locale" content={env.siteLocale} />
            <meta property="og:type" content={env.siteType} />
        </Head>
    )
}