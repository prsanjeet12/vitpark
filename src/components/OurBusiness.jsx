import React from 'react';
import business from './images/Business.png';

const Business = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center mt-12 mb-12 mx-auto max-w-7xl px-4" id='business'>
      {/* Illustration on the left */}
      <div className="lg:w-1/2 lg:pr-8">
        <img src={business} alt="Business Illustration" className="w-full" />
      </div>
      {/* Text content on the right */}
      <div className="lg:w-1/2 lg:pl-8">
        <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">Our Businesses</h2>
        <p className="text-center lg:text-left font-light">
          At VITPARK, we empower businesses with cutting-edge digital infrastructure solutions. From advanced payment gateways to last mile connectivity, tailored mobility solutions, comprehensive e-business support, and expert digital marketing strategies, we propel businesses towards success. Our state-of-the-art IT park fosters innovation and collaboration, providing an ideal environment for growth and technological advancement. Join us and unlock endless possibilities for your business in the digital age.
        </p>
      </div>
    </section>
  );
};

export default Business;
