import React from 'react';
import patner from '../components/images/patner.png'
import product from '../components/images/cholaLogo2.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900  lg:h-[230px] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {/* First Column */}
          <div>
            <p className="text-sm">&copy; 2024 VIT Park. All rights reserved.</p>
          </div>
          {/* Second Column */}
          <div>
            <ul className="space-y-2">
              <li><div className="text-sm hover:text-gray-300">Privacy Policy</div></li>
              <li><div className="text-sm hover:text-gray-300">Terms of Service</div></li>
              <li><div className="text-sm hover:text-gray-300">Contact Us</div></li>
              <li><div className="text-sm hover:text-gray-300">About</div></li>
            </ul>
          </div>
          {/* Third Column */}
          <div>
            <ul className="space-y-2">
              <li><div className="text-sm hover:text-gray-300">FAQs</div></li>
              <li><div className="text-sm hover:text-gray-300">Blog</div></li>
              <li><div className="text-sm hover:text-gray-300">Careers</div></li>
              <li><div className="text-sm hover:text-gray-300">Press</div></li>
            </ul>
          </div>
          {/* Fourth Column */}
          <div>
            <ul className="space-y-2">
              <li><div className="text-sm hover:text-gray-300">Partners</div></li>
              <li><div className="text-sm hover:text-gray-300">Support</div></li>
              <li><div className="text-sm hover:text-gray-300">Feedback</div></li>
              <li><div className="text-sm hover:text-gray-300">Sitemap</div></li>
            </ul>
          </div>
          <div className="col-span-1 md:w-full lg:w-[350px]">
  <div className="bg-white p-4 md:p-6 lg:p-4 lg:h-[180px] lg:mr-9 rounded">
    <div className="flex flex-col md:flex-row justify-between items-center md:mb-4">
      {/* Our Partner */}
      <div className="md:mb-0 md:mr-4">
        <a href="https://biowms.com/" className="text-[17px] font-bold mb-2 text-gray-900 inline-block">
          Our Partner
        </a>
        <img src={patner} alt="Partner Image" className="w-20 h-20 mb-2" />
        <h1 className="text-gray-900 font-semibold">Biowms</h1>
      </div>
      
      {/* Our Product */}
      <div className="flex items-center flex-col">
        <h4 className="text-[17px] font-bold mb-2 text-gray-900">Our Product</h4>
        <img src={product} alt="Product Image" className="w-30 h-20 mb-2" />
        <h1 className="text-gray-900 font-semibold">CHOLA cHARITOTS</h1>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
