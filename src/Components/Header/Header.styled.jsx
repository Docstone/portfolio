import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-evenly;
    align-items:center;
    width:90%;
    margin: 3rem 2rem;
    padding: 2rem 2rem 1rem;
    color: #000000;

    .headerText{
        max-width: 80ch;
    }

    h1{
        color: #000000;
        font-size: 1.4rem;
    }

    h2{
        font-size: 2.4rem;
        margin: 0;
    }
    h3{
        margin: 10px 0;

        span{
        color: #f99a00;
        font-size: 1.4rem;
        }
    }
    p{
        font-size: 1.1rem;
        margin: 0;
    }

    .faceWrap{
       height:20vw;
       border-radius: 50%;
      
        & img{
            height:100%;
        }
    }
    
`;