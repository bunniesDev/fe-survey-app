import { createGlobalStyle } from 'styled-components';
import CookieRunRegular from './assets/fonts/CookieRun-Regular.woff2';

const GlobalStyles = createGlobalStyle` 

  @font-face {
    font-family: 'CookieRunRegular';
    font-style: normal;
    src: url(${CookieRunRegular}) format('woff'),
      url(${CookieRunRegular}) format('woff2'),
      url(${CookieRunRegular}) format('truetype');
  } 

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html, body {
    font-size: 16px;
    padding: 0;
    margin: 0;
    font-family: 'CookieRunRegular', sans-serif;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    outline: none;
    font: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  #root {
    background-color: #f0f0f0;
    word-break: keep-all;
  }
`;

export default GlobalStyles;
