import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import theme from "@/styles/theme";
import SEO from "../seo.config";
import { Global, css } from "@emotion/react";
import Script from "next/script";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      {process.env.NEXT_PUBLIC_UMAMI_ENABLE === "true" &&
        process.env.NODE_ENV === "production" && (
          <Script
            src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          />
        )}
      <DefaultSeo {...SEO} />
      <Global
        styles={css`
          ::-webkit-scrollbar {
            width: 0.5rem;
          }

          ::-webkit-scrollbar-thumb {
            background: #7d7d7d;
            border-radius: 0.25rem;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #cacaca;
          }
        `}
      />
      <NextNProgress options={{ showSpinner: false }} color="#48BB78" />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
