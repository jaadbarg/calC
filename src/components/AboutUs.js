import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled Components
const AboutContainer = styled.section`
  background-color: #ffffff;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AboutTitle = styled.h3`
  text-align: center;
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
  text-align: center;
  font-weight: 400;
`;

const CoreBeliefsTitle = styled.h4`
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
  max-width: 800px;
  margin: 0 auto;
  color: #666666;
  font-size: 18px;
  line-height: 1.6;
  font-weight: 400;
`;

const CoreBeliefItem = styled.li`
  margin-bottom: 10px;
`;

const MissionTitle = styled.h4`
  font-size: 24px;
  color: #333333;
  margin-top: 40px;
  margin-bottom: 20px;
  font-weight: 600;
`;

const MissionContent = styled.p`
  max-width: 800px;
  margin: 0 auto;
  color: #666666;
  font-size: 18px;
  line-height: 1.6;
  text-align: center;
  font-weight: 400;
`;

function AboutUs() {
  return (
    <AboutContainer id="about">
      <AboutTitle>About Us</AboutTitle>
      <AboutContent>
        <p>
          CalC Consulting is a technology-driven educational strategy consulting firm that bridges the gap between the EdTech industry and Academia. Our leadership team combines extensive corporate experience, domain expertise, business acumen, and a passion for transforming education and learning.
        </p>
        
        <CoreBeliefsTitle>Our Core Beliefs:</CoreBeliefsTitle>
        <CoreBeliefsList>
          <CoreBeliefItem>Collaboration is the future of learning. We bring together students and industry experts from across the country.</CoreBeliefItem>
          <CoreBeliefItem>Technology can transcend traditional boundaries, enabling customized, self-paced learning.</CoreBeliefItem>
          <CoreBeliefItem>We strive for mutually beneficial, long-term partnerships with our clients.</CoreBeliefItem>
          <CoreBeliefItem>We continuously reinvent and improve our digital content solutions to meet evolving user needs.</CoreBeliefItem>
        </CoreBeliefsList>
        
        <MissionTitle>Our Mission:</MissionTitle>
        <MissionContent>
          To drive excellence in education through innovative technology solutions and strategic consulting.
        </MissionContent>
      </AboutContent>
    </AboutContainer>
  );
}

export default AboutUs;
