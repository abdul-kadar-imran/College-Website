import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

interface HeaderProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentSection, onSectionChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Clubs', id: 'clubs' },
    { name: 'Events', id: 'events' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Announcements', id: 'announcements' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-14 md:h-16 lg:h-18">
          {/* Logo Section - Responsive sizing */}
          <div className="flex items-center min-w-0">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-600 dark:text-white truncate">
                <span className="hidden sm:inline">Crescent Connect</span>
                <span className="sm:hidden">Crescent Connect</span>
              </h1>
          </div>

          {/* Desktop Navigation - Responsive breakpoints */}
          <nav className="hidden lg:block">
            <div className="flex items-center space-x-1 xl:space-x-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`px-2 xl:px-3 py-1.5 xl:py-2 rounded-md text-xs xl:text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                    currentSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>

          {/* Medium Screen Navigation - Tablet friendly */}
          <nav className="hidden md:block lg:hidden">
            <div className="flex items-center space-x-1">
              {navigation.slice(0, 5).map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`px-2 py-1.5 rounded-md text-xs font-medium transition-colors duration-200 ${
                    currentSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              {/* More menu for remaining items */}
              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="px-2 py-1.5 rounded-md text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  More
                </button>
              </div>
            </div>
          </nav>

          {/* Right Side Controls - Responsive spacing */}
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            {/* Theme Toggle - Responsive sizing */}
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={16} className="sm:w-5 sm:h-5" /> : <Moon size={16} className="sm:w-5 sm:h-5" />}
            </button>

            {/* Mobile menu button - Responsive sizing */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-1.5 sm:p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={16} className="sm:w-5 sm:h-5" /> : <Menu size={16} className="sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Enhanced responsive design */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="px-3 sm:px-4 pt-2 pb-3 space-y-1 max-h-64 sm:max-h-80 overflow-y-auto">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSectionChange(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2.5 sm:py-3 rounded-md text-sm sm:text-base font-medium transition-colors duration-200 ${
                  currentSection === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Tablet More Menu Dropdown */}
      {isMenuOpen && (
        <div className="hidden md:block lg:hidden absolute top-full right-0 mt-1 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
          <div className="py-1">
            {navigation.slice(5).map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSectionChange(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                  currentSection === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;