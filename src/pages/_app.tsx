import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header/Header";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>QuickSeat</title>
        <meta name="description" content="QuickSeat" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header />
      <MantineProvider theme={{ primaryColor: "violet" }}>
        <Component {...pageProps} />
      </MantineProvider>
      <Footer />
    </div>
  );
}
