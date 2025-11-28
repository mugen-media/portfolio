import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Works from './components/sections/Works';
import Pricing from './components/sections/Pricing';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-red-600 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
