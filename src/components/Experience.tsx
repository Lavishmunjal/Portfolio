import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    type: 'education',
    title: 'B.Tech',
    organization: 'ABES Engineering College',
    period: '2021 - 2025',
    description: 'Currently pursuing Bachelor of Technology.',
    icon: GraduationCap
  },
  {
    type: 'education',
    title: 'Class XII',
    organization: 'Dewan Public School, Hapur',
    period: '2021',
    description: 'Completed higher secondary education.',
    icon: GraduationCap
  },
  {
    type: 'work',
    title: 'Web Developer Intern',
    organization: 'VLSI FOR ALL, Ghaziabad',
    period: 'Jul 2024 – Sep 2024',
    description: 'Developed and maintained website features and functionality, enhancing user experience and ensuring optimal performance. Integrated Cloudinary for efficient management of media assets.',
    icon: Briefcase
  },
  {
    type: 'work',
    title: 'Web Content Creator',
    organization: 'VLSI FOR ALL, Ghaziabad',
    period: 'May 2022 – Nov 2022',
    description: 'Created templates for applications and performed video editing. Uploaded and maintained website content, ensuring smooth functionality.',
    icon: Briefcase
  }
];

const Experience = () => {
  return (
    <div className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200" id="experience">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience & Education
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-200 via-purple-400 to-purple-200 dark:from-purple-700 dark:via-purple-500 dark:to-purple-700"></div>
          
          {/* Experience items */}
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-5/12"></div>
              <div className="z-20">
                <motion.div 
                  className={`flex items-center justify-center w-12 h-12 rounded-full ${
                    exp.type === 'education' ? 'bg-blue-600 dark:bg-blue-500' : 'bg-purple-600 dark:bg-purple-500'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <exp.icon className="w-6 h-6 text-white" />
                </motion.div>
              </div>
              <motion.div 
                className="w-5/12"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                    exp.type === 'education' 
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                      : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                  }`}>
                    {exp.type === 'education' ? 'Education' : 'Experience'}
                  </span>
                  <h3 className="font-bold text-xl mt-4 mb-2 text-gray-900 dark:text-white">{exp.title}</h3>
                  <p className={`font-semibold mb-2 ${
                    exp.type === 'education' 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-purple-600 dark:text-purple-400'
                  }`}>
                    {exp.organization}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{exp.period}</p>
                  <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;