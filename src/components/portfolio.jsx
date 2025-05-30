import React from "react";

const projects = [
  {
    title: "Jewellery Store",
    description: "A luxurious and responsive e-Commerce site built with React + Vite.",
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
    description: "Elegant PHP event planning platform with booking and gallery.",
    icon: "🎉",
    tech: "PHP",
    link: "https://github.com/SAKSHIJAIN123-MCA/ems.git",
  },
  {
    title: "Car Rental System",
    description: "A reliable and fast PHP system for car rentals and reservations.",
    icon: "🚗",
    tech: "PHP",
    link: "https://github.com/SAKSHIJAIN123-MCA/carrental.git",
  },
  {
    title: "INS Production",
    description: "Fully responsive React site showcasing production and movies.",
    icon: "💻",
    tech: "React + Vite",
    link: "https://github.com/SAKSHIJAIN123-MCA/INS-Production",
  },
  {
    title: "Personal Portfolio",
    description: "Creative UI/UX with animations and responsive design.",
    icon: "🧑‍🎨",
    tech: "React + Vite",
    link: "https://yourdomain.com/portfolio",
  },
];

const Portfolio = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 drop-shadow-md">
          My Projects
        </h1>
        <p className="text-gray-700 text-lg tracking-wide max-w-3xl mx-auto">
          A showcase of the work I've done across various stacks and industries.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-white rounded-2xl shadow-lg p-8 flex flex-col
              transition-transform duration-500 ease-in-out transform
              hover:scale-105 hover:shadow-2xl
              motion-reduce:transform-none
              cursor-pointer
              animate-fadeInUp
              `}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="text-6xl mb-6 select-none">{project.icon}</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-yellow-500 transition-colors duration-300">
              {project.title}
            </h2>
            <p className="text-gray-700 flex-grow">{project.description}</p>
            <span className="mt-6 self-start bg-yellow-100 text-yellow-900 text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
              {project.tech}
            </span>
          </a>
        ))}
      </div>

      {/* Tailwind custom animation */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation-name: fadeInUp;
          animation-fill-mode: both;
          animation-duration: 0.6s;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
