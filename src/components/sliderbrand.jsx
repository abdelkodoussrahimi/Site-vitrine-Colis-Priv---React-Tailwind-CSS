import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { fadeIn} from '../variants'

import {motion} from 'framer-motion'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Import required modules

import { Autoplay , Pagination, FreeMode} from 'swiper/modules';

export default function Sliderbrand() {
  const list = [
    'CP_clients_logo_11-e1607682574289.png',
    'CP_clients_logo_15-e1607682661290.png',
    'CP_clients_logo_16-e1607682677600.png',
    'hhokvgvi.png',
    'LOGO-DEF-RVB-NOIR-Motoblouz-e1611051857680.png',
    'Photobox-e1605191232725.png',
    'CP_clients_logo_11-e1607682574289.png',
    'CP_clients_logo_15-e1607682661290.png',
    'CP_clients_logo_16-e1607682677600.png',
    'hhokvgvi.png',
    'LOGO-DEF-RVB-NOIR-Motoblouz-e1611051857680.png',
    'Photobox-e1605191232725.png',
  ];
  const [slidesPerView, setSlidesPerView] = useState(5);

  const updateSlidesPerView = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1280) {
      setSlidesPerView(5);
    } else if (screenWidth >= 1024) {
      setSlidesPerView(4);
    } else if (screenWidth >= 768) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(2);
    }
  };

  // Appeler updateSlidesPerView lors du chargement initial et du redimensionnement de la fenêtre
  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);

  return (
    <> 
    
    <motion.div variants={fadeIn('left', 0.2)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.2 }} className=''>
  <div className="flex flex-col items-center bg-gray-100 pt-4 w-full ">
    <div className="font-bold text-3xl text-purple-800">
      <h1>Nos partenaires</h1>
    </div>
    <div className="text-gray-800 font-light font-bold text-xl text-center">
      Ils ont choisi Tawssil!
      <br />
    </div>
  </div>
  <div className='bg-gray-100'>
    <Swiper
        slidesPerView={slidesPerView}   
           spaceBetween={20}
      freeMode={true}
      modules={[FreeMode, Pagination, Autoplay]} // Include Autoplay module
      autoplay={{ delay: 2200 }} // Set autoplay delay in milliseconds
      className="mySwiper"
    >
      {list.map((e) => (
        <SwiperSlide key={e}>
          <div className='h-40 w-40 p-4 md:w-1/2 lg:w-1/4 xl:w-1/5'>
            <img className='w-full m-4   h-full object-contain' src={require(`../assets/brand/${e}`)} alt={`Brand ${e}`} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</motion.div>

    </>
  );
}
