import {motion} from 'framer-motion'
import { fadeIn} from '../variants'
import Header from './Header';

export default function Proposons(){
    const data = [
        { 
          id: 1, 
          title: "Livraison Rapide", 
          description: "Nous sommes fiers d'offrir une livraison rapide à travers le Maroc. Plus de 95% des villes et villages peuvent être atteints en seulement 24 heures, tandis que le reste prend seulement 48 heures.",
          image: require("../assets/Design sans titre/1.png")
        },
        { 
          id: 2, 
          title: "Rotor de Vapeur", 
          description: "Notre système de suivi de livraison garantit que chaque commande est suivie jusqu'à ce qu'elle soit remise au client. Vous serez informé à chaque étape de la livraison.",
          image: require("../assets/Design sans titre/6.png")
        },
        { 
          id: 3, 
          title: "Ramassage Facile", 
          description: "Nous proposons un service de ramassage pratique directement depuis votre lieu de travail ou chez le grossiste.",
          image: require("../assets/Design sans titre/2.png")
        },
        { 
          id: 4, 
          title: "Suivi en Temps Réel", 
          description: "Profitez d'un suivi en temps réel de vos expéditions grâce à notre équipe dédiée, disponible pour répondre à toutes vos questions tout au long de la journée.",
          image: require("../assets/Design sans titre/5.png")
        },
        { 
          id: 5, 
          title: "Stockage Sécurisé", 
          description: "Notre service de stockage sécurisé est apprécié par nos clients. Gagnez du temps et de l'énergie en stockant vos produits avec nous, selon vos besoins.",
          image: require("../assets/Design sans titre/3.png")
        },
        { 
          id: 6, 
          title: "Remboursement Rapide", 
          description: "Nous comprenons l'importance de la gestion financière efficace. C'est pourquoi nous remboursons votre argent toutes les 24 heures, assurant ainsi la sécurité de vos fonds.",
          image: require("../assets/Design sans titre/4.png")
        }
      ];
      



    return(<>
        <div className='bg-violet-950'>

    <Header/>
    </div>
    <section className="py-14 lg:px-12 bg-gray-100   w-screen ">
            <div className=" mx-auto  md:px-8">
                <div className=" mx-auto px-16 sm:text-center">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Our team
                    </h3>
                    <p className="text-gray-600   mt-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.
                    </p>
                </div>
               
            
        
  <div class="flex min-h-screen items-center  justify-center ">
  <motion.div variants={fadeIn('up',0.5)}
           initial="hidden" 
           whileInView={'show'} class=" w-full grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
   { 
   data.map((item, idx) => (
     <div class="group relative p-4 m-4 rounded-lg	 cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
     <div class="h-96 w-72">
       <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={item.image} alt="" />
     </div>
     <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
       
     </div>
     <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
       <h1 class="font-dmserif text-3xl font-bold text-white">{item.title}</h1>
       <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{item.description}</p>
       <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
     </div>
     </div>
     ))
   }
    </motion.div>
    </div>
    </div>
        </section>
    </>)
}