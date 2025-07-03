import React from 'react';
import { User, FileText, Shield, Zap } from 'lucide-react';
import {
  StyledSection,
  StyledTitle,
  StyledStepperGrid,
  StepCard,
  StepNumber,
  StepIcon,
  StepTitle,
  StepDesc,
  Connector,
  SolutionCard,
  SolutionNumber,
  SolutionIcon,
  SolutionTitle,
  SolutionDesc,
  SolutionButton
} from './styles';

const steps = [
  {
    title: 'Audiência Qualificada',
    desc: 'Alcance quem realmente importa.',
    icon: <User size={32} />
  },
  {
    title: 'Geração de Leads',
    desc: 'Converta cliques em contatos.',
    icon: <FileText size={32} />
  },
  {
    title: 'Autoridade Digital',
    desc: 'Seja referência no seu nicho.',
    icon: <Shield size={32} />
  }
];

export default function ProblemSolution() {
  return (
    <StyledSection>
      <StyledTitle>
        Seus Desafios Digitais <span>→</span> Nossa Solução Estratégica
      </StyledTitle>
      <StyledStepperGrid>
        {steps.map((step, idx) => (
          <StepCard key={idx} accent={idx}>
            <StepNumber>{`0${idx + 1}`}</StepNumber>
            <StepIcon>{step.icon}</StepIcon>
            <StepTitle>{step.title}</StepTitle>
            <StepDesc>{step.desc}</StepDesc>
          </StepCard>
        ))}
        <Connector />
        <SolutionCard>
          <SolutionNumber>04</SolutionNumber>
          <SolutionIcon><Zap size={32} /></SolutionIcon>
          <SolutionTitle>Solução Premium</SolutionTitle>
          <SolutionDesc>Landing Pages que vendem sozinhas.</SolutionDesc>
          <SolutionButton>Vagas Limitadas! Quero Converter</SolutionButton>
        </SolutionCard>
      </StyledStepperGrid>
    </StyledSection>
  );
}
