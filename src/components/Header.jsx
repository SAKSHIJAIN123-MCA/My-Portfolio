import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation items with custom links
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Education", path: "/education" },
    { name: "Projects", path: "/portfolio" }, 
  ];

  return (
    <header>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <div className="text-2xl md:text-3xl font-semibold italic tracking-wide text-gray-800 hover:text-yellow-500 transition duration-300">
          &lt; Sakshi Jain /&gt;
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-lg font-medium text-gray-700">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="relative group"
            >
              <span className="group-hover:text-yellow-500 transition duration-300">
                {name}
              </span>
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-yellow-500 group-hover:w-full transition-all duration-500"></span>
            </Link>
          ))}
          <Link
            to="/contact"
            className="relative group"
          >
            <span className="group-hover:text-yellow-500 transition duration-300">
              Contact Me
            </span>
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-yellow-500 group-hover:w-full transition-all duration-500"></span>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-yellow-500 transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-inner px-4 pb-4">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="block py-2 text-gray-800 text-base font-medium hover:text-yellow-500 transition"
              onClick={() => setIsOpen(false)}
            >
              {name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block py-2 text-gray-800 text-base font-medium hover:text-yellow-500 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact Me
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
