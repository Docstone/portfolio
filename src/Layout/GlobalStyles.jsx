import { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`  

    * {
    box-sizing: border-box;
    }
  
    body, .Wrap{ 
        margin: 0; 
        padding: 0; 
        min-height: 100vh;
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

export const fadeIn = keyframes`
    0%{opacity: 0}
    50%{opacity:.3}
    100%{opacity: 1}
`