import Header from "@components/common/Header";
import GlobalStyle from "@styles/GlobalStyle";
import { theme } from "@styles/theme";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TEAM1</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
