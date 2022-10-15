import {  Container, Content, ImgWrap, Description, LinkButton } from "./Card.styled";

export const Card = (props) => {
  return (
    <Container>
        <Content className={'content'} theme={props.theme}>
          <ImgWrap>
            <img src={props.cardImage} alt="Capture d'écran"></img>
          </ImgWrap>
          <div className="linksContainer"> 
          {props.Links ? props.Links.map(link => (
            <a href={link.url} key={link.url} target="_blank" rel="noreferrer">
              <LinkButton>{link.text}</LinkButton>
            </a>
          )) : <div></div>}
          </div>
        </Content>
      <Description>
        <div>
          <img src={props.Logo} className={props.logoSize} alt="Logo"></img>
          <p className="description">{props.Description}</p>
        </div>
        <img src={props.Stack} className="stack" alt="Stack" ></img>
      </Description>
    </Container>
  );
}

