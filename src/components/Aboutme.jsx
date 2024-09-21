import React from "react";
import { motion } from "framer-motion";

import "./aboutMe.css"
import aboutMeImg from "../assets/aboutme.jpeg"

const Aboutme = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        About
        <motion.span
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="text-neutral-500"
        >
          {" "}
          Me{" "}
        </motion.span>
      </motion.h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg: p-8">
          <div className="flex items-center justify-center">
            <motion.img 
            whileInView={{ opacity: 1, x:0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{duration:1 }}
            src={aboutMeImg} className="about-img" alt="" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="my-2 max-w-xl py-6"
            >
              Hi, I'm Yash Mali – a passionate frontend web developer with a
              flair for creativity and a deep love for both technology and art.
              Over the past three years, I’ve honed my skills in building
              visually striking and highly functional websites using
              technologies like React.js, 3.js, and a range of CSS frameworks.
              My journey in web development isn't just about writing code – it's
              about crafting an experience. I approach every project with a
              blend of technical expertise and an artistic mindset, ensuring
              that every detail, from the layout to the color palette, reflects
              my passion for design. Whether it’s creating sleek, minimalist
              portfolios or immersive 3D experiences, I pour my heart into each
              project, pushing the boundaries of what web development can
              achieve. If you're looking for someone who combines the technical
              with the creative to build websites that stand out, you've come to
              the right place!
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;

