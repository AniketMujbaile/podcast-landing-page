import React, { useState } from 'react';
import teeShotsImage1 from './assets/tee-shots-1.png';
import elusiveThoughtImage from './assets/elusive-thought.png';
import teeShotsImage2 from './assets/tee-shots-2.png';
import theDudeImage from './assets/the-dude.png';

const ShortFormEdits = () => {
  const cards = [
    { src: teeShotsImage1 },
    { src: elusiveThoughtImage},
    { src: teeShotsImage2},
    { src: theDudeImage},
  ];

  const [startIndex, setStartIndex] = useState(0);

  const nextIndex = () => {
    setStartIndex((prevIndex) => (prevIndex === cards.length - 2 ? 0 : prevIndex + 1));
  };

  const prevIndex = () => {
    setStartIndex((prevIndex) => (prevIndex === 0 ? cards.length - 2 : prevIndex - 1));
  };

  return (
    <div className="bg-black text-white py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl text-center font-bold mb-8">Our Short Form Edits</h1>
        <div className="flex justify-center space-x-4 overflow-hidden relative">
          <button
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white font-bold py-2 px-4 rounded-full z-10 ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-900'}`}
            onClick={prevIndex}
            disabled={startIndex === 0}
          >
            Previous
          </button>
          {cards.slice(startIndex, startIndex + 2).map((card, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden" style={{ width: '20rem', height: '30rem' }}>
              <img src={card.src} alt={card.title} className="w-full h-full object-cover" />
            </div>
          ))}
          <button
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white font-bold py-2 px-4 rounded-full z-10 ${startIndex >= cards.length - 2 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-900'}`}
            onClick={nextIndex}
            disabled={startIndex >= cards.length - 2}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShortFormEdits;

 