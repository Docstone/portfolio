import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-evenly;
    align-items:center;
    width:80%;
    margin: 3rem auto;
    padding: 2rem 2rem 1rem;
    color: #000000;

    @media (max-width: 680px) {
    margin: max(16vh, 2rem) .5rem 10vh;
    width:95%;
    padding: 0 ;
    }

    h1{
        color: #000000;
        font-size: 1.4rem;
        @media (max-width: 680px) {
            margin-bottom: 1.3rem;
        }
    }

    h2{
        font-size: 2.4rem;
        margin: 0;
        @media (max-width: 680px) {
            font-size: 1.8rem;
            margin-bottom:1.3rem;
        }
    }
    h3{
        margin: 10px 0;
        @media (max-width: 680px) {
            margin-bottom:1.3rem;
        }

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
       margin-left: 1rem;

       @media (max-width: 680px) {
        position: absolute;
        height: min(35vw, 10rem);
        top: 5vw;
        right: 8vw;
        }

        & img{
            height:100%;
        }
    }
    
`;