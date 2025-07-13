import styled from 'styled-components';
import fundoProblems from '../../assets/images/FUNDO - ProblemSolution - 2.png';

const palette = {
  gunmetal: '#1F2A36',          // fundo escuro neutro
  midnightBlue: '#0A2540',      // fundo profundo
  saffron: '#FFD700',            // dourado para números e títulos
  skyBlue: '#00CFFF',            // destaque de solução
  lightGray: '#F0F8F8'           // texto secundário claro
};

export const StyledSection = styled.section`
  position: relative;
  padding: 80px 20px;
  background: url(${fundoProblems}) center/cover no-repeat;
  text-align: center;
  color: #fff;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 0;
  }
`;

export const StyledTitle = styled.h2`
  position: relative;
  z-index: 1;
  font-size: 2.2em;
  margin-bottom: 40px;
  text-shadow: 0 4px 16px rgba(0,0,0,0.6);

  span {
    color: ${palette.saffron};
    font-weight: bold;
  }
`;

export const StyledStepperGrid = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  gap: 40px;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }
`;

export const StepCard = styled.div<{ accent: number }>`
  background: ${({ accent }) =>
    accent === 0
      ? `linear-gradient(135deg, ${palette.skyBlue}, ${palette.midnightBlue})`
      : accent === 1
      ? `linear-gradient(135deg, ${palette.midnightBlue}, ${palette.skyBlue})`
      : `linear-gradient(135deg, ${palette.skyBlue}, ${palette.midnightBlue})`
  };
  border-radius: 12px;
  padding: 40px 24px;
  min-height: 320px;
  width: 260px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  color: #fff;
  backdrop-filter: blur(6px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.7);
  }
`;


export const StepNumber = styled.img`
  width: 40px;
  height: 40px;
  display: block;
`;

export const StepIcon = styled.div`
  svg {
    color: ${palette.lightGray};
    filter: drop-shadow(0 2px 2px rgba(0,0,0,0.5));
  }
`;

export const StepTitle = styled.h3`
  font-size: 1.25em;
  font-weight: 700;
  margin: 0;
  text-align: center;
  color: ${palette.saffron};
`;

export const StepDesc = styled.p`
  font-size: 0.9em;
  text-align: center;
  line-height: 1.5;
  color: ${palette.lightGray};
`;

export const Connector = styled.div`
  width: 60px;
  height: 2px;
  border-top: 2px dashed rgba(255,255,255,0.5);
  align-self: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SolutionCard = styled.div`
  background: linear-gradient(135deg, ${palette.saffron} 0%, ${palette.skyBlue} 100%);
  border-radius: 12px;
  padding: 40px 24px;
  min-height: 360px;
  width: 280px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  color: #fff;
  backdrop-filter: blur(6px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.7);
  }
`;

export const SolutionNumber = styled.img`
  width: 48px;
  height: 48px;
  display: block;
`;

export const SolutionIcon = styled.div`
  svg {
    color: ${palette.lightGray};
    filter: drop-shadow(0 2px 2px rgba(0,0,0,0.5));
  }
`;

export const SolutionTitle = styled.h3`
  font-size: 1.2em;
  font-weight: 700;
  margin: 0;
  text-align: center;
  color: ${palette.saffron};
`;

export const SolutionDesc = styled.p`
  font-size: 0.9em;
  text-align: center;
  line-height: 1.5;
  color: ${palette.lightGray};
`;

export const SolutionButton = styled.button`
  background-color: ${palette.midnightBlue};
  color: #fff;
  padding: 14px 32px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  animation: pulse 3s infinite;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 12px rgba(255,215,0,0.6);
    animation: none;
  }

  @keyframes pulse {
    0%,100% { transform: scale(1); }
    50% { transform: scale(1.02); }
  }
`;
