import {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import { Button } from './NavLinks.styled';
import { Fade } from "react-awesome-reveal";

  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button>
     <Fade duration={5000}>
         <FaArrowCircleUp className='scrollArrow'
         onClick={scrollToTop}
         style={{display: visible ? 'inline' : 'none' }} />
     </Fade>
    </Button>
  );
}
  
export default ScrollButton;