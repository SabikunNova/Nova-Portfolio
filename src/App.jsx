import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Testimonials from './Components/Testimonials';
import ContactCTA from './Components/ContactTA';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="antialiased">
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Testimonials/>
      <ContactCTA/>
      <Footer/>
    </div>
  );
};

export default App;