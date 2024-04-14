 
import React from 'react';

const Pricing = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-bold text-center mb-10">Pricing</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="bg-gray-800 rounded-lg p-5 max-w-xs transition duration-300 hover:scale-105 hover:border-2 hover:border-pink-500">
            <h3 className="text-3xl font-bold text-center mb-4">Premium</h3>
            <p className="mb-4">
              A Competitive Repurposing Solution: For new or expanding podcasts, unlock higher content discovery, engagement, and audience growth today.
            </p>
            <ul className="list-disc pl-4 mb-6">
              <li>30 repurposed short videos a month</li>
              <li>8 repurposed medium-length youtube videos</li>
              <li>Cinematic teaser trailer for each episode</li>
              <li>All posted on YT, IG, FB, TT &amp; LI</li>
              <li>Thumbnails for all assets</li>
            </ul>
            <p className="mb-4">Video edit style:</p>
            <ul className="list-disc pl-4 mb-6">
              <li>B-Roll</li>
              <li>Stock Imagery</li>
              <li>Text Animation</li>
            </ul>
            <button className="flex justify-center bg-lime-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded mx-auto">Book A Call</button>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 max-w-xs transition duration-300 hover:scale-105 hover:border-2 hover:border-pink-500">
            <h3 className="text-3xl font-bold text-center mb-4">Premium+</h3>
            <p className="mb-4">
              Distinctive Edits and Branding: Perfect for podcasts aiming to stand out and attract audiences and sponsors.
            </p>
            <ul className="list-disc pl-4 mb-6">
              <li>30 repurposed short videos a month</li>
              <li>8 repurposed medium-length youtube videos</li>
              <li>Cinematic teaser trailer for each episode</li>
              <li>All posted on YT, IG, FB, TT &amp; LI</li>
              <li>Thumbnails for all assets</li>
            </ul>
            <p className="mb-4">Video edit style:</p>
            <ul className="list-disc pl-4 mb-6">
              <li>Custom Illustrations</li>
              <li>3D Motion Graphics</li>
              <li>Immersive Sound Design</li>
            </ul>
            <button className="flex justify-center bg-lime-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">Book A Call</button>
          </div>
          <div className="bg-gray-800 rounded-lg p-7 max-w-xs transition duration-300 hover:scale-105 hover:border-2 hover:border-pink-500">
            <h3 className="text-3xl font-bold text-center mb-4">Hypergrowth</h3>
            <p className="mb-4">
              Comprehensive Done-for-You Growth Solution: Propel your brand to new heights with our solution, promising 3x engagement in just 60 days.
            </p>
            <ul className="list-disc pl-4 mb-6">
              <li>90-100 repurposed short videos a month</li>
              <li>8-16 repurposed medium-length youtube videos</li>
              <li>Design &amp; Optimize Lead Magnet and sales funnel strategies</li>
            </ul>
            <p className="mb-4">Strategic Promotion:</p>
            <p>Targeted promotion on theme pages, newsletters, and more</p>
             <br/>
             <button className="flex justify-center bg-lime-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">Book A Call</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
 