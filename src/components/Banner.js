import {FaGithub, FaTwitter, FaYoutube} from 'react-icons/fa';

import Image from '../assets/avatar.png';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {fadeIn} from '../variants'
import {motion} from 'framer-motion'

const Banner = () => {
  return (
  <section className='min-h-[85vh] lg:min-h-[78vh] flex justify-center lg:items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/* text  */}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <h1 className='text-[55px] lg:flex lg:gap-x-5 font-bold leading-[0.8] lg:text-[110px]'>
            Taha <span>ÇEKEN</span>
          </h1>
         <div className='mb-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]'>
          <span className='mr-4 text-white'>I am a</span>
          <TypeAnimation sequence={[
            "Web Developer.",
            1800,
            "big fan of Reac",
            100,
            "big fan of Vue.js",
            2000
          ]}
          p
          speed={40}
          className='text-accent'
          wrapper='span'
          repeat={Infinity}
          />
         </div>
          <p className='mb-8 max-w-lg mx-auto lg:mx-0'>Esse aliqua eu cupidatat enim magna sit Lorem laborum cillum Lorem.Excepteur nisi irure duis reprehenderit occaecat id ea amet occaecat nulla. </p>
          <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <button className='btn btn-lg '>Contact me</button>
            <a className='text-gradient btn-link ' href='#'>My Portfolio</a>
          </div>
          <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0' >
            <a href='#'> <FaYoutube/> </a>
            <a href='#'> <FaGithub/> </a>
            <a href='#'> <FaTwitter/> </a>
          </div>
          </div>
        <div>
           <img className='mb-10 mx-auto' src={Image} alt=''/>
          </div>
        </div>
      </div>
    </section>)
};

export default Banner;
