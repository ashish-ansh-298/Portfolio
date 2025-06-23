'use client';

import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMail className="text-blue-600" size={24} />,
      label: 'Email',
      value: 'ashishansh2908@gmail.com',
      href: 'mailto:ashishansh2908@gmail.com',
    },
    {
      icon: <FiPhone className="text-blue-600" size={24} />,
      label: 'Phone',
      value: '+91-9119069874',
      href: 'tel:+919119069874',
    },
    {
      icon: <FiGithub className="text-blue-600" size={24} />,
      label: 'GitHub',
      value: 'github.com/ashish-ansh-298',
      href: 'https://github.com/ashish-ansh-298/',
    },
    {
      icon: <FiLinkedin className="text-blue-600" size={24} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/ashishansh/',
      href: 'https://www.linkedin.com/in/ashishansh/',
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Feel free to reach out
          </p>
        </motion.div>

        <div className="grid gap-8 mt-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-6 text-xl font-semibold">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-600 transition-colors dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                >
                  {info.icon}
                  <div>
                    <p className="font-medium">{info.label}</p>
                    <p>{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form
              action="https://getform.io/f/ajjoqpka"
              method="POST"
              className="space-y-6"
            >
              {/* Optional: Redirect after submission */}
              <input type="hidden" name="_redirect" value="https://yourdomain.com/thank-you" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm form-input focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm form-input focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm form-input focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
