import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Business from './components/OurBusiness';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import CancellationPolicy from './components/CancellationPolicy'; // Import the CancellationPolicy component
import EmergencyPolicy from './components/EmergencyPolicy';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          <Route path='/emergencies-policy' element={<EmergencyPolicy/>}/>
        </Routes>
      </div>
    </Router>
  );
}

// Define your Home component here
function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Business />
      <Services />
      <Footer/>
    </>
  );
}

export default App;