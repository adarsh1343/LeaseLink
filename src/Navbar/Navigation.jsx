import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold mr-12">
          MyWebsite
        </div>
        {/* Navigation Options */}
        <ul className="flex space-x-4">
          <li className="text-white hover:text-gray-300">Home</li>
          <li className="text-white hover:text-gray-300">Apartments</li>
          <li className="text-white hover:text-gray-300">About Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
