import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'ClashDisplay';
    font-style: normal;
    font-weight: 300;
    src: url('/fonts/ClashDisplay-Extralight.woff') format('woff');
  }

  @font-face {
    font-family: 'ClashDisplay';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/ClashDisplay-Light.woff') format('woff');
  }

  @font-face {
    font-family: 'ClashDisplay';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/ClashDisplay-Regular.woff') format('woff');
  }

  @font-face {
    font-family: 'ClashDisplay';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/ClashDisplay-Medium.woff') format('woff');
  }

  @font-face {
    font-family: 'ClashDisplay';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/ClashDisplay-Semibold.woff') format('woff');
  }

  @font-face {
    font-family: 'ClashDisplay';
    font-style: normal;
    font-weight: 800;
    src: url('/fonts/ClashDisplay-Bold.woff') format('woff');
  }
  
  * {
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
  }

  html {
    font-family: 'ClashDisplay', sans-serif;
    font-weight: 500;
    @media (max-width: 1290px) {
      font-size: 93.75%;
    }
    @media (max-width: 1000px) {
      font-size: 87.50%;
    }
    @media (max-height: 650px) {
      font-size: 93.75%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: ${props => props.theme.bg};
  }

  body, input, textarea, button {
    font-family: 'ClashDisplay', sans-serif;
    font-weight: 500;
    font-size: 1rem;
  }

  button, a {
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  *::-webkit-scrollbar {
    width: 4px;
  }

  *::-webkit-scrollbar-track {
    background: white;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme["primary"]};
    border-radius: 20px;
  }
`;