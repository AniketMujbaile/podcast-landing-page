import React from 'react';

const episodeBreakdown = () => {
  return (
    <div className="bg-black text-black py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl text-center text-white font-bold mb-8">1 Episode Turns Into</h1>
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-96 h-54 bg-gray-200 rounded-lg flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/FT3ODSg1GFE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded-md">YouTube</div>
          </div>
        </div>
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            <div className="bg-gray-200 rounded-lg p-4 w-64">
              <h3 className="font-bold mb-2">6/8 Repurposed Short Videos</h3>
              <p className="text-gray-600">Short Video Clips</p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4 w-64">
              <h3 className="font-bold mb-2">2 Repurposed Medium-Length Youtube Videos</h3>
              <p className="text-gray-600">Longer Format Videos</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <div className="bg-gray-200 rounded-lg p-4 w-64">
            <h3 className="font-bold mb-2">1 Cinematic Teaser/Trailer For The Episode</h3>
            <p className="text-gray-600">Short Promotional Video</p>
          </div>
          <div className="bg-gray-200 rounded-lg p-4 w-64">
            <h3 className="font-bold mb-2">2 SEO Enhanced Blog Articles</h3>
            <p className="text-gray-600">Written Content</p>
          </div>
          <div className="bg-gray-200 rounded-lg p-4 w-64">
            <h3 className="font-bold mb-2">2 LinkedIn Articles/Tweet-Threads</h3>
            <p className="text-gray-600">Social Media Content</p>
          </div>
          <div className="bg-gray-200 rounded-lg p-4 w-64">
            <h3 className="font-bold mb-2">Multiple Tweets, Quotes, Social Graphics</h3>
            <p className="text-gray-600">Bite-sized Social Content</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default episodeBreakdown;

 