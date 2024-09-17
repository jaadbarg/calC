import React from 'react';
import styled from 'styled-components';

// Styled Components
const AboutContainer = styled.section`
  background-color: #ffffff;
  padding: 80px 20px;
  text-align: center;
`;

const AboutTitle = styled.h3`
  font-size: 36px;
  color: #333333;
  margin-bottom: 40px;
  font-weight: 700;
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  color: #666666;
  font-size: 18px;
  line-height: 1.6;
  font-weight: 400;
`;

const SectionTitle = styled.h4`
  font-size: 24px;
  color: #333333;
  margin-top: 40px;
  margin-bottom: 20px;
  font-weight: 600;
`;

const CoreBeliefsList = styled.ul`
  list-style: disc;
  padding-left: 20px;
  text-align: left;
`;

const CoreBeliefItem = styled.li`
  margin-bottom: 10px;
`;

function AboutUs() {
  return (
    <AboutContainer id="about">
      <AboutTitle>About Us</AboutTitle>
      <AboutContent>
        <p>
          CalC USA bridges EdTech and academia, offering technology-driven educational strategies. Our team combines corporate experience and a passion for transforming learning.
        </p>
      </AboutContent>
    </AboutContainer>
  );
}

export default AboutUs;
