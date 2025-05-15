"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// Sample review data - this would typically come from a CMS or API
const reviews = [
  {
    id: 1,
    name: "Patricia Lark",
    role: "Customer",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&w=100&q=80",
    rating: 5,
    text: "Amazing and highly efficient, met all my expectations and more, they were there on time and left my duplex in pristine conditions. Thank Clany Eco."
  },
  {
    id: 2,
    name: "Selena Gomes",
    role: "Customer",
    image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&w=100&q=80",
    rating: 5,
    text: "Clany Eco provided an exceptional cleaning experience that truly exceeded my expectations. Their team was punctual, and professional, and left my duplex spotless."
  },
  {
    id: 3,
    name: "Carlos Moya",
    role: "Customer",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&w=100&q=80",
    rating: 5,
    text: "Reliable and efficient cleaning services! Highly efficient, met all my expectations, and more, they were there on time and left my duplex in pristine condition. Thank Clany Eco."
  },
  {
    id: 4,
    name: "John Davis",
    role: "Customer",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&w=100&q=80",
    rating: 5,
    text: "Outstanding service! The team was professional, thorough, and paid great attention to detail. My home has never looked better."
  },
  {
    id: 5,
    name: "Sophia Lee",
    role: "Customer",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&w=100&q=80",
    rating: 5,
    text: "I'm extremely satisfied with Clany Eco's cleaning services. The staff was friendly, efficient, and my apartment looks immaculate. Will definitely book again!"
  }
];

export function ReviewCardsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState<number[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Function to determine how many cards to show based on viewport width
  const updateVisibleReviews = () => {
    let visibleCount = 1;
    
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) {
        visibleCount = 3; // Show 3 cards on large screens
      } else if (window.innerWidth >= 768) {
        visibleCount = 2; // Show 2 cards on medium screens
      }
    }
    
    const indices = [];
    for (let i = 0; i < visibleCount; i++) {
      indices.push((activeIndex + i) % reviews.length);
    }
    
    setVisibleReviews(indices);
  };
  
  // Update visible reviews when activeIndex changes or on resize
  useEffect(() => {
    updateVisibleReviews();
    
    const handleResize = () => {
      updateVisibleReviews();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex]);
  
  const goToPrev = () => {
    setActiveIndex((current) => (current === 0 ? reviews.length - 1 : current - 1));
  };
  
  const goToNext = () => {
    setActiveIndex((current) => (current === reviews.length - 1 ? 0 : current + 1));
  };
  
  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };
  
  // Generate star rating display
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };
  
  return (
    <section className="w-full bg-gray-50 py-16 mt-16 md:mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-parkinsans mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 font-outfit max-w-2xl mx-auto">
            Hear from our satisfied customers about their experience with our cleaning services.
          </p>
        </div>
        
        <div className="relative">
          {/* Slider controls */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10">
            <button 
              onClick={goToPrev}
              className="bg-white rounded-full shadow-md p-2 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10">
            <button 
              onClick={goToNext}
              className="bg-white rounded-full shadow-md p-2 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-label="Next review"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>
          
          {/* Reviews slider */}
          <div 
            ref={sliderRef}
            className="flex space-x-6 transition-all duration-300 overflow-hidden px-4"
          >
            {visibleReviews.map((index) => {
              const review = reviews[index];
              return (
                <div 
                  key={review.id} 
                  className="bg-white rounded-xl shadow-md p-6 flex-1 min-w-[280px] max-w-md flex flex-col"
                >
                  <div className="flex items-center mb-1">
                    {renderStars(review.rating)}
                  </div>
                  
                  <p className="text-gray-800 font-outfit mb-6 flex-grow text-sm">
                    "{review.text}"
                  </p>
                  
                  <div className="flex items-center">
                    <Image 
                      src={review.image} 
                      alt={review.name} 
                      width={48} 
                      height={48} 
                      className="rounded-full border-2 border-gray-100"
                    />
                    <div className="ml-3">
                      <h4 className="font-bold text-sm uppercase font-parkinsans">{review.name}</h4>
                      <p className="text-xs text-gray-500 font-outfit">{review.role}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? 'bg-green-500 w-6' : 'bg-gray-300'
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
