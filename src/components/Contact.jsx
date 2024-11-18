import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="contact">
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        className="container mx-auto px-8 md:px-16 lg:px-24"
      >
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400 mb-4">
              Let's Talk
            </h3>
            <p className="text-gary-400 mb-4">
              I'm open to discussion on web application developement project or
              partenership oppertunities
            </p>
            <div className="mb-4 ">
              <FaEnvelope className="inline-block text-green-400 mr-2" />
              <a
                href="mailto:youremail@example.com"
                className="hover:underline"
              >
                youremail@example.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-green-400 mr-2" />
              <span>+91 7353297774</span>
            </div>
            <div className="mb-4">
              <FaMapMarkerAlt className="inline-block text-green-400 mr-2" />
              <span>Banglore, India</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form action="" className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-600"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-600"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  rows="3"
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-600"
                  placeholder="Enter the Message here"
                />
              </div>
              <button className="bg-gradient-to-r from-green-400 to-blue-400 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full">
                Send
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
