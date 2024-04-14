import React, { useRef } from 'react';

const Home = () => {
   const projectsButtonRef = useRef(null);

  // Function to handle scrolling to the projects section
  const scrollToProjects = () => {
     if (projectsButtonRef.current) {
       projectsButtonRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black text-white py-20 px-8">
      <div className="max-w-8xl mx-auto text-center">
        <h1 >
          <span className="text-8xl font-bold text-gray-500 mb-6">We help grow your Podcast <br /> to attract qualified leads and </span> <br />
          <span className="text-8xl font-bold text-pink-500 mb-6">Increase Revenue.</span>
        </h1>
        <br />
        <br />
        <p >
        <span className="text-4xl text-gray-500 mb-8">We Help You To Start A New Or Grow Your Existing Podcast <br /> That Unlocks Opportunities & Leads, Expands Impact <br /> And </span>
         <span className="text-4xl text-lime-300 mb-8">Establishes Leadership.</span> 
        </p>
        <br />
        <br />
        <div className="flex justify-center space-x-4 mb-8">
          <button 
            ref={projectsButtonRef} 
            className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded">
            Book A Call
          </button>
          <button className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-3 px-6 rounded"
           onClick={scrollToProjects}  
          >
            Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
 
 

