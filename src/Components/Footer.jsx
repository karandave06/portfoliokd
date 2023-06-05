 import '../assets/Style/footer.scss'
 import me from '../assets/images/footerimg1.png'
 import me2 from '../assets/images/footerimg2.jpeg'


 import {AiOutlineArrowUp, AiFillInstagram,AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer >

    <div>

     

      <img src={me2} alt="image is hear" />

    

      <h2>Karan Dave</h2>

      <p>Program with purpose, and watch as your lines of code shape a better tomorrow. </p>

    </div>

    <aside>
        <h2>
            Social Media
        </h2>

        <article>
            <a target={'blank'} href="https://www.instagram.com/"><AiFillInstagram /></a>
        </article>

        <article>
            <a target={'blank'} href="https://www.linkedin.com/in/karan-dave-18702324b/"><AiFillLinkedin /></a>
        </article>

        <article>
            <a target={'blank'} href="https://github.com/karandave06"><AiFillGithub /></a>
        </article>
    </aside>
    <a href="#home">

        <AiOutlineArrowUp />
    </a>
    </footer>
  )
}

export default Footer
