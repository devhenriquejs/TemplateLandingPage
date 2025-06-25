
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
      <StyledSectionTitle>Seus Desafios Digitais, Nossa Solução Estratégica</StyledSectionTitle>
      <StyledContentWrapper>
        <StyledProblemsList>
          <StyledProblemItem>
            <StyledProblemIcon>❌</StyledProblemIcon>
            <p>Dificuldade em atrair o público certo para seus programas e serviços?</p>
          </StyledProblemItem>
          <StyledProblemItem>
            <StyledProblemIcon>❌</StyledProblemIcon>
            <p>Baixa taxa de agendamentos ou preenchimento de formulários no seu site atual?</p>
          </StyledProblemItem>
          <StyledProblemItem>
            <StyledProblemIcon>❌</StyledProblemIcon>
            <p>Sua presença online não transmite o profissionalismo e autoridade que você realmente tem?</p>
          </StyledProblemItem>
        </StyledProblemsList>
        <StyledTransitionArrow /> {/* A seta/transição */}
        <StyledSolutionBlock>
          <StyledSolutionIcon>✅</StyledSolutionIcon>
          <StyledSolutionText>Crie uma Landing Page que Converte, Gera Leads e Eleva Sua Autoridade no Mercado de Coaching e Consultoria.</StyledSolutionText>
        </StyledSolutionBlock>
      </StyledContentWrapper>
    </StyledProblemSolutionSection>
  );
}

export default ProblemSolution;