import { Wrapper } from './NavLinks.styled';
import { IconContext } from 'react-icons';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import ScrollButton from './ScrollButton';
import { useSpring, animated } from 'react-spring';

const Nav = () => {
        const slide = useSpring({  config: { mass: 1, friction: 28}, from: { x: -200, opacity:  0 }, to: {  x: 0, opacity:   1 }})
        return (
            <Wrapper>
                <animated.div style={slide} className="contactWrap">
                <IconContext.Provider value={{ size: "35", className: 'Icons' }}>
                    <a className="IconsLink" href="mailto:darochamtth@gmail.com">
                        <FaEnvelope title={"Envoyer un Email"}/>
                    </a>
                    <a className="IconsLink" href="https://www.linkedin.com/in/darochamtth/" target='blank'>
                    <FaLinkedin title={"Profil Linkedin"}/>
                                    </a>
                    <a className="IconsLink" href="https://github.com/Docstone" target="blank">
                        <FaGithub title={"Profil Github"}/>
                    </a>
                </IconContext.Provider>
                </animated.div>
             <ScrollButton/>
            </Wrapper>
    );
}

export default Nav;
