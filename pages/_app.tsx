import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Upscayl - AI Image Upscaler</title>
        <meta
          name="description"
          content="Upscayl - Free and Open Source AI Image Upscaler"
        />
        <link rel="icon" type="image/png" href="/logo.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://upscayl.github.io" />
        <meta
          name="twitter:title"
          content="Upscayl - Free and Open Source AI Image Upscaler"
        />
        <meta
          name="twitter:description"
          content="Free and Open Source AI Image Upscaler for Linux, MacOS and Windows"
        />
        <meta
          name="twitter:image"
          content="https://upscayl.github.io/ogimage.png"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Upscayl - Free and Open Source AI Image Upscaler"
        />
        <meta
          property="og:description"
          content="Free and Open Source AI Image Upscaler for Linux, MacOS and Windows"
        />
        <meta property="og:site_name" content="Upscayl" />
        <meta property="og:url" content="https://upscayl.github.io" />
        <meta
          property="og:image"
          content="https://upscayl.github.io/ogimage.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
