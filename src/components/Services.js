import { BsArrowUpRight } from 'react-icons/bs'
import React from 'react'
import { fadeIn } from '../variants'
import { motion } from 'framer-motion'

const services = [
  {
    name: 'Development',
    description:
      'With the help of various JavaScript frameworks, including React Vue Next and Nuxt, I can create single-page or multi-page web applications. Additionally, include a cloud database and implement real-time data.',
    link: 'Learn more',
  },
  {
    name: 'Product Branding',
    description:
      'By developing an effective brand strategy, companies are able to establish long-term relationships with their target audiences and create loyalty among consumers who identify with their brands.',
    link: 'Learn more',
  },
  {
    name: 'Deploying',
    description:
      'By developing an effective brand strategy, companies are able to establish long-term relationships with their target audiences and create loyalty among consumers who identify with their brands.',
    link: 'Learn more',
  },
]

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:flex-row lg:space-x-6">
          {/* text/image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 min-w-[600px] lg:bg-services bg-no-repeat lg-bottom mix-blend-lighten mb-12 lg:mb-0 h-[585px]"
          >
            <h2 className="h2 text-accent mb-6 text-center lg:text-left">
              What I Do.
            </h2>
            <h3 className="h3 mb-8 text-center lg:text-left">
              I'm a Freelance <br /> Front-end Developer
            </h3>
            <div className="flex justify-center lg:justify-start">
              <a
                href="https://github.com/Tahckn?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-sm">See my work</button>
              </a>
            </div>
          </motion.div>
          {/* services  */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex"
          >
            {/* service list  */}
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service
                return (
                  <div
                    className="border-b border-white/20 h-auto mb-[38px] flex text-center lg:text-left flex-col lg:flex-row"
                    key={name}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="mt-4 flex flex-col whitespace-nowrap flex-1 items-center lg:items-end lg:mt-0 justify-center lg:justify-start ">
                      <a
                        href="#"
                        className="btn w-9 h-9 flex items-center justify-center mb-2"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-xs">
                        {link}
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
