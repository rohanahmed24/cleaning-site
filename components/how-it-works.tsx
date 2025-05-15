"use client";

import { Calendar, ClipboardCheck, Smile } from "lucide-react";
import { motion } from "framer-motion";
import { animations } from "./animated-components";

export function HowItWorks() {
  // Animation variants
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 2,
        ease: "easeInOut",
        delay: 0.3
      } 
    }
  };
  
  const stepVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5 + (custom * 0.3),
        duration: 0.5,
        type: "spring",
        stiffness: 150
      }
    })
  };

  return (
    <motion.section 
      className="w-full flex flex-col items-center py-16 bg-[#FAFBF7]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={animations.fadeIn}
    >
      <motion.h2 
        className="text-2xl md:text-3xl font-bold text-center mb-12 font-parkinsans"
        variants={animations.fadeInUp}
      >
        How Does it Work?
      </motion.h2>
      
      <motion.div 
        className="relative w-full max-w-3xl flex flex-col items-center"
        variants={animations.fadeIn}
      >
        {/* Dotted Line */}
        <svg className="absolute left-1/2 -translate-x-1/2 top-8 md:top-12 z-0" width="4" height="440" viewBox="0 0 4 440" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            d="M2 0 V440" 
            stroke="#CFCFCF" 
            strokeDasharray="8 12" 
            strokeWidth="2" 
            strokeLinecap="round"
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        </svg>
        
        {/* Steps */}
        <motion.div 
          className="relative z-10 flex flex-col md:grid md:grid-cols-2 gap-y-16 gap-x-8 w-full"
          variants={animations.staggerContainer}
        >
          {/* Step 1 */}
          <motion.div 
            className="flex flex-col items-center md:items-end md:col-start-2"
            variants={stepVariants}
            custom={0}
          >
            <div className="flex items-center mb-4">
              <motion.div 
                className="bg-green-100 rounded-xl p-4 mr-3 flex items-center justify-center relative"
                whileHover={{ scale: 1.1, backgroundColor: "#dcfce7" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Calendar className="w-8 h-8 text-gray-900" />
                <motion.span 
                  className="absolute -top-2 -right-2 text-green-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                  ★
                </motion.span>
              </motion.div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold font-parkinsans mb-1">1. Book a Cleaning</h3>
              <p className="text-gray-600 font-outfit">Easily book an appointment using your computer or phone.</p>
            </div>
          </motion.div>
          
          {/* Step 2 */}
          <motion.div 
            className="flex flex-col items-center md:items-start md:col-start-1 md:row-start-2"
            variants={stepVariants}
            custom={1}
          >
            <div className="flex items-center mb-4">
              <motion.div 
                className="bg-green-100 rounded-xl p-4 mr-3 flex items-center justify-center relative"
                whileHover={{ scale: 1.1, backgroundColor: "#dcfce7" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ClipboardCheck className="w-8 h-8 text-gray-900" />
                <motion.span 
                  className="absolute -top-2 -right-2 text-green-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                  ★
                </motion.span>
              </motion.div>
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold font-parkinsans mb-1">2. Get a Confirmation</h3>
              <p className="text-gray-600 font-outfit">Fully insured & bonded cleaners will deliver the quality services that you expect.</p>
            </div>
          </motion.div>
          
          {/* Step 3 */}
          <motion.div 
            className="flex flex-col items-center md:items-end md:col-start-2 md:row-start-3"
            variants={stepVariants}
            custom={2}
          >
            <div className="flex items-center mb-4">
              <motion.div 
                className="bg-green-100 rounded-xl p-4 mr-3 flex items-center justify-center relative"
                whileHover={{ scale: 1.1, backgroundColor: "#dcfce7" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Smile className="w-8 h-8 text-gray-900" />
                <motion.span 
                  className="absolute -top-2 -right-2 text-green-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                  ★
                </motion.span>
              </motion.div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold font-parkinsans mb-1">3. Cleaners Arrives</h3>
              <p className="text-gray-600 font-outfit">Take back your free time by doing more of what you enjoy and less of what you don't.</p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Book Button */}
        <motion.div 
          className="flex justify-center mt-16 w-full"
          variants={animations.fadeInUp}
        >
          <motion.button 
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-8 rounded-full transition-colors font-outfit text-lg shadow-md"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            whileTap={{ scale: 0.98 }}
          >
            Book Your Service
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
