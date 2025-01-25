import React from 'react';

const About = () => {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200" id="about">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Hi, I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Lavish Munjal</span>, a final year B.Tech student passionate about full stack development. 
              I'm constantly learning and implementing new technologies to build modern web applications. My journey in tech has equipped me with 
              hands-on experience in both frontend and backend development, allowing me to create comprehensive solutions.
            </p>
            <div className="mt-8">
              <h3 className="font-bold text-xl mb-4 text-gray-900 dark:text-white">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'MongoDB', 'Express.js', 'TypeScript', 'MongoDb', 'Docker'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="src/public/image.png"
              alt="Developer workspace"
              className="rounded-lg shadow-lg size-500% md:size-400% lg:size-300%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;