import React from 'react'
import { TESTIMONIALS } from '../assets'
import {motion} from "framer-motion";

const Testimonials = () => {

  return (

    <motion.div
    whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity:0, y: -100 }}
        transition={{ duration: 1.5 }}
     id="testimonial" className="container mx-auto mt-20 py-16 tracking-tighter">

        <h2 className="mb-12 text-center text-4xl font-semibold"> What People Say </h2>

        <div className="mx-auto max-w-3xl">
            {TESTIMONIALS.map((testimonial,index) => (
                <div key={index} className="mx-4 mb-8  flex flex-col items-center rounded-lg border  border-purple-300 p-6 md:flex-row">
                    <img src={testimonial.image} alt={testimonial.name} className="mb-4 mr-6 h-16 rounded-full md:mb-0"/>

                    <div >
                        <p className="mb-4 italic">{testimonial.quote}</p>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-blue-400">{testimonial.title}</p>
                    </div>
                  </div>  
            ))}
    </div>
    </motion.div>

  )
}

export default Testimonials;
