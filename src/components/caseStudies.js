import React from 'react';
import chrisLammImage from './assets/chris-lamm.jpg';
import podcastImage from './assets/podcast-image.jpg';

const CaseStudies = () => {
  return (
    <div className="bg-black text-white p-8">
      <h1 className="text-5xl font-bold mb-8 text-center">Case Studies</h1>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:mr-4">
          <img src={podcastImage} alt="Podcast" className="rounded-lg" />
        </div>
        <div className="md:w-1/2">
          <div className="flex items-center mb-4">
            <img src={chrisLammImage} alt="Chris Lamm" className="w-16 h-16 rounded-full mr-4" />
            <h2 className="text-2xl font-bold">Chris Lamm - Money Whole Podcast</h2>
          </div>
          <p className="mb-4 text-gray-400">
            The Client Is In The Mortgage Space And The Podcast Revolves Around Wealth Creation & Preservation, Financial Freedom, 
            <span className="text-lg font-bold text-pink-500 mb-6"> Building Generational Wealth </span>
           Through Real Estate, Importance Of Community, Faith And Family.
          </p>
          <p className="mb-4 text-gray-400">We Took Over The Entire Podcast Marketing When The Client Was At About 420+ Episode Deep Into His Show.</p>
          <p className="mb-4 text-gray-400">We Deep Dived Into The Client's Target Niches, Created An             
          <span className="text-lg font-bold text-pink-500 mb-6"> Ideal Audience Matrix </span>
           To Strategize Our Plan Of Action.</p>
          <p className="mb-4 text-gray-400">
            We Established A Weekly Schedule Where The Episode Release Is Marked By A 
            <span className="text-lg font-bold text-pink-500 mb-6"> Cinematic Teaser </span>
            That Gives The Viewer A Sneak-Peak This Piquing
            Their Curiosity.
          </p>
          <p className="mb-4 text-gray-400">
            Followed By The Episode Release On All Major Podcast Platforms Viz. YouTube, Spotify, Apple Etc Along With Advanced Show Notes To Ensure
            Platform-Specific SEO.
          </p>
          <p className="mb-4 text-gray-400">
          <span className="text-lg font-bold text-pink-500 mb-6"> Right After The Release </span>
            , All The Socials Are Fed With Repurposed Shorts And YouTube Videos To Drive More Audience To The Episode. The
            Aggressive Promotion Plan That Lasts A Week After The Release Ensures That The Created Attention Juice Funnels To The Episode Thus Triggering
            Algorithms To Better Social Indications.
          </p>
          <p className="mb-4 text-gray-400">
            Within The First 30 Days, We Were Able To Increase 
            <span className="text-lg font-bold text-pink-500 mb-6"> The Downloads By 300%. </span>
            More Importantly The Client Landed Inbound Opportunities That Were
            Precise And Relevant To His Business Offerings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;

 