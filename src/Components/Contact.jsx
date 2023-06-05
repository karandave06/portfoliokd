 import { useState } from 'react';
import '../assets/Style/contact.scss';
 import vg from '../assets/images/vg.png'
 import {toast} from 'react-hot-toast'
 import {motion} from 'framer-motion'
 import {addDoc, collection} from 'firebase/firestore';
 import db from '../store'

const Contact = () => {
const [name,setname] = useState("");
const [email,setemail] = useState("");
const [message,setmessage] = useState("");
const [disableBtn,setdisableBtn] = useState(false)

 
    const submitHandler = async (e)=>{
        e.preventDefault();
        setdisableBtn(true)
       try {

        await addDoc(collection(db,'contacts'),{
            name,
            email,
            message
        })
        
        
        setemail('')
        setname("")
        setmessage('')
        toast.success("Message Sent")
        setdisableBtn(false)

       } catch (error) {
        toast.error("Error");

        console.log(error);
        
       }
    }

    
 const animation = {
    form: {
        initial:{
            x:"-100%",
            opacity:0
        },
        whileInView:{
            x:0,
            opacity:1
        },
        transition:{
            delay:0.3
        }
    },

    button: {
        initial:{
            y:"-100%",
            opacity:0
        },
        whileInView:{
            y:0,
            opacity:1
        },

        transition:{
            delay:0.4
        }
    }
 }

  
  return (
    <div id="contact">
<section>
    <motion.form onSubmit={submitHandler}  {...animation.form}>
        <h2>
            Contact Me
        </h2>

        <input type="text" name='name' value={name} onChange={(e) =>setname(e.target.value)} placeholder='Enter Your Name' required/>
        <input type="email" name='email' value={email} onChange={(e) =>setemail(e.target.value)} placeholder='Enter Your Email' required/>
        <input type="text" name='message' value={message} required onChange={(e) =>setmessage(e.target.value)} placeholder='Enter Message'  />

        <motion.button className={disableBtn ? 'disableBtn': " "} disabled={disableBtn} {...animation.button}>
            Send
        </motion.button>
    </motion.form>
</section>

<aside>
    <img src={vg} alt="contact" />
</aside>
    </div>
  )
}

export default Contact
