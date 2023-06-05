import "../assets/Style/Home.scss";
import me from  "../assets/images/avtar-removebg-preview.png"
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import {BsArrowUpRight, BsChevronDown} from 'react-icons/bs'
import resume from '../assets/Karan Dave.pdf'
 

const Home = () => {
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
      transition:{
        delay:0.4
      }
    },

    img:{
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },

    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Karan Dave
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a target={'blank'} href="mailto:karandave503@gmail.com">Hire Me</a>

            <a href={resume} download={true}> Downolad CV
            </a>

           
          </div>
        </div>


      </section>

      <section >
        <img src={me} alt="Karan"  />
      </section>
<a href="#work">
      <BsChevronDown />
</a>
    </div>
  );
};

export default Home;
