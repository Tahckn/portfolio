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
                    'https://github.com/Tahckn/listify/raw/main/public/chrome_WPcwWXt9Sa.png'
                  }
                  alt=""
                />
                {/* pretitle  */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                  <span className="text-gradient ">
                    Save and share your playlists
                  </span>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
                  <span className="text-3xl text-white">Listify</span>
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
              href="https://relyonrhythm.netlify.app/"
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
                    'https://github.com/Tahckn/rely-on-rhythm/raw/main/public/rely-on-rhythm_VATm37jU7V.png'
                  }
                  alt=""
                />
                {/* pretitle  */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                  <span className="text-gradient ">Online Music Stream</span>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
                  <span className="text-3xl text-white">Rely On Rhythm</span>
                </div>
              </div>
            </a>
            {/* image  */}
            <a
              href="https://blogsar.netlify.app/"
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
                    'https://github.com/Tahckn/blogsar/raw/main/public/chrome_x9uH0WuGZG.jpg?raw=true'
                  }
                  alt=""
                />
                {/* pretitle  */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                  <span className="text-gradient ">Dynamic Blog Website</span>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
                  <span className="text-3xl text-white">Blogsar</span>
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
