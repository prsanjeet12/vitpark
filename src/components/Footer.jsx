import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* First Column */}
          <div>
            <p className="text-sm">&copy; 2024 VIT Park. All rights reserved.</p>
          </div>
          {/* Second Column */}
          <div>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">Terms of Service</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">Contact Us</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">About</a></li>
            </ul>
          </div>
          {/* Third Column */}
          <div>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-gray-300">FAQs</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">Blog</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">Careers</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">Press</a></li>
            </ul>
          </div>
          {/* Fourth Column */}
          <div>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-gray-300">Partners</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">Support</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">Feedback</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">Sitemap</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
