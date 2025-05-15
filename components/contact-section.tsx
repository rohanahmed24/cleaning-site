"use client";

import { Phone, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { animations } from "./animated-components";

export function ContactSection() {
  // Card animation variants
  const mapHoverVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3, type: "spring", stiffness: 300 }
    }
  };
  
  const contactItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (custom: number) => ({
      opacity: 1, 
      x: 0,
      transition: {
        delay: 0.2 * custom,
        duration: 0.5
      }
    })
  };

  return (
    <motion.section 
      className="w-full bg-white py-20 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={animations.fadeIn}
    >
      <motion.div 
        className="max-w-6xl mx-auto"
        variants={animations.staggerContainer}
      >
        <motion.div 
          className="flex flex-col md:flex-row items-start justify-between gap-12"
          variants={animations.staggerContainer}
        >
          {/* Left: Contact Information */}
          <motion.div 
            className="w-full md:w-2/5 flex flex-col"
            variants={animations.fadeInRight}
          >
            <motion.div 
              className="mb-8"
              variants={animations.fadeInUp}
            >
              <span className="uppercase text-xs tracking-wider text-gray-500 font-parkinsans block mb-2">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-parkinsans mb-6 leading-tight">
                Our Experts are <br className="hidden md:block" />Available 24/7
              </h2>
            </motion.div>
            
            <motion.div 
              className="space-y-5 mb-8"
              variants={animations.staggerContainer}
            >
              <motion.p 
                className="text-gray-700 font-outfit"
                variants={contactItemVariants}
                custom={0}
              >
                Our office is open <br className="hidden md:block" />
                Monday - Friday, 7:00am - 6:00pm
              </motion.p>
              
              <motion.p 
                className="text-gray-700 font-outfit"
                variants={contactItemVariants}
                custom={1}
              >
                72 Kneeland St, Suite 305, New York, MA 02111
              </motion.p>
              
              <motion.div 
                className="flex items-center"
                variants={contactItemVariants}
                custom={2}
                whileHover={{ x: 5 }}
              >
                <Phone className="text-green-600 w-5 h-5 mr-3" />
                <Link 
                  href="tel:+1(800)567-8990" 
                  className="text-gray-700 hover:text-green-600 transition-colors font-outfit"
                >
                  +1 (800) 567-8990
                </Link>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                variants={contactItemVariants}
                custom={3}
                whileHover={{ x: 5 }}
              >
                <Mail className="text-green-600 w-5 h-5 mr-3" />
                <Link 
                  href="mailto:office@clanyeco.com" 
                  className="text-gray-700 hover:text-green-600 transition-colors font-outfit"
                >
                  office@clanyeco.com
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              variants={animations.fadeInUp}
              custom={1}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/contact" 
                  className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-8 rounded-full transition-colors font-outfit w-fit"
                >
                  Contact us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right: Google Map */}
          <motion.div 
            className="w-full md:w-3/5 h-[380px] rounded-lg overflow-hidden shadow-md"
            variants={animations.fadeInLeft}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6175697436177!2d-73.87375692403037!3d40.74467833539203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f03bb3464c1%3A0x7f82b2a75f7731c5!2s72%20Kneeland%20St%20%23305%2C%20Elmhurst%2C%20NY%2011373!5e0!3m2!1sen!2sus!4v1715777117654!5m2!1sen!2sus"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
