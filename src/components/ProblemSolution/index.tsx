// src/components/ProblemSolution/index.tsx
import React from 'react';
import {
  StyledProblemSolutionSection,
  StyledSectionTitle,
  StyledContentWrapper,
  StyledProblemsList,
  StyledProblemItem,
  StyledProblemIcon,
  StyledTransitionArrow,
  StyledSolutionBlock,
  StyledSolutionIcon,
  StyledSolutionText
} from './styles';

function ProblemSolution() {
  return (
    <StyledProblemSolutionSection>
      <StyledSectionTitle>Seus Desafios, Nossa Solução</StyledSectionTitle>
      <StyledContentWrapper>
        <StyledProblemsList>
          <StyledProblemItem>
            <StyledProblemIcon>❌</StyledProblemIcon>
            <p>Problema 1: Dificuldade em capturar leads qualificados.</p>
          </StyledProblemItem>
          <StyledProblemItem>
            <StyledProblemIcon>❌</StyledProblemIcon>
            <p>Problema 2: Baixa taxa de conversão no site atual.</p>
          </StyledProblemItem>
          <StyledProblemItem>
            <StyledProblemIcon>❌</StyledProblemIcon>
            <p>Problema 3: Falta de profissionalismo na presença online.</p>
          </StyledProblemItem>
        </StyledProblemsList>
        <StyledTransitionArrow /> {/* A seta/transição */}
        <StyledSolutionBlock>
          <StyledSolutionIcon>✅</StyledSolutionIcon>
          <StyledSolutionText>A Landing Page Otimizada que transforma visitantes em clientes.</StyledSolutionText>
        </StyledSolutionBlock>
      </StyledContentWrapper>
    </StyledProblemSolutionSection>
  );
}

export default ProblemSolution;