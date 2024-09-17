import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled Components
const ServicesContainer = styled.section`
  background-color: #f5f7fa;
  padding: 80px 20px;
`;

const ServicesTitle = styled.h3`
  text-align: center;
  font-size: 36px;
  color: #333333;
  margin-bottom: 60px;
  font-weight: 700;
`;

const ServicesGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ServiceCategory = styled.div`
  flex: 1;
  max-width: 300px;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CategoryTitle = styled.h4`
  font-size: 24px;
  color: #333333;
  margin-bottom: 20px;
  font-weight: 600;
`;

const ServiceList = styled.ul`
  list-style: disc;
  padding-left: 20px;
  color: #666666;
  font-size: 16px;
  line-height: 1.6;
  font-weight: 400;
`;

const ServiceItem = styled.li`
  margin-bottom: 10px;
`;

function OurServices() {
  return (
    <ServicesContainer id="services">
      <ServicesTitle>Our Services</ServicesTitle>
      <ServicesGrid>
        {/* Content Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ServiceCategory>
            <CategoryTitle>Content Services:</CategoryTitle>
            <ServiceList>
              <ServiceItem>Question and Solution Creation</ServiceItem>
              <ServiceItem>Faculty Support</ServiceItem>
              <ServiceItem>Mock Test Series Design</ServiceItem>
              <ServiceItem>Curriculum Topology Design</ServiceItem>
              <ServiceItem>Dynamic Study Planner Development</ServiceItem>
              <ServiceItem>Concept Capsule Creation</ServiceItem>
              <ServiceItem>Comprehensive Textbook Content</ServiceItem>
              <ServiceItem>Study Notes Production</ServiceItem>
            </ServiceList>
          </ServiceCategory>
        </motion.div>

        {/* Analytics Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ServiceCategory>
            <CategoryTitle>Analytics Services:</CategoryTitle>
            <ServiceList>
              <ServiceItem>AI-based Student Performance Enhancement Tools</ServiceItem>
              <ServiceItem>Pain Point Identification and Analysis</ServiceItem>
              <ServiceItem>Interactive Dashboard Development</ServiceItem>
              <ServiceItem>Success Factor Identification</ServiceItem>
              <ServiceItem>Topic Prioritization Strategies</ServiceItem>
              <ServiceItem>Session Planning Optimization</ServiceItem>
              <ServiceItem>Training Efficiency Maximization</ServiceItem>
            </ServiceList>
          </ServiceCategory>
        </motion.div>

        {/* Creative Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <ServiceCategory>
            <CategoryTitle>Creative Services:</CategoryTitle>
            <ServiceList>
              <ServiceItem>Video Editing and Production</ServiceItem>
              <ServiceItem>Professional Dubbing and Voice-overs</ServiceItem>
              <ServiceItem>Banner Design</ServiceItem>
              <ServiceItem>Creative Deck Creation for Classroom Sessions</ServiceItem>
              <ServiceItem>Website & App Design</ServiceItem>
              <ServiceItem>SEO & Digital Marketing Strategies</ServiceItem>
            </ServiceList>
          </ServiceCategory>
        </motion.div>
      </ServicesGrid>
    </ServicesContainer>
  );
}

export default OurServices;
