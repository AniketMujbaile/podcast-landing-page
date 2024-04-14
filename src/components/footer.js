import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

const Footer = () => {
  return (
    <footer className="bg-black py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          {/* <img
            src="/path/to/your/logo.png"
            alt="Logo"
            className="h-8 mr-2"
          /> */}
          <span className="text-white font-semibold">Alexandra</span>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-2 px-4">
        <p className="text-gray-400 text-sm text-center">
          &copy; 2023 All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;