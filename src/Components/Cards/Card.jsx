import {  Container, Content, ImgWrap, Description, LinkButton } from "./Card.styled";
import { useState } from "react";
import { useSpring, animated } from "react-spring"
import { Waypoint } from "react-waypoint";


export const Card = (props) => {

  const SlideIn = ({ children }) => {
    const [inView, setInView ] = useState(false);
    const slide = useSpring({  config: { mass: 1, friction: 28},  to: {  x: !inView ? 2000 : 0, opacity: !inView ? 0 : 1 }})
    return (
      <Waypoint topOffset='30%' bottomOffset='30%'  scrollableAncestor={window}  onEnter={() => setInView(true)}>
        <animated.div style={slide}>
          {children}
        </animated.div>
      </Waypoint>
    );
  }
  
  return (
      <SlideIn>
        <Container>
            <Content className={'content'} theme={props.theme}>
              <ImgWrap>
                <img className="fadeIn" src={props.cardImage} alt="Capture d'écran"></img>
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
      </SlideIn>
  );
}

