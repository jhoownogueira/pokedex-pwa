import type { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/styles/themes/default";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
  );
}