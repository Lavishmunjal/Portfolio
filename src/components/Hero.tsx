import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black dark:bg-gray-950">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-200 border border-purple-500/20 mb-6 inline-block">
                Full Stack Developer
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
                Crafting Digital
              </span>
              <br />
              <span className="text-white">Experiences</span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-400 mb-8 max-w-xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transforming ideas into elegant solutions through modern web technologies and creative development.
            </motion.p>

            <motion.div 
              className="flex gap-4 justify-center md:justify-start items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              
              <div className="flex gap-4 ml-4">
                {[
                  { icon: Github, href: 'https://github.com/Lavishmunjal' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/lavishmunjal/' },
                  { icon: Mail, href: 'mailto:0111lavishmunjal@gmail.com' }
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon className="w-5 h-5 text-gray-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-30"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Coding workspace"
                className="rounded-2xl relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;