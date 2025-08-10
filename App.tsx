import { useState } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Hero from './components/Home/Hero';
import QuickLinks from './components/Home/QuickLinks';
import EventHighlights from './components/Home/EventHighlights';
import About from './components/Sections/About';
import Clubs from './components/Sections/Clubs';
import Events from './components/Sections/Events';
import Gallery from './components/Sections/Gallery';
import Announcements from './components/Sections/Announcements';
import Contact from './components/Sections/Contact';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return (
          <>
            <Hero onSectionChange={setCurrentSection} />
            <QuickLinks />
            <EventHighlights />
          </>
        );
      case 'about':
        return <About />;
      case 'clubs':
        return <Clubs />;
      case 'events':
        return <Events />;
      case 'gallery':
        return <Gallery />;
      case 'announcements':
        return <Announcements />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <Hero onSectionChange={setCurrentSection} />
            <QuickLinks />
            <EventHighlights />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header currentSection={currentSection} onSectionChange={setCurrentSection} />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
