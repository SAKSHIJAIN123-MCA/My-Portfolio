import React from 'react'
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaPhp,
  FaDatabase,
} from 'react-icons/fa'
import { SiExpress, SiMongodb, SiMysql } from 'react-icons/si'

const techSkills = [
  { name: 'HTML', level: 95, icon: <FaHtml5 color="#E34F26" /> },
  { name: 'CSS', level: 90, icon: <FaCss3Alt color="#1572B6" /> },
  { name: 'JavaScript', level: 85, icon: <FaJsSquare color="#F7DF1E" /> },
  { name: 'Node.js', level: 80, icon: <FaNodeJs color="#339933" /> },
  { name: 'Express.js', level: 75, icon: <SiExpress color="#000000" /> },
  { name: 'React.js', level: 90, icon: <FaReact color="#61DAFB" /> },
  { name: 'MongoDB', level: 70, icon: <SiMongodb color="#47A248" /> },
  { name: 'MySQL', level: 65, icon: <SiMysql color="#4479A1" /> },
  { name: 'PHP', level: 60, icon: <FaPhp color="#777BB4" /> },
]

const TechnicalSkills = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-12">
        My Technical Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
        {techSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-xl w-40 p-6 flex flex-col items-center"
          >
            <div className="text-5xl mb-3 animate-pulse">{skill.icon}</div>
            <span className="font-semibold text-gray-800 mb-2">{skill.name}</span>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-blue-500 h-3 rounded-full transition-all duration-700 ease-in-out"
                style={{ width: `${skill.level}%` }}
              />
            </div>
            <span className="text-sm text-gray-600 mt-2">{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnicalSkills
