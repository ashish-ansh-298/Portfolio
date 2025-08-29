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
              I am Ashish Ansh, a Computer Science graduate (2025) with strong skills in Python, SQL, NoSQL, Power BI, Advanced Excel, ETL, and Data Warehousing. Currently pursuing a Data Science Professional program at Ducat, I’m passionate about solving real-world problems through data-driven solutions. With experience in full-stack web development and projects like ETL pipelines and real-time applications, I am open to opportunities in Data Analytics, Data Science, and Data Engineering.
            </p>

            {/* 🔥 Download Resume Button */}
            <a
              href="/Ashish-Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              📄 Download Resume
            </a>
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
