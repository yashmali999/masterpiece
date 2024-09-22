import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

import Footer from "./components/Footer";
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import Contactform from './components/Contactform';

const App = () => {
  return (
    <div
      className="overflow-x-hidden text-neutral-300 
    antialiased selection:bg-gray-300 selection:text-gray-500"
    >
      <div className="fixed top-0 -z-10 h-full w-full">
        <div
          className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        ></div>
      </div>




    <div className="container mx-auto px-8"></div>
     <Navbar />
     <Hero />
     <Aboutme />
     <Technologies />
     <Experience />
     <Projects />
     <Timeline/>
     <Contactform />
     <Footer />
    </div>
  )
}

export default App;
