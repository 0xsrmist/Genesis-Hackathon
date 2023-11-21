import React, { useState } from 'react';
import FAQs from './components/faqs';
import ContactUs from './components/ContactUs'; // Import the ContactUs component

const faqsData = [
  {
    question: 'What is the hackathon about?',
    answer: '...',
    resources: ['Link to Hackathon Details', 'Link to Registration'],
  },
  {
    question: 'How do I register for the hackathon?',
    answer: '...',
    resources: ['Link to Registration Page'],
  },
  {
    question: 'What programming languages are allowed?',
    answer: '...',
  },
];

const FAQItem = ({ question, answer, resources }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="question" onClick={toggleOpen}>
        {question}
      </div>
      {isOpen && (
        <div className="answer">
          <p>{answer}</p>
          {resources && (
            <div className="resources">
              <p>Additional Resources:</p>
              <ul>
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a href={resource} target="_blank" rel="noopener noreferrer">
                      {resource}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <>
      <div className="flex flex-col gap-2 p-2">
        <FAQs data={faqsData} />
        <ContactUs /> {/* lorep ipsum contact */}
        {/* lorep ipsum faq */}
      </div>
    </>
  );
}

export default App;