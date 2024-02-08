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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
