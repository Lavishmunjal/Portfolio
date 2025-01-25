import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';

const projects = [
  {
    title: 'Job Portal',
    description: 'A full-stack bookstore application built with the MERN stack.',
    longDescription: 'A full-stack job portal built using the MERN stack, enabling recruiters to post and manage job listings while allowing candidates to browse jobs, apply, and upload their resumes. The platform features secure authentication, an intuitive user interface, and efficient backend optimization for seamless operation. Additional functionality includes real-time updates, application tracking, and scalability to handle large volumes of job postings and user interactions effectively.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=228&q=80',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS', 'Shadcn'],
    features: [
      'Developed a full-stack job portal using the MERN stack.',
      'Implemented secure login and registration functionalities for recruiters to post jobs and candidates to browse and apply for jobs.',
      'Enabled candidates to upload and submit their resumes while applying for jobs. Provided recruiters with features to review applications and manage job listings effectively.',
      
    ],
    links: {
      github: 'https://github.com/Lavishmunjal/JobPortal-',
    }
  },
  {
    title: 'Video Streaming Website',
    description: 'A full-stack video streaming application with FFmpeg integration.',
    longDescription: 'Developed a full-stack video streaming application using FFmpeg. Implemented video processing, encoding, and streaming functionality with efficient server-side management.',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    technologies: ['FFmpeg', 'Node.js', 'React', 'Express.js'],
    features: [
      'Video processing',
      'Video encoding',
      'Efficient streaming'
    ],
    links: {
      github: 'https://github.com/Lavishmunjal/Video-Streaming-Application',
      // live: 'https://example.com'
    }
  },
  {
    title: 'Weather Information Provider',
    description: 'A weather application with real-time data integration.',
    longDescription: 'Created a weather app using React and Tailwind CSS. Integrated with a weather API to fetch and display real-time weather data. Implemented search functionality for users to find weather information for different locations.And by latitude and longitude of the user, user location is also detected.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    technologies: ['React', 'Tailwind CSS', 'Weather API'],
    features: [
      'Real-time weather data',
      'Location search',
      'Responsive design',
      'Interactive UI'
    ],
    links: {
      github: 'https://github.com/Lavishmunjal/WeatherApp',
      // live: 'https://example.com'
    }
  }
];

const ProjectModal = ({ project, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-64 md:h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{project.longDescription}</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.links.github}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                  <a
                    href={project.links.live}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="py-20 bg-gray-900 dark:bg-gray-950" id="projects">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development and software engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 dark:bg-gray-800/50 rounded-xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -10 }}
            >
              <div className="relative group h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                    View Details
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-gray-700 dark:bg-gray-700/50 text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 text-sm bg-gray-700 dark:bg-gray-700/50 text-gray-300 rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Projects;