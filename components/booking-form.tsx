"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, ChevronDown, CalendarIcon, Clock } from "lucide-react";

// Form step types
type FormStep = 1 | 2 | 3;

// Service option types
interface ServiceOption {
  id: string;
  name: string;
  description: string;
}

// Frequency option types
interface FrequencyOption {
  id: string;
  name: string;
  discount?: number;
}

// Extra service option types
interface ExtraOption {
  id: string;
  name: string;
  price: number;
}

// Available services
const services: ServiceOption[] = [
  { id: "regular", name: "Regular Cleaning", description: "Standard cleaning service for maintenance" },
  { id: "deep", name: "Deep Cleaning", description: "Thorough cleaning of all areas including hard to reach spots" },
  { id: "move-in", name: "Move In/Out Cleaning", description: "Detailed cleaning when moving in or out of a property" },
  { id: "post-construction", name: "Post Construction", description: "Cleaning after renovation or construction" },
];

// Frequency options
const frequencies: FrequencyOption[] = [
  { id: "one-time", name: "One Time" },
  { id: "weekly", name: "Weekly", discount: 30 },
  { id: "bi-weekly", name: "Bi-Weekly", discount: 25 },
  { id: "monthly", name: "Monthly", discount: 15 },
];

// Extra services
const extras: ExtraOption[] = [
  { id: "fridge", name: "Inside Fridge", price: 30 },
  { id: "oven", name: "Inside Oven", price: 25 },
  { id: "windows", name: "Interior Windows", price: 40 },
  { id: "cabinets", name: "Inside Cabinets", price: 35 },
];

// Number options for rooms
const roomOptions = ["1", "2", "3", "4", "5+"];

// Generate time slots from 8:00 to 18:00
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 8; hour <= 18; hour++) {
    const hourStr = hour.toString().padStart(2, '0');
    slots.push(`${hourStr}:00`);
    if (hour < 18) {
      slots.push(`${hourStr}:30`);
    }
  }
  return slots;
};

const timeSlots = generateTimeSlots();

export function BookingForm() {
  // Form state
  const [step, setStep] = useState<FormStep>(1);
  const [selectedService, setSelectedService] = useState<string>("");
  const [bedrooms, setBedrooms] = useState("1");
  const [bathrooms, setBathrooms] = useState("1");
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [frequency, setFrequency] = useState<string>("one-time");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("08:00");

  // Dropdown states
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [bedroomsDropdownOpen, setBedroomsDropdownOpen] = useState(false);
  const [bathroomsDropdownOpen, setBathroomsDropdownOpen] = useState(false);
  const [extrasDropdownOpen, setExtrasDropdownOpen] = useState(false);
  const [frequencyDropdownOpen, setFrequencyDropdownOpen] = useState(false);
  const [timeDropdownOpen, setTimeDropdownOpen] = useState(false);

  // Change the current step
  const goToStep = (newStep: FormStep) => {
    setStep(newStep);
  };

  // Handle extras selection
  const toggleExtra = (extraId: string) => {
    if (selectedExtras.includes(extraId)) {
      setSelectedExtras(selectedExtras.filter(id => id !== extraId));
    } else {
      setSelectedExtras([...selectedExtras, extraId]);
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would process the booking here
    console.log({
      selectedService,
      bedrooms,
      bathrooms,
      selectedExtras,
      frequency,
      date,
      time
    });
    
    // For demo purposes, just move to the next step or show success
    if (step < 3) {
      goToStep((step + 1) as FormStep);
    } else {
      alert("Booking submitted successfully! We will contact you shortly.");
    }
  };

  return (
    <section className="w-full bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Left side - Image and badges */}
          <div className="relative w-full md:w-1/2 h-[300px] md:h-[600px]">
            <Image
              src="https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Professional cleaner in yellow uniform"
              fill
              className="object-cover"
            />
            
            {/* Badges */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-around px-4">
              <div className="bg-white bg-opacity-90 rounded-lg p-4 flex flex-col items-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-green-700 font-bold">100%</span>
                </div>
                <span className="text-xs text-gray-700">Happy customers</span>
              </div>
              
              <div className="bg-white bg-opacity-90 rounded-lg p-4 flex flex-col items-center">
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-yellow-700 font-bold">10+</span>
                </div>
                <span className="text-xs text-gray-700">Years in industry</span>
              </div>
              
              <div className="bg-white bg-opacity-90 rounded-lg p-4 flex flex-col items-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-blue-700 font-bold">4.9</span>
                </div>
                <span className="text-xs text-gray-700">Yelp & Google reviews</span>
              </div>
            </div>
          </div>
          
          {/* Right side - Form */}
          <div className="w-full md:w-1/2 p-8 md:p-12">
            <div className="text-center mb-8">
              <span className="uppercase text-xs tracking-wider text-gray-500 font-parkinsans">BOOKING</span>
              <h2 className="text-2xl md:text-3xl font-bold font-parkinsans mt-2">
                Get Your Estimate & Book Now
              </h2>
            </div>
            
            {/* Progress steps */}
            <div className="flex items-center justify-center mb-8">
              <div className="relative flex items-center justify-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center z-10 font-medium 
                    ${step >= 1 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'}`}
                >
                  1
                </div>
                <div className="absolute text-xs text-gray-500 -bottom-6 w-16 text-center">Service</div>
              </div>
              
              <div className={`w-12 h-1 mx-1 ${step >= 2 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
              
              <div className="relative flex items-center justify-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center z-10 font-medium 
                    ${step >= 2 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'}`}
                >
                  2
                </div>
                <div className="absolute text-xs text-gray-500 -bottom-6 w-16 text-center">Bedrooms</div>
              </div>
              
              <div className={`w-12 h-1 mx-1 ${step >= 3 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
              
              <div className="relative flex items-center justify-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center z-10 font-medium 
                    ${step >= 3 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'}`}
                >
                  3
                </div>
                <div className="absolute text-xs text-gray-500 -bottom-6 w-16 text-center">Bathrooms</div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit}>
              {/* Step 1: Service Selection */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Service</label>
                    <div className="relative">
                      <button
                        type="button"
                        className="w-full flex items-center justify-between px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                      >
                        <span>{selectedService ? services.find(s => s.id === selectedService)?.name : "Select service that fits you best"}</span>
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      </button>
                      
                      {serviceDropdownOpen && (
                        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                          {services.map(service => (
                            <div 
                              key={service.id}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              onClick={() => {
                                setSelectedService(service.id);
                                setServiceDropdownOpen(false);
                              }}
                            >
                              <div className="font-medium">{service.name}</div>
                              <div className="text-xs text-gray-500">{service.description}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Bedrooms</label>
                      <div className="relative">
                        <button
                          type="button"
                          className="w-full flex items-center justify-between px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          onClick={() => setBedroomsDropdownOpen(!bedroomsDropdownOpen)}
                        >
                          <span>{bedrooms}</span>
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        </button>
                        
                        {bedroomsDropdownOpen && (
                          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                            {roomOptions.map(option => (
                              <div 
                                key={option}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                  setBedrooms(option);
                                  setBedroomsDropdownOpen(false);
                                }}
                              >
                                {option}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Bathrooms</label>
                      <div className="relative">
                        <button
                          type="button"
                          className="w-full flex items-center justify-between px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          onClick={() => setBathroomsDropdownOpen(!bathroomsDropdownOpen)}
                        >
                          <span>{bathrooms}</span>
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        </button>
                        
                        {bathroomsDropdownOpen && (
                          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                            {roomOptions.map(option => (
                              <div 
                                key={option}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                  setBathrooms(option);
                                  setBathroomsDropdownOpen(false);
                                }}
                              >
                                {option}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Step 2: Extras and Frequency */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Extras</label>
                    <div className="relative">
                      <button
                        type="button"
                        className="w-full flex items-center justify-between px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        onClick={() => setExtrasDropdownOpen(!extrasDropdownOpen)}
                      >
                        <span>{selectedExtras.length > 0 
                          ? `${selectedExtras.length} extra${selectedExtras.length > 1 ? 's' : ''} selected` 
                          : "Select"}</span>
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      </button>
                      
                      {extrasDropdownOpen && (
                        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                          {extras.map(extra => (
                            <div 
                              key={extra.id}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                              onClick={() => toggleExtra(extra.id)}
                            >
                              <input
                                type="checkbox"
                                checked={selectedExtras.includes(extra.id)}
                                onChange={() => {}}
                                className="mr-2"
                              />
                              <div className="flex-1">
                                <div className="font-medium">{extra.name}</div>
                                <div className="text-xs text-gray-500">+${extra.price}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Frequency</label>
                    <div className="relative">
                      <button
                        type="button"
                        className="w-full flex items-center justify-between px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        onClick={() => setFrequencyDropdownOpen(!frequencyDropdownOpen)}
                      >
                        <span>{frequencies.find(f => f.id === frequency)?.name || "Select"}</span>
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      </button>
                      
                      {frequencyDropdownOpen && (
                        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                          {frequencies.map(option => (
                            <div 
                              key={option.id}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              onClick={() => {
                                setFrequency(option.id);
                                setFrequencyDropdownOpen(false);
                              }}
                            >
                              <div className="font-medium">{option.name}</div>
                              {option.discount && (
                                <div className="text-xs text-green-600">{option.discount}% discount</div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Step 3: Date and Time */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Date</label>
                      <div className="relative">
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          min={new Date().toISOString().split('T')[0]}
                        />
                        <CalendarIcon className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Time</label>
                      <div className="relative">
                        <button
                          type="button"
                          className="w-full flex items-center justify-between px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          onClick={() => setTimeDropdownOpen(!timeDropdownOpen)}
                        >
                          <span>{time}</span>
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        </button>
                        
                        {timeDropdownOpen && (
                          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                            {timeSlots.map(slot => (
                              <div 
                                key={slot}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                  setTime(slot);
                                  setTimeDropdownOpen(false);
                                }}
                              >
                                {slot}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 mt-6">
                    <p className="text-gray-600 text-sm">If you have any questions, contact our office at:</p>
                    <div className="flex items-center mt-2">
                      <Phone className="h-4 w-4 text-green-500 mr-2" />
                      <span className="font-medium">+1 (800) 567-8990</span>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="mt-8">
                <button 
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
                >
                  {step < 3 ? "Continue" : "Book Now"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
