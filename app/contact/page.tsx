"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { animations } from "@/components/animated-components";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-green-500 h-5 w-5" />,
      title: "Email us",
      content: "contact@clanyeco.com",
      link: "mailto:contact@clanyeco.com"
    },
    {
      icon: <Phone className="text-green-500 h-5 w-5" />,
      title: "Call us",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="text-green-500 h-5 w-5" />,
      title: "Our Location",
      content: "123 Main Street, New York, NY 10001",
      link: "https://maps.google.com/?q=123+Main+Street,+New+York,+NY+10001"
    },
    {
      icon: <Clock className="text-green-500 h-5 w-5" />,
      title: "Working Hours",
      content: {
        weekday: "Monday — Friday: 8:00am — 6:00pm",
        weekend: "Saturday — Sunday: 10:00am — 4:00pm"
      },
      link: ""
    }
  ];

  // Company logos for "Trusted by" section
  const companyLogos = [
    { 
      name: "Realty Link", 
      element: (
        <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 20H30" stroke="#888" strokeWidth="2" />
          <path d="M15 15L25 25" stroke="#888" strokeWidth="2" />
          <path d="M15 25L25 15" stroke="#888" strokeWidth="2" />
          <text x="35" y="25" fontFamily="Arial" fontSize="14" fill="#888">Realty Link</text>
        </svg>
      )
    },
    { 
      name: "Swift Line", 
      element: (
        <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 20H30" stroke="#888" strokeWidth="2" />
          <path d="M30 20L25 15" stroke="#888" strokeWidth="2" />
          <path d="M30 20L25 25" stroke="#888" strokeWidth="2" />
          <text x="35" y="25" fontFamily="Arial" fontSize="14" fill="#888">Swift Line</text>
        </svg>
      )
    },
    { 
      name: "Statrix", 
      element: (
        <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="20" height="20" stroke="#888" strokeWidth="2" fill="none" />
          <line x1="10" y1="15" x2="30" y2="15" stroke="#888" strokeWidth="1" />
          <line x1="10" y1="25" x2="30" y2="25" stroke="#888" strokeWidth="1" />
          <text x="35" y="25" fontFamily="Arial" fontSize="14" fill="#888">Statrix</text>
        </svg>
      )
    },
    { 
      name: "Creative Hub", 
      element: (
        <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="10" stroke="#888" strokeWidth="2" fill="none" />
          <path d="M15 20L25 20" stroke="#888" strokeWidth="2" />
          <path d="M20 15L20 25" stroke="#888" strokeWidth="2" />
          <text x="35" y="25" fontFamily="Arial" fontSize="14" fill="#888">Creative Hub</text>
        </svg>
      )
    },
    { 
      name: "Green Residences", 
      element: (
        <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 25L20 10L30 25" stroke="#888" strokeWidth="2" fill="none" />
          <line x1="15" y1="20" x2="25" y2="20" stroke="#888" strokeWidth="2" />
          <text x="35" y="25" fontFamily="Arial" fontSize="12" fill="#888">Green Residences</text>
        </svg>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-[#FAFBF7]">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        className="py-12 md:py-20"
        initial="hidden"
        animate="visible"
        variants={animations.fadeIn}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={animations.fadeInUp}
          >
            <span className="text-green-600 font-medium mb-2 inline-block">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-parkinsans">Contact Us Today</h1>
          </motion.div>

          {/* Decorative Leaf SVGs */}
          <motion.div 
            className="relative w-full h-12 mb-12 flex justify-center"
            variants={animations.fadeIn}
          >
            <motion.div 
              className="absolute top-0 -ml-16" 
              animate={{ rotate: [0, 10, 0], y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 3L3 21" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.5 8.5C8.5 12.6421 11.8579 16 16 16C16.9372 16 17.8398 15.8196 18.6697 15.4879C17.5843 16.5583 16.0707 17.2394 14.3914 17.2394C11.0705 17.2394 8.37583 14.5447 8.37583 11.2238C8.37583 9.42584 9.15139 7.8114 10.3477 6.73225C9.92742 7.3654 8.5 10.5 8.5 8.5Z" fill="#4CAF50" stroke="#4CAF50" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
            <motion.div 
              className="absolute top-4 ml-4" 
              animate={{ rotate: [0, -10, 0], y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 3L3 21" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.5 8.5C8.5 12.6421 11.8579 16 16 16C16.9372 16 17.8398 15.8196 18.6697 15.4879C17.5843 16.5583 16.0707 17.2394 14.3914 17.2394C11.0705 17.2394 8.37583 14.5447 8.37583 11.2238C8.37583 9.42584 9.15139 7.8114 10.3477 6.73225C9.92742 7.3654 8.5 10.5 8.5 8.5Z" fill="#4CAF50" stroke="#4CAF50" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-8 md:mb-20 px-2 sm:px-0"
            variants={animations.staggerContainer}
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-[#f5f8f0] p-4 md:p-6 rounded-lg md:rounded-xl shadow-sm"
                variants={animations.fadeInUp}
                custom={index}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-2">{item.title}</h3>
                {typeof item.content === 'string' ? (
                  <a 
                    href={item.link} 
                    className={`text-sm ${item.link ? 'text-gray-600 hover:text-green-600' : 'text-gray-600'}`}
                  >
                    {item.content}
                  </a>
                ) : (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{item.content.weekday}</p>
                    <p className="text-sm text-gray-600">{item.content.weekend}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
          
          {/* Contact Form and Image */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-24"
            variants={animations.staggerContainer}
          >
            {/* Contact Form */}
            <motion.div
              className="bg-yellow-100 p-5 md:p-8 rounded-xl md:rounded-2xl order-2 md:order-1"
              variants={animations.fadeInRight}
            >
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 font-parkinsans">Contact us Today for Any Questions</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 md:gap-5">
                  <motion.div 
                    variants={animations.fadeInUp} 
                    custom={0}
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-transparent rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                    <motion.div 
                      variants={animations.fadeInUp} 
                      custom={1}
                    >
                      <input
                        type="email"
                        name="email"
                        placeholder="Your email address"
                        className="w-full px-4 py-3 border border-transparent rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </motion.div>
                    
                    <motion.div 
                      variants={animations.fadeInUp} 
                      custom={2}
                    >
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Your phone number"
                        className="w-full px-4 py-3 border border-transparent rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    variants={animations.fadeInUp} 
                    custom={3}
                  >
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="w-full px-4 py-3 border border-transparent rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>
                  
                  <motion.div 
                    variants={animations.fadeInUp} 
                    custom={4}
                  >
                    <textarea
                      name="message"
                      placeholder="Your message"
                      rows={5}
                      className="w-full px-4 py-3 border border-transparent rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    variants={animations.fadeInUp}
                    custom={5}
                    className="text-right"
                  >
                    <motion.button
                      type="submit"
                      className="px-6 py-3 bg-black text-white font-medium rounded-full"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Submit Message
                    </motion.button>
                  </motion.div>
                </div>
              </form>
            </motion.div>
            
            {/* Image */}
            <motion.div
              className="relative h-[250px] md:h-[500px] rounded-xl md:rounded-2xl overflow-hidden order-1 md:order-2"
              variants={animations.fadeInLeft}
            >
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
                alt="Cleaning professional at work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>
          
          {/* Trusted by Section */}
          <motion.div
            className="mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animations.fadeIn}
          >
            <motion.div 
              className="text-center mb-12"
              variants={animations.fadeInUp}
            >
              <span className="text-green-600 font-medium mb-2 inline-block">Our Clients</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-parkinsans">Trusted by Thousand of People & Companies</h2>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-6 md:gap-12"
              variants={animations.staggerContainer}
            >
              {companyLogos.map((logo, index) => (
                <motion.div
                  key={logo.name}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                  variants={animations.fadeInUp}
                  custom={index}
                  whileHover={{ scale: 1.05 }}
                >
                  {logo.element}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Map Section */}
          <motion.div
            className="mb-12 md:mb-24 rounded-xl md:rounded-2xl overflow-hidden shadow-md h-[250px] md:h-[400px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animations.fadeIn}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1620728625416!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy"
              title="Office location map"
            />
          </motion.div>
        </div>
      </motion.section>
      
      {/* CTA Section with Footer */}
      <motion.section 
        className="py-16 md:py-24 bg-[#f5f8f0]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={animations.fadeIn}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
            <motion.div
              variants={animations.fadeInRight}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900 font-parkinsans">Our Goal is to Wow You With Every Clean</h2>
              <motion.a 
                href="/book" 
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-8 rounded-full transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now
              </motion.a>
            </motion.div>
            
            <motion.div
              variants={animations.fadeInLeft}
              className="flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">What's Your Next Project?</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="flex-1 px-4 py-3 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-3 sm:mb-0"
                  />
                  <motion.button
                    className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="/services/house-cleaning" className="text-gray-600 hover:text-green-600">House cleaning</a></li>
                <li><a href="/services/office-cleaning" className="text-gray-600 hover:text-green-600">Office cleaning</a></li>
                <li><a href="/services/deep-cleaning" className="text-gray-600 hover:text-green-600">Deep cleaning</a></li>
                <li><a href="/services/move-in-out-cleaning" className="text-gray-600 hover:text-green-600">Move in/out cleaning</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-600 hover:text-green-600">About us</a></li>
                <li><a href="/contact" className="text-gray-600 hover:text-green-600">Contact us</a></li>
                <li><a href="/pricing" className="text-gray-600 hover:text-green-600">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">Mon-Fri: 8:00am - 6:00pm</li>
                <li className="text-gray-600">Sat-Sun: 10:00am - 4:00pm</li>
                <li>
                  <a href="tel:+15551234567" className="text-gray-600 hover:text-green-600">
                    <Phone className="h-4 w-4 inline-block mr-2" />
                    +1 (555) 123-4567
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">Mon — Fri: 8:00am — 6:00pm</li>
                <li className="text-gray-600">Saturday: 10:00am — 4:00pm</li>
                <li className="text-gray-600">Sunday: 10:00am — 4:00pm</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
      
      <Footer />
    </main>
  );
}
