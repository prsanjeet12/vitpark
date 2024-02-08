import React from 'react';
import aboutus from './images/about2.png';

const AboutUs = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between 
    items-center mt-[100px] mb-12 mx-auto max-w-7xl px-4">
      {/* Text content on the left */}
      <div className="lg:w-1/2 lg:pr-8 mt-12 lg:mt-0">
        <h2 className="text-3xl font-bold mb-8 lg:mb-12 text-center lg:text-left">About Us</h2>
        <p className="text-center lg:text-left font-light">
          VITPARK leads digital transformation with advanced payment gateways, last mile connectivity solutions, mobility services, comprehensive e-business support, and expert digital marketing strategies. Our state-of-the-art IT park fosters innovation and collaboration. Join us for cutting-edge solutions and a culture of excellence in the digital age. Experience limitless possibilities with VITPARK. We are your partner in navigating the digital landscape, offering innovative solutions and fostering a community of forward-thinking pioneers. Join us for unparalleled expertise and endless opportunities.
        </p>
      </div>
      {/* Illustration on the right */}
      <div className="lg:w-1/2 lg:pl-8">
        <img src={aboutus} alt="About Us Illustration" className="w-full" />
      </div>
    </section>
  );
};

export default AboutUs;
