import {
  StyledHeader,
  StyledHeaderContent,
  StyledBadge,
  StyledCtaButton
} from './styles';

function Header() {
  return (
    <StyledHeader role="banner">
      <StyledBadge>Especialista em Conversão Digital</StyledBadge>
      <StyledHeaderContent>
        <h1>
          Atraia Mais Clientes Qualificados<br />
          para Sua Consultoria ou Coaching
        </h1>
        <p>
          Converta visitantes em alunos e clientes com Landing Pages otimizadas para alta conversão.<br />
          Pare de perder oportunidades e destaque-se no digital!
        </p>
        <StyledCtaButton aria-label="Quero Minha Landing Page de Sucesso!">
          Quero Minha Landing Page de Sucesso! 🚀
        </StyledCtaButton>
      </StyledHeaderContent>
    </StyledHeader>
  );
}

export default Header;
