import { Content } from "./Header.styled";
import face from "../../Assets/face.png";


export const Header = () => {
    return (
        <Content>
            <div className="headerText">
                <h1>Salut! je suis</h1>
                <h2>Matthieu Da Rocha</h2>
                <h3><span>Dévelopeur Web Fullstack Junior</span> basé à Paris et Tokyo.</h3>
                <p>Fraîchement diplomé de la formation de dévelopeur Web d'OpenClassrooms, durant laquelle j'ai réaliser les projets suivants :</p>
            </div>
            <div className="faceWrap">
                <img src={face} alt="my face" />
            </div>
        </Content>
    );
}


