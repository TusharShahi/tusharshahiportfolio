import Document, { Head, Html, Main, NextScript } from "next/document";
import { useMemo } from "react";
import { colorPalette, filter } from "../src/tools/constants";

const MyDocument = ({ theme }) => {
  const styleObject = useMemo(() => {
    let correctTheme =
      colorPalette[(theme === undefined ? "LIGHT" : theme).toLowerCase()];
    let correctFilter =
      filter[(theme === undefined ? "LIGHT" : theme).toLowerCase()];
    const styles = {};

    Object.entries(correctTheme).forEach(([key, value]) => {
      styles[`--${key}`] = value;
    });
    styles[`--socialIconsfilter`] = correctFilter.socialMediaIcon;
    return styles;
  }, [colorPalette, filter]);

  return (
    <Html lang="en" style={styleObject}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
          rel="preload"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap"
          rel="preload"
          as="style"
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
          html {
            background: yellow;
          }
        `}</style>
      </body>
    </Html>
  );
};

MyDocument.getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx);
  const theme = ctx.req?.cookies?.themeSwitch ?? "LIGHT";
  return { ...initialProps, theme };
};

export default MyDocument;
