 import '../assets/Style/services.scss'
 import {motion} from 'framer-motion'
 import {AiFillIeCircle, AiFillWindows, AiFillAndroid} from 'react-icons/ai'

const Services = () => {

   
    const animations = {
        whileInView:{
            x:0,y:0,opacity:1,
        },

        one:{
            x:"-100%",
            opacity:0
        },

        twoandthree:{
            opacity:0,
            y:"-100%"

        },

        four: {
            opacity:0,
            x:"100%"
        }
    }
  return (
    <div id="services">
      <h2>Services</h2>

      <section>
<motion.div className='servicesBox1' whileInView={animations.whileInView} initial={animations.one}>
    <p>
    I am excited to begin my journey and gain practical experience    in <span>MERN</span> sack.
    </p>
</motion.div>

<motion.div className='servicesBox2' whileInView={animations.whileInView} initial={animations.twoandthree}>
    <AiFillIeCircle />
    <span>Web Davelopment</span>
</motion.div>


<motion.div className='servicesBox3' whileInView={animations.whileInView} initial={animations.twoandthree}
transition={{
    delay:0.3
}}
>
    <AiFillAndroid />
    <span>App Davelopment</span>
</motion.div>


<motion.div className='servicesBox4' whileInView={animations.whileInView} initial={animations.four}>
    <AiFillWindows />
    <span>Responsiv Website</span>
</motion.div>
      </section>
    </div>
  )
}

export default Services
