import React, { useState } from 'react';
import { events } from '../../data/events';
import { Event } from '../../types';
import Modal from '../Common/Modal';
import Button from '../Common/Button';
import { Calendar, Clock, MapPin, Search, Filter, Users, ExternalLink } from 'lucide-react';

const Events: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'upcoming' | 'past'>('upcoming');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Academic', 'Cultural', 'Sports', 'Social'];

  const filteredEvents = events
    .filter(event => selectedTab === 'upcoming' ? event.isUpcoming : !event.isUpcoming)
    .filter(event => selectedCategory === 'All' || event.category === selectedCategory)
    .filter(event => 
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.club.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getTimeUntilEvent = (dateString: string) => {
    const eventDate = new Date(dateString);
    const now = new Date();
    const diff = eventDate.getTime() - now.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return 'Today';
    if (days === 1) return 'Tomorrow';
    if (days > 0) return `${days} days to go`;
    return 'Past event';
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Events
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Stay updated with our exciting events and activities
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
            <button
              onClick={() => setSelectedTab('upcoming')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                selectedTab === 'upcoming'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setSelectedTab('past')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                selectedTab === 'past'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Past Events
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {event.club}
                </div>
                {event.isUpcoming && (
                  <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {getTimeUntilEvent(event.date)}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {event.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {event.description}
                </p>

                <div className="space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button 
                    onClick={() => setSelectedEvent(event)}
                    variant="outline"
                    size="sm"
                    className="flex-1"
                  >
                    View Details
                  </Button>
                  {event.isUpcoming && event.registrationLink && (
                    <Button 
                      onClick={() => window.open(event.registrationLink, '_blank')}
                      size="sm"
                      className="flex-1"
                    >
                      Register
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No events found matching your criteria.
            </p>
          </div>
        )}

        {/* Event Details Modal */}
        <Modal
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
          title={selectedEvent?.title || ''}
          size="xl"
        >
          {selectedEvent && (
            <div className="space-y-6">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-64 object-cover rounded-lg"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Event Details
                  </h4>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span>{formatDate(selectedEvent.date)}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2" />
                      <span>{selectedEvent.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>{selectedEvent.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-2" />
                      <span>Organized by {selectedEvent.club}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Description
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {selectedEvent.description}
                  </p>
                </div>
              </div>

              {selectedEvent.summary && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Event Summary
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {selectedEvent.summary}
                  </p>
                </div>
              )}

              {selectedEvent.gallery && selectedEvent.gallery.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Gallery
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedEvent.gallery.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${selectedEvent.title} gallery`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="flex space-x-4">
                {selectedEvent.isUpcoming && selectedEvent.registrationLink && (
                  <Button
                    onClick={() => window.open(selectedEvent.registrationLink, '_blank')}
                    className="flex-1"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Register for Event
                  </Button>
                )}
                <Button
                  onClick={() => setSelectedEvent(null)}
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

export default Events;