import { FileText, Shield, User, Zap } from 'lucide-react';
import icon1 from '../../assets/images/Icon1 (1).png';

import { Connector, SolutionButton, SolutionCard, SolutionDesc, SolutionIcon, SolutionNumber, SolutionTitle, StepCard, StepDesc, StepIcon, StepNumber, StepTitle, StyledSection, StyledStepperGrid, StyledTitle } from './styles';

// Array de imagens
const stepIcons = [icon1];

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
            <StepNumber src={stepIcons[idx]} />
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
