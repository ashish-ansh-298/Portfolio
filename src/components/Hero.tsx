'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FiGithub size={20} />,
      href: 'https://github.com/ashish-ansh-298/',
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin size={20} />,
      href: 'https://linkedin.com/in/ashishansh',
    },
    {
      name: 'Email',
      icon: <FiMail size={20} />,
      href: 'mailto:ashishansh2908@gmail.com',
    },
  ];

  return (
    <section id="home" className="flex items-center justify-center min-h-screen py-20">
      <div className="px-4 pt-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg font-semibold text-blue-600">Hello, this is</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Ashish Ansh
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
              {/* Full Stack Developer | MERN Stack Specialist */}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center mt-8 space-x-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-10"
          >
            <a
              href="#contact"
              className="inline-block px-8 py-3 font-medium text-white transition-colors bg-blue-600 rounded-full hover:bg-blue-700"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 