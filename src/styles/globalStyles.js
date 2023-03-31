import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: #282a36;
    font-family: 'Roboto';
    color: #f8f8f2;
  }
`;

export default GlobalStyle;
