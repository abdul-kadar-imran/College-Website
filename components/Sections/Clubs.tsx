import React, { useState } from 'react';
import { clubs } from '../../data/clubs';
import { Club } from '../../types';
import Modal from '../Common/Modal';
import Button from '../Common/Button';
import { Users, Calendar, Award } from 'lucide-react';
// import {joinLink} from '../data/clubs.ts'


const Clubs: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);

  const categories = ['All', 'Academic', 'Cultural', 'Sports & Fitness', 'Social/Volunteer'];

  const filteredClubs = selectedCategory === 'All'
    ? clubs
    : clubs.filter(club => club.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      'Academic': 'bg-blue-500',
      'Cultural': 'bg-purple-500',
      'Sports & Fitness': 'bg-orange-500',
      'Social/Volunteer': 'bg-red-500',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500';
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Student Clubs
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover and join clubs that match your interests and passions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClubs.map((club) => (
            <div
              key={club.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={club.logo}
                  alt={club.name}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute top-4 right-4 ${getCategoryColor(club.category)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {club.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {club.name}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {club.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Users size={16} className="mr-1" />
                    <span>{club.memberCount} members</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>Since {club.established}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button
                    onClick={() => setSelectedClub(club)}
                    variant="outline"
                    size="sm"
                    className="flex-1"
                  >
                    Learn More
                  </Button>
                  <Button
                    onClick={() => window.open(club.joinLink, '_blank')}
                    size="sm"
                    className="flex-1"
                  >
                    Join Club
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Club Details Modal */}
        <Modal
          isOpen={!!selectedClub}
          onClose={() => setSelectedClub(null)}
          title={selectedClub?.name || ''}
          size="xl"
        >
          {selectedClub && (
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <img
                  src={selectedClub.logo}
                  alt={selectedClub.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedClub.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {selectedClub.category} • {selectedClub.memberCount} members • Since {selectedClub.established}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  About
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {selectedClub.longDescription}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Core Team
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedClub.coreTeam.map((member, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white">
                          {member.name}
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {member.position}
                        </p>

                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Recent Events
                </h4>
                <div className="space-y-2">
                  {selectedClub.events.map((event, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Award size={16} className="text-blue-600" />
                      <span className="text-gray-600 dark:text-gray-300">{event}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Gallery
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {selectedClub.gallery.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedClub.name} gallery`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  onClick={() => window.open(selectedClub.joinLink, '_blank')}
                  className="flex-1"
                >
                  Join Club
                </Button>
                <Button
                  onClick={() => setSelectedClub(null)}
                  variant="outline"
                  className="flex-1"
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default Clubs;