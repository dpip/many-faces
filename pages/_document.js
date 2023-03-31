import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <title>Moffett Craft</title>
      <Head>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/images/favicon.ico"
        />
        <meta
          property="og:url"
          content="https://moffettcraftarts.com/"
        />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="your fb app id" />
        <meta property="og:title" content="Moffett Craft" />
        <meta
          name="twitter:card"
          content="Portfolio by Laura Moffett Myers"
        />
        <meta
          property="og:description"
          content="Portfolio by Laura Moffett Myers"
        />
        <meta property="og:image" content={'/images/favicon.ico'} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
