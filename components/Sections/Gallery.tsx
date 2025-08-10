import React, { useState } from 'react';
import { galleryItems } from '../../data/gallery';
import { GalleryItem } from '../../types';
import Modal from '../Common/Modal';
import { Filter, X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'club' | 'event' | 'year'>('all');
  const [selectedValue, setSelectedValue] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const clubs = Array.from(new Set(galleryItems.map(item => item.club)));
  const events = Array.from(new Set(galleryItems.map(item => item.event)));
  const years = Array.from(new Set(galleryItems.map(item => item.year)));

  const getFilterOptions = () => {
    switch (selectedFilter) {
      case 'club':
        return ['All', ...clubs];
      case 'event':
        return ['All', ...events];
      case 'year':
        return ['All', ...years];
      default:
        return ['All'];
    }
  };

  const filteredItems = galleryItems.filter(item => {
    if (selectedValue === 'All') return true;
    
    switch (selectedFilter) {
      case 'club':
        return item.club === selectedValue;
      case 'event':
        return item.event === selectedValue;
      case 'year':
        return item.year === selectedValue;
      default:
        return true;
    }
  });

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Relive the moments from our amazing events and activities
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-300">Filter by:</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {[
              { key: 'all', label: 'All' },
              { key: 'club', label: 'Club' },
              { key: 'event', label: 'Event' },
              { key: 'year', label: 'Year' }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => {
                  setSelectedFilter(filter.key as any);
                  setSelectedValue('All');
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedFilter === filter.key
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {selectedFilter !== 'all' && (
            <select
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              {getFilterOptions().map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <h3 className="text-lg font-semibold mb-1">{item.event}</h3>
                  <p className="text-sm">{item.club} • {item.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No images found matching your criteria.
            </p>
          </div>
        )}

        {/* Image Modal */}
        <Modal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          title={selectedImage?.alt || ''}
          size="xl"
        >
          {selectedImage && (
            <div className="space-y-4">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-96 object-cover rounded-lg"
              />
              
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {selectedImage.event}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {selectedImage.club} • {selectedImage.year}
                  </p>
                </div>
                
                <button
                  onClick={() => setSelectedImage(null)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-200"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default Gallery;