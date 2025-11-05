import React from 'react';
import Hero from './components/Hero';
import WorkCategories from './components/WorkCategories';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      {/* Hero with Spline animation */}
      <Hero />

      {/* Service categories */}
      <WorkCategories />

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
