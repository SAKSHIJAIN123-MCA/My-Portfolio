import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-16 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 drop-shadow-md">
          Contact Me
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto tracking-wide">
          Have a project in mind or just want to say hi? Fill out the form below and I’ll get back to you soon.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-5xl mx-auto">
        {/* Contact Form */}
        <form
          className="bg-white shadow-2xl rounded-3xl p-10 space-y-8
                     border border-gray-200
                     transition-transform duration-500 hover:scale-[1.02] hover:shadow-3xl
                     animate-fadeInUp"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-800 mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="mt-1 w-full p-4 border border-gray-300 rounded-2xl
                         focus:outline-none focus:ring-3 focus:ring-yellow-400
                         placeholder-gray-400 transition"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full p-4 border border-gray-300 rounded-2xl
                         focus:outline-none focus:ring-3 focus:ring-yellow-400
                         placeholder-gray-400 transition"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-800 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your Message"
              className="mt-1 w-full p-4 border border-gray-300 rounded-2xl
                         focus:outline-none focus:ring-3 focus:ring-yellow-400
                         placeholder-gray-400 transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-semibold py-4 rounded-2xl
                       hover:bg-yellow-600 shadow-lg hover:shadow-yellow-400
                       transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div
          className="flex flex-col justify-center space-y-10 bg-white rounded-3xl p-10
                     shadow-xl border border-gray-200
                     animate-fadeInUp"
          style={{ animationDelay: "300ms" }}
        >
          <div className="flex items-center space-x-5">
            <Mail className="text-yellow-500 w-7 h-7" />
            <span className="text-gray-800 text-xl font-medium select-text">
              sakshijainmorena@gmail.com
            </span>
          </div>

          <div className="flex items-center space-x-5">
            <Phone className="text-yellow-500 w-7 h-7" />
            <span className="text-gray-800 text-xl font-medium select-text">
              +91 8817740964
            </span>
          </div>

          <div className="flex items-center space-x-5">
            <MapPin className="text-yellow-500 w-7 h-7" />
            <span className="text-gray-800 text-xl font-medium select-text">
              Morena, Madhya Pradesh
            </span>
          </div>

          <div className="text-gray-500 text-sm text-center mt-8 select-none">
            © {new Date().getFullYear()} Sakshi Jain. All rights reserved.
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation-name: fadeInUp;
          animation-fill-mode: both;
          animation-duration: 0.7s;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
};

export default Contact;
