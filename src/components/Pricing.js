import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PricingContainer = styled.section`
  background-color: #ffffff;
  padding: 80px 20px;
`;

const PricingTitle = styled.h3`
  text-align: center;
  font-size: 36px;
  color: #333333;
  margin-bottom: 60px;
  font-weight: 700;
`;

const PricingGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PricingCard = styled(motion.div)`
  flex: 1;
  max-width: 300px;
  margin: 20px;
  background-color: #f5f7fa;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const PlanName = styled.h4`
  font-size: 24px;
  color: #333333;
  margin-bottom: 20px;
  font-weight: 600;
`;

const Price = styled.p`
  font-size: 32px;
  color: #002060;
  margin-bottom: 20px;
  font-weight: 700;
`;

const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  color: #666666;
  font-size: 16px;
  margin-bottom: 20px;
  text-align: left;
`;

const PlanFeature = styled.li`
  margin: 10px 0;
  position: relative;
  padding-left: 20px;

  &:before {
    content: '✔️';
    position: absolute;
    left: 0;
    color: #002060;
  }
`;

const SignUpButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #002060;
  color: #ffffff;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #003399;
  }
`;

function Pricing() {
  return (
    <PricingContainer id="pricing">
      <PricingTitle>Our Pricing Plans</PricingTitle>
      <PricingGrid>
        <PricingCard
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <PlanName>Basic</PlanName>
          <Price>$199/month</Price>
          <PlanFeatures>
            <PlanFeature>500 Custom Questions</PlanFeature>
            <PlanFeature>Email Support</PlanFeature>
            <PlanFeature>Monthly Updates</PlanFeature>
          </PlanFeatures>
          <SignUpButton href="#contact">Get Started</SignUpButton>
        </PricingCard>
        <PricingCard
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <PlanName>Standard</PlanName>
          <Price>$399/month</Price>
          <PlanFeatures>
            <PlanFeature>1000 Custom Questions</PlanFeature>
            <PlanFeature>Priority Email Support</PlanFeature>
            <PlanFeature>Bi-Weekly Updates</PlanFeature>
          </PlanFeatures>
          <SignUpButton href="#contact">Get Started</SignUpButton>
        </PricingCard>
        <PricingCard
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <PlanName>Premium</PlanName>
          <Price>$599/month</Price>
          <PlanFeatures>
            <PlanFeature>Unlimited Questions</PlanFeature>
            <PlanFeature>24/7 Support</PlanFeature>
            <PlanFeature>Weekly Updates</PlanFeature>
          </PlanFeatures>
          <SignUpButton href="#contact">Get Started</SignUpButton>
        </PricingCard>
      </PricingGrid>
    </PricingContainer>
  );
}

export default Pricing;
