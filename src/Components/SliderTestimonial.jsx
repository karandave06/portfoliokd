import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

 import '../assets/Style/slidertestmonial.scss'

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";
import Card from "./Card";
const SliderTestimonial = () => {
  return (
    <div id="testimonial">
    <h2>Testimonial </h2>
        <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={false}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Card name={'Hena'} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRstAt2crgsDM6AxDAHaxc0BR5hQARs2biDbg&usqp=CAU'}/>
        </SwiperSlide>
        <SwiperSlide>
        <Card name={'Justin'} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgJU-HMUetyBcz6z4rd__kL6EQ-sFof4_Ixg&usqp=CAU'}/>
        </SwiperSlide>
        <SwiperSlide>
        <Card name={'Shalena'} src={'https://cdn.wallpapersafari.com/7/26/NDz5C2.jpg'}/>
        </SwiperSlide>
        
      </Swiper>
   
    
    </div>
  )
}

export default SliderTestimonial
