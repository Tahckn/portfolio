import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
  const form = useRef()
  const [btn, setBtn] = useState(true)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_hn82lak',
        'template_vpg3bb8',
        form.current,
        'USvzzTtFaJp4b0A55'
      )
      .then(
        (result) => {
          toast.success('🦄 The email has been sent successfully', {
            position: 'top-right',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          })
          setBtn(true)
        },
        (error) => {
          toast.error('🦄' + error.text, {
            position: 'top-right',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          })
          setBtn(false)
        }
      )
    e.target.reset()
  }

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          {/* text  */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex lg:justify-start items-center lg:text-left text-center justify-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12 ">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form  */}
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <form ref={form} onSubmit={sendEmail}>
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white/50 focus:border-accent transition-all "
                type="text"
                name="user_name"
                placeholder="Your name"
                required
              />
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white/50 focus:border-accent transition-all "
                type="email"
                name="user_email"
                placeholder="Your email"
                required
              />
              <textarea
                className="resize-none bg-transparent border-b py-12 outline-none w-full placeholder:text-white/50 focus:border-accent transition-all mb-12"
                placeholder="Your message"
                name="message"
                required
              ></textarea>
              <input
                disabled={btn}
                className="btn btn-lg cursor-pointer"
                type="submit"
                value="Send Message"
              />
            </form>
          </motion.div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  )
}

export default Contact
