import React from 'react';
import personImage from './assets/person-image.png';

const CallToAction = () => {
  return (
    <div className="bg-black text-white flex flex-col md:flex-row items-center justify-center py-12">
      <div className="relative md:w-1/2">
        <div className="bg-green-500 rounded-full h-96 w-96 mx-auto"></div>
        <img
          src={personImage}
          alt="Person"
          className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full"
        />
      </div>
      <div className="md:w-1/2 px-8 md:px-16 mt-8 md:mt-0">
        <button className="bg-purple-500 text-white px-4 py-2 rounded-full mb-8">
          Book A Call
        </button>
        <div className="flex items-center mb-4">
          <div className="bg-white rounded-full h-4 w-4 mr-2"></div>
          <h2 className="text-xl font-bold">Let's work Together</h2>
        </div>
        <p className="text-2xl font-bold mb-8">
          Le'ts make something amazing together Start By
          <span className="text-purple-500"> Saying Hi</span>
        </p>
        <button className="bg-white text-black px-4 py-2 rounded-full">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default CallToAction;