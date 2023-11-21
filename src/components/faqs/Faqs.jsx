// src/components/FAQ.js
import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="question" onClick={toggleOpen}>
        {question}
      </div>
      {isOpen && <div className="answer">{answer}</div>}
    </div>
  );
};

const FAQs = ({ data }) => {
  return (
    <div className="faqs-container">
      {data.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQs;