
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import {motion} from 'framer-motion'
import { fadeIn} from '../variants'



export default () => {
const [conterOn,setCounterOn]=useState(false);
    const stats = [
        {
            data: "985500",
            desc: "Colis traités par ans"
        },
        {
            data: "76",
            desc: "Villes couvertes"
        },
        {
            data: "1776",
            desc: "Clients satisfaits"
        },
        {
            data: "36",
            desc: "Types de marchandises"
        },
    ]

    return (
        <section className="py-28 "  style={{ 
            background: '#070b34', /* Fallback color */
            background: '-webkit-linear-gradient(180deg, #070b34 0%, #230047 50%, #5a0c8e 100%)', /* Pour les navigateurs WebKit */
            background: 'linear-gradient(180deg, #070b34 0%, #230047 50%, #5a0c8e 100%)'
          }}>
            <motion.div variants={fadeIn('left',0.5)}
           initial="hidden" 
           whileInView={'show'} className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl xl:mx-auto xl:text-center">
                    <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                        Our customers are always happy
                    </h3>
                    <p className="mt-3 text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.
                    </p>
                </div>
                <motion.div variants={fadeIn('right',0.5)}
           initial="hidden" 
           whileInView={'show'} className="mt-12">
                    <ul className="flex-wrap gap-x-12 gap-y-10 items-center space-y-8 sm:space-y-0 sm:flex xl:justify-center">
                        {
                            stats.map((item, idx) => (
                                <li key={idx} className="sm:max-w-[15rem]">
                                    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
             <h4 className="text-4xl text-white font-semibold" >{conterOn &&
          <CountUp start={0} end={item.data} duration={2} delay={0}/>
          
                                     }+</h4>
                                    </ScrollTrigger>
                                    <p className="mt-3 text-gray-400 font-medium">{item.desc}</p>
                                </li>
                            ))
                        }
                    </ul>
                </motion.div>
            </motion.div>
            <div className="absolute inset-0 max-w-md mx-auto h-80 blur-[118px] sm:h-72" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>
        </section>
    )
}