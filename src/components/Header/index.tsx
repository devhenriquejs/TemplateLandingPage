
import {
  StyledHeader,
  StyledHeaderContent,
  StyledCtaButton,
  StyledHeaderImagePlaceholder
} from './styles';


function Header() {
  return (
    <StyledHeader>
      <StyledHeaderImagePlaceholder>
      </StyledHeaderImagePlaceholder>
      <StyledHeaderContent>
        <h1>Conquiste Mais Clientes Qualificados para Sua Consultoria ou Coaching</h1>
        <p>Transforme Visitantes em Alunos e Clientes com Landing Pages Otimizadas para Alta Conversão. Chega de Perder Oportunidades!</p>
        <StyledCtaButton>Quero Minha Landing Page de Sucesso!</StyledCtaButton>
      </StyledHeaderContent>
    </StyledHeader>
  );
}

export default Header;