import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with your EmailJS service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS template ID
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200" id="contact">
      <motion.div 
        className="container mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          variants={itemVariants}
        >
          Get In Touch
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
        >
          {[
            { icon: Mail, title: 'Email', content: '0111lavishmunjal@gmail.com' },
            { icon: Phone, title: 'Phone', content: '(+91)-8439871583' },
            { icon: MapPin, title: 'Location', content: 'Hapur, UP' }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">
                <item.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="max-w-2xl mx-auto"
          variants={itemVariants}
        >
          <motion.form 
            ref={formRef}
            onSubmit={handleSubmit} 
            className="space-y-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {status.message && (
              <div className={`p-4 rounded-lg ${
                status.type === 'success' 
                  ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200' 
                  : 'bg-red-100 dark:bg-re d-900 text-red-700 dark:text-red-200'
              }`}>
                {status.message}
              </div>
            )}

            {[
              { name: 'name', type: 'text', label: 'Name' },
              { name: 'email', type: 'email', label: 'Email' }
            ].map((field) => (
              <motion.div 
                key={field.name}
                whileHover={{ scale: 1.01 }}
              >
                <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  required
                />
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.01 }}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                required
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg transition-colors ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'
              }`}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send className="w-4 h-4" />
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;