import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Logo/Brand */}
          <div className="col-span-1">
            <Link to="/" className="text-xl font-bold text-white hover:text-gray-300">
              MyProject
            </Link>
            <p className="text-sm text-gray-400 mt-2">
              Your go-to platform for alumni and student management.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-300 hover:text-white transition-colors hover:underline text-blue-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-300 hover:text-white transition-colors hover:underline text-blue-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Empty columns for spacing (you can add more sections like social links here) */}
          <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-1 pt-1 text-center">
          <p className="text-sm text-gray-400">&copy; {currentYear} MyProject. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;