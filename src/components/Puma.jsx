import React, { useState } from 'react';

const PumaCard = () => {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <div className="w-full max-w-xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden md:scale-105 mt-5">

      <p className="text-lg font-semibold text-gray-700 animate-pulse mb-8 text-center">
        Resize to check responsiveness
      </p>

      <div 
        className="relative"
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
      >
        <img 
          src="https://rukminim2.flixcart.com/image/850/1000/l5ld8y80/shoe/t/v/j/-original-imagg894ecxshhjz.jpeg?q=90&crop=false" 
          alt="Puma X-Ray 2 Sneakers" 
          className="w-full h-72 md:h-96 object-cover"
        />
        {isImageHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <span className="text-white text-base bg-red-600 px-4 py-2 rounded-full">
              Quick View
            </span>
          </div>
        )}
      </div>
      <div className="p-5 md:p-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-2xl font-bold text-gray-800">
            Puma X-Ray 2
          </h2>
          <span className="text-xl text-red-600 font-semibold">$129.99</span>
        </div>
        <p className="text-base text-gray-600 mb-4">
          Performance meets style in these cutting-edge athletic sneakers.
        </p>
        <button className="w-full text-base bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PumaCard;