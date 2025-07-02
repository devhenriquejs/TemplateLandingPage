
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
          Conquiste Mais Clientes Qualificados<br/>
          para Sua Consultoria ou Coaching
        </h1>
        <p>
          Transforme Visitantes em Alunos e Clientes com Landing Pages Otimizadas para Alta Conversão.<br/>
          Chega de Perder Oportunidades!
        </p>
        <StyledCtaButton aria-label="Quero Minha Landing Page de Sucesso!">
          Quero Minha Landing Page de Sucesso! 🚀
        </StyledCtaButton>
      </StyledHeaderContent>
    </StyledHeader>
  );
}

export default Header;
