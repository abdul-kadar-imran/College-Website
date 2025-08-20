import React from 'react';
import { Code, Music, Dumbbell, Heart, Book } from 'lucide-react';

const QuickLinks: React.FC = () => {
  const quickLinks = [
    {
      name: 'Academic Club',
      icon: <Book size={32} />,
      description: 'Sharpen Minds, Shape Futures',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
    },
    {
      name: 'Cultural Club',
      icon: <Music size={32} />,
      description: 'Where Culture Meets Creativity',
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600',
    },
    {
      name: 'Sports Club',
      icon: <Dumbbell size={32} />,
      description: 'Fuel the Game, Feel the Glory',
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600',
    },
    {
      name: 'Volunteer Club',
      icon: <Heart size={32} />,
      description: 'Make a difference in the community',
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600',
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Popular Clubs
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Join our most active and engaging student clubs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {quickLinks.map((club, index) => (
            <div
              key={index}
              className={`${club.color} ${club.hoverColor} rounded-lg p-6 text-white transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{club.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{club.name}</h3>
                <p className="text-sm opacity-90">{club.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;