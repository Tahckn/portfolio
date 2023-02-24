import { FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa'

import Image from '../assets/avatar.png'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { fadeIn } from '../variants'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex lg:items-center items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text  */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] lg:flex lg:gap-x-5 mb-2 font-bold leading-[0.8] lg:text-[110px]"
            >
              TAHA <span>ÇEKEN</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 text-white">I am a</span>
              <TypeAnimation
                sequence={[
                  'Web Developer.',
                  1800,
                  'big fan of Rea',
                  100,
                  'big fan of Vue.js',
                  2000,
                ]}
                p
                speed={40}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Do you need a web page? <br />
              Short code, quality work. Keep up with the developing software
              world. Always modern technologies.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link
                to="contact"
                smooth={true}
                spy={true}
                className="btn cursor-pointer btn-lg justify-center items-center flex"
              >
                Contact me
              </Link>
              <a className="text-gradient btn-link " href="#contact">
                My Portfolio
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://www.youtube.com/channel/UC9nj23eGGKe1v59RQFzJ2Iw">
                {' '}
                <FaYoutube />{' '}
              </a>
              <a href="https://github.com/Tahckn">
                {' '}
                <FaGithub />{' '}
              </a>
              <a href="https://twitter.com/tahckn">
                {' '}
                <FaTwitter />{' '}
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView={'show'}
            className="hidden lg:flex flex-1 max-w-[320px] mix-blend-lighten lg:max-w-[482px] mb-14"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner
