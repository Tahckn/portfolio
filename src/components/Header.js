import Logo from '../assets/logo.svg'
import React from 'react';

const Header = () => {
  return (<header className='py-8'> 
  <div className='container mx-auto'>
    <div className='flex justify-between items-center'>
       <a href='#'> <h1 className='logom font-bold font-secondary uppercase -mb-3 text-5xl'>Taha</h1>  <span className='text-white font-secondary font-bold text-5xl'>ÇEKEN</span>  </a>
       <button className='btn btn-sm'>Work with me</button>
    </div> 
  </div>
  </header>)
};

export default Header;
