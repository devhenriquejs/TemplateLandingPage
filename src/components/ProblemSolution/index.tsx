import { HiOutlineUser, HiOutlineDocumentText, HiOutlineShieldCheck, HiOutlineLightningBolt } from 'react-icons/hi';


import number1 from '../../assets/images/number1.png';
import number2 from '../../assets/images/number2.png';
import number3 from '../../assets/images/number3.png';
import number4 from '../../assets/images/number4.png';

import { Connector, SolutionButton, SolutionCard, SolutionDesc, SolutionIcon, SolutionNumber, SolutionTitle, StepCard, StepDesc, StepIcon, StepNumber, StepTitle, StyledSection, StyledStepperGrid, StyledTitle } from './styles';


// Array de imagens
const stepIcons = [number1, number2, number3];

const steps = [
  {
    title: 'Audiência Qualificada',
    desc: 'Alcance quem realmente importa.',
    icon: <HiOutlineUser size={32} />
  },
  {
    title: 'Geração de Leads',
    desc: 'Converta cliques em contatos.',
    icon: <HiOutlineDocumentText size={32} />
  },
  {
    title: 'Autoridade Digital',
    desc: 'Seja referência no seu nicho.',
    icon: <HiOutlineShieldCheck size={32} />
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
          <SolutionNumber src={number4}/>
          <SolutionIcon><HiOutlineLightningBolt size={32} /></SolutionIcon>
          <SolutionTitle>Solução Premium</SolutionTitle>
          <SolutionDesc>Landing Pages que vendem sozinhas.</SolutionDesc>
          <SolutionButton>Vagas Limitadas! Quero Converter</SolutionButton>
        </SolutionCard>
      </StyledStepperGrid>
    </StyledSection>
  );
}
