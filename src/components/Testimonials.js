import React from 'react';
import profileImage from './assets/profile-image.png';
import teeShots from './assets/tee-shots.png';

const Testimonial = () => {
  return (
    <div className="bg-black py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-white text-5xl font-bold text-center mb-8">WHAT MY CLIENTS SAY</h2>
        <p className="text-gray-400 text-center mb-8">Total Reviews</p>
        <div className="text-center mb-8">
          <span className="text-purple-600 text-xl font-bold">323</span>
        </div>
        <div className="bg-black rounded-3xl p-8 relative border-2 border-fuchsia-500">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <img src={profileImage} alt="Profile" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="text-white font-bold">Sahil Bloom</h3>
                <p className="text-gray-400">1.5M+</p>
              </div>
            </div>
            <div className="flex">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-l">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-r">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          <blockquote className="text-white text-3xl font-medium mb-8">
            <p>"Damien has an incredible talent for making every event feel effortless, and the results speak for themselves."</p>
          </blockquote>
          <div className="flex justify-between">
            <div>
              <p className="text-green-400 font-bold">Views</p>
              <p className="text-white font-bold">10M+</p>
            </div>
            <div>
              <p className="text-green-400 font-bold">Subscriber Gained</p>
              <p className="text-white font-bold">30,000+</p>
            </div>
            <div className="relative">
              <img src={teeShots} alt="Tee Shots" className="w-32" />
              <div className="absolute bottom-0 left-0 bg-yellow-400 text-black font-bold py-1 px-2">
                Tee Shots
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
 