"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { animations } from "@/components/animated-components";
import { Variants } from "framer-motion";

export const RecurringSatisfactionGuarantee = () => {
  // Define animation variants
  const starIconVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        delay: 0.4,
        type: "spring",
        stiffness: 300
      }
    },
    hover: { 
      scale: 1.1, 
      rotate: [0, -5, 10, -5, 0],
      transition: { duration: 0.4 }
    }
  };
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={animations.fadeIn}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div variants={animations.staggerContainer}>
        <motion.h3 
          className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2"
          variants={animations.fadeInUp}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, duration: 0.6 }}
            whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            100% Satisfaction Guarantee
          </motion.span>
        </motion.h3>
        
        <motion.p 
          className="text-gray-700 mb-6"
          variants={animations.fadeInUp}
          custom={1}
        >
          We stand behind our recurring cleaning service with a 100% satisfaction guarantee. If you're not completely satisfied with any aspect of our service, we'll return and re-clean the area at no additional cost. Your consistent satisfaction is our top priority.
        </motion.p>
      </motion.div>
      
      <motion.div 
        className="mt-auto"
        variants={animations.fadeIn}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
        >
          <Image
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80"
            alt="100% Satisfaction Guarantee"
            width={400}
            height={300}
            className="rounded-lg object-cover"
          />
        </motion.div>
        
        <motion.div 
          className="flex items-center mt-4"
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <motion.div 
            className="mr-3"
            variants={starIconVariants}
          >
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 3L29.5 18.5H46L32.5 28L37 43.5L25 33.5L13 43.5L17.5 28L4 18.5H20.5L25 3Z" fill="#16A34A" stroke="#16A34A" strokeWidth="2"/>
            </svg>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <div className="font-bold text-gray-900">5-star Rating</div>
            <div className="text-sm text-gray-600">Based on 1,200+ reviews</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
