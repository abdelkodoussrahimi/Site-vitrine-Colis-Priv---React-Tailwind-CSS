import {motion} from 'framer-motion'
import { fadeIn} from '../variants'
export default function Card(){
  const data = [
    {
      image: "https://colisprive-store.com/wp-content/uploads/2021/09/quisommesnous-1.jpg",
      title: "E-COMMERCANTS",
      list: [
        "Demandez votre ramassage",
        "Expédiez vos colis",
        "Retournez vos colis",
        "Suivez vos colis",
        "Imprimez un bordereau",
        "Pilotez vos retours de fonds"
      ]
    },
    {
      image: "https://colisprive-store.com/wp-content/uploads/2021/09/quisommesnous-1.jpg",
      title: "ENTREPRISES",
      list: [
        "Demandez votre ramassage",
        "Expédiez vos colis",
        "Retournez vos colis",
        "Suivez vos colis",
        "Imprimez un bordereau",
        "Pilotez vos retours de fonds"
      ]   
     },
   
  ];
  


  return(

      <>
      
      
      <div id="service"  style={{
    background: '#070b34', /* Fallback color */
    background: '-webkit-linear-gradient(180deg, #070b34 0%, #230047 50%, #5a0c8e 100%)', /* Pour les navigateurs WebKit */
    background: 'linear-gradient(180deg, #070b34 0%, #230047 50%, #5a0c8e 100%)'
}} className="bg-purple-900 flex flex-col p-8 w-full md:w-auto">
    <div className="backdrop-blur-md rounded-lg w-full items-center flex-col">
        <div className="text-4xl text-center text-white">
            <span className="font-bold">Comment</span> ça fonctionne ?
        </div>
        <div className="font-bold text-white py-8 text-xl">
            Chez Digylog, le processus logistique est simple et efficace, assurant ainsi une gestion fluide de l'ensemble du cycle logistique.
        </div>
    </div>
    <motion.div variants={fadeIn('down',0.5)} initial="hidden" whileInView={'show'} className="flex justify-center items-center flex-row h-full flex-wrap">
        {data.map((item, index) => (
            <div className="max-w-sm bg-white bg-black m-4 flex justify-center items-center flex-col border border-gray-200 rounded-lg shadow" key={index}>
                <a href="#">
                    <img className="rounded-t-lg bg-cover w-full h-64 md:h-auto" src={item.image} alt={item.title} />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{item.title}</h5>
                    </a>
                    <ul className="p-5">
                        {item.list.map((item, index) => (
                            <li className="flex items-center text-black" key={index}>
                                <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                </svg>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        DEVENIR CLIENT
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
        ))}
    </motion.div>
</div>


      </>
  )
}