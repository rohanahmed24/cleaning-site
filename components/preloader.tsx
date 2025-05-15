"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [firstLoad, setFirstLoad] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Only show the full preloader on first page load
    if (!firstLoad) {
      return;
    }
    
    // Check if document is already loaded
    if (document.readyState === "complete") {
      const timer = setTimeout(() => {
        setLoading(false);
        setFirstLoad(false);
      }, 1500); // Minimum display time for better UX
      return () => clearTimeout(timer);
    }
    
    // Listen for the load event
    const handleLoad = () => {
      const timer = setTimeout(() => {
        setLoading(false);
        setFirstLoad(false);
      }, 1500); // Minimum display time for better UX
    };
    
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, [firstLoad]);
  
  // Track route changes to potentially show mini-loader
  useEffect(() => {
    if (!firstLoad) {
      // Could implement a mini-loader for subsequent navigation
      // For now, we'll just log route changes
      console.log('Route changed to:', pathname);
    }
  }, [pathname, firstLoad]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center px-4"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { 
              duration: 0.7,
              ease: "easeInOut"
            }
          }}
        >
          <motion.div 
            className="mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              transition: { 
                duration: 0.5 
              }
            }}
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 text-white">
                <path
                  fill="currentColor"
                  d="M7,21C5.67,21 4.5,19.83 4.5,18.5C4.5,17.17 5.67,16 7,16C8.33,16 9.5,17.17 9.5,18.5C9.5,19.83 8.33,21 7,21M7,17.5C6.5,17.5 6,18 6,18.5C6,19 6.5,19.5 7,19.5C7.5,19.5 8,19 8,18.5C8,18 7.5,17.5 7,17.5M17,21C15.67,21 14.5,19.83 14.5,18.5C14.5,17.17 15.67,16 17,16C18.33,16 19.5,17.17 19.5,18.5C19.5,19.83 18.33,21 17,21M17,17.5C16.5,17.5 16,18 16,18.5C16,19 16.5,19.5 17,19.5C17.5,19.5 18,19 18,18.5C18,18 17.5,17.5 17,17.5M3,4H21V8H3V4M3,10H21V14H3V10Z"
                />
              </svg>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1,
              y: 0,
              transition: { 
                delay: 0.3,
                duration: 0.5 
              }
            }}
          >
            <h2 className="text-xl sm:text-2xl font-bold font-parkinsans text-gray-900 mb-1 sm:mb-2 text-center">Clanyeco</h2>
            <p className="text-sm sm:text-base text-gray-600 font-outfit text-center">Professional Cleaning Services</p>
          </motion.div>
          
          <motion.div 
            className="mt-6 sm:mt-8 relative w-56 sm:w-64 h-2 bg-gray-100 rounded-full overflow-hidden"
            initial={{ width: 0, opacity: 0 }}
            animate={{ 
              width: "16rem", 
              opacity: 1,
              transition: { 
                delay: 0.5,
                duration: 0.5 
              }
            }}
          >
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
              initial={{ width: "0%" }}
              animate={{ 
                width: "100%",
                transition: { 
                  delay: 0.7,
                  duration: 1.5,
                  ease: "easeInOut"
                }
              }}
            />
          </motion.div>
          
          <motion.div
            className="flex items-center justify-center mt-5 sm:mt-6 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { 
                delay: 0.9,
                duration: 0.5 
              }
            }}
          >
            <svg 
              className="w-5 h-5 text-green-500 animate-pulse" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" 
              />
            </svg>
            <span className="ml-2 text-xs sm:text-sm text-gray-500 font-outfit text-center">Preparing your sparkling clean experience</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
