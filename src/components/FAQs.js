import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQsContainer = styled.section`
  background-color: #f5f7fa;
  padding: 80px 20px;
`;

const FAQsTitle = styled.h3`
  text-align: center;
  font-size: 36px;
  color: #333333;
  margin-bottom: 40px;
`;

const FAQItem = styled.div`
  max-width: 800px;
  margin: 20px auto;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const Question = styled.h4`
  font-size: 20px;
  color: #333333;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Answer = styled.p`
  color: #666666;
  font-size: 16px;
  margin-top: 10px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What types of tests do you provide questions for?',
      answer: 'We cover a wide range of popular US tests, including SAT, ACT, GRE, GMAT, and more.',
    },
    {
      question: 'How are your questions created?',
      answer: 'Our expert team in India crafts each question from scratch, ensuring originality and quality.',
    },
    {
      question: 'Can I request custom topics or subjects?',
      answer: 'Yes, we offer customization options to meet your specific needs. Please contact us for more details.',
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQsContainer id="faqs">
      <FAQsTitle>Frequently Asked Questions</FAQsTitle>
      {faqs.map((faq, index) => (
        <FAQItem key={index} onClick={() => toggleAnswer(index)}>
          <Question>
            {faq.question}
            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </Question>
          <Answer isOpen={openIndex === index}>{faq.answer}</Answer>
        </FAQItem>
      ))}
    </FAQsContainer>
  );
}

export default FAQs;
