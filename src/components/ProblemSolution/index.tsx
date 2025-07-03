import React from 'react';
import {
  StyledSection,
  StyledTitle,
  StyledStepperGrid,
  StepCard,
  StepNumber,
  StepTitle,
  Connector,
  SolutionCard,
  SolutionTitle,
  SolutionButton
} from './styles';

const steps = [
  'Público errado alcançado',
  'Baixas inscrições em formulários',
  'Marca sem autoridade digital'
];

export default function ProblemSolution() {
  return (
    <StyledSection>
      <StyledTitle>Seus Desafios Digitais<span> &rarr; </span>Nossa Solução Estratégica</StyledTitle>
      <StyledStepperGrid>
        {steps.map((title, idx) => (
          <StepCard key={idx}>
            <StepNumber>{`0${idx + 1}`}</StepNumber>
            <StepTitle>{title}</StepTitle>
          </StepCard>
        ))}
        <Connector />
        <SolutionCard>
          <StepNumber isSolution>04</StepNumber>
          <SolutionTitle>Landing Pages que Convertem e Elevam Sua Autoridade</SolutionTitle>
          <SolutionButton>Vagas Limitadas! Quero Converter</SolutionButton>
        </SolutionCard>
      </StyledStepperGrid>
    </StyledSection>
);
}