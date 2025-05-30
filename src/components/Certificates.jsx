import React from 'react'

const certificates = [
  {
    title: 'Blockchain and its Applications',
    issuer: 'NPTEL',
    date: 'April 2024',
    link: 'https://drive.google.com/file/d/1-OSnyRRcBIS-Hkm3jILsPy8zr60lFKyL/view?usp=drivesdk',
    logo: '/nptel.jpg',
  },
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    date: 'Oct 2024',
    link: 'https://drive.google.com/file/d/1Bpf_XHgo2T6z99jYUEDCQWW_iZVLt7gV/view?usp=drivesdk',
    logo: '/nptel.jpg',
  },
  {
    title: 'Web Development Internship',
    issuer: 'Uptoskills Pvt. Ltd.',
    date: 'April 2025',
    link: 'https://drive.google.com/file/d/19nAJvO-Mwwhdswut2yxqjdz-DPMQ3y5L/view?usp=drivesdk',
    logo: '/uptoskills.jpg',
  },
  {
    title: 'Mobile App Development Internship',
    issuer: 'Ubitech Solutions Pvt. Ltd.',
    date: 'April 2025',
    link: 'https://drive.google.com/file/d/19zwoMNuytf1vKV2JOQ0hZjCgAMJwcMUp/view?usp=drivesdk',
    logo: '/ubitech.jpg',
  },
  {
    title: 'Fundamentals of Deep Learning',
    issuer: 'NVIDIA',
    date: 'Feb 2024',
    link: 'https://drive.google.com/file/d/1xP1CHo2p9OTScWNlT8AqdpMl87WrNto5/view?usp=drivesdk',
    logo: '/nvidia.jpg',
  },
  {
    title: 'E-commerce & Tech Quiz',
    issuer: 'Flipkart Grid 6.0',
    date: 'Sep 2024',
    link: 'https://drive.google.com/file/d/1AoD1ucRvUTfjir1tKhBzAF1bhTxt_wHW/view?usp=drivesdk',
    logo: '/flipkart.jpg',
  },
  {
    title: 'JS & ReactJS Workshop',
    issuer: 'Coding Thiker',
    date: 'Aug 2024',
    link: 'https://drive.google.com/file/d/1f1ZSVWzbJitqkotCa3sekMhvpiQvtIBE/view?usp=drivesdk',
    logo: '/coding.jpg',
  },
  {
    title: 'Young Turks Contest',
    issuer: 'Naukri Campus',
    date: 'Oct 2024',
    link: 'https://drive.google.com/file/d/1KGi-EeZ6hLPfL3rUt89DbmDOT4Ylxp7K/view?usp=drivesdk',
    logo: '/young turks.jpg',
  },
  {
    title: 'Dance Workshop',
    issuer: 'MITS, Gwalior',
    date: 'Feb 2024',
    link: 'https://drive.google.com/file/d/1vJCWD4cJlpT89X7ib_pLvK2grrPyr-sY/view?usp=drivesdk',
    logo: '/mits.png',
  },
]

const Certificates = () => {
  return (
    <section className="min-h-screen bg-white py-20 px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
        My Certificates
      </h2>
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-6 flex flex-col justify-between"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={cert.logo}
                alt={`${cert.issuer} logo`}
                className="h-14 w-14 object-contain rounded-md border border-gray-300"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{cert.title}</h3>
                <p className="text-sm text-gray-600">{cert.issuer}</p>
                <p className="text-xs text-gray-500">{cert.date}</p>
              </div>
            </div>
            <span className="mt-4 text-sm text-yellow-600 font-medium hover:underline">
              View Certificate →
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Certificates
