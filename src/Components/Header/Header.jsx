import { Content, Banner } from "./Header.styled";
import face from "../../Assets/face.png";



export const Header = () => {
    return (
        <Content>
            <Banner/>
            <div className="headerText">
                <h1>Salut! je suis</h1>
                <h2>Matthieu Da Rocha</h2>
                <h3><span>Dévelopeur Web Fullstack</span> basé à Paris</h3>
                <p>Passionné des technologies d'information et programation j'ai entrepris une reconversion depuis le monde de la gastronomie a celui du dévelopement web</p>
                <p>Diplomé de la formation d'OpenClassrooms (Dévelopeur Web, RNCP 5) durant laquelle j'ai réaliser les projets que vous retrouverez dans ce portfolio.</p>
            </div>
            <div className="faceWrap">
                <img src={face} alt="my face" />
            </div>
        </Content>
    );
}


