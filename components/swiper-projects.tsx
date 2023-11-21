/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './swiper.css';
import { Pagination } from 'swiper/modules';

type SwiperImage = {
  images: string[];
};
export default function SwiperProjects({ images }: SwiperImage) {
  React.useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);
  return (
    <div className="flex flex-col items-center justify-center  w-[80%] h-[100%] ">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <React.Fragment key={index}>
            <SwiperSlide>
              <img src={image} alt="Project image" />
            </SwiperSlide>
          </React.Fragment>
        ))}
      </Swiper>
    </div>
  );
}
