import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Global Styles */
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #f5f7fa;
    color: #333333;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

`;

export default GlobalStyle;
