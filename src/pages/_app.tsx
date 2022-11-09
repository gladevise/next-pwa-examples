import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Next.js PWA Example</title>

        {/* PWA settings */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icons/favicon.ico" type="image/png" />
        <link
          rel="apple-touch-icon"
          href="/icons/apple-icon-180.png"
          sizes="180x180"
        />
        <meta name="theme-color" content="#FFFFFF" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
