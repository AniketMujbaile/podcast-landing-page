import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Who is this for?',
      answer: 'Our offers are tailored for podcast hosts, tech companies, and venture capital firms looking to establish themselves as thought leaders in the industry.',
    },
    {
      question: 'Why podcasts?',
      answer: '',
    },
    {
      question: 'Who will be the host of the podcast? (for the launchpad offer)',
      answer: '',
    },
    {
      question: 'How will the podcast be promoted?',
      answer: '',
    },
  ];

  return (
    <div className="bg-black text-white p-8">
      <h1 className="text-5xl font-bold mb-8 text-center">FAQ'S</h1>
      <div>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <div
              className={`py-4 px-6 rounded-lg cursor-pointer flex items-center justify-between ${
                openIndex === index ? 'bg-purple-800 border-l-4 border-purple-500' : 'bg-gray-800'
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span className={`text-2xl ${openIndex === index ? 'rotate-180' : ''}`}>&#8964;</span>
            </div>
            {openIndex === index && <div className="py-4 px-6 bg-gray-700 rounded-b-lg">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;