"use client";

import React from 'react';
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PricingPage() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
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
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        className="bg-green-50 py-10 md:py-16 text-center px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div variants={fadeInUp}>
              <span className="text-sm text-green-600 font-medium">PRICING</span>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-8">Transparent Pricing</h1>
            </motion.div>
            
            <motion.div 
              variants={scaleIn}
              className="flex justify-center mb-8"
            >
              <Image 
                src="/images/leaf-decoration.svg" 
                alt="Leaf decoration" 
                width={120} 
                height={120}
                className="mx-auto"
              />
            </motion.div>
            
            <motion.p 
              variants={fadeInUp}
              className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-8 md:mb-12"
            >
              We believe in fair and transparent pricing with no hidden fees or surprises. Our service rates depend on your home size. For special cases requiring more time, we provide a customized rate for your service before you book.
            </motion.p>
          </div>
          
          {/* Feature Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
          >
            {/* Card 1 */}
            <motion.div 
              className="bg-green-100 rounded-lg p-6 text-center"
              variants={staggerItem}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Transparent pricing with no surprises</h3>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div 
              className="bg-green-100 rounded-lg p-6 text-center"
              variants={staggerItem}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Flexible pricing based on your needs</h3>
            </motion.div>
            
            {/* Card 3 */}
            <motion.div 
              className="bg-green-100 rounded-lg p-6 text-center"
              variants={staggerItem}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Custom quotes for large or unusual spaces</h3>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Pricing Cards Section */}
      <motion.section 
        className="py-10 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-8 md:mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Get The Cleanliness you <span className="hidden md:inline"><br /></span>Deserve at a Price You'll Love</h2>
            <p className="text-gray-600">Check out the best house cleaning prices in your city for standard cleaning.</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
          >
            {/* Small Home Card */}
            <motion.div 
              variants={staggerItem}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-50 rounded-xl shadow-sm overflow-hidden border border-gray-100 relative"
            >
              <div className="p-6 pb-8">
                <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">SMALL</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold text-gray-900">$150</span>
                  <span className="text-gray-500 ml-2 pb-1">/clean</span>
                </div>
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <p className="font-medium text-gray-900">1-2 Bedrooms • Studio</p>
                  <p className="text-sm text-gray-500">Up to 1,000 sq ft • Estimated time: 1.5-2 hours</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-sm">Up to 1 bathroom to clean</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-sm">Up to 1 hour of deep cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-sm">Green products for all cleaning purposes</span>
                  </li>
                </ul>
                
                <div className="bg-gray-100 -mx-6 p-4 mt-6">
                  <div className="grid grid-cols-3 text-center text-sm">
                    <div>
                      <p className="font-semibold">First Clean</p>
                      <p className="text-gray-500">$180</p>
                    </div>
                    <div>
                      <p className="font-semibold">Weekly Clean</p>
                      <p className="text-gray-500">$150</p>
                    </div>
                    <div>
                      <p className="font-semibold">Bi-weekly</p>
                      <p className="text-gray-500">$165</p>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div 
                whileHover={{ scale: 1.03 }} 
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/book-now" className="block text-center bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 transition-colors">
                  Book Now
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Medium Home Card */}
            <motion.div 
              variants={staggerItem}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gradient-to-b from-yellow-50 to-yellow-100 rounded-xl shadow-md overflow-hidden border border-yellow-200 relative"
            >
              <div className="absolute top-0 right-0 bg-yellow-400 text-xs text-black px-3 py-1 font-semibold rounded-bl-lg">POPULAR</div>
              <div className="p-6 pb-8">
                <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">MEDIUM</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold text-gray-900">$250</span>
                  <span className="text-gray-500 ml-2 pb-1">/clean</span>
                </div>
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <p className="font-medium text-gray-900">3-4 Bedrooms • House</p>
                  <p className="text-sm text-gray-500">Up to 2,000 sq ft • Estimated time: 2.5-3.5 hours</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-sm">Up to 2 bathrooms to clean</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-sm">1 hour and half deep cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-sm">All necessary cleaning supplies</span>
                  </li>
                </ul>
                
                <div className="bg-yellow-50 -mx-6 p-4 mt-6">
                  <div className="grid grid-cols-3 text-center text-sm">
                    <div>
                      <p className="font-semibold">First Clean</p>
                      <p className="text-gray-500">$280</p>
                    </div>
                    <div>
                      <p className="font-semibold">Weekly Clean</p>
                      <p className="text-gray-500">$250</p>
                    </div>
                    <div>
                      <p className="font-semibold">Bi-weekly</p>
                      <p className="text-gray-500">$265</p>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div 
                whileHover={{ scale: 1.03 }} 
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/book-now" className="block text-center bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 transition-colors">
                  Book Now
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Large Home Card */}
            <motion.div 
              variants={staggerItem}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-50 rounded-xl shadow-sm overflow-hidden border border-gray-100 relative"
            >
              <div className="p-6 pb-8">
                <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">LARGE</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold text-gray-900">$300</span>
                  <span className="text-gray-500 ml-2 pb-1">/clean</span>
                </div>
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <p className="font-medium text-gray-900">5+ Bedrooms • Large</p>
                  <p className="text-sm text-gray-500">2,000+ sq ft • Estimated time: 3.5-4.5 hours</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-sm">Up to 3+ bathrooms to clean</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-sm">2 hour deep cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-sm">All necessary cleaning supplies</span>
                  </li>
                </ul>
                
                <div className="bg-gray-100 -mx-6 p-4 mt-6">
                  <div className="grid grid-cols-3 text-center text-sm">
                    <div>
                      <p className="font-semibold">First Clean</p>
                      <p className="text-gray-500">$330</p>
                    </div>
                    <div>
                      <p className="font-semibold">Weekly Clean</p>
                      <p className="text-gray-500">$300</p>
                    </div>
                    <div>
                      <p className="font-semibold">Bi-weekly</p>
                      <p className="text-gray-500">$315</p>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div 
                whileHover={{ scale: 1.03 }} 
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/book-now" className="block text-center bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 transition-colors">
                  Book Now
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Add-on Services Section */}
      <motion.section 
        className="bg-green-600 text-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            variants={fadeInUp}
          >
            <span className="text-sm text-green-200 font-medium">ADD-ON SERVICES TO</span>
            <h2 className="text-3xl font-bold mb-6">Add-on Services for a <br />Deeper Clean</h2>
            <p className="text-green-100 max-w-2xl mx-auto">
              Our add-on services give your cleaning a boost! Add just what you need for a perfectly clean home.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-10"
            variants={staggerContainer}
          >
            {/* Add-on Items */}
            {[
              { price: "$30", service: "Inside empty refrigerator / freezer" },
              { price: "$40", service: "Inside windows / screens" },
              { price: "$35", service: "Clean inside of kitchen cabinets" },
              { price: "$35", service: "Interior window cleaning" },
              { price: "$30", service: "Inside empty oven" },
              { price: "$30", service: "Inside kitchen drawers" },
              { price: "$45", service: "Balcony cleaning" },
              { price: "$40", service: "Patio furniture" }
            ].map((addon, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg p-4 flex items-start"
                variants={staggerItem}
                whileHover={{ scale: 1.05, backgroundColor: "#f9fafb" }}
              >
                <input type="checkbox" className="h-5 w-5 mt-1 mr-3" />
                <div>
                  <p className="text-green-600 font-medium">{addon.price} extra</p>
                  <p className="text-gray-900 font-medium">{addon.service}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center"
            variants={scaleIn}
          >
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/book-now" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-8 rounded-full transition-colors">
                Get a Free Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Our Goal Section */}
      <motion.section 
        className="bg-green-50 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <motion.div 
              className="md:w-1/2"
              variants={fadeInUp}
              custom={0}
            >
              <div className="max-w-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center gap-2">
                  <span className="inline-block w-10 h-1 bg-green-600 rounded-full"></span>
                  Our Goal is to Wow You With Every Clean
                </h2>
                <p className="text-gray-600 mb-6">
                  Our highest priority is your satisfaction. We strive to deliver exceptional cleaning services
                  that exceed your expectations and make your life easier and more comfortable.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/contact-us"
                    className="inline-block border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-medium py-2 px-4 md:px-6 rounded-full transition-colors text-sm md:text-base"
                  >
                    Get In Touch
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="md:w-1/2"
              variants={fadeInUp}
              custom={1}
            >
              <motion.div 
                className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-md"
                whileHover={{ 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900">BUSINESS HOURS • LOCATIONS</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <motion.div 
                    className="border-l-2 border-green-500 pl-3"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="font-semibold text-gray-900 mb-1">New York City</div>
                    <div className="text-sm text-gray-600">Mon-Fri: 8AM-7PM</div>
                    <div className="text-sm text-gray-600">Sat-Sun: 9AM-5PM</div>
                  </motion.div>
                  <motion.div 
                    className="border-l-2 border-green-500 pl-3"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="font-semibold text-gray-900 mb-1">Boston</div>
                    <div className="text-sm text-gray-600">Mon-Fri: 8:30AM-6:30PM</div>
                    <div className="text-sm text-gray-600">Sat: 9AM-4PM</div>
                  </motion.div>
                </div>
                
                <div className="mt-6 flex justify-center">
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Link href="/contact-us" className="flex items-center gap-2 text-green-600 hover:text-green-700">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      <span className="font-medium">+1 (987) 654-3210</span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      <Footer />
    </main>
  );
}
