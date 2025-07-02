import React from "react";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { properties } from "../data/properties";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id));
  const [activeImage, setActiveImage] = useState(property.image);
  const [showAllDetails, setShowAllDetails] = useState(false);

  if (!property) {
    return <div>Property not found</div>;
  }

  // Sample gallery images
  const galleryImages = [
    property.image,
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Property header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
            <p className="text-lg text-gray-600">{property.location}</p>
          </div>
          
          {/* Gallery and main info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img 
                  src={activeImage} 
                  alt={property.title} 
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {galleryImages.map((img, index) => (
                  <button 
                    key={index}
                    className={`h-20 overflow-hidden rounded ${activeImage === img ? 'ring-2 ring-primary' : ''}`}
                    onClick={() => setActiveImage(img)}
                  >
                    <img 
                      src={img} 
                      alt={`Property ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-primary">${property.price.toLocaleString()}</h2>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  For Sale
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500">Bedrooms</p>
                  <p className="font-medium">{property.bedrooms}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Bathrooms</p>
                  <p className="font-medium">{property.bathrooms}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Square Feet</p>
                  <p className="font-medium">{property.sqft.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Property Type</p>
                  <p className="font-medium">{property.type}</p>
                </div>
              </div>
              
              <button className="w-full bg-primary hover:bg-secondary text-white py-3 rounded-lg font-medium transition-colors duration-300 mb-6">
                Schedule a Viewing
              </button>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium mb-4">Contact Agent</h3>
                <div className="flex items-center space-x-4">
                  <img 
                    src={property.agent.photo} 
                    alt={property.agent.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{property.agent.name}</p>
                    <p className="text-sm text-gray-500">{property.agent.phone}</p>
                    <p className="text-sm text-gray-500">{property.agent.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Property description */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-bold mb-4">Property Description</h2>
            <p className="text-gray-700 mb-4">
              {showAllDetails ? property.description : `${property.description.substring(0, 200)}...`}
            </p>
            <button 
              className="text-primary font-medium hover:underline"
              onClick={() => setShowAllDetails(!showAllDetails)}
            >
              {showAllDetails ? 'Show Less' : 'Read More'}
            </button>
          </div>
          
          {/* Map and virtual tour */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Location</h2>
              <div className="bg-gray-100 h-64 rounded-lg overflow-hidden">
                {/* Embedded map placeholder */}
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <p className="text-gray-500">Map of {property.location}</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Virtual Tour</h2>
              <div className="bg-gray-100 h-64 rounded-lg overflow-hidden">
                {/* Virtual tour placeholder */}
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <p className="text-gray-500">Virtual Tour of Property</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-bold mb-4">Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Swimming Pool</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Garage</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Garden</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Security System</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Central Heating</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Parking</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetails;