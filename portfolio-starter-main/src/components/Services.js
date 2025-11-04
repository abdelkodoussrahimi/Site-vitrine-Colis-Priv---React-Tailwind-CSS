import React from 'react';
import { fadeIn} from '../variants'

import {motion} from 'framer-motion'


const Services = () => {
  

    const data = [
      { 
        id: 1, 
        title: "Confirmation", 
        description: "Notre équipe est à votre disposition pour appeler confirmer vos commandes.", 
        image: require('../assets/Design sans titre(1)/centre.png'),
      },
      { 
        id: 2, 
        title: "Ramassage", 
        description: "Notre équipe dédiée assure le ramassage rapide de vos colis à l’emplacement désigné.", 
        image: require('../assets/Design sans titre(1)/1.png'),
      },
      { 
        id: 3, 
        title: "Expédition", 
        description: "Une fois collectés, vos colis sont soigneusement expédiés vers les villes destinataires.", 
        image: require('../assets//Design sans titre(1)/3.png'),
      },
      { 
        id: 4, 
        title: "Livraison", 
        description: "Une fois arrivés à la ville destinataires nos livreurs prennent le relais pour assurer une livraison rapide et fiable.", 
        image: require('../assets/Design sans titre(1)/2.png'),
      },
      { 
        id: 5, 
        title: "Retour Du Fond", 
        description: "Après la livraison des colis, vous obtenez rapidement le retour de fond.", 
        image: require('../assets//Design sans titre(1)/4.png'),
      }
    ];
  
      return (
          <>
          <motion.div variants={fadeIn('left',0.5)}
           initial="hidden" 
           whileInView={'show'} 
          viewport={{once:false,amount:0.2}}
          className="flex justify-center  py-12 items-center flex-col">
      <div className="text-2xl text-center text-black">
        <span className="font-bold text-purple-800">Comment</span> ça fonctionne ?
      </div>
      <div className="mt-5 text-center text-black  p-4 max-w-lg">
        Chez Digylog, le processus logistique est simple et efficace, assurant ainsi une gestion fluide de l'ensemble du cycle logistique.
      </div>
    </motion.div>
   
  
    <div className="flex flex-row   h-full  px-12 justify-center">
        {data.map(item => (
          <div key={item.id} className="w-3/5 flex flex-row">
            {item.id % 2 === 0 ? (
              <>
                <motion.div variants={fadeIn('up',0.5)}
           initial="hidden" 
           whileInView={'show'} 
          viewport={{once:false,amount:0.2}}
           key={item.id} className=" w-full  m-2   flex flex-row">
            <div className="relative overflow-hidden bg-cover ">
          
            <div className=" h-52 ">
            <div className="flex justify-center items-center h-24">
                 <h1 className="text-5xl pt-12 text-purple-800">{item.id}.</h1>
                </div>
              </div>
              <div className='flex justify-center items-center '>
              <div className="w-40 h-40 rounded-full  ">
                <img src={item.image} alt="..." className=" bg-cover object-cover shadow rounded-full w-full h-full align-middle border-none  bg-center" />
              </div>
              </div>
              <div className="py-5 p-2 flex items-center flex flex-col  justify-center">
                <a href="#">
                  <h5 className="text-xl font-bold  text-center tracking-tight text-gray-900 ">{item.title}</h5>
                </a>
                <p className=" text-center text-sm  font-normal text-gray-700 ">{item.description}</p>
              </div>
            </div>
          </motion.div>
              </>
            ) : (
              <>
                 <motion.div variants={fadeIn('down',0.5)}
           initial="hidden" 
           whileInView={'show'} 
          viewport={{once:false,amount:0.2}} key={item.id} className="bg-white  m-2 rounded-lg  flex flex-row">
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
             
              <div className=" ">
              <div className="py-5 px-2 h-52  flex items-center flex flex-col  justify-center">
                <a href="#">
                  <h5 className="text-xl font-bold  text-center tracking-tight text-gray-900 ">{item.title}</h5>
                </a>
                <p className=" text-center text-sm font-normal text-gray-700 ">{item.description}</p>
              </div>
              <div className=' flex justify-center items-center '>
              <div className="w-40 h-40 rounded-full  ">
                <img src={item.image} alt="..." className=" bg-cover object-cover shadow rounded-full w-full h-full align-middle border-none  bg-center" />
              </div>
              </div>
              <div className="flex justify-center items-center h-24">
                 <h1 className="text-5xl text-purple-800">{item.id}.</h1>
                </div>
              </div>
            </div>
          </motion.div>
              </>
            )}
          </div>
        ))}
      </div>
   
   
  
          
          </>
      )
  



};

export default Services;
