import React from 'react';
import styled from 'styled-components';

const PricingContainer = styled.section`
  background-color: #ffffff;
  padding: 80px 20px;
`;

const PricingTitle = styled.h3`
  text-align: center;
  font-size: 36px;
  color: #333333;
  margin-bottom: 60px;
`;

const PricingGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const PricingCard = styled.div`
  flex: 1;
  max-width: 300px;
  margin: 20px;
  background-color: #f5f7fa;
  padding: 30px;
  border-radius: 5px;
  text-align: center;
`;

const PlanName = styled.h4`
  font-size: 24px;
  color: #333333;
  margin-bottom: 20px;
`;

const Price = styled.p`
  font-size: 32px;
  color: #4a90e2;
  margin-bottom: 20px;
`;

const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  color: #666666;
  font-size: 16px;
  margin-bottom: 20px;
`;

const PlanFeature = styled.li`
  margin: 10px 0;
`;

const SignUpButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #50e3c2;
  color: #ffffff;
  text-decoration: none;
  border-radius: 5px;
`;

function Pricing() {
  return (
    <PricingContainer id="pricing">
      <PricingTitle>Our Pricing Plans</PricingTitle>
      <PricingGrid>
        <PricingCard>
          <PlanName>Basic</PlanName>
          <Price>$199/month</Price>
          <PlanFeatures>
            <PlanFeature>500 Custom Questions</PlanFeature>
            <PlanFeature>Email Support</PlanFeature>
            <PlanFeature>Monthly Updates</PlanFeature>
          </PlanFeatures>
          <SignUpButton href="#contact">Get Started</SignUpButton>
        </PricingCard>
        <PricingCard>
          <PlanName>Standard</PlanName>
          <Price>$399/month</Price>
          <PlanFeatures>
            <PlanFeature>1000 Custom Questions</PlanFeature>
            <PlanFeature>Priority Email Support</PlanFeature>
            <PlanFeature>Bi-Weekly Updates</PlanFeature>
          </PlanFeatures>
          <SignUpButton href="#contact">Get Started</SignUpButton>
        </PricingCard>
        <PricingCard>
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
