import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`  

    * {
    box-sizing: border-box;
    }

    body {
        background: #ffffff;
        font-family: 'Inconsolata', monospace;
        font-weight: 600;
        overflow-x: hidden;
    }

    h1 {
        margin: 0;
    }

    ul {
        list-style: none;
    }
`;

export default GlobalStyle