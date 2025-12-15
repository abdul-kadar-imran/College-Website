import React from 'react';
import { Facebook, Twitter, Instagram, Mail,  MapPin, Linkedin, Youtube, } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 gap-12 sm:px-6 lg:px-8 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-4 ">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Crescent Connect</h3>
            <p className="text-gray-300 mb-6">
              " To be a beacon of student-led change that inspires leadership, unity, and holistic development within the academic community." 
            </p>

            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/BSACrescentInstitute/" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook size={24} />
              </a>
              <div className="w-px h-6 bg-gray-600"></div>
              <a href="https://www.instagram.com/bsacrescentinstituteofficial/" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram size={24} />
              </a>
              <div className="w-px h-6 bg-gray-600"></div>
              <a href="https://www.linkedin.com/school/crescentinstitute/" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin size={24} />
              </a>
              <div className="w-px h-6 bg-gray-600"></div>
              <a href="https://www.youtube.com/c/BSACrescentInstitute" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Youtube size={24} />
              </a>
              <div className="w-px h-6 bg-gray-600"></div>
              <a href="https://x.com/bsacrescentinst" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          <br />
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin size={30} className="mr-2 text-gray-400" />
                <span className="text-gray-300 text-sm">B.S. Abdur Rahman Crescent Institute of Science & Technology is GST Road, Vandalur, Chennai 600 048</span>
              </div>
              <div className="flex items-center">
                <Instagram size={16} className="mr-2 text-gray-400" />
                <span className="text-gray-300 text-sm">crescent_studentaffairs</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-gray-400" />
                <span className="text-gray-300 text-sm">dean_student@crescent.education</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            Crescent Connect 
          </p>
          <p className="text-gray-200">
            The New Beginning
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;