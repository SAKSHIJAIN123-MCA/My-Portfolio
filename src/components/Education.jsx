import React from "react";
import { FaBolt } from "react-icons/fa";
import mitsLogo from "../assets/mits.png";
import collegeLogo from "../assets/image.png";
import schoolLogo from "../assets/image2.jpg";

const degrees = [
  {
    title: "Madhav Institute of Technology and Science, Gwalior",
    subtitle: "Masters in Computer Applications",
    logo: mitsLogo,
    duration: "2023 - 2025",
    descriptions: [
      "Studied core CS subjects like DS, Algorithms, DBMS, OS, AI, etc.",
      "Completed courses on AI, Blockchain, Cloud Computing, and Full Stack Development.",
    ],
  },
  {
    title: "Govt. PG College, Morena",
    subtitle: "Bachelors of Science",
    logo: collegeLogo,
    duration: "2020 - 2023",
    descriptions: [
      "Selected as CENTRAL SECTOR SCHOLAR by Dept. of Science and Technology, Govt. of India.",
    ],
  },
  {
    title: "T.R. Gandhi Public School",
    subtitle: "12th",
    logo: schoolLogo,
    duration: "2019 - 2020",
    descriptions: [
      "Completed Class 12th (Science Stream) with strong academic record.",
      "Demonstrated consistent performance and analytical skills.",
    ],
  },
  {
    title: "T.R. Gandhi Public School",
    subtitle: "10th",
    logo: schoolLogo,
    duration: "2017 - 2018",
    descriptions: [
      "Secured 91% overall in Class 10th Board Examination.",
      "Achieved 100/100 in Sanskrit, showing academic excellence.",
    ],
  },
];

const Education = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-4 drop-shadow-md">
          Education
        </h1>
        <p className="text-blue-700 text-lg tracking-wide">
          Basic Qualification and Certifications
        </p>
      </div>

      <div className="space-y-10 max-w-4xl mx-auto">
        {degrees.map((degree, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-6
              transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <img
              src={degree.logo}
              alt={degree.title}
              className="w-20 h-20 object-contain rounded-md border-2 border-blue-300 shadow-sm"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-blue-900 tracking-wide">
                    {degree.title}
                  </h2>
                  <p className="text-blue-700 text-sm italic">{degree.subtitle}</p>
                </div>
                <span className="text-sm font-semibold text-blue-500">
                  {degree.duration}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-blue-700 text-sm leading-relaxed">
                {degree.descriptions.map((desc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaBolt className="text-yellow-500 mt-1 animate-pulse" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
