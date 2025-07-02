import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Property Helper</h3>
            <p className="text-gray-300 mb-4">
              The leading channel partner firm in Delhi NCR, Greater Noida, Ghaziabad and Dehradun City.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/prophelper" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-xl">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/prophelper" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-xl">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com/@prophelper" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-xl">
                <FaYoutube />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white flex items-center"><span className="mr-2">→</span>Home</a></li>
              <li><a href="/listings" className="text-gray-300 hover:text-white flex items-center"><span className="mr-2">→</span>Properties</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white flex items-center"><span className="mr-2">→</span>About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white flex items-center"><span className="mr-2">→</span>Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <address className="text-gray-300 not-italic space-y-3">
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-primary" />
                Greater Noida W Rd, Gaur City 1, Sector 4,<br />
                Greater Noida, Ghaziabad,<br />
                Uttar Pradesh 201009
              </p>
              <p className="flex items-center">
                <FaPhone className="mr-2 text-primary" />
                <a href="tel:+918285990092" className="hover:text-white">+91 82859 90092</a>
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2 text-primary" />
                <a href="mailto:info@propertyhelper.com" className="hover:text-white">info@propertyhelper.com</a>
              </p>
            </address>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span>Residential Properties</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span>Commercial Properties</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span>Farm Houses</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span>Bank Loan Assistance</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span>Legal Documentation</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Property Helper. All rights reserved.</p>
          <p className="mt-2 text-sm">Registered Real Estate Agent with RERA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;