import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled Components
const HeroContainer = styled.section`
  background-image: url('/images/header.png'); /* Path to your background image */
  background-size: cover; /* Ensure the image covers the entire section */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent image from repeating */
  padding: 280px 20px; /* Adjust the padding to suit your design */
  text-align: center;
  position: relative;
  color: #ffffff;
  min-height: 80vh; /* Ensure it takes at least 80% of the viewport height */

  &:before {
    content: '';
    background-color: rgba(0, 0, 0, 0.5); /* Overlay color */
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1; /* Ensures the overlay is above the background image */
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2; /* Ensures the content appears above the overlay */
`;

const HeroTitle = styled(motion.h2)`
  font-size: 64px;
  margin-bottom: 20px;
  font-weight: 700;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 48px; /* Adjust font size for mobile */
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 24px;
  margin-bottom: 40px;
  font-weight: 400;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 18px; /* Adjust font size for mobile */
  }
`;

const HeroButton = styled(motion.a)`
  display: inline-block;
  padding: 15px 30px;
  background-color: #002060;
  color: #ffffff;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  z-index: 2; /* Ensure the button appears above the overlay */

  &:hover {
    background-color: #003399;
  }
`;

function HeroSection() {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroTitle
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to CalC
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          We Provide Custom-Made Test Questions for US Markets
        </HeroSubtitle>
        <HeroButton
          href="#features"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </HeroButton>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
