import { useState } from "react";
import "../assets/Style/navitems.scss";
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import Hambargar from "./Hambargar";

const Navitem = () => {
  const [menueopen, setmenueopen] = useState(false);
  console.log(menueopen);
  return (
    <div id="nav">
   

      <h2>Karan.</h2>

      <div className="menue">
        <a href="#home" >Home</a>
        <a href="#work" >Work</a>
        <a href="#experience" >Skills</a>
        <a href="#services" >Services</a>
        <a href="#testimonial" >Testimonial</a>
        <a href="#contact" >Contact</a>
      </div>

      <a href="mailto:karandave503@gmail.com" target={"blank"}>
        <button>Email</button>
      </a>

      <button id="hambargar" onClick={() => setmenueopen(!menueopen)}>
       {
        menueopen ?  <AiOutlineClose  /> : <AiOutlineMenu />
       } 
      </button>
       {
        menueopen ? (   <Hambargar menueopen={menueopen} setmenueopen={setmenueopen}/> ) : " "
       }
    
    </div>
  );
};

export default Navitem;
