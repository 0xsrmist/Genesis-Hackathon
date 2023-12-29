import { useState } from 'react';
import arrow from '../../assets/icons/arrow.svg'
import SectionTitle from '../../ui/sectiontitle/SectionTitle';

// eslint-disable-next-line react/prop-types
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        background: 'linear-gradient(90deg, #9359d4, #5d59d4, #60aae6)', // Linear gradient with three colors
        borderRadius: '10px',
        marginBottom: '10px',
        overflow: 'hidden',
        position: 'relative',
      }}
      className={`faq-item ${isOpen ? 'open' : ''}`}
    >
      <div
        style={{
          padding: '25px',
          cursor: 'pointer',
          fontWeight: 'bold',
          color: '#ffffff',
        }}
        onClick={toggleAccordion}
        className="faq-question"
      >
        {question}
        <span
          style={{
            position: 'absolute',
            top: '50%',
            right: '15px',
            transform: `translateY(-50%) rotate(${isOpen ? '180deg' : '0deg'})`, // Rotate arrow for open/close state
            transition: '',
            fontSize: '1.5em',
          }}
        >
          <img src={arrow} />
        </span>
      </div>
      {isOpen && (
        <div
          style={{
            paddingLeft: '25px',
            paddingRight: '25px',
            paddingBottom: '25px',
            color: '#ffffff',
          }}
          className="faq-answer"
        >
          {answer}
        </div>
      )}
    </div>
  );
};

const FaqSection = () => {
  const faqData = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      question: 'How do I install React?',
      answer: 'You can install React using npm or yarn. For example: npm install react',
    },
    {
      question: 'How do I install React?',
      answer: 'You can install React using npm or yarn. For example: npm install react',
    },
    {
      question: 'How do I install React?',
      answer: 'You can install React using npm or yarn. For example: npm install react',
    },
    {
      question: 'How do I install React?',
      answer: 'You can install React using npm or yarn. For example: npm install react',
    },

    // Add more FAQ items as needed
  ];

  return (
    <div
      style={{
        width: '60%',
        margin: '20px auto',
      }}
      className="faq-section flex flex-col gap-5"
    >
      <div className='flex items-center justify-center'>
        <SectionTitle name={'FAQs'} />
      </div>
      {faqData.map((item, index) => (
        <FaqItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FaqSection;
