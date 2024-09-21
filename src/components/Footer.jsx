import React from 'react'
import {motion} from "framer-motion";


const Footer = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      
    <motion.h2 
    whileInView={{ opacity:1, x:0 }}
    initial={{ opacity:0, x: 100 }}
    transition={{ duration: 0.5 }}
    className="my-10 text-center text-4xl">
        Yash
        </motion.h2>

<motion.p 
        whileInView={{ opacity:1, y:0 }}
        initial={{ opacity:0, y: 100 }}
        transition={{ duration: 1 }}

        className="my-10 text-center text-1xl">
            "Grateful for your visit. Together, we can turn ideas into reality.
         Let’s create, innovate, and inspire—because the best is yet to come."
         </motion.p>

        <div>
            <p className="my-10 text-center text-1xl text-blue-300">Copyright ©2024 Design & Development by <a href="https://wordywardrobe.netlify.app/">Sonal Kasare 🌹🌙</a></p>
        </div>
         
         </div>
  )
}

export default Footer;
