import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';


const Contact: React.FC = () => {
  const [] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'general',
    club: '',
    message: ''
  });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   console.log('Form submitted:', formData);
  //   alert('Thank you for your message! We will get back to you soon.');
  //   setFormData({
  //     name: '',
  //     email: '',
  //     phone: '',
  //     type: 'general',
  //     club: '',
  //     message: ''
  //   });
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Have questions or want to join our community? We'd love to hear from you!
          </p>
        </div>

        <div className="justify-center flex gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
              <a href="https://www.google.com/maps/place/B.+S.+Abdur+Rahman+Crescent+Institute+Of+Science+And+Technology/@12.8753945,80.0837794,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52f60e8ef70dad:0x1b7886934a452db8!8m2!3d12.8753945!4d80.0837794!16zL20vMDRicjc2?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"target="_blank"
              rel="noopener noreferrer" 
              className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg mr-4"  >
              <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </a>
              <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Address</h4>
              <p className="text-gray-600 dark:text-gray-300">
              B.S. Abdur Rahman Crescent Institute of Science & Technology <br />
              GST Road, Vandalur, Chennai 600 048
              </p>
              </div>
              </div>


                <div className="flex items-center">
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Phone (WhatsApp)</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      +91 93630 01680<br />
                      Mon-Fri: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
                 <div className="flex items-center">
                  <a href="https://www.instagram.com/crescent_studentaffairs/"target="_blank"rel="noopener noreferrer"className="bg-red-100 dark:bg-red-900 p-3 rounded-lg mr-4">
                  <Instagram className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </a>
                  <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Instagram</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                 crescent Student Affairs
                  </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      dean_student@crescent.education<br />
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            {/* <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Quick Actions
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="flex items-center justify-center p-4 h-auto"
                >
                  <Users className="mr-2" />
                  <div className="text-left">
                    <div className="font-semibold">Join a Club</div>
                    <div className="text-sm opacity-75">Find your community</div>
                  </div>
                </Button>
                
                <Button
                  variant="outline"
                  className="flex items-center justify-center p-4 h-auto"
                >
                  <Calendar className="mr-2" />
                  <div className="text-left">
                    <div className="font-semibold">Register Event</div>
                    <div className="text-sm opacity-75">Book your spot</div>
                  </div>
                </Button>
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          {/* <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type=""
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="membership">Club Membership</option>
                    <option value="event">Event Information</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
              </div>

              {formData.type === 'membership' && (
                <div>
                  <label htmlFor="club" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Which club are you interested in?
                  </label>
                  <select
                    id="club"
                    name="club"
                    value={formData.club}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Select a club</option>
                    <option value="coding">Coding Club</option>

                    <option value="Culturals">Crescent tamil mandram</option>
                    <option value="Culturals">crescentian voice channel</option>
                    <option value="Culturals">Crescent Silambam Club</option>
                    <option value="Culturals">Crescent Team Dramatix</option>
                    <option value="Culturals">Cres Crew</option>
                    <option value="Culturals">Crescent Media Club</option>
                    <option value="Culturals">Crescent Philately Club</option>
                    <option value="Culturals">Crescent Club Of Photographers</option>
                    <option value="Culturals">Crescent Art Club</option>
                    <option value="Culturals">Crescent Music Team</option>
                    <option value="Culturals">Crescent Fashion Team</option>
                    <option value="Culturals">Crescent Discipline Force</option>

                    
                    <option value="sports">Sports Club</option>
                    <option value="volunteer">Volunteer Club</option>
                  </select>
                </div>
              )}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <Button
                type="submit"
                className="w-full flex items-center justify-center"
                size="lg"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;