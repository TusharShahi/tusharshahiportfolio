import Head from "next/head";
import Layout from "../src/components/Layout";
import { ContextProvider } from "../src/tools/context";
import "./index.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Tushar Shahi portfolio. Includes experience, skillset and links to projects."
        />
        <meta property="og:title" content="Tushar Shahi" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Tushar Shahi portfolio. Includes experience, skillset and links to projects."
        />
        <meta
          property="og:url"
          content="https://https://tusharshahi.github.io/"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <title>Tushar Shahi</title>
      </Head>
      <ContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    </>
  );
};
export default MyApp;
