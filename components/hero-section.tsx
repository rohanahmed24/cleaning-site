"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };
  
  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };
  
  const [bedrooms, setBedrooms] = useState("1 Bedroom")
  const [bathrooms, setBathrooms] = useState("1 Bathroom")
  const [showBedroomDropdown, setShowBedroomDropdown] = useState(false)
  const [showBathroomDropdown, setShowBathroomDropdown] = useState(false)

  const bedroomOptions = ["1 Bedroom", "2 Bedrooms", "3 Bedrooms", "4 Bedrooms", "5+ Bedrooms"]
  const bathroomOptions = ["1 Bathroom", "2 Bathrooms", "3 Bathrooms", "4 Bathrooms", "5+ Bathrooms"]

  return (
    <motion.section 
      className="relative w-full min-h-[700px] md:min-h-[800px]"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0 overflow-hidden"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          alt="Professional cleaning team in kitchen"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="container mx-auto px-4 relative z-10 pt-48 md:pt-64 flex flex-col items-center"
        variants={staggerContainer}
      >
        {/* Verified Cleaners Badge */}
        <motion.div 
          className="flex items-center justify-center mb-6 bg-white bg-opacity-80 py-2 px-4 rounded-full"
          variants={scaleIn}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-sm text-gray-700 mr-2 font-outfit">Verified Cleaners</span>
          <div className="relative w-16 h-16">
            <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center border-2 border-green-500">
              <div className="text-center">
                <div className="text-xs font-bold font-outfit">SUPER</div>
                <div className="text-xs font-bold font-outfit">SERVICE</div>
                <div className="text-xs font-bold font-outfit">AWARD</div>
              </div>
            </div>
            <div className="absolute top-0 right-0 bg-white rounded-full p-1">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-yellow-500">
                <path
                  fill="currentColor"
                  d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center ml-2">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-yellow-500">
              <path
                fill="currentColor"
                d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
              />
            </svg>
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-yellow-500">
              <path
                fill="currentColor"
                d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
              />
            </svg>
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-yellow-500">
              <path
                fill="currentColor"
                d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
              />
            </svg>
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-yellow-500">
              <path
                fill="currentColor"
                d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
              />
            </svg>
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-yellow-500">
              <path
                fill="currentColor"
                d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
              />
            </svg>
            <span className="ml-1 text-sm font-outfit">5★ Service</span>
          </div>
        </motion.div>

        {/* Hero Headline */}
        <motion.div 
          className="text-center mb-8"
          variants={fadeInUp}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 font-parkinsans">
            Your #1 New York House
            <br />
            Cleaning Service
          </h1>
          <p className="text-center text-gray-100 mb-8 font-outfit">
            Professional, Reliable, and Eco-Friendly Cleaning Services
          </p>
        </motion.div>
        
        {/* Quote Form Box */}
        <motion.div 
          className="bg-white p-8 rounded-xl shadow-xl w-full max-w-3xl text-center"
          variants={fadeInUp}
          whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
        >
          <motion.h2 
            className="text-2xl font-bold text-gray-900 mb-6 font-outfit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Get a FREE Price Estimate
          </motion.h2>
          
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 font-outfit"
              />
            </div>

            {/* Bedroom Dropdown */}
            <div className="relative">
              <div
                className="w-full px-4 py-3 border border-gray-300 rounded-md flex justify-between items-center cursor-pointer font-outfit"
                onClick={() => setShowBedroomDropdown(!showBedroomDropdown)}
              >
                <span>{bedrooms}</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </div>
              {showBedroomDropdown && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                  {bedroomOptions.map((option) => (
                    <div
                      key={option}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-outfit"
                      onClick={() => {
                        setBedrooms(option)
                        setShowBedroomDropdown(false)
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bathroom Dropdown */}
            <div className="relative">
              <div
                className="w-full px-4 py-3 border border-gray-300 rounded-md flex justify-between items-center cursor-pointer font-outfit"
                onClick={() => setShowBathroomDropdown(!showBathroomDropdown)}
              >
                <span>{bathrooms}</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </div>
              {showBathroomDropdown && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                  {bathroomOptions.map((option) => (
                    <div
                      key={option}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-outfit"
                      onClick={() => {
                        setBathrooms(option)
                        setShowBathroomDropdown(false)
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 font-outfit"
              />
            </div>

            <div className="relative">
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 font-outfit"
              />
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Zip Code"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 font-outfit"
              />
            </div>

            <div className="md:col-span-3 flex justify-center mt-4">
              <motion.button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-8 rounded-full transition-colors font-outfit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Price
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
