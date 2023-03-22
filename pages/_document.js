import { Html, Head, Main, NextScript } from 'next/document';

import HeadDetails from '../components/HeadDetails';

export default function Document() {
  return (
    <Html>
      <title>The Many Faces Initiative</title>
      <Head>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/images/favicon.ico"
        />
        {/* <HeadDetails /> */}
        <meta property="og:url" content="your url" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="your fb app id" />
        <meta
          property="og:title"
          content="Social Media Preview Working?"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="DEI Internship in Craft Brewing"
        />
        <meta property="og:image" content={'url of image'} />
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
