import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-white px-6 md:px-16 py-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl text-center md:text-left"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Hi There! 👋</h2>

          <p className="text-gray-700 text-lg leading-relaxed space-y-4">
            I’m a passionate <strong className="text-yellow-600">Full Stack Developer</strong> with
            hands-on experience building high-performance web applications using:
            <span className="block font-semibold text-blue-600 mt-2">
              React.js, Next.js, Node.js, Express.js
            </span>
            <br />
            I've created full-stack projects across domains like e-commerce, pharmacy, event management, and car rentals—
            from responsive UI to secure REST APIs and database integration.
            <br />
            <br />
            My workflow combines clean, reusable code with strong attention to
            UX, SEO optimization, and speed. I thrive in both front-end
            creativity and back-end architecture.
            <br />
            <br />
            Whether crafting dynamic UIs with React or deploying apps with Next.js,
            I bring dedication and a problem-solving mindset to every project.
          </p>
        </motion.div>

        {/* Image */}
        <motion.img
          src="/coder.avif"
          alt="About section"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full max-w-2xl rounded-3xl shadow-2xl object-cover"
        />
      </div>
    </section>
  );
};

export default About;
