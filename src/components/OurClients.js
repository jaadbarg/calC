import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ClientsContainer = styled.section`
  background-color: #ffffff;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ClientsTitle = styled.h3`
  text-align: center;
  font-size: 36px;
  color: #333333;
  margin-bottom: 40px;
  font-weight: 700;
`;

const BannerImage = styled(motion.img)`
  width: 80%;
  max-width: 1200px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

function OurClients() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: 'easeOut' },
      });
    }
  }, [controls, inView]);

  return (
    <ClientsContainer id="clients" ref={ref}>
      <ClientsTitle>Our Clients</ClientsTitle>
      <BannerImage
        src="/images/banner.png"
        alt="Our Clients Banner"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={controls}
      />
    </ClientsContainer>
  );
}

export default OurClients;
