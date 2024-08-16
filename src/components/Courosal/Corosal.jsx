import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/effect-coverflow'; 
import 'swiper/css/pagination'; 

import { CoverflowEffect, Pagination } from 'swiper';


import { imgdata } from '../../Data/imgdata';

const Corosal = () => {
  return (
    <Swiper
      modules={[CoverflowEffect, Pagination]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      className="mySwiper"
    >
      {imgdata.map((val, index) => (
        <SwiperSlide key={index}>
          <div
            className="carouselItem"
            style={{ backgroundImage: `url(${val})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}
          >
            {/* Optionally, add content inside the carousel item */}
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};

export default Corosal;
