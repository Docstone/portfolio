import { Content, Banner } from "./Header.styled";
import face from "../../Assets/face.png";



export const Header = () => {
    return (
        <Content>
            <Banner/>
            <div className="headerText">
                <h1>Bonjour! je suis</h1>
                <h2>Matthieu Da Rocha</h2>
                <h3><span>Dévelopeur Web Fullstack</span> Junior basé à Paris</h3>
                <p>Passionné par les technologies de l'information et la programmation, j'ai récemment opéré une reconversion depuis le monde de la gastronomie vers le développement web.</p>
                <p>Diplômé de la formation de Développeur Web d'OpenClassrooms (RNCP 5), j'ai réalisé divers projets que vous retrouverez dans ce portfolio. Mon objectif est de continuer à développer mes compétences et de contribuer à des projets innovants. N'hésitez pas à explorer mes réalisations et à me contacter pour des opportunités de collaboration.</p>
            </div>
            <div className="faceWrap">
                <img src={face} alt="my face" />
            </div>
        </Content>
    );
}


