import React from 'react';

const LongFormEdits = () => {
  return (
    <div className="bg-black py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-white text-3xl font-bold text-center mb-8">
          Our Long Form Edits
        </h2>
        <div className="relative">
          <div className="flex justify-between items-center mb-4">
            <button className="bg-white text-purple-900 font-bold py-2 px-4 rounded-l">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="bg-white text-purple-900 font-bold py-2 px-4 rounded-r">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src="/path/to/your/image.jpg"
              alt="Long Form Edit"
              className="w-full"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                <i className="fas fa-play"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LongFormEdits;