import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { FaHome, FaHandshake, FaFileAlt, FaRupeeSign, FaShieldAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6 mb-8 shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">About Property Helper</h1>
            <p className="text-lg md:text-xl">
              Your trusted real estate partner in North India
            </p>
          </div>
          
          {/* Director & Story */}
          <div className="mb-8 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Story</h2>
                  <p className="text-gray-700 mb-4">
                    Founded under the leadership of <span className="font-semibold text-blue-600">Director Gaurav Sharma</span>, Property Helper has revolutionized real estate consulting with transparent deals and customer-first approach.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We specialize in residential, commercial properties, and farm lands across Delhi NCR, Greater Noida, Ghaziabad, and Dehradun.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <p className="text-yellow-700 font-medium">
                      "Our mission is to make property buying simple, safe, and profitable for every client."
                    </p>
                  </div>
                </div>
                <div className="md:w-1/3 bg-blue-50 rounded-lg p-6 flex flex-col items-center justify-center">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-20 h-20 flex items-center justify-center mb-3">
                    <FaHandshake className="text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Gaurav Sharma</h3>
                  <p className="text-blue-600 font-medium mb-3">Founder & Director</p>
                  <p className="text-gray-600 text-center text-sm">
                    12+ years transforming real estate experiences
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-5">
                <div className="bg-blue-100 text-blue-600 rounded-lg w-12 h-12 flex items-center justify-center mb-3">
                  <FaHome className="text-xl" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Property Selection</h3>
                <p className="text-gray-600 text-sm">
                  Best residential & commercial properties matching your needs
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-5">
                <div className="bg-purple-100 text-purple-600 rounded-lg w-12 h-12 flex items-center justify-center mb-3">
                  <FaFileAlt className="text-xl" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Legal Verification</h3>
                <p className="text-gray-600 text-sm">
                  Complete documentation and clearance for safe transactions
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-5">
                <div className="bg-green-100 text-green-600 rounded-lg w-12 h-12 flex items-center justify-center mb-3">
                  <FaRupeeSign className="text-xl" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Bank Loans</h3>
                <p className="text-gray-600 text-sm">
                  Home loan assistance with best interest rates
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-5">
                <div className="bg-orange-100 text-orange-600 rounded-lg w-12 h-12 flex items-center justify-center mb-3">
                  <FaShieldAlt className="text-xl" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Post-Sale Support</h3>
                <p className="text-gray-600 text-sm">
                  Continuous assistance even after purchase
                </p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
            <h2 className="text-2xl font-bold mb-6">Why Property Helper?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3">
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
              <div className="p-3">
                <div className="text-3xl font-bold mb-1">12+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="p-3">
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-sm">Legal Assurance</div>
              </div>
              <div className="p-3">
                <div className="text-3xl font-bold mb-1">80%</div>
                <div className="text-sm">Loan Approval</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8 text-center">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Ready to Begin Your Property Journey?</h3>
              <p className="text-gray-600 mb-5 max-w-2xl mx-auto">
                Contact our experts today for personalized guidance and the best deals in the market.
              </p>
              <a 
                href="tel:+918285990092" 
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
              >
                Call Now: +91 82859 90092
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;