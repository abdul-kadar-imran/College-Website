import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Users, Award } from 'lucide-react';
import Button from '../Common/Button';
// import Clubs from '../Sections/Clubs'
// import Clubs from '../Sections/Events'
interface HeroProps {
  onSectionChange: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSectionChange }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      
      image: "/img src/cres 02.jpg",
      title: 'Crescent Connect',
      subtitle: 'Your Gateway to Student Life',
      description: 'Join vibrant clubs, attend amazing events, and build lifelong connections',
    },
    {
      image: '/img src/cres 01.jpg',
      title: 'Tech Innovation',
      subtitle: 'Code, Create, Collaborate',
      description: 'Join our coding clubs and participate in hackathons',
    },
    {
      image: '/img src/cres 03.jpg',
      title: 'Cultural Celebration',
      subtitle: 'Express Your Creativity',
      description: 'Showcase your talents in our cultural events and competitions',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Image Slider */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
          {/* Title - Responsive text sizes */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-3 md:mb-4 animate-fade-in leading-tight">
            {slides[currentSlide].title}
          </h1>
          
          {/* Subtitle - Responsive text sizes */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-3 sm:mb-4 md:mb-6 text-blue-400 leading-tight">
            {slides[currentSlide].subtitle}
          </h2>
          
          {/* Description - Responsive text sizes */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-7 md:mb-8 text-gray-200 leading-relaxed max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto">
            {slides[currentSlide].description}
          </p>
          
          {/* Buttons - Responsive layout and sizing */}
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button size="lg"
             onClick={() => onSectionChange('clubs')}
             className="bg-blue-600 hover:bg-blue-700 w-full xs:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base">
          Explore Clubs
            </Button>
           <Button size="lg" variant="outline"
             onClick={() => onSectionChange('events')}
             className="border-white text-white hover:bg-white hover:text-gray-900 w-full xs:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base">
          View Events
           </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Responsive positioning and sizing */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors duration-200 z-10"
      >
        <ChevronLeft size={32} className="sm:w-12 sm:h-12" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors duration-200 z-10"
      >
        <ChevronRight size={32} className="sm:w-12 sm:h-12" />
      </button>

      {/* Slide Indicators - Responsive positioning */}
      {/* <div className="absolute bottom-20 sm:bottom-24 md:bottom-28 lg:bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-blue-400' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div> */}

      {/* Stats Section - Responsive layout and spacing */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 sm:p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 text-center text-white">
            <div className="flex flex-col items-center">
              <Users size={24} className="sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mb-1 sm:mb-2 text-blue-400" />
              <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold">500+</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-300">Active Members</p>
            </div>
            <div className="flex flex-col items-center">
              <Calendar size={24} className="sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mb-1 sm:mb-2 text-purple-400" />
              <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold">50+</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-300">Events per Year</p>
            </div>
            <div className="flex flex-col items-center">
              <Award size={24} className="sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mb-1 sm:mb-2 text-orange-400" />
              <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold">15+</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-300">Active Clubs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;