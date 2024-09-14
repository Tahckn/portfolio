import React from 'react'
import { fadeIn } from '../variants'
import { motion } from 'framer-motion'

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 items-center justify-between text-center lg:text-left lg:items-start"
          >
            {/* text  */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br /> Work.
              </h2>
              <p className="max-w-sm mb-16">
                Through Github, you can search every one of my projects.
              </p>
              <a
                href="https://github.com/Tahckn?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-sm">View all projects</button>
              </a>
            </div>
            {/* image  */}
            <a
              href="https://listify-bf8d2.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                {/* overlay  */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img  */}
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={
                    'https://raw.githubusercontent.com/Tahckn/portfolio/main/public/%7B4345B20A-4F46-4374-870D-07778580A0A5%7D.png'
                  }
                  alt="listify"
                />
                {/* pretitle  */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                  <span className="text-gradient ">
                    E-commerce Website
                  </span>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
                  <span className="text-3xl text-white">Sabba Home</span>
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 justify-between"
          >
            {/* image  */}
            <a
              href="https://www.kfagames.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                {/* overlay  */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img  */}
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={
                    'https://raw.githubusercontent.com/Tahckn/portfolio/main/public/%7BD5A44983-475C-4693-9DF6-96A6C96AE4C1%7D.png'
                  }
                  alt="kfa games"
                />
                {/* pretitle  */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                  <span className="text-gradient ">Dynamic Game Company Website</span>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
                  <span className="text-3xl text-white">
                    KFA Games
                  </span>
                </div>
              </div>
            </a>
            {/* image  */}
            <a
              href="https://spot-control.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                {/* overlay  */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img  */}
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={
                    'https://raw.githubusercontent.com/Tahckn/spot-control/main/public/assets/msedge_lnosRCIkbm.png'
                  }
                  alt="spot control"
                />
                {/* pretitle  */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                  <span className="text-gradient ">Project Management Website</span>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
                  <span className="text-3xl text-white">Spot Control</span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Work
