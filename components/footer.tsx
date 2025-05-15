"use client";

import React from "react";
import { motion } from "framer-motion";
import { animations } from "./animated-components";

const Footer = () => {
  // Animation variants
  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.1 * custom,
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }
    }),
    hover: {
      scale: 1.2,
      transition: { duration: 0.2 }
    }
  };
  
  const linkListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const linkItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    },
    hover: {
      x: 5,
      color: "#16a34a",
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.footer 
      className="bg-white border-t border-gray-100 pt-10 pb-5 px-4 md:px-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animations.fadeIn}
    >
      <motion.div 
        className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8"
        variants={animations.staggerContainer}
      >
        {/* Left Section */}
        <motion.div 
          className="md:w-1/3 flex flex-col gap-3"
          variants={animations.fadeInRight}
        >
          <motion.div 
            className="flex items-center gap-2 mb-2"
            variants={animations.fadeInUp}
          >
            <span className="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center">
              <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1.5c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5S1.5 13.142 1.5 9 4.858 1.5 9 1.5Zm0 0v6l3.5 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className="font-bold text-xl text-gray-900">Trusted Housekeepers Ready to Clean</span>
          </motion.div>
          
          <motion.p 
            className="text-gray-500 text-sm mb-2"
            variants={animations.fadeInUp}
            custom={1}
          >
            Easy, no-fuss cleaning services for busy people.
          </motion.p>
          
          <motion.div 
            className="flex items-center gap-2 text-gray-700 text-sm"
            variants={animations.fadeInUp}
            custom={2}
            whileHover={{ x: 5 }}
          >
            <span className="bg-green-100 p-2 rounded-full">
              <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6.75C3 5.231 4.231 4 5.75 4h6.5C13.769 4 15 5.231 15 6.75v4.5c0 1.519-1.231 2.75-2.75 2.75h-6.5A2.75 2.75 0 0 1 3 11.25v-4.5Z" stroke="#16a34a" strokeWidth="1.5"/></svg>
            </span>
            <a href="tel:+11805678990" className="hover:underline">+1 (180) 567-8990</a>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-2 text-gray-700 text-sm"
            variants={animations.fadeInUp}
            custom={3}
            whileHover={{ x: 5 }}
          >
            <span className="bg-green-100 p-2 rounded-full">
              <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.25 6.75l6.75 4.5 6.75-4.5" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <a href="mailto:office@clanyeco.com" className="hover:underline">office@clanyeco.com</a>
          </motion.div>
          
          <motion.button 
            className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full px-6 py-2 shadow transition"
            variants={animations.fadeInUp}
            custom={4}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Cleaning
          </motion.button>
        </motion.div>
        
        {/* Middle Section */}
        <motion.div 
          className="flex flex-col md:flex-row gap-8 md:gap-16"
          variants={animations.fadeIn}
        >
          <motion.div variants={animations.fadeInUp}>
            <motion.h4 
              className="font-semibold text-gray-900 mb-2"
              variants={animations.fadeInUp}
            >
              SERVICES
            </motion.h4>
            <motion.ul 
              className="text-gray-600 text-sm space-y-1"
              variants={linkListVariants}
            >
              <motion.li 
                variants={linkItemVariants}
                whileHover="hover"
              >
                Residential
              </motion.li>
              <motion.li 
                variants={linkItemVariants}
                whileHover="hover"
              >
                Short term rentals
              </motion.li>
              <motion.li 
                variants={linkItemVariants}
                whileHover="hover"
              >
                Commercial
              </motion.li>
            </motion.ul>
          </motion.div>
          
          <motion.div variants={animations.fadeInUp}>
            <motion.h4 
              className="font-semibold text-gray-900 mb-2"
              variants={animations.fadeInUp}
            >
              COMPANY
            </motion.h4>
            <motion.ul 
              className="text-gray-600 text-sm space-y-1"
              variants={linkListVariants}
            >
              <motion.li 
                variants={linkItemVariants}
                whileHover="hover"
              >
                About us
              </motion.li>
              <motion.li 
                variants={linkItemVariants}
                whileHover="hover"
              >
                Contact us
              </motion.li>
              <motion.li 
                variants={linkItemVariants}
                whileHover="hover"
              >
                Cleaning Tips
              </motion.li>
              <motion.li 
                variants={linkItemVariants}
                whileHover="hover"
              >
                Pricing
              </motion.li>
              <motion.li 
                variants={linkItemVariants}
                whileHover="hover"
              >
                Careers
              </motion.li>
              <motion.li 
                variants={linkItemVariants}
                whileHover="hover"
              >
                FAQ
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
        
        {/* Right Section */}
        <motion.div 
          className="md:w-1/3 flex flex-col gap-4 items-start"
          variants={animations.fadeInLeft}
        >
          <motion.div 
            className="bg-gradient-to-br from-yellow-200 to-green-100 rounded-xl p-4 border border-yellow-300 w-full max-w-xs"
            variants={animations.fadeInUp}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block bg-yellow-400 rounded-full p-1">
                <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.833 5.833 10 2.5l-5.833 3.333M10 2.5v15" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span className="font-semibold text-gray-800">Gift Card</span>
            </div>
            <p className="text-gray-700 text-sm">The best gift for who doesn't want to clean the house!</p>
            <a href="#" className="text-green-700 font-semibold text-sm hover:underline mt-2 inline-block">Learn More</a>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Lower Section */}
      <motion.div 
        className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-center border-t border-gray-100 mt-8 pt-4 gap-4 text-sm text-gray-500"
        variants={animations.fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className="flex flex-col md:flex-row gap-2 md:gap-6 items-center"
          variants={animations.fadeInUp}
        >
          <span className="font-medium">SERVICE AREAS:</span>
          <span>Atlanta</span>
          <span>Boston</span>
          <span>Chicago</span>
          <span>New York City</span>
        </motion.div>
        
        <motion.div 
          className="flex gap-4 mt-2 md:mt-0"
          variants={animations.staggerContainer}
        >
          <motion.a 
            href="#" 
            aria-label="Facebook" 
            className="hover:text-green-600"
            variants={socialIconVariants}
            custom={0}
            whileHover="hover"
          >
            <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.25h2.25A1.5 1.5 0 0 1 15.75 3.75v10.5a1.5 1.5 0 0 1-1.5 1.5H4.5a1.5 1.5 0 0 1-1.5-1.5V3.75a1.5 1.5 0 0 1 1.5-1.5H6V6H4.5v2.25H6v6h2.25v-6h1.5V6h-1.5V3.75H12V2.25Z" stroke="#16a34a" strokeWidth="1.5"/>
            </svg>
          </motion.a>
          
          <motion.a 
            href="#" 
            aria-label="Instagram" 
            className="hover:text-green-600"
            variants={socialIconVariants}
            custom={1}
            whileHover="hover"
          >
            <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2.25" y="2.25" width="13.5" height="13.5" rx="3" stroke="#16a34a" strokeWidth="1.5"/>
              <circle cx="9" cy="9" r="3" stroke="#16a34a" strokeWidth="1.5"/>
              <circle cx="13.125" cy="4.875" r=".375" fill="#16a34a"/>
            </svg>
          </motion.a>
          
          <motion.a 
            href="#" 
            aria-label="X" 
            className="hover:text-green-600"
            variants={socialIconVariants}
            custom={2}
            whileHover="hover"
          >
            <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 4.5 13.5 13.5M13.5 4.5 4.5 13.5" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </motion.a>
          
          <motion.a 
            href="#" 
            aria-label="YouTube" 
            className="hover:text-green-600"
            variants={socialIconVariants}
            custom={3}
            whileHover="hover"
          >
            <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2.25" y="4.5" width="13.5" height="9" rx="2" stroke="#16a34a" strokeWidth="1.5"/>
              <path d="M8.25 7.5v3l3-1.5-3-1.5Z" fill="#16a34a"/>
            </svg>
          </motion.a>
        </motion.div>
        
        <motion.div 
          className="mt-2 md:mt-0 text-center md:text-right"
          variants={animations.fadeInUp}
        >
          <span>© 2025 VamTam. All Rights Reserved</span>
          <span className="mx-2">|</span>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:underline">Terms of service</a>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
