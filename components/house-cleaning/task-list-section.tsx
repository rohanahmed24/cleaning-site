"use client";

import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { animations } from "@/components/animated-components";

export const TaskListSection = () => {
  const leftTasks = [
    "Dusting all surfaces",
    "Vacuuming",
    "Mopping",
    "Bathroom cleaning",
    "Kitchen deep cleaning"
  ];
  
  const rightTasks = [
    "Cleaning inside/outside fridge",
    "Cleaning all rooms",
    "Organizing kitchen",
    "Window cleaning",
    "Trash and recycling removal"
  ];

  const taskItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 * custom,
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }),
    hover: {
      scale: 1.03,
      x: 5,
      transition: { 
        type: "spring", 
        stiffness: 400 
      }
    }
  };

  return (
    <motion.section 
      className="py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={animations.fadeIn}
    >
      <motion.div 
        className="bg-green-600 rounded-xl py-12 px-8 text-white relative overflow-hidden"
        variants={animations.fadeInUp}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="absolute top-0 right-0">
          <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M150 0L0 150V0H150Z" fill="rgba(255,255,255,0.05)"/>
          </svg>
        </div>
        
        <motion.div 
          className="flex justify-center mb-4"
          variants={animations.fadeInUp}
          custom={-1} // Negative custom value for a different timing
        >
          <motion.div 
            className="bg-white rounded-full p-3 shadow-lg inline-block"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 22V12h6v10" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
        
        <motion.h2 
          className="text-3xl font-bold text-center mb-6"
          variants={animations.fadeInUp}
        >
          Our Home Cleaning Task List
        </motion.h2>
        <motion.p 
          className="text-center text-white/80 mb-10 max-w-2xl mx-auto"
          variants={animations.fadeInUp}
        >
          Here are the household tasks we'll take care of for you. Our pros take care of the
          cleaning checklist so you can take care of your day.
        </motion.p>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={animations.staggerContainer}
        >
          <motion.div 
            className="bg-green-500/30 backdrop-blur-sm rounded-lg p-6 shadow-lg"
            variants={animations.fadeInLeft}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            {leftTasks.map((task, index) => (
              <motion.div 
                key={index} 
                className="flex items-center mb-4 last:mb-0"
                variants={taskItemVariants}
                custom={index}
                whileHover="hover"
              >
                <motion.div 
                  className="bg-white rounded-full p-1 mr-3"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Check size={16} className="text-green-600" />
                </motion.div>
                <span>{task}</span>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="bg-green-500/30 backdrop-blur-sm rounded-lg p-6 shadow-lg"
            variants={animations.fadeInRight}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            {rightTasks.map((task, index) => (
              <motion.div 
                key={index} 
                className="flex items-center mb-4 last:mb-0"
                variants={taskItemVariants}
                custom={index}
                whileHover="hover"
              >
                <motion.div 
                  className="bg-white rounded-full p-1 mr-3"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Check size={16} className="text-green-600" />
                </motion.div>
                <span>{task}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
