'use client';

import { motion } from 'framer-motion';

const About = () => {
  const skills = {
  'Languages': ['Python', 'SQL', 'JavaScript', 'C', 'C++', 'HTML', 'CSS'],
  'Frameworks & Libraries': ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Flask', 'Pandas', 'NumPy'],
  'Databases': ['MongoDB', 'MySQL'],
  'Cloud & Concepts': ['AWS', 'Data Warehousing', 'ETL', 'REST APIs'],
  'Developer Tools': ['VS Code', 'Postman', 'Git', 'GitHub'],
  'Soft Skills': ['Problem-Solving', 'Adaptability', 'Time Management', 'Communication']
};


  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            <p className="mb-4">
              I am a recent Bachelor of Technology graduate in Computer Science Engineering from Dr. A.P.J. Abdul Kalam Technical University (2021–2025), with a strong interest in exploring different domains of technology. Currently, I am enhancing my skills through a specialized course in Data Science, where I’m learning key concepts like ETL pipelines, data warehousing, and large-scale data processing. As a motivated learner, I am open to opportunities in software development, data engineering, and analytics, where I can grow, contribute, and continue building practical, real-world solutions.
            </p>
            <p>
              With hands-on exposure to full-stack web development and a growing interest in data science and engineering, I am continuously learning to build scalable and data-driven solutions that solve real-world problems. I strive to apply my computer science fundamentals along with modern technologies to develop meaningful and user-focused applications while constantly improving through new challenges and learning opportunities.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="mb-8 text-2xl font-bold text-center">Skills</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-900">
                <h4 className="mb-4 text-lg font-semibold text-blue-600">{category}</h4>
                <ul className="space-y-2">
                  {skillList.map((skill) => (
                    <li key={skill} className="text-gray-600 dark:text-gray-400">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="mb-8 text-2xl font-bold text-center">Education</h3>
          <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-900">
            <div className="mb-6">
              <h4 className="text-lg font-semibold">Bachelor of Technology in Computer Science Engineering</h4>
              <p className="text-gray-600 dark:text-gray-400">Dr. A.P.J. Abdul Kalam Technical University</p>
              <p className="text-gray-500">2021 - 2025</p>
            </div>
            <div className="mb-6">
              <h4 className="text-lg font-semibold">Senior Secondary School (CBSE)</h4>
              <p className="text-gray-600 dark:text-gray-400">P.M.S. Public School, Moradabad</p>
              <p className="text-gray-500">2020 - 2021</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">High School (CBSE)</h4>
              <p className="text-gray-600 dark:text-gray-400">P.M.S. Public School, Moradabad</p>
              <p className="text-gray-500">2019 - 2020</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 