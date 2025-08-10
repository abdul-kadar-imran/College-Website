import React from 'react';
import { Users, Target, Heart, Award, BookOpen, Zap } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Community Building',
      description: 'Fostering connections and friendships among students from diverse backgrounds.',
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: 'Goal Achievement',
      description: 'Supporting students in pursuing their academic and personal goals.',
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: 'Inclusive Environment',
      description: 'Creating a welcoming space for all students regardless of their background.',
    },
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      title: 'Excellence Recognition',
      description: 'Celebrating achievements and recognizing outstanding contributions.',
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-600" />,
      title: 'Learning Opportunities',
      description: 'Providing platforms for skill development and knowledge sharing.',
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: 'Innovation Hub',
      description: 'Encouraging creativity and innovation through various initiatives.',
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About Crescent Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Crescent Connect is more than just a platform—it's a vibrant community where students 
            come together to learn, grow, and create lasting memories. Our mission is to enhance 
            student life by providing opportunities for engagement, leadership, and personal development.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              To create an inclusive and dynamic student community that empowers individuals 
              to explore their interests, develop their skills, and build meaningful connections 
              that last beyond their academic journey.
            </p>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-300 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              To be the premier platform for student engagement, fostering innovation, 
              creativity, and leadership while building a supportive community that 
              celebrates diversity and promotes personal growth.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div
          className="rounded-lg p-12 text-white"style={{
          background: 'linear-gradient(to right, #18305e, #a02022)',}}>
                   
            <h3 className="text-3xl font-bold text-center mb-8">
            Our Impact in Numbers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Student Clubs</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Events per Year</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Awards Won</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;