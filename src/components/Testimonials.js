import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TestimonialsContainer = styled.section`
  background-color: #f5f7fa;
  padding: 80px 20px;
`;

const TestimonialsTitle = styled.h3`
  text-align: center;
  font-size: 36px;
  color: #333333;
  margin-bottom: 60px;
`;

const TestimonialsGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const TestimonialItem = styled(motion.div)`
  flex: 1;
  max-width: 400px;
  margin: 20px;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TestimonialText = styled.p`
  color: #666666;
  font-size: 16px;
  line-height: 1.6;
`;

const ClientName = styled.h4`
  margin-top: 20px;
  color: #333333;
  font-size: 18px;
`;

function Testimonials() {
  const testimonialsData = [
    {
      text: `"CalC provided us with exceptional test questions that were instrumental in our students' success."`,
      name: '— Emily R., Educational Director',
    },
    {
      text: `"Their team is incredibly responsive and professional. The quality of their content is unparalleled."`,
      name: '— Michael T., Test Prep Coordinator',
    },
    {
      text: `"We saw a significant improvement in our test prep courses after incorporating CalC's materials."`,
      name: '— Sophia L., Academic Advisor',
    },
  ];

  return (
    <TestimonialsContainer id="testimonials">
      <TestimonialsTitle>What Our Clients Say</TestimonialsTitle>
      <TestimonialsGrid>
        {testimonialsData.map((testimonial, index) => (
          <TestimonialItem
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3 }}
          >
            <TestimonialText>{testimonial.text}</TestimonialText>
            <ClientName>{testimonial.name}</ClientName>
          </TestimonialItem>
        ))}
      </TestimonialsGrid>
    </TestimonialsContainer>
  );
}

export default Testimonials;
