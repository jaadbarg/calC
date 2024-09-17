import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333333;
  padding: 20px;
  text-align: center;
`;

const FooterText = styled.p`
  color: #ffffff;
  margin: 0;
`;

function Footer() {
  return (
    <FooterContainer id="contact">
      <FooterText>&copy; {new Date().getFullYear()} CalC USA. All rights reserved.</FooterText>
    </FooterContainer>
  );
}

export default Footer;
