import React from "react";

const SearchBar = ({ value, onChange, onSubmit }) => {
  return (
    <div className="relative max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Search by location, property type, or price..."
        className="w-full px-4 py-3 rounded-lg border-2 border-black bg-transparent text-black focus:outline-none focus:border-black focus:text-gray-600 focus:ring-0 transition-colors duration-200"
        value={value}
        onChange={onChange}
      />
      <button 
        onClick={onSubmit}
        className="absolute right-2 top-2 bottom-2 bg-white text-black px-4 rounded-md border-2 border-black hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 flex items-center justify-center"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 mr-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
          />
        </svg>
        Search
      </button>
    </div>
  );
};

export default SearchBar;