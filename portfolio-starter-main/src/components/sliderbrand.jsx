import React, { useRef, useState } from 'react';
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

  return (
    <> 
    
    <motion.div  variants={fadeIn('left',0.2)}
           initial="hidden" 
           whileInView={'show'} 
          viewport={{once:false,amount:0.2}}  className='m-4 py-12 rounded-lg shadow-2xl m-12 shadow-indigo-500/50  '>
    <div className="flex flex-col items-center  pt-4 w-full ">
  <div className="font-bold text-3xl text-purple-800">
   <h1>Nos partenaires</h1> 
  
  </div>
  <div className="pb-4 text-gray-800 font-light font-bold text-xl text-center">
    Ils ont choisi Tawssil!
    <br />
  </div>
</div>
    <div className=''>
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        freeMode={true}
     
        modules={[FreeMode, Pagination, Autoplay]} // Include Autoplay module
        autoplay={{ delay: 2200 }} // Set autoplay delay in milliseconds
        className="mySwiper  "
      >
        {list.map((e) => (
          <SwiperSlide>
            <div className=' h-24'>

            <img className='w-28 h-24' src={require(`../assets/brand/${e}`)} />           
             </div>

          </SwiperSlide>
        ))}
      </Swiper>
      </div> 
       </motion.div>
    </>
  );
}
