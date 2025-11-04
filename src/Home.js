import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Services from './components/Services';
import Contact from './components/Contact';
import Sliderbrand from './components/sliderbrand';
import Proposons from './components/proposons';
import RelayPointMap from './components/map';
import Accordion from './components/Faq';
import Card from './components/card';
import Protection from './components/protection';
import Footr from './components/Footer';
import Stats from './components/Stats';

const Home = () => {
  return (<>
    
    <div className='bg-site  bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      </div>
      <div style={{ overflowX: 'hidden' }}> {/* Appliquez overflow-x: hidden ici */}
    <Sliderbrand/>
    <Services/>
    <Protection/>
    <Card/>
    <Proposons/>
    <Accordion/>
    <Contact/>
    <RelayPointMap/>
  </div>
      {/* <Stats/> */}
      </>
    
  )
}

export default Home;
