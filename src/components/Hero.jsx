import React from "react";
import { motion } from "framer-motion";

import "./Hero.css"
import heroImg from "../assets/hero.jpeg"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start"></div>
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className=" ml-10 pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
          >
            Yash Arun Mali
          </motion.h1>

          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className=" ml-10  my-2 pb-16 bg-gradient-to-r from-blue-300 via-slate-500 to-blue-800 bg-clip-text text-4xl tracking-tight text-transparent"
          >
            Frontend Developer
          </motion.span>

          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className=" ml-10 my-2 max-w-xl py-6 font-light tracking-tighter"
          >
            "<a href="https://wordywardrobe.netlify.app/">Driven by</a> Creativity, Powered by Code"
          </motion.p>
        </div>
        <motion.img 
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: 100 }}
         transition={{ duration: 1 }}
        className="hero-img" src={heroImg}/>
      </div>
      <div className="w-70 lg:w-70 lg:p-8">
        <div className="flex justify-center"></div>
      </div>
    </div>
  );
};

export default Hero;
