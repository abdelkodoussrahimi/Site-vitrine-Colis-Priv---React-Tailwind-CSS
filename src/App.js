import React from 'react';
// components
import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Tarifs from './components/tarifs';
import Creercompte from './components/Créercompte/Créercompte';
import Contact from './components/Contact';
import Services from './components/Services';
import Proposons from './components/proposons';
import Blog from './components/blog';


const App = () => {
  return (<>
   <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/tarifs' element={<Tarifs/>}/>
  <Route path='/Creercompte' element={<Creercompte/>}/>
  <Route path="/Nous Contacter" element={<Contact/>}/>
  <Route path="/Nos Services" element={<Proposons/>}/>
  <Route path="/À Propos De Nous" element={<Blog/>}/>
  </Routes>
  
  </BrowserRouter>

      </>
    
  )
}

export default App;
