import styled from "styled-components";

export const Container = styled.div`
        display: flex;
        flex-direction: row;
        align-items:center;
        margin: 2rem 8%;
        &:hover .content{
                background-color: ${props => props.theme.primary};
                transform: scale(1.05);
                transition:250ms ease-in-out;
                box-shadow: 8px 5px 17px 3px rgba(0,0,0,.3);
      
        }
` 

export const Description = styled.div`
        display:flex;
        color: #000000;
        font-size:1rem;
        line-height: 1.5rem;
        flex-direction:column;
        justify-content:space-between;
        align-items: end;
        margin-left: 4rem;
        height: 50vh;
        width: 40%;

        .sm{
        width: 50%;
        align-self:center;
        margin: 0 25% 2rem;
        }

        .nm{
        width: 70%;
        margin: 0 15% 1rem;
        }

        .lg{
        width: 90%;
        margin: 0 4% 1rem;
        }

        p{
        margin:0;
        }

        .stack{
        padding-right:6px;
        height: 3.5rem;
        }
`

export const ImgWrap = styled.div`
        overflow: hidden;  
        height: 100%;

        img{
                width:100%;
                object-position: top left;
        }
`

export const Content = styled.div`
        display: flex;
        position: relative;
        flex-direction: row;
        justify-content:space-between;
        height: 55vh;
        max-width:55%;
        background-color: #dad9d9;
        padding: .3rem;
        overflow: hidden;    
        text-align: left;
        transform: scale(1);
        transition: 500ms ease-in-out;

        .linksContainer{
                display: flex;
                align-items: center; 
                justify-content: center;
                position: absolute;
                width: 100%;   
                background-color: ${props => props.theme.primary_transparent};
                bottom:0;
                height: 3rem;
                transform:translateY(5rem);
                transition: 500ms ease-in-out;  
        }
        &:hover .linksContainer{
                transform: translateY(0);
        }
`

export const LinkButton = styled.button`
        font-family: 'Inconsolata', monospace;
        font-size: 1rem;
        font-weight: 500;
        height: 1.5rem;
        color: white;
        border-radius: 5px;
        padding: 0 10px;
        margin: 0 1.6rem;
        background-color: ${props => props.theme.primary};
        opacity:3;

        &:hover{
                cursor: pointer;
                background-color: white;
                color: ${props => props.theme.primary};
        }
`