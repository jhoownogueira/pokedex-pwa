import type { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/styles/themes/default";
import {PokemonsContextProvider} from "@/context/pokemonsContext";

type ComponentWithPageLayout = AppProps & {
    Component: AppProps["Component"] & {
        PageLayout?: React.ComponentType | any;
    };
};

export default function App({ Component, pageProps }: ComponentWithPageLayout) {
  return (
      <PokemonsContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
          {Component.PageLayout ? (
              <Component.PageLayout>
                  <Component {...pageProps} />
              </Component.PageLayout>
          ) : (
              <Component {...pageProps} />
          )}
      </ThemeProvider>
      </PokemonsContextProvider>
  );
}