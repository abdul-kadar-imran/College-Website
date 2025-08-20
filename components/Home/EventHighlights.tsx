import React from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import Button from '../Common/Button';

const EventHighlights: React.FC = () => {
  const EventHighlights = [
    {
      id: 1,
      title: 'Tech Hackathon 2024',
      date: 'March 15, 2024',
      time: '09:00 AM',
      location: 'Computer Science Building',
      image: "/img src/cres 02.jpg",
      participants: 120,
      club: 'Coding Club',
    },
    {
      id: 2,
      title: 'Cultural Night 2024',
      date: 'March 20, 2024',
      time: '06:00 PM',
      location: 'Main Auditorium',
      image: "/img src/cres 01.jpg",
      participants: 200,
      club: 'Dance Club',
    },
    {
      id: 3,
      title: 'Annual Sports Meet',
      date: 'March 25, 2024',
      time: '08:00 AM',
      location: 'Sports Complex',
      image: "/img src/cres 03.jpg",
      participants: 300,
      club: 'Sports Club',
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Don't miss these exciting events happening soon
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EventHighlights.map((event) => (
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
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {event.title}
                </h3>
                
                <div className="space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="mr-2" />
                    <span className="text-sm">{event.participants} registered</span>
                  </div>
                </div>

                <Button className="w-full">
                  Register Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;