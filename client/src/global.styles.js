import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
    font-family: "Karla", sans-serif;
    padding: 20px 60px;

    @media screen and (max-width: 800px) {
        padding: 10px;
    }
  }
  
  a {
    text-decoration: none;
    color: lightgray;
  }
  
  * {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  
  span,
  h2 {
    color: lightgray;
  }
  
`;