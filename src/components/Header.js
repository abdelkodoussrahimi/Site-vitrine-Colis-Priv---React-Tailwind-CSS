import React, { useState, useEffect } from 'react';
import { Button, Navbar } from "flowbite-react";
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 0;
      setScrolling(isScrolling);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar fluid rounded       className={` bg-transparen z-60  ${scrolling ? 'bg-violet-950 rounded-none fixed z-40  w-screen' : ''}`}>
    <Navbar.Brand href="https://flowbite-react.com">
      <img src={require('../assets/logo.png')} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      <span className="self-center whitespace-nowrap text-xl font-semibold ">Colis Privé</span>
    </Navbar.Brand>
    <div className="flex    md:order-2">
      <div className='p-4'>
      <Button gradientDuoTone="cyanToBlue"> espace client </Button>
       </div>
       <div className='p-4'>
        <Link to={"/Creercompte"}>
      <Button gradientDuoTone="purpleToPink">  DEVENIR CLIENT  </Button>
      </Link>
      
     </div>
        <Navbar.Toggle className='' />
    </div>
  
    
    <Navbar.Collapse className="text-black " >
      <Navbar.Link as={Link} to="/" active>
      Accueil
      </Navbar.Link>
      <Navbar.Link   className='text-white ' active as={Link} to="/Nos Services" >Nos Services</Navbar.Link>
      <Navbar.Link  className='text-white' active as={Link} to="/tarifs" >Tarifs</Navbar.Link>
      <Navbar.Link   className='text-white'active as={Link} to="/Nous Contacter" >Nous Contacter</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  );
}
export default Header;
