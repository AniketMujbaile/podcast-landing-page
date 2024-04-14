import React from 'react';

const ServiceOffering = () => {
  return (
    <div className="bg-black text-white p-8">
      <h1 className="text-5xl font-bold mb-8">What Do We Do?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <h2 className="text-xl text-lime-300 font-semibold mb-2">Comprehensive Marketing Assets:</h2>
            <p className="mb-4 text-gray-400">
              From Short-Form/Medium-Form Repurposed Videos To Engaging Quotes And Tweets, We Produce All The Marketing Assets You Need At Scale.
            </p>
          </div>
          <div>
            <h2 className="text-xl text-lime-300 font-semibold mb-2">Rapid Social Media Growth:</h2>
            <p className="mb-4 text-gray-400">
              Watch Your Social Media Presence Skyrocket As We Implement Strategic Promotion Tactics Tailored To Your Podcast.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-lime-300 mb-2">Enhanced SEO For Your Podcast Website:</h2>
            <p className="mb-4 text-gray-400">
              We Optimize Your Podcast Website To Boost Its Visibility On Search Engine Rankings, Ensuring Maximum Exposure And Audience Reach.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 text-white p-4 rounded-lg hover:bg-white hover:text-black transition-colors duration-300">
            <h3 className="text-lg font-bold mb-2">01</h3>
            <h4 className="text-base font-semibold mb-2">Podcast Editing - Video &amp; Audio</h4>
            <p className="text-sm">
              Audio Cleanup, Trimming, Adding Intros/ Outros, Content Management, Master Leveling, Noise/Effect Filtering/Reduction Podcasts, Metadata And File Management
            </p>
          </div>
          <div className="bg-gray-800 text-white p-4 rounded-lg hover:bg-white hover:text-black transition-colors duration-300">
            <h3 className="text-lg font-bold mb-2">02</h3>
            <h4 className="text-base font-semibold mb-2">Short Form Video Repurposing</h4>
            <p className="text-sm">
              Leverage Social Media Platforms' Popularity, Caters To Diverse Content Preferences, Enhances Discoverability, And Facilitates Easy Consumption On-The-Go.
            </p>
          </div>
          <div className="bg-gray-800 text-white p-4 rounded-lg hover:bg-white hover:text-black transition-colors duration-300">
            <h3 className="text-lg font-bold mb-2">03</h3>
            <h4 className="text-base font-semibold mb-2">Youtube (Medium-Length) Video Repurposing</h4>
            <p className="text-sm">Extend Audience Reach, Enhance Discoverability And Strengthens Brand Presence</p>
          </div>
          <div className="bg-gray-800 text-white p-4 rounded-lg hover:bg-white hover:text-black transition-colors duration-300">
            <h3 className="text-lg font-bold mb-2">04</h3>
            <h4 className="text-base font-semibold mb-2">Show Notes</h4>
            <p className="text-sm">Better Listener Experience, Enhanced Searchability, Aids Navigation And Facilitates Content Repurposing</p>
          </div>
          <div className="bg-gray-800 text-white p-4 rounded-lg hover:bg-white hover:text-black transition-colors duration-300">
            <h3 className="text-lg font-bold mb-2">05</h3>
            <h4 className="text-base font-semibold mb-2">Paid Advertising</h4>
            <p className="text-sm">
              Accelerate Growth, Target Specific Audiences, Leverage Hyper-Targeted Data-Driven Insights, And A Competitive Advantage
            </p>
          </div>
          <div className="bg-gray-800 text-white p-4 rounded-lg hover:bg-white hover:text-black transition-colors duration-300">
            <h3 className="text-lg font-bold mb-2">06</h3>
            <h4 className="text-base font-semibold mb-2">Omnichannel Distribution</h4>
            <p className="text-sm">
              Increases Visibility, Caters To Audience Preferences, Explores New Audiences, Drives Traffic And Conversions, And Ensures Relevance In The Digital Landscape
            </p>
          </div>
          <div className="bg-gray-800 text-white p-4 rounded-lg hover:bg-white hover:text-black transition-colors duration-300 col-span-2">
            <h3 className="text-lg font-bold mb-2">07</h3>
            <h4 className="text-base font-semibold mb-2">Text Repurposing - Blogs, Tweets &amp; Other Social Formats</h4>
            <p className="text-sm">
              Diversifies Content, Extends Reach, Enhances SEO, Establishes Thought Leadership, Enables Content Syndication, Provides Evergreen Content
            </p>
          </div>
        </div>
      </div>
      {/* <div className="mt-8">
        <button className="bg-pink-500 text-white py-4 px-8 rounded-lg font-semibold">Book The Call Now</button>
      </div> */}
    </div>
  );
};

export default ServiceOffering;
 