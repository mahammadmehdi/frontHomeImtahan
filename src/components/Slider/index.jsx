import React, { useRef, useState } from 'react';
import "./index.css"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider() {
  return (
    <div >
    <Swiper
      
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop={true}        
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><div className='flowerBrown'><div>Floral</div> <h1 style={{fontSize:"46px",}}>Excellent bouquets for you</h1>
        </div> </SwiperSlide>
      <SwiperSlide> <div className='flowerRed'><div>Floral</div> <h1 style={{fontSize:"46px"}}>Excellent bouquets for you</h1></div> </SwiperSlide>
      <SwiperSlide><div className='flowerWhite'><div>Floral</div> <h1 style={{fontSize:"46px"}}>Excellent bouquets for you</h1></div></SwiperSlide>
    
      ...
    </Swiper>
    </div>
  );
}
