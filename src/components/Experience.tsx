'use client';

import { motion } from 'framer-motion';
import { FiBriefcase, FiAward } from 'react-icons/fi';

const Experience = () => {
  const workExperience = [
    {
      company: 'Explorin.io',
      role: 'Full Stack Developer',
      description: [
        'Developed and maintained web applications using the MERN stack (MongoDB, Express.js, React, Node.js), ensuring high performance and responsiveness.',
        'Gained hands-on experience with modern web development tools and frameworks, staying current with industry trends while constantly advancing technology.',
      ],
      technologies: ['ReactJS', 'NodeJS', 'Bootstrap', 'HTML', 'CSS', 'Javascript', 'Git/Github', 'Postman', 'Express', 'MongoDB'],
    },
  ];

  const certifications = [
    {
      title: 'Foundations: Data, Data, Everywhere – Google',
      date: 'July 17, 2024',
    },
    {
      title: 'Explorin Summer Internship and Training Program',
      date: 'July 17 – August 30, 2024',
    },
    {
      title: 'Accenture Developer and Technology Job Simulation',
      date: 'December 22, 2024',
    },
    {
      title: 'AWS Solutions Architecture Job Simulation',
      date: 'December 28, 2024',
    },
    {
      title: 'Excel Bootcamp – LetsUpgrade',
      date: 'February 22, 2025',
    },
    {
      title: 'React Bootcamp – LetsUpgrade',
      date: 'February 5, 2025',
    },
    {
      title: 'DSA with C++ Bootcamp – LetsUpgrade',
      date: 'February 10, 2025',
    },
    {
      title: 'ChatGPT Bootcamp – LetsUpgrade',
      date: 'February 28, 2025',
    },
    {
      title: 'Software Engineering Job Simulation – Electronic Arts',
      date: 'May 7, 2025',
    },
    {
      title: 'Data Analytics Job Simulation – Deloitte',
      date: 'June 7, 2025',
    },
    {
      title: 'GenAI Powered Data Analytics Job Simulation – Tata',
      date: 'June 20, 2025',
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold">Experience</h2>
        </motion.div>

        <div className="mt-12">
          <div className="space-y-8">
            {workExperience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-900"
              >
                <div className="flex items-center mb-4">
                  <FiBriefcase className="mr-2 text-blue-600" size={24} />
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                </div>
                <h4 className="mb-4 text-lg text-gray-600 dark:text-gray-400">{exp.role}</h4>
                <ul className="mb-6 space-y-2 text-gray-600 list-disc list-inside dark:text-gray-400">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Certifications & Achievements</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start p-6 bg-white rounded-lg shadow-md dark:bg-gray-900"
              >
                <FiAward className="flex-shrink-0 mt-1 mr-3 text-blue-600" size={20} />
                <div>
                  <p className="font-medium text-blue-700 dark:text-blue-400">{cert.title}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
