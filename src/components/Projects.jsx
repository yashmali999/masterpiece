import React from "react";
import { PROJECTS } from "../assets";

import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.jpeg";
import project3 from "../assets/projects/project3.png";

import { motion } from "framer-motion";

import "./projects.css";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center  text-4xl"
      >
        Projects
      </motion.h1>

      <div className="main-project-container">
        <div className="project-container">
          <motion.img
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            src={project1}
            alt=""
          />

          <div className="project-desc">
            <motion.h2
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
            >
              Social Media Platform
            </motion.h2>

            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
            >
              Designed a social media website for coders. A platform made using
              React.js and few more libraries for animation. It is a platform
              which enables users to post stuff related to Technology such as
              code snippets or some memes related to coding. It is a fun website
              where you can have your own profile and it only requires your
              google authentication login. We can see our profile and search for
              more posts.
            </motion.p>
          </div>
        </div>

        <div className="project-container">
          <motion.img
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            src={project2}
            alt=""
          />

          <div className="project-desc">
            <motion.h2
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
            >
              Netflix Clone
            </motion.h2>

            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
            >
              This project is a Netflix Clone built using ReactJS for a
              dynamic-component-based architecture. The application features a
              sleek and responsive UI, designed with advanced CSS techniques for
              polished, professional visuals. The clone incorporates React
              Router for seamless navigation and state management to handle user
              interactions efficiently. With a focus on creating an intuitive
              and enjoyable user experience, this project showcases my expertise
              in front-end development, combining design and functionality to
              deliver a modern streaming platform interface.
            </motion.p>
          </div>
        </div>

        <div className="project-container">
          <motion.img
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            src={project3}
            alt=""
          />

          <div className="project-desc">
            <motion.h2
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
            >
              Virtual Campus
            </motion.h2>

            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
            >
              The Virtual Campus project is an immersive 3D web application that
              replicates a college campus, built using ReactJS and Three.js. It
              allows users to explore the campus in a virtual environment with
              interactive 3D models, offering a realistic and engaging
              experience. Key features include 3D representations of the campus
              infrastructure, seamless navigation, and a responsive interface
              for smooth functionality across devices. This project highlights
              my expertise in combining 3D modeling with frontend development to
              create visually rich, interactive platforms.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
