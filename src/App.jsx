import { Toaster } from "react-hot-toast"
import Contact from "./Components/Contact"
import Expirence from "./Components/Expirence"
import Header from "./Components/Header"
import Home from "./Components/Home"
import Services from "./Components/Services"
 
import Work from "./Components/Work"
import './assets/Style/app.scss'
import Footer from "./Components/Footer"
import SliderTestimonial from "./Components/SliderTestimonial"
 
 

 

function App() {
 
 
  return (
    <>
    <Header  />
    <Home /> 
     <Work />
    <Expirence />
    <Services />
    <SliderTestimonial />
    <Contact />
    <Footer />
  
    <Toaster />
    </>
  )
}

export default App
