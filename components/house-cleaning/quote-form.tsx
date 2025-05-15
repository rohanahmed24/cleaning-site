"use client";

import React from "react";
import { motion } from "framer-motion";
import { animations } from "@/components/animated-components";

export const QuoteForm = () => {
  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * custom,
        duration: 0.4,
        ease: "easeOut"
      }
    }),
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 3px rgba(16, 185, 129, 0.2)",
      borderColor: "#10B981",
      transition: {
        duration: 0.2
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        duration: 0.5
      }
    },
    hover: {
      y: -3,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.98,
      boxShadow: "0 5px 10px -3px rgba(0, 0, 0, 0.2)"
    }
  };

  return (
    <motion.div 
      id="quote" 
      className="bg-yellow-100 p-6 rounded-xl shadow-md border border-yellow-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={animations.fadeInUp}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <motion.h3 
        className="text-2xl font-bold mb-4 text-gray-900"
        variants={animations.fadeInUp}
      >
        Get a Free Quote
      </motion.h3>
      
      <motion.form 
        className="space-y-4"
        variants={animations.staggerContainer}
      >
        <motion.div 
          className="grid grid-cols-2 gap-4"
          variants={animations.staggerContainer}
        >
          <motion.div variants={inputVariants} custom={0}>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <motion.input 
              type="text" 
              id="name" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              placeholder="John Doe"
              whileFocus="focus"
              variants={inputVariants}
            />
          </motion.div>
          <motion.div variants={inputVariants} custom={1}>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <motion.input 
              type="email" 
              id="email" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              placeholder="john@example.com"
              whileFocus="focus"
              variants={inputVariants}
            />
          </motion.div>
        </motion.div>
        
        <motion.div variants={inputVariants} custom={2}>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <motion.input 
            type="tel" 
            id="phone" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            placeholder="(555) 123-4567"
            whileFocus="focus"
            variants={inputVariants}
          />
        </motion.div>
        
        <motion.div variants={inputVariants} custom={3}>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Cleaning Service</label>
          <motion.select 
            id="service" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            whileFocus="focus"
            variants={inputVariants}
          >
            <option value="">Select a Service</option>
            <option value="standard">Standard House Cleaning</option>
            <option value="deep">Deep Cleaning</option>
            <option value="move">Move In/Out Cleaning</option>
            <option value="recurring">Recurring Service</option>
          </motion.select>
        </motion.div>
        
        <motion.div variants={inputVariants} custom={4}>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Special Requirements</label>
          <motion.textarea 
            id="message" 
            rows={3} 
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            placeholder="Tell us about any specific needs or areas that require special attention"
            whileFocus="focus"
            variants={inputVariants}
          ></motion.textarea>
        </motion.div>
        
        <motion.div 
          className="flex items-center"
          variants={inputVariants} 
          custom={5}
        >
          <motion.input 
            type="checkbox" 
            id="terms" 
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            whileHover={{ scale: 1.2 }}
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
            By submitting this form, you agree to be contacted by a representative regarding your inquiry.
          </label>
        </motion.div>
        
        <motion.button 
          type="submit" 
          className="w-full bg-gray-900 text-white py-2 px-4 rounded-md shadow font-medium"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Get a Quote
        </motion.button>
      </motion.form>
    </motion.div>
  );
};
