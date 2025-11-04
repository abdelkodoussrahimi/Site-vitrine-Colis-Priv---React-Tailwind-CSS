import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header';
import Footr from '../Footer';
import { TextInput } from 'flowbite-react';

export default function Creercompte() {
    return (
        <>
        <div className=" bg-site bg-no-repeat bg-cover overflow-hidden ">
            <Header/>
          
            <div className="border-fuchsia-950">
              
                <div class=" mt-50   lg:px-8 flex items-center justify-center"> 
                <div  className=' m-4 px-4 rounded-lg mx-auto '>
                <div class="mx-auto max-w-2xl m-4  text-center ">
                    
                    <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Créer votre compte
                    </h2>
                    <p class="mt-2 text-lg leading-8 text-white">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
                    </div>
                    
                    <div className=" w-full ">
                    <form action="#" method="POST" className="mx-auto mt-8 shadow-lg bg-purple-200 border rounded-lg border-gray-400 p-10 max-w-xl ">
  <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
  <div className="sm:col-span-2">
    <label htmlFor="select-option" className="block text-sm font-semibold leading-6 text-gray-900">Par quelle méthode de travail est-il préférable de commencer ?</label>
    <div className="mt-2.5">
      <select name="select-option" id="select-option" className="block w-full rounded-md border border-gray-500 px-3.5 py-2 text-gray-900 shadow-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 sm:text-sm sm:leading-6">
        <option value="ramassage">Ramassage</option>
        <option value="stockage">Stockage</option>
      </select>
    </div>
  </div>

  <div className="sm:col-span-2">
      <label htmlFor="pickup-storage" className="block text-sm font-semibold leading-6 text-gray-900">Quel est votre tarif de commande journalier ?</label>
      <select id="pickup-storage" name="pickup-storage" className="block w-full  rounded-md border border-gray-500 px-3.5 py-2 text-gray-900 shadow-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 sm:text-sm sm:leading-6">
        <option  value="less-than-five">Moins de 5 commandes par jour</option>
        <option value="five-to-twenty">Entre 5 et 20 commandes par jour</option>
        <option value="twenty-to-fifty">Entre 20 et 50 commandes par jour</option>
        <option value="more-than-fifty">Plus de 50 commandes par jour</option>
      </select>
    </div>
    <div >
      <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">Prénom</label>
      <div className="mt-2.5 ">
      <input type="text" name="first-name" id="first-name" autoComplete="given-name"  placeholder="Prénom" className="block w-full rounded-md border border-purple-500 px-3.5 py-2 text-gray-900 shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>
    <div>
      <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">Nom de famille</label>
      <div className="mt-2.5">
        <input type="text" name="last-name" id="last-name" placeholder="Nom de famille" autoComplete="family-name"  className="block w-full rounded-md border border-gray-500 px-3.5 py-2 text-gray-900 shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>
    
    <div className="sm:col-span-2">
      <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
      <div className="mt-2.5">
      <TextInput id="email1" type="email" placeholder="name@gmail.com" required />   
         </div>
    </div>
    <div className="sm:col-span-2">
      <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">Numéro de téléphone</label>
      <div className="relative mt-2.5">
        <div className="absolute inset-y-0 left-0 flex items-center">
          <label htmlFor="country" className="sr-only">Pays</label>
        </div>
        <input type="tel" name="phone-number" id="phone-number" placeholder="06.00.00.00.00" autoComplete="tel" className="block w-full rounded-md border border-gray-500 px-3.5 py-2 text-gray-900 shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>
    
    
    
  </div>
  <div className="my-10">
    <button type="submit" className="block w-full bg-indigo-600 rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Demander une augmentation</button>
  </div>
</form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
           
        </>
    );
}
