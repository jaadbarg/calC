import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled Components
const PortfolioContainer = styled.section`
  background-color: #ffffff;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PortfolioTitle = styled.h3`
  text-align: center;
  font-size: 36px;
  color: #333333;
  margin-bottom: 60px;
  font-weight: 700;
`;

const ExamsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  max-width: 1200px;
  width: 100%;
`;

const ExamCard = styled(motion.div)`
  background-color: #f5f7fa;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

const ExamName = styled.h4`
  font-size: 20px;
  color: #333333;
  margin-bottom: 15px;
  font-weight: 600;
  
  /* Allow text to wrap and break words if necessary */
  word-break: break-word;
  white-space: normal;
  
  /* Optional: Limit the number of lines and add ellipsis if too long */
  /* 
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  */
`;

const ExamDescription = styled.p`
  color: #666666;
  font-size: 16px;
  line-height: 1.6;
  font-weight: 400;
`;

function ExamPortfolio() {
  const exams = [
    'SAT/ACT',
    'K-12 Foundation',
    'CAT/GMAT',
    'Banking Exams',
    'Teacher Eligibility Tests',
    'GRE/GMAT',
    'Job Placement Preparation',
    'UGC-NET',
    'Scholastic Assessments',
    'Undergraduate/Postgraduate Studies',
    'JEE/NEET (Engineering and Medical Entrance)',
    'Common University Entrance Test (CUET)',
    'National Defense Academy (NDA)',
    'Public Service Commission Exams',
    'Staff Selection Commission (SSC) Exams',
    'Civil Services (UPSC)',
    'Common Law Admission Test (CLAT)',
    'Combined Defense Services (CDS)',
  ];

  return (
    <PortfolioContainer id="examportfolio">
      <PortfolioTitle>Exam Portfolio</PortfolioTitle>
      <ExamsGrid>
        {exams.map((exam, index) => (
          <ExamCard
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
          >
            <ExamName>{exam}</ExamName>
          </ExamCard>
        ))}
      </ExamsGrid>
    </PortfolioContainer>
  );
}

export default ExamPortfolio;
