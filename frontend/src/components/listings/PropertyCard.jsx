import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={property.image || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'} 
          alt={property.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-xs font-semibold">
          {property.type}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{property.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{property.location}</p>
        <div className="flex justify-between items-center mb-3">
          <span className="text-primary font-bold text-xl">
            {property.price >= 100000 ? 
              `₹${(property.price/100000).toFixed(2)} L` : 
              `₹${property.price.toLocaleString()}${property.size ? '/sq yd' : ''}`}
          </span>
          <div className="flex space-x-2 text-sm text-gray-500">
            {property.bedrooms && <span>{property.bedrooms} beds</span>}
            {property.bathrooms && <span>{property.bathrooms} baths</span>}
            {property.sqft ? (
              <span>{property.sqft} sqft</span>
            ) : property.size && (
              <span>{property.size.split(' ')[0]} sq yd</span>
            )}
          </div>
        </div>
        {property.features && (
          <div className="mb-3">
            <div className="flex flex-wrap gap-1 text-xs">
              {property.features.slice(0, 2).map((feature, index) => (
                <span key={index} className="bg-gray-100 px-2 py-1 rounded">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}
        <Link 
          to={`/property/${property.id}`}
          className="block w-full bg-primary hover:bg-secondary text-white text-center py-2 rounded transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;