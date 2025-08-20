import React, { useState } from 'react';
import { announcements } from '../../data/announcements';
import { Announcement } from '../../types';
import Modal from '../Common/Modal';
import Button from '../Common/Button';
import { Calendar, User, Tag, Search } from 'lucide-react';

const Announcements: React.FC = () => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Event', 'Newsletter', 'General'];

  const filteredAnnouncements = announcements
    .filter(announcement => selectedCategory === 'All' || announcement.category === selectedCategory)
    .filter(announcement => 
      announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Event': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'Newsletter': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'General': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Announcements & Blog
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Stay updated with the latest news and updates from our community
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search announcements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Tag className="h-4 w-4 text-gray-400" />
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

        {/* Announcements Grid */}
        <div className="space-y-6">
          {filteredAnnouncements.map((announcement) => (
            <div
              key={announcement.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="md:flex">
                {announcement.image && (
                  <div className="md:w-1/3">
                    <img
                      src={announcement.image}
                      alt={announcement.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                )}
                
                <div className={`p-6 ${announcement.image ? 'md:w-2/3' : 'w-full'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(announcement.category)}`}>
                      {announcement.category}
                    </span>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar size={16} className="mr-1" />
                      <span>{formatDate(announcement.date)}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {announcement.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {announcement.content}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <User size={16} className="mr-1" />
                      <span>By {announcement.author}</span>
                    </div>
                    
                    <Button
                      onClick={() => setSelectedAnnouncement(announcement)}
                      variant="outline"
                      size="sm"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAnnouncements.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No announcements found matching your criteria.
            </p>
          </div>
        )}

        {/* Announcement Details Modal */}
        <Modal
          isOpen={!!selectedAnnouncement}
          onClose={() => setSelectedAnnouncement(null)}
          title={selectedAnnouncement?.title || ''}
          size="xl"
        >
          {selectedAnnouncement && (
            <div className="space-y-6">
              {selectedAnnouncement.image && (
                <img
                  src={selectedAnnouncement.image}
                  alt={selectedAnnouncement.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              )}

              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedAnnouncement.category)}`}>
                  {selectedAnnouncement.category}
                </span>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                  <Calendar size={16} className="mr-1" />
                  <span>{formatDate(selectedAnnouncement.date)}</span>
                </div>
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {selectedAnnouncement.content}
                </p>
              </div>

              <div className="flex items-center justify-between border-t dark:border-gray-700 pt-4">
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <User size={16} className="mr-1" />
                  <span>By {selectedAnnouncement.author}</span>
                </div>
                
                <Button
                  onClick={() => setSelectedAnnouncement(null)}
                  variant="outline"
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

export default Announcements;