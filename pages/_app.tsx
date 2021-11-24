import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import theme from "@/styles/theme";
import SEO from "../seo.config";
import { Global, css } from "@emotion/react";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      {process.env.NEXT_PUBLIC_UMAMI_ENABLE === "true" && (
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
          ::-webkit-scrollbar-track {
            background: #252525;
          }
          ::-webkit-scrollbar-thumb {
            background: #494949;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #757575;
          }
        `}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
