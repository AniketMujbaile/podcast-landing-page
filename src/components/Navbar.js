import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons'; 
 
const Navbar = ({
  homeRef,
  projectsRef,
  whatDoWeDoRef,
  pricingRef,
  caseStudiesRef,
  faqRef,
}) => {
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center sticky top-0 z-10">
      <div className="flex items-center ml-20">
        <FontAwesomeIcon icon={faReact} className="text-white text-xl"  spin />&nbsp;
        <span className="font-bold text-lg">BrandLogo</span>
      </div>
      <ul className="flex space-x-4">
        <li>
          <button className="nav-link" onClick={() => scrollToRef(homeRef)}>
            Home
          </button>
        </li>
        <li>
          <button className="nav-link" onClick={() => scrollToRef(projectsRef)}>
            Projects
          </button>
        </li>
        <li>
          <button className="nav-link" onClick={() => scrollToRef(whatDoWeDoRef)}>
            What do we do?
          </button>
        </li>
        <li>
          <button className="nav-link" onClick={() => scrollToRef(pricingRef)}>
            Pricing
          </button>
        </li>
        <li>
          <button className="nav-link" onClick={() => scrollToRef(caseStudiesRef)}>
            Case Study
          </button>
        </li>
        <li>
          <button className="nav-link" onClick={() => scrollToRef(faqRef)}>
            Faq's
          </button>
        </li>
      </ul>
      <button className="bg-pink-500 hover:bg-pink-600 text-white mr-20 font-bold py-2 px-4 rounded">
        Book a Call
      </button>
    </nav>
  );
};

export default Navbar;

 