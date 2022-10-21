import Nav from "./Components/Nav/Nav";
import { Header } from "./Components/Header/Header";
import { Card } from "./Components/Cards/Card";
import { GlobalStyle } from "./Layout/GlobalStyles";
// import { BGShapes } from "./Layout/BackgroundShapes"
import Images from "./Assets/Images";
import { ThemeProvider } from "styled-components";
// import { ParallaxProvider } from 'react-scroll-parallax';


function App() {
  return (
      <div className="Wrap">
        <GlobalStyle />
        <Nav/>
        <Header/>
        <ThemeProvider theme={themeBooki}>
        <Card
          cardImage={Images.bookiSC}
          Logo={Images.bookiLogo} logoSize={'sm'}
          Description={"Dévelopement d'un prototype responsive a partir de maquettes desktop et mobile conforme aux standards W3C (Découpage, assemblage et intégration des éléments en HTML/CSS)."}
          Stack={Images.stackHC}
          Links={[{text:'Voir la Page', url: 'https://docstone.github.io/P2_Booki/'}, {text:'Voir le Code', url: 'https://github.com/Docstone/P2_Booki'}]}
          />
        </ThemeProvider>
        <ThemeProvider theme={themeOhmyfood}>
        <Card
          cardImage={Images.ohmyfoodSC}
          Logo={Images.ohmyfoodLogo} logoSize={'nm'}
          Description={"Intégration responsive en mobile first de 5 pages statiques, Création d'effets graphiques et animations à partir de maquettes en CSS 'vanille, Versionnage du code sur Git."}
          Stack={Images.stackHCS}
          Links={[{text:'Voir les Pages', url: 'https://docstone.github.io/P3_Ohmyfood/'}, {text:'Voir le Code', url: 'https://github.com/Docstone/P3_Ohmyfood'}]}
          />
        </ThemeProvider>
        <ThemeProvider theme={themeChouette}>
        <Card
          cardImage={Images.chouetteSC}
          Logo={Images.chouetteLogo} logoSize={'lg'}
          Description={"Amélioration de SEO, accessibilité et performances d'un site web existant a l'aide d'outils (Google analytics, GTMetrics, ...) Rédaction de rapports d'analyse et d'optimisation."}
          Stack={Images.stackGHC}
          Links={[{text:'Voir les Pages', url: 'https://docstone.github.io/P4_La_Chouette_Agence/'}, {text:'Voir le Code', url: 'https://github.com/Docstone/P4_La_Chouette_Agence'}]}
          />
        </ThemeProvider>
        <ThemeProvider theme={themeKanap}>
        <Card cardImage={Images.kanapSC}
          Logo={Images.kanapLogo} logoSize={'nm'}
          borderColor={'kanap'}
          Description={"Intégration dynamique des éléments d'une API dans les différentes pages web avec JavaScript et mise en place d'un plan de test d'acceptation."}
          Stack={Images.stackJ}
          Links={[{text:'Voir le Code', url: 'https://github.com/Docstone/P5-Dev-Web-Kanap'}]}
          />
        </ThemeProvider>
        <ThemeProvider theme={themeHot}>
        <Card
          cardImage={Images.hottakesSC}
          Logo={Images.hottakesLogo} logoSize={'nm'}
          Description={"Dévelopement du backend; Création de l'API REST (Routes, controllers, Middlewares..) et base de données mongoDB sécurisé selon le RGPD et l’OWASP."}
          Stack={Images.stackNEM}
          Links={[{text:'Voir le Code', url: 'https://github.com/Docstone/P6_Piiquante'}]}
          />
        </ThemeProvider>
        <ThemeProvider theme={themeGroupo}>
        <Card
          cardImage={Images.groupoSC}
          Logo={Images.groupoLogo} logoSize={'lg'}
          Description={"Création d'une première version d'un réseau social d'entreprise accueillant publications texte, multimédia, commentaires et compte modérateur. Réaliser avec ReactJS en framework front, BDD mySQL et API express."}
          Stack={Images.stackMERN}
          Links={[{text:'Voir le Code', url: 'https://github.com/Docstone/P6_Groupofull'}]}
          />
        </ThemeProvider>
    </div>
  );
}

const themeBooki = {
  primary : 'rgba(0,84,251,1)',
  primary_transparent : 'rgba(0,84,251,.8)',
  secondary: '#0054FB',
  text: 'white'
} 
const themeOhmyfood = {
  primary : 'rgba(147,86,220,1)',
  primary_transparent : 'rgba(147,86,220,.8)',
  secondary: '#FF79DA',
  text: 'white'
} 
const themeChouette = {
  primary_transparent : 'rgba(200,127,93,.8)',
  primary : '#C87F5D',
  secondary: '#C87F5D',
  text: 'white'
} 
const themeKanap = {
  primary_transparent : 'rgba(44,62,80,.8)',
  primary : '#2C3E50',
  secondary: '#3498DB',
  text: 'white'
} 
const themeHot = {
  primary_transparent : 'rgba(0,0,0,.8)',
  primary : '#000000',
  secondary: 'white',
  text: 'white'
} 
const themeGroupo = {
  primary_transparent : 'rgba(66, 72, 116, .8)',
  primary : 'rgba(66, 72, 116, 1)',
  secondary: '#424874',
  text: 'white'
} 

export default App;
