import React from 'react';
import { useState } from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import PropertyCard from '../listings/PropertyCard';
import Filters from '../listings/Filters';
import { properties } from '../data/properties';

const Listings = () => {
  const [filters, setFilters] = useState({
    location: '',
    type: 'All',
    bedrooms: 'Any',
    minPrice: '',
    maxPrice: ''
  });

  const filteredProperties = properties.filter(property => {
    // Location filter
    if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }
    
    // Property type filter
    if (filters.type !== 'All' && property.type !== filters.type) {
      return false;
    }
    
    // Bedrooms filter
    if (filters.bedrooms !== 'Any') {
      const minBedrooms = parseInt(filters.bedrooms);
      if (property.bedrooms < minBedrooms) {
        return false;
      }
    }
    
    // Price range filter
    if (filters.minPrice && property.price < parseInt(filters.minPrice)) {
      return false;
    }
    if (filters.maxPrice && property.price > parseInt(filters.maxPrice)) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Property Listings</h1>
            <p className="text-lg text-gray-600">Browse our selection of premium properties</p>
          </div>
          
          <Filters filters={filters} setFilters={setFilters} />
          
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-900 mb-2">No properties match your search criteria</h3>
              <p className="text-gray-600">Try adjusting your filters to see more results</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Listings;