// src/components/ProblemSolution/styles.ts
import styled from 'styled-components';

const palette = {
  darkBlue: '#004AAD',
  midBlue: '#0096C7',
  lightBlue: '#48CAE4',
  veryLightBlue: '#ADE8F4',
  problemRed: '#ff6347'
};

export const StyledProblemSolutionSection = styled.section`
  text-align: center;
  background-color: #fefefe;
  padding: 60px 20px;
`;

export const StyledSectionTitle = styled.h2`
  color: ${palette.darkBlue};
  font-size: 2.5em;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

export const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Padrão para mobile */
  align-items: center;
  gap: 30px;
  max-width: 1200px; /* Adiciona um max-width para o conteúdo */
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row; /* Colunas para desktop */
    justify-content: center;
    gap: 50px;
  }
`;

export const StyledProblemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 400px;
`;

export const StyledProblemItem = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-left: 5px solid ${palette.problemRed}; /* Cor para problemas */
  padding: 15px;
  border-radius: 8px;
  text-align: left;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }
`;

export const StyledProblemIcon = styled.span`
  font-size: 1.5em;
  line-height: 1;
  flex-shrink: 0;
`;

export const StyledTransitionArrow = styled.div`
  width: 3px;
  height: 60px; /* Altura da seta no mobile */
  background-color: ${palette.midBlue}; /* Cor da seta */
  position: relative;
  margin: 20px 0;
  border-radius: 2px;

  &::after {
    content: '';
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 15px solid ${palette.midBlue};
    bottom: -15px;
    left: -8.5px; /* Ajuste para centralizar a ponta da seta */
  }

  @media (min-width: 768px) {
    width: 60px; /* Largura da seta no desktop */
    height: 3px;
    margin: 0 20px;

    &::after {
      border-left: 15px solid ${palette.midBlue};
      border-right: 0;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      top: -8.5px;
      right: -15px;
      left: auto;
    }
  }
`;

export const StyledSolutionBlock = styled.div`
  background-color: ${palette.veryLightBlue}; /* Cor clara de solução */
  border: 1px solid #cceeff;
  border-left: 5px solid ${palette.midBlue}; /* Cor de solução */
  padding: 25px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: left;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 5px 15px rgba(0,0,0,0.15);
  }
`;

export const StyledSolutionIcon = styled.span`
  font-size: 1.8em;
  line-height: 1;
  color: ${palette.midBlue};
  flex-shrink: 0;
`;

export const StyledSolutionText = styled.p`
  font-size: 1.1em;
  font-weight: bold;
  color: ${palette.darkBlue};
  margin: 0; /* Remove margem padrão de parágrafo */
`;