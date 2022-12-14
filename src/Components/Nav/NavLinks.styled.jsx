import styled from "styled-components";

export const Wrapper = styled.nav`
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 100%;
    top:0;
    left:0;
    width:4rem;
    color: #090606;
    z-index: 10;
    
    @media (max-width: 680px) {
        position: relative;
        flex-direction: row;
        width: 100vw;
        height: 5rem;
        margin: 1rem 0 0; 
    }

    .Icons{
        margin: 1.5rem 0 0 1rem;
        @media (max-width: 680px) {
            margin: 2vh 1rem 0;
            height: 2.5rem;
            width: 2.5rem;
        }

        &Link{
            color: black;
            &:hover{
                cursor: pointer;
                color: #ba8722;
            }
        }
    }

    .contactWrap{
            margin-top: 10vh;

            @media (max-width: 680px) {
                margin:1vh 2vw;
            }
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

   .scrollArrow{
    width: 2.5rem;
    height: 2.5rem;
   }
`
