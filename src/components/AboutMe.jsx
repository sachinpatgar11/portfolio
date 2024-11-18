import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const AboutMe = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        className="container mx-auto px-8 md:px-16 lg:px-24"
      >
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src=""
            alt=""
            className="h-80 w-72 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I'm a passinate User Interface Developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in Front-end, I strive to create seamless and efficient User
              Experience.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-400 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2.5 w-10/12 transform transition-transform duration-300 hover:scale-105  rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  JS
                </label>
                <div className="grow bg-gray-400 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2.5 w-9/12 transform transition-transform duration-300 hover:scale-105  rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  React JS
                </label>
                <div className="grow bg-gray-400 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2.5 w-7/12 transform transition-transform duration-300 hover:scale-105  rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Node JS
                </label>
                <div className="grow bg-gray-400 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2.5 w-8/12 transform transition-transform duration-300 hover:scale-105  rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex text-center space-x-12">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  3+
                </h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  10+
                </h3>
                <p>Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
