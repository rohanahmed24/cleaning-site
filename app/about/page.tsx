"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { animations } from "@/components/animated-components";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { CheckCircle, Star, Award, Heart, Clock, Leaf } from "lucide-react";

export default function AboutPage() {
  // Values cards animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * custom,
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }),
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  // Team member animation variants
  const teamMemberVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (customDelay: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2 * customDelay,
        duration: 0.5
      }
    }),
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  const values = [
    {
      title: "Quality Service",
      description: "We're committed to delivering exceptional cleaning services that exceed expectations every time.",
      icon: <Star className="text-green-500 h-6 w-6" />
    },
    {
      title: "Reliable Team",
      description: "Our carefully vetted professionals are punctual, trustworthy, and skilled in all aspects of cleaning.",
      icon: <CheckCircle className="text-green-500 h-6 w-6" />
    },
    {
      title: "Eco-Friendly",
      description: "We use green cleaning products and sustainable practices to protect your health and the environment.",
      icon: <Leaf className="text-green-500 h-6 w-6" />
    },
    {
      title: "Customer Care",
      description: "Your satisfaction is our priority, and we're dedicated to building long-lasting client relationships.",
      icon: <Heart className="text-green-500 h-6 w-6" />
    }
  ];

  const teamMembers = [
    {
      name: "Jessica Miller",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      description: "With 15+ years in the cleaning industry, Jessica founded the company with a vision to create a service that prioritizes both quality cleaning and environmental responsibility."
    },
    {
      name: "Michael Thompson",
      position: "Operations Manager",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      description: "Michael ensures that all cleaning operations run smoothly, managing our team of professionals and ensuring every job meets our high standards."
    },
    {
      name: "Sarah Johnson",
      position: "Client Relations",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      description: "Sarah is dedicated to providing exceptional client experiences, handling client feedback and ensuring we're constantly improving our services."
    }
  ];

  return (
    <main className="min-h-screen bg-[#FAFBF7]">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        className="py-16 md:py-24 bg-white"
        initial="hidden"
        animate="visible"
        variants={animations.fadeIn}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            variants={animations.fadeInUp}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-parkinsans">Who We Are</h1>
            <p className="text-lg text-gray-700 mb-8 font-outfit">
              We're a dedicated team of cleaning professionals committed to providing exceptional services 
              that make your spaces cleaner, healthier, and more enjoyable.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            variants={animations.staggerContainer}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full"
                variants={cardVariants}
                custom={index}
                whileHover="hover"
              >
                <div className="bg-green-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      
      {/* Our Story Section */}
      <motion.section 
        className="py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={animations.fadeIn}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            variants={animations.fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 font-parkinsans">Our Story</h2>
            <p className="text-lg text-gray-700 font-outfit">
              Founded with a passion for creating cleaner, healthier spaces, our journey began over 10 years ago 
              with a commitment to excellence and environmental responsibility.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={animations.fadeInRight}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 font-parkinsans">Cleaning with Integrity and Respect</h3>
              <p className="text-gray-700 mb-6 font-outfit">
                Our founders started this company with a simple mission: to provide cleaning services that not only meet but exceed client expectations, 
                while respecting both our clients' homes and the environment.
              </p>
              <p className="text-gray-700 mb-6 font-outfit">
                What sets us apart is our unwavering commitment to quality. We don't just clean surfaces; we transform spaces. 
                Our team of dedicated professionals is trained to pay attention to the smallest details, ensuring that every corner of your space 
                receives the care it deserves.
              </p>
              <p className="text-gray-700 font-outfit">
                Over the years, we've grown from a small local operation to serving clients throughout the region, all while maintaining 
                our core values of integrity, excellence, and environmental responsibility.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 gap-3 md:gap-4 mt-8 md:mt-0"
              variants={animations.staggerContainer}
            >
              <motion.div 
                className="relative h-64 rounded-xl overflow-hidden"
                variants={animations.fadeInUp}
                custom={0}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80"
                  alt="Cleaning professional at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </motion.div>
              
              <motion.div 
                className="relative h-64 rounded-xl overflow-hidden mt-6"
                variants={animations.fadeInUp}
                custom={1}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=600&q=80"
                  alt="Clean organized kitchen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </motion.div>
              
              <motion.div 
                className="relative h-64 rounded-xl overflow-hidden"
                variants={animations.fadeInUp}
                custom={2}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80"
                  alt="Cleaning supplies"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </motion.div>
              
              <motion.div 
                className="relative h-64 rounded-xl overflow-hidden mt-6"
                variants={animations.fadeInUp}
                custom={3}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80"
                  alt="Clean living room"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Meet Our Team Section */}
      <motion.section 
        className="py-16 md:py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={animations.fadeIn}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            variants={animations.fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 font-parkinsans">Meet Our Team</h2>
            <p className="text-lg text-gray-700 font-outfit">
              Our success is built on the expertise and dedication of our team members, each bringing unique skills and experience to deliver exceptional service.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={animations.staggerContainer}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow h-full"
                variants={teamMemberVariants}
                custom={index}
                whileHover="hover"
              >
                <div className="relative h-48 md:h-64 rounded-lg overflow-hidden mb-4 md:mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-green-600 mb-4">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      
      {/* Why Choose Us Section */}
      <motion.section 
        className="py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={animations.fadeIn}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 md:order-1"
              variants={animations.staggerContainer}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 font-parkinsans"
                variants={animations.fadeInUp}
              >
                Why Choose Us
              </motion.h2>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex gap-4"
                  variants={animations.fadeInUp}
                  custom={0}
                >
                  <div className="bg-green-50 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="text-green-500 h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Punctuality and Reliability</h3>
                    <p className="text-gray-600">
                      We respect your time and schedule. Our team arrives within the designated time window and completes the service efficiently without rushing quality.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex gap-4"
                  variants={animations.fadeInUp}
                  custom={1}
                >
                  <div className="bg-green-50 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="text-green-500 h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Experienced Professionals</h3>
                    <p className="text-gray-600">
                      Our cleaners undergo rigorous training and background checks. We only employ dedicated professionals who take pride in their work.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex gap-4"
                  variants={animations.fadeInUp}
                  custom={2}
                >
                  <div className="bg-green-50 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                    <Leaf className="text-green-500 h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Eco-Friendly Solutions</h3>
                    <p className="text-gray-600">
                      We're committed to using environmentally friendly cleaning products that are effective yet gentle on your home and the planet.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="order-1 md:order-2 relative h-[300px] md:h-[500px] w-full rounded-xl md:rounded-2xl overflow-hidden"
              variants={animations.fadeInLeft}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?auto=format&fit=crop&w=1200&q=80"
                alt="Professional cleaning team"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* CTA Banner */}
      <motion.section 
        className="py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={animations.fadeIn}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl md:rounded-2xl p-6 md:p-16"
            variants={animations.fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 font-parkinsans">Ready to Experience the Difference?</h2>
              <p className="text-lg text-gray-700 mb-8 font-outfit">
                Join thousands of satisfied customers who have transformed their spaces with our professional cleaning services.
              </p>
              <motion.a 
                href="/contact" 
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full transition-colors font-outfit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Free Quote
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      <Footer />
    </main>
  );
}
