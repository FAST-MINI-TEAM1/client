import GlobalStyle from "@styles/GlobalStyle";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>TEAM1</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
