import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Jewellery Store",
    description:
      "A luxurious and responsive e-Commerce site built with React + Vite.",
    icon: "💍",
    tech: "React + Vite",
    link: "https://github.com/SAKSHIJAIN123-MCA/Jewellery-Store",
  },
  {
    title: "Pharmacy Management",
    description: "Next.js-based modern pharmacy store with full mobile support.",
    icon: "💊",
    tech: "Next.js",
    link: "https://github.com/SAKSHIJAIN123-MCA/Pharmacy",
  },
  {
    title: "Event Planner",
    description:
      "Elegant PHP event planning platform with booking and gallery.",
    icon: "🎉",
    tech: "PHP",
    link: "https://github.com/SAKSHIJAIN123-MCA/ems.git",
  },
  {
    title: "Car Rental System",
    description:
      "A reliable and fast PHP system for car rentals and reservations.",
    icon: "🚗",
    tech: "PHP",
    link: "https://github.com/SAKSHIJAIN123-MCA/carrental.git",
  },
  {
    title: "INS Production",
    description:
      "Fully responsive React site showcasing production and movies.",
    icon: "💻",
    tech: "React + Vite",
    link: "https://github.com/SAKSHIJAIN123-MCA/INS-Production",
  },
  {
    title: "Personal Portfolio",
    description: "Creative UI/UX with animations and responsive design.",
    icon: "🧑‍🎨",
    tech: "React + Vite",
    link: "https://github.com/SAKSHIJAIN123-MCA/portfolio",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Services = () => {
  return (
    <section className="bg-yellow-50 py-20 px-6 text-white relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-yellow-500 text-center mb-16"
      >
        My Projects
      </motion.h2>

      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white text-black rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-yellow-400 p-8"
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
          >
            <div className="text-5xl mb-4 text-yellow-500">{project.icon}</div>
            <h3 className="text-2xl font-bold mb-2 text-yellow-700">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {project.title}
              </a>
            </h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <span className="inline-block text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium shadow-sm">
              {project.tech}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
