"use client";

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/swiper-bundle.css';
import slider1 from "../../app/assets/images/banner01.jpg";

 

const SwiperSlider = () => {
  
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={6}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
         <img src={slider1.src}/>
      </SwiperSlide>
      <SwiperSlide>
         <img src={slider1.src}/>
      </SwiperSlide>
       
     </Swiper>
  );
};

export default SwiperSlider;
 