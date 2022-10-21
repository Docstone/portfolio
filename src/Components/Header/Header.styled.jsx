import styled from "styled-components";
import Images from "../../Assets/Images" 

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
    margin: max(15vw, 2rem) 2vw 10vh;
    width:95%;
    padding: 0 2rem ;
    }
    .headerText{
        z-index: 1;
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
       height:15vw;
       border-radius: 50%;
       margin-left: 1rem;
       z-index: 1;

       @media (max-width: 680px) {
        position: absolute;
        min-height:8rem;
        top:4rem;
        right: 2rem;
        }

        & img{
            height:100%;
        }
    }
`;

export const Banner = styled.div`
    position:absolute;
    top: 0;
    z-index: 0;
    background-image: url(${Images.banner});  
    min-height: 100vh; 
    min-width: 100vw;
    background-attachment: fixed;
    background-position: 50% 55%;
    background-repeat: no-repeat;
    background-size: cover;
    
    &::after{
        content: "";
        z-index: 0;
        display: block;
        position: absolute;
        width: 100vw;
        height: 100vh;
        background: rgb(255,255,255);
        background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(234,238,237,1) 10%, rgba(21,67,51,0) 100%);
        
        @media (max-width: 680px ) {
            background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(234,238,237, 1) 15%, rgba(21,67,51,0) 100%);
    }
    }

    @media (max-width: 680px ) {
        background-position: 50% 20%;
    }
`