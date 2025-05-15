"use client";

import React from "react";
import { motion } from "framer-motion";
import { animations } from "@/components/animated-components";

export const RecurringQuoteForm = () => {
  // Form field animation variants
  const formFieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * custom,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };
  
  // Input focus animation
  const inputFocusVariants = {
    rest: { scale: 1 },
    focus: { scale: 1.01, boxShadow: "0 0 0 2px rgba(34, 197, 94, 0.3)" }
  };
  return (
    <motion.div 
      className="bg-yellow-100 p-6 rounded-xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animations.fadeIn}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.h3 
        className="text-xl font-semibold mb-4 text-gray-900"
        variants={animations.fadeInUp}
      >
        Get a Quote
      </motion.h3>
      
      <motion.form 
        className="space-y-4"
        variants={animations.staggerContainer}
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <motion.input 
            type="text" 
            id="name" 
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" 
            placeholder="Your name"
            initial="rest"
            whileFocus="focus"
            variants={inputFocusVariants}
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <motion.input 
            type="email" 
            id="email" 
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" 
            placeholder="your@email.com"
            initial="rest"
            whileFocus="focus"
            variants={inputFocusVariants}
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <motion.input 
            type="tel" 
            id="phone" 
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" 
            placeholder="(123) 456-7890"
            initial="rest"
            whileFocus="focus"
            variants={inputFocusVariants}
          />
        </div>
        
        <div>
          <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-1">Cleaning Frequency</label>
          <motion.select 
            id="frequency" 
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            initial="rest"
            whileFocus="focus"
            variants={inputFocusVariants}
          >
            <option value="">Select frequency</option>
            <option value="weekly">Weekly</option>
            <option value="biweekly">Bi-weekly</option>
            <option value="monthly">Monthly</option>
            <option value="custom">Custom Schedule</option>
          </motion.select>
        </div>
        
        <motion.div 
          className="flex items-center"
          variants={formFieldVariants}
          custom={4}
        >
          <input 
            type="checkbox" 
            id="terms" 
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
          />
          <label htmlFor="terms" className="ml-2 block text-xs text-gray-600">
            By submitting, you agree to be contacted about your experience.
          </label>
        </motion.div>
        
        <motion.div
          variants={formFieldVariants}
          custom={5}
        >
          <motion.button 
            type="submit" 
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Get a Quote
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};
