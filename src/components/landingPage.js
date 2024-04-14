import React, { createRef } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Project';
import WhatDoWeDo from './whatDoWeDo';
import Pricing from './Pricing';
import CaseStudies from './caseStudies';
import Faq from './faq';
import Testimonials from './Testimonials';
import CallToAction from './call';
import Footer from './footer';

const LandingPage = () => {
  const homeRef = createRef();
  const projectsRef = createRef();
  const whatDoWeDoRef = createRef();
  const pricingRef = createRef();
  const caseStudiesRef = createRef();
  const faqRef = createRef();

  return (
    <div>
      <Navbar
        homeRef={homeRef}
        projectsRef={projectsRef}
        whatDoWeDoRef={whatDoWeDoRef}
        pricingRef={pricingRef}
        caseStudiesRef={caseStudiesRef}
        faqRef={faqRef}
      />
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={whatDoWeDoRef}>
        <WhatDoWeDo />
      </div>
      <div ref={pricingRef}>
        <Pricing />
      </div>
      <div ref={caseStudiesRef}>
        <CaseStudies />
      </div>
      <div ref={faqRef}>
        <Faq />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <CallToAction />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;

 