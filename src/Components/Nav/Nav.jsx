import { Wrapper } from './NavLinks.styled';
import { IconContext } from 'react-icons';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import ScrollButton from './ScrollButton';
import { Slide } from 'react-awesome-reveal';

const Nav = () => {
    return (
            <Wrapper>
             <Slide>
                 <div className="contactWrap">
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
                 </div>
             </Slide>
             <ScrollButton/>
            </Wrapper>
    );
}

export default Nav;
