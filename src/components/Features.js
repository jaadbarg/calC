import React from 'react';
import styled from 'styled-components';
import { FaPenFancy, FaBook, FaHandshake, FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FeaturesContainer = styled.section`
  background-color: #ffffff;
  padding: 80px 20px;
`;

const FeaturesTitle = styled.h3`
  text-align: center;
  font-size: 36px;
  color: #333333;
  margin-bottom: 60px;
`;

const FeaturesGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FeatureItem = styled(motion.div)`
  flex: 1;
  max-width: 300px;
  margin: 20px;
  text-align: center;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FeatureIcon = styled.div`
  font-size: 48px;
  color: #4a90e2;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h4`
  font-size: 24px;
  color: #333333;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  color: #666666;
  font-size: 16px;
`;

function Features() {
  const features = [
    {
      icon: <FaPenFancy />,
      title: 'Custom Handmade Questions',
      description:
        'Our team crafts each question from scratch to ensure uniqueness and high quality.',
    },
    {
      icon: <FaBook />,
      title: 'Extensive Test Coverage',
      description:
        'We provide questions for a wide array of popular US standardized tests.',
    },
    {
      icon: <FaHandshake />,
      title: 'Direct Collaboration',
      description:
        'Work directly with our creators to tailor content to your specific needs.',
    },
    {
      icon: <FaLightbulb />,
      title: 'Expert Insights',
      description:
        'Benefit from our team’s extensive experience in educational content creation.',
    },
  ];

  return (
    <FeaturesContainer id="features">
      <FeaturesTitle>Why Choose CalC?</FeaturesTitle>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureItem>
        ))}
      </FeaturesGrid>
    </FeaturesContainer>
  );
}

export default Features;
