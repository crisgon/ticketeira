import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    color: ${({ theme }) => theme.colors.primary};
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    background-color: ${({ theme }) => theme.colors.dark_blue};
  }
`;

export default GlobalStyle;
