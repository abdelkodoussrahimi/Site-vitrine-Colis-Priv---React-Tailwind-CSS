import {motion} from 'framer-motion'
import { fadeIn} from '../variants'



export default function Protection() {

  const featuresData = [
    {
      id: 1,
      image: require('../assets/24 Hours Delivery (HD).png'),
      "title": "Retour Gratuit",
    "description": "Nous vous accompagnons dans votre activité commerciale en ne calculant pas les frais de retour de marchandise."
    },
    {
      id: 2,
      image: require('../assets/Consultant (HD).png'),
      "title": "Assistance 24h/7",
      "description": " Nos agents sont disponibles 24h/24, 717 pour répondre à vos demandes en tout temps."
      },
    {
      id: 3,
      image: require('../assets/Paying Money (HD).png'),
      "title": "Virement Bancaire Rapide",
      "description": "Nous garantissons un virement bancaire toutes les 24 heures pour assurer une continuité de votre activité commerciale."
      },
    
  ];
  return (
    <>
     <div className='w-screen px-12  bg-gray-100 '>
  <div className="flex flex-col  items-center ">
    <div className="font-bold text-black text-2xl">
      <h1>Nos Services</h1> 
    </div>
    <div className="pb-4 text-gray-700 font-light text-4xl text-center">
      Pourquoi Choisir Quick Livraison ? <br />
    </div>
  </div>

  <div className="flex flex-col md:flex-row">
    <motion.div
      variants={fadeIn('up',0.2)}
      initial="hidden" 
      whileInView={'show'} 
      viewport={{once:false,amount:0.7}}
      className="hidden py-12 md:block md:w-1/2"
    >
      <img className='bg-cover rounded-lg w-full h-auto' src={require('../assets/Design sans titre(1)/centre.png')} alt="Delivery Box"/>
    </motion.div>

    <motion.div
      variants={fadeIn('up',0.5)}
      initial="hidden" 
      whileInView={'show'} 
      viewport={{once:false,amount:0.1}}
      className="flex flex-col py-12 px-4 w-full md:w-1/2"
    >
      <h1 className='text-bold text-black font-serif text-4xl mb-8'>Pourquoi Choisir Quick Livraison Comme Service de Livraison?</h1>

      <div className='m-4'>
        {featuresData.map(feature => (
          <div className="flex flex-col p-2 bg-shadow-2xl bg-clip-border rounded-xl mb-4">
            <div className="flex flex-row">
              <img className='w-14 h-14 rounded-lg' src={feature.image} alt={feature.title}/>
              <div className="flex flex-col ml-5">
                <div className="text-sm font-bold text-black">{feature.title}</div>
                <div className="text-xs text-black leading-relaxed">{feature.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
</div>

    </>
  );
}
