import styled, { css } from 'styled-components';

const palette = {
  darkBlue: '#004AAD',
  midBlue: '#0096C7',
  lightBlue: '#48CAE4',
  veryLightBlue: '#ADE8F4',
  problemRed: '#E63946'
};

export const StyledSection = styled.section`
  background: #fefefe;
  padding: 80px 20px;
  text-align: center;
`;

export const StyledTitle = styled.h2`
  color: ${palette.darkBlue};
  font-size: 2em;
  margin-bottom: 40px;
  span { color: ${palette.midBlue}; font-weight: bold; }
`;

export const StyledStepperGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  gap: 20px;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const StepCard = styled.div`
  background: ${palette.darkBlue};
  border-radius: 12px;
  padding: 32px 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const StepNumber = styled.div<{ isSolution?: boolean }>`
  background-color: ${({ isSolution }) => (isSolution ? palette.lightBlue : palette.problemRed)};
  color: #fff;
  font-weight: bold;
  width: ${({ isSolution }) => (isSolution ? '48px' : '36px')};
  height: ${({ isSolution }) => (isSolution ? '48px' : '36px')};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;
`;

export const StepTitle = styled.p`
  color: #333;
  font-size: 1em;
  font-weight: 500;
  margin: 0;
`;

export const Connector = styled.div`
  grid-column: span 4;
  height: 2px;
  background: linear-gradient(to right, ${palette.problemRed}, ${palette.midBlue});
  margin: 0 40px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SolutionCard = styled.div`
  background: linear-gradient(135deg, ${palette.veryLightBlue} 0%, ${palette.lightBlue} 100%);
  border-radius: 12px;
  padding: 32px 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const SolutionTitle = styled.h3`
  color: ${palette.darkBlue};
  font-size: 1.1em;
  font-weight: bold;
  margin: 0;
  line-height: 1.4;
`;

export const SolutionButton = styled.button`
  background-color: ${palette.midBlue};
  color: #fff;
  padding: 12px 28px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 12px rgba(0, 150, 199, 0.4);
  }
`;
