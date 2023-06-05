 import '../assets/Style/hamberberger.scss'

const Hambargar = ({menueopen,setmenueopen}) => {
  return (
    <div className={`${menueopen} ?  NavphoneComes : Navphone `}>

    <h2>Karan.</h2>

       <div className="menue">
        <a href="#home" onClick={() => setmenueopen(!menueopen)}>Home</a>
        <a href="#work" onClick={() => setmenueopen(!menueopen)} >Work</a>
        <a href="#experience"  onClick={() => setmenueopen(!menueopen)}>Skills</a>
        <a href="#services"  onClick={() => setmenueopen(!menueopen)}>Services</a>
        <a href="#testimonial"  onClick={() => setmenueopen(!menueopen)}>Testimonial</a>
        <a href="#contact"  onClick={() => setmenueopen(!menueopen)}>Contact</a>
      </div>

      <a href="mailto:karandave503@gmail.com" target={"blank"}>
        <button>Email</button>
      </a>
    </div>
  )
}

export default Hambargar
