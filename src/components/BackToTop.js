import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

const Button = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;
  background-color: #50e3c2;
  color: #ffffff;
  border: none;
  padding: 15px;
  border-radius: 50%;
  cursor: pointer;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  z-index: 1000;
  
  &:hover {
    background-color: #45d1af;
  }
`;

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) setIsVisible(true);
    else setIsVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Button onClick={scrollToTop} isVisible={isVisible}>
      <FaArrowUp />
    </Button>
  );
}

export default BackToTop;
