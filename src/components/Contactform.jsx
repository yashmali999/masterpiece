import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { CONTACT } from "../assets";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          "service_z70j63c",
          "template_l4kgvev",
          formData,
          "khbJaXSDDM-Ww4f08"
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent Successfully");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("FAILED....", error);
          toast.error("Failed to send message. Please try again later");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <motion.div 
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-screen">
      <Toaster />
      
      <div className="flex flex-col md:flex-row w-full max-w-6xl p-6 gap-16"> {/* Increased gap for better spacing */}
        
        {/* Left Column: Get in Touch */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }} // Animation from left to right
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2"
        >
          <h2 className="mb-4 text-4xl font-semibold tracking-tighter text-blue-400">
            Get in Touch !
          </h2>
          <p className="mb-4 text-lg">
            Feel free to reach out if you'd like to collaborate, discuss a project, 
            or just want to say hi! I'm always open to new opportunities and connections.
          </p>
          <a href="#" className="border-b border-blue-300 text-blue-300">
            {CONTACT.email}
          </a>
          <p className="my-4">{CONTACT.address}</p>
        </motion.div>

        {/* Right Column: Let's Connect Form */}
        <div className="w-full md:w-1/2">
          <div className="w-full max-w-lg p-6 border border-gray-200 rounded-lg shadow-lg">
            <h2 className="mb-4 text-center text-4xl font-semibold tracking-tighter">
              Let's Connect
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  placeholder="Name"
                  onChange={handleChange}
                  className="mb-4 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
                />
                {errors.name && (
                  <p className="text-sm text-pink-700">{errors.name}</p>
                )}
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  onChange={handleChange}
                  className="mb-4 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
                />
                {errors.email && (
                  <p className="text-sm text-pink-700">{errors.email}</p>
                )}
              </div>

              <div className="mb-4">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  placeholder="Message"
                  onChange={handleChange}
                  className="mb-4 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
                  rows="4"
                />
                {errors.message && (
                  <p className="text-sm text-pink-700">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className={`mb-4 w-full rounded bg-blue-800 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-blue-200 ${isSending ? "cursor-not-allowed opacity-50" : ""
                  }`}
                disabled={isSending}
              >
                {isSending ? "Sending...." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;
