import React, { useState } from 'react';
import img1 from '../../assets/carousel1.png'
const PhoneColorShowcase = () => {
  const [activeColor, setActiveColor] = useState('BLACK');

  const images = {
    BLACK: img1, // Replace with actual black phone image
    PINK: img1,   // Replace with actual pink phone image
  };

  const colors = [
    { id: 'BLACK', label: 'BLACK', class: 'bg-black' },
    { id: 'PINK', label: 'PINK', class: 'bg-pink-300' }
  ];

  return (
    <div className="w-full   mx-auto p-6">
      {/* Main Image Container */}
      <div 
        className="relative rounded-2xl mb-8 overflow-hidden cursor-pointer"
        onClick={() => setActiveColor(activeColor === 'BLACK' ? 'PINK' : 'BLACK')}
      >
        <div className="flex items-center justify-center p-8">
          <img
            src={images[activeColor]}
            alt={`Phone in ${activeColor.toLowerCase()}`}
            className="w-auto max-w-5xl object-contain"
          />
        </div>
      </div>

      {/* Color Selection */}
      <div className="flex items-center justify-center gap-4">
        <span className="text-sm font-medium text-neutral-600">COLOR</span>
        <div className="flex gap-2">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => setActiveColor(color.id)}
              className={`
                w-6 h-6 rounded-full flex items-center justify-center
                ${activeColor === color.id ? 'ring-2 ring-offset-2 ring-gray-400' : ''}
              `}
            >
              <span className={`w-full h-full rounded-full ${color.class}`}></span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhoneColorShowcase;