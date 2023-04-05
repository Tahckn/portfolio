import CountUp from 'react-countup';
import React from 'react';
import { fadeIn } from '../variants';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* image  */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain mb-6 bg-no-repeat min-h-[150px] h-[450px] mix-blend-lighten bg-top'></motion.div>
          {/* text  */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:text-left text-center'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>I'm a Freelance Front-end Developer</h3>
            <p className='mb-8'>
              I first became interested in the web when I was 18 years old. I've
              used HTML and CSS to build dozens of websites. To create SPA and
              more complex websites, however, I wanted to learn the JavaScript
              frameworks and libraries, like Vue.js and React.js.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12 justify-center lg:justify-start'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={80} duration={3} /> : null}+
                  <div className='font-primary text-sm tracking-[2px]'>
                    Projects <br />
                    Completed
                  </div>
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2 '>
                  {inView ? <CountUp start={0} end={22} duration={3} /> : null}
                  <div className='font-primary text-sm tracking-[2px]'>
                    Years Old
                  </div>
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2 '>
                  {inView ? <CountUp start={0} end={2} duration={3} /> : null}
                  <div className='font-primary text-sm tracking-[2px]'>
                    Years of <br />
                    Experience
                  </div>
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center lg:justify-start justify-center'>
              <Link
                to='contact'
                smooth={true}
                spy={true}
                className='btn cursor-pointer btn-lg justify-center items-center flex'>
                Contact me
              </Link>
              <a className='text-gradient btn-link ' href='#contact'>
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
