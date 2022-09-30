import styled from "styled-components";

export const Wrapper = styled.nav`
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 100%;
    top:0;
    left:0;
    height: 100vh;
    width:4rem;
    color: #090606;
    z-index: 10;
    
    .Icons{
        margin: 1.5rem 0 0 1rem;
        
        &Link{
            height: 3rem;
            color: black;

            &:hover{
                cursor: pointer;
                color: #ba8722;
            }
        }
      
    }

    .contactWrap{
            margin-top: 14vh;
        }
`;

export const Button = styled.div`
   position: fixed; 
   left: 1rem;
   bottom: 40px;
   z-index: 1;
   cursor: pointer;
   color: #000000;
   &:hover{
    color: #ba8722;
   }
`
