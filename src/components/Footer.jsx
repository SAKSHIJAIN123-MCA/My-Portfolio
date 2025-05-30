import {
  FaBehance,
  FaDribbble,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-yellow-50 text-gray-700 py-12 text-center relative z-10 select-none">
      <div className="container mx-auto px-6">
        <p className="mb-8 text-xl font-semibold tracking-wide opacity-90 animate-fadeInUp">
          You Can Follow Me Also Here:
        </p>

        <div className="flex justify-center gap-8 mb-10">
          <a
            href="https://www.linkedin.com/in/sakshi-jain-5b565a2a9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-yellow-600 hover:text-yellow-500 transform hover:-translate-y-1 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/SAKSHIJAIN123-MCA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-600 hover:text-yellow-500 transform hover:scale-110 transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.instagram.com/itz_me_sakshi_jain?igsh=ZHRsdzI2YnM1NmFo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-pink-500 hover:text-yellow-500 transform hover:rotate-6 transition-all duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          {/* Optional additional icons */}
          {/* 
          <a href="#" className="text-3xl text-purple-500 hover:text-yellow-500 transform hover:scale-110 transition-all duration-300" aria-label="Behance">
            <FaBehance />
          </a>
          <a href="#" className="text-3xl text-pink-400 hover:text-yellow-500 transform hover:scale-110 transition-all duration-300" aria-label="Dribbble">
            <FaDribbble />
          </a>
          */}
        </div>

        <p className="text-sm text-gray-500 animate-fadeInUp">
          &copy; {new Date().getFullYear()} Sakshi Jain. All rights reserved.
        </p>
      </div>

      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation-name: fadeInUp;
          animation-fill-mode: both;
          animation-duration: 0.8s;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
