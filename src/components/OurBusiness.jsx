import React from 'react';
import businessImage from './images/business.jpeg';

const Business = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center mt-[100px] mb-12 mx-auto px-4 bg-white" id='business'>
      {/* Text content on the left */}
      <div className="lg:w-1/2 lg:mb-[110px] lg:pr-8 lg:flex lg:flex-col lg:justify-center">
        <h2 className="text-4xl  
   font-bold mb-4 lg:mb-[100px] lg:text-center text-center lg:ml-[60px]">Our Businesses</h2>
        <p className="lg:text-center  lg:text-[17px] text-center 
 font-normal text-base leading-relaxed mb-6 lg:mb-8 font-poppins">
          At VITPARK, we empower businesses with cutting-edge digital infrastructure solutions. From advanced payment gateways to last mile connectivity, tailored mobility solutions, comprehensive e-business support, and expert digital marketing strategies, we propel businesses towards success. Our state-of-the-art IT park fosters innovation and collaboration, providing an ideal environment for growth and technological advancement. Join us and unlock endless possibilities for your business in the digital age.
        </p>
      </div>
      {/* Illustration on the right */}
      <div className="lg:w-1/2 lg:pl-8 mt-12 lg:mt-0">
        <img src={businessImage} alt="Business Illustration" className="w-full h-[600px] object-cover" />
      </div>
    </section>
  );
};

export default Business;