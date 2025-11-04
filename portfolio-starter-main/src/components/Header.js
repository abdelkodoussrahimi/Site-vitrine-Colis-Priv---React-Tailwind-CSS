import React, { useState } from 'react';

import { Button, Navbar } from "flowbite-react";

const Header = () => {
 

  return (
    <Navbar fluid rounded className='bg-transparent'>
    <Navbar.Brand href="https://flowbite-react.com">
      <img src={require('../assets/logo.png')} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      <span className="self-center whitespace-nowrap text-xl font-semibold ">Colis Privé</span>
    </Navbar.Brand>
    <div className="flex md:order-2">
      <Button>Get started</Button>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse >
      <Navbar.Link href="#" active>
        Home
      </Navbar.Link>
      <Navbar.Link className='text-white' href="#">About</Navbar.Link>
      <Navbar.Link   className='text-white' href="#">Services</Navbar.Link>
      <Navbar.Link  className='text-white' href="#">Pricing</Navbar.Link>
      <Navbar.Link   className='text-white' href="#">Contact</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
      
  );
}
export default Header;
