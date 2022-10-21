import styled from "styled-components";
import Images from "../../Assets/Images" 
import { fadeIn } from "../../Layout/GlobalStyles"

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-evenly;
    align-items:center;
    width:80%;
    margin: 3rem auto;
    padding: 2rem 2rem 1rem;
    color: #000000;
    animation: ${fadeIn} 1.5s ease-out;

    @media (max-width: 680px) {
    margin: max(15vw, 2rem) 2vw 10vh;
    width:95%;
    padding: 0 .7rem ;
    }
    .headerText{
        z-index: 1;
        animation: ${fadeIn} 2s ease-out;
    }
    h1{
        color: #000000;
        font-size: 1.2rem;
        @media (max-width: 680px) {
            margin-bottom: 1.3rem;
        }
    }

    h2{
        font-size: 2.2rem;
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
        color: #dd6829;
        font-size: 1.4rem;
        }
    }

    p{
        font-size: 1rem;
        max-width: 45vw;
        margin: 0 0 20px;
        @media (max-width: 680px) {
        max-width: none;

        }
    }

    .faceWrap{
       height:15vw;
       border-radius: 50%;
       margin-left: 1rem;
       z-index: 1;
       animation: ${fadeIn} 1.2s ease-out;


       @media (max-width: 680px) {
        position: absolute;
        min-height:30vw;
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
    animation: ${fadeIn} 1s 1 ease-out;
    
    &::after{
        content: "";
        z-index: 0;
        display: block;
        position: absolute;
        width: 100vw;
        height: 100vh;
        background: rgb(255,255,255);
        background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(234,238,237,.7) 25%, rgba(21,67,51,0) 100%);
        
        @media (max-width: 680px ) {
            background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(234,238,237,.4) 40%, rgba(21,67,51,0) 100%);
    }
}`

