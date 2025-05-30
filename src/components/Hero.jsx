import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-yellow-50 text-center px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold leading-snug text-gray-800"
      >
        Hi! I’m{" "}
        <span className="text-yellow-500 animate-pulse">Sakshi Jain</span> – Full Stack
        Developer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-6 max-w-2xl mx-auto text-lg text-gray-600"
      >
        “Full Stack Developer crafting seamless, user-centric digital experiences
        with 5 months of expertise in turning design visions into interactive
        realities.”
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-10 flex justify-center gap-6 flex-wrap"
      >
        <a
          href="https://drive.google.com/file/d/1Aq45kHXDvrPgGYgoQXTRif_O3w5JDF6C/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 shadow-lg hover:scale-105"
        >
          Download CV
        </a>

        <a
          href="https://drive.google.com/file/d/1Aq45kHXDvrPgGYgoQXTRif_O3w5JDF6C/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 shadow-lg hover:scale-105"
        >
          Hire Me Now
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
