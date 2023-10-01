import { BsArrowUpRight } from 'react-icons/bs'
import React from 'react'
import { fadeIn } from '../variants'
import { motion } from 'framer-motion'

const services = [
  {
    name: 'Web Development',
    description:
      'With the help of various JavaScript frameworks, including React Vue Next and Nuxt, I can create single-page or multi-page web applications. Additionally, include a cloud database and implement real-time data.',
    linkText: 'Learn more',
    link: 'https://en.wikipedia.org/wiki/Web_development',
  },
  {
    name: 'Product Branding',
    description:
      'By developing an effective brand strategy, companies are able to establish long-term relationships with their target audiences and create loyalty among consumers who identify with their brands.',
    linkText: 'Learn more',
    link: 'https://en.wikipedia.org/wiki/Brand',
  },
  {
    name: 'Deploying',
    description:
      'I can deploy websites on a web server so they can be accessed by anyone with an internet connection. This process involves writing code and creating visuals, testing the website, then publishing it to a web server. The development process is important because it ensures that the website will work properly and load quickly in any browser, as well as being optimized for mobile devices.',
    linkText: 'Learn more',
    link: 'https://simple.wikipedia.org/wiki/Web_hosting_service',
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
                const { name, description, linkText, link } = service
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
                    <div className="mt-4 flex flex-col whitespace-nowrap flex-1 items-center lg:items-end lg:mt-[0px] justify-center lg:justify-start ">
                      <a
                        target="_blank"
                        href={link}
                        rel="noreferrer"
                        className="btn w-9 h-9 flex items-center justify-center mb-2"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a
                        href={link}
                        rel="noreferrer"
                        target="_blank"
                        className="text-gradient text-xs"
                      >
                        {linkText}
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
