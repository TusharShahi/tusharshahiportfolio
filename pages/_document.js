import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
            rel="preload"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap"
            rel="preload"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <style jsx global>{`
            #__next {
              width: 100%;
            }
            #__next > body {
              width: 100%;
            }
            #__next > body > div {
              width: 100%;
            }
          `}</style>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
