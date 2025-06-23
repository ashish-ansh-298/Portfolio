'use client';

import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'Crypto-Checker',
      description: 'A responsive React application that fetches and displays live cryptocurrency prices using the CoinGecko API. Features include debounced search, pagination, and caching for smooth performance.',
      technologies: ['ReactJS', 'JavaScript', 'CoinGecko API', 'Debouncing', 'Pagination'],
      github: 'https://github.com/ashish-ansh-298/Crypto-Checker',
    },
    {
      title: 'PurePlan',
      description: 'A full-stack task management app built with the MERN stack. It allows users to create, prioritize, and track their tasks using a clean and intuitive UI, supporting authentication and real-time updates.',
      technologies: ['MongoDB', 'Express.js', 'ReactJS', 'Node.js', 'JWT', 'REST API'],
      github: 'https://github.com/ashish-ansh-298/Pure-Plan',
    },
    {
      title: 'Mu-Gen',
      description: 'An AI-powered web application that composes monophonic music using a Transformer-based deep learning model. Features include mood-based generation, seed MIDI uploads, and download options.',
      technologies: ['ReactJS', 'Flask', 'TensorFlow', 'Transformer Model', 'MIDI'],
      github: 'https://github.com/ashish-ansh-298/Mugen',
    },
    {
      title: 'Covid19 ETL Pipeline',
      description: 'Designed and implemented an ETL pipeline using a public COVID-19 dataset from Kaggle. The project involved data extraction, transformation (cleaning & renaming), and loading into structured CSV for analytics.',
      technologies: ['Python', 'Pandas', 'ETL', 'Data Cleaning', 'CSV', 'Kaggle'],
      github: 'https://github.com/ashish-ansh-298/Covid19-ETL-Project',
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Here are some of my notable projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="mt-12 space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-white rounded-lg shadow-md dark:bg-gray-900"
            >
              <h3 className="mb-4 text-2xl font-bold">{project.title}</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
                >
                  <FiGithub className="mr-2" />
                  <span>Source Code</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
