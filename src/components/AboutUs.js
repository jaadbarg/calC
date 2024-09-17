import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  background-color: #ffffff;
  padding: 80px 20px;
`;

const AboutTitle = styled.h3`
  text-align: center;
  font-size: 36px;
  color: #333333;
  margin-bottom: 40px;
`;

const AboutContent = styled.p`
  max-width: 800px;
  margin: 0 auto;
  color: #666666;
  font-size: 18px;
  line-height: 1.6;
  text-align: center;
`;

function AboutUs() {
  return (
    <AboutContainer id="about">
      <AboutTitle>About CalC</AboutTitle>
      <AboutContent>
        At CalC, we are dedicated to providing high-quality, custom-made test questions for a variety of popular US tests. Our expert team in India crafts these questions from scratch, ensuring they meet the highest standards. By bringing content creation directly to the US market, we offer superior pricing without compromising on quality.
      </AboutContent>
    </AboutContainer>
  );
}

export default AboutUs;
