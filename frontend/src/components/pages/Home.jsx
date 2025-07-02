import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../common/Navbar';
import { properties } from '../data/properties';
import PropertyCard from '../listings/PropertyCard';
import Footer from '../common/Footer';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const featuredProperties = properties.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Luxury home" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Find Your Dream Home
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover the perfect property that matches your lifestyle and budget with our expert guidance.
            </p>
           <div className="relative max-w-lg">
  <input
    type="text"
    placeholder="Search by location, property type, or price..."
    className="w-full px-4 py-3 rounded-lg  border-2 border-black bg-transparent text-black focus:outline-none focus:border-black focus:text-black focus:ring-0 transition-colors duration-200"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  <button 
    className="absolute right-2 top-2 bottom-2 bg-white text-black px-4 rounded-md border-2 border-black hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200"
  >
    Search
  </button>
</div>          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Featured Properties
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Explore our handpicked selection of premium properties
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link 
              to="/listings" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-primary hover:bg-secondary transition-colors duration-300"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">About Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose PrimeEstates
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We're committed to providing exceptional service and finding the perfect home for you.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto mb-4">
                  {/* Icon */}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Expert Agents</h3>
                <p className="text-base text-gray-500">
                  Our team of experienced agents will guide you through every step of the process.
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto mb-4">
                  {/* Icon */}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Local Knowledge</h3>
                <p className="text-base text-gray-500">
                  Deep understanding of local markets to help you make informed decisions.
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto mb-4">
                  {/* Icon */}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Personalized Service</h3>
                <p className="text-base text-gray-500">
                  Tailored solutions to meet your unique needs and preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;