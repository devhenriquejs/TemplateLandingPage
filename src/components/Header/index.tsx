
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
        {/* Placeholder para imagem ou vídeo de fundo */}
      </StyledHeaderImagePlaceholder>
      <StyledHeaderContent>
        <h1>Título Impactante da Hero Section</h1>
        <p>Subtítulo ou Proposta de Valor Convincente que atraia seu público-alvo.</p>
        <StyledCtaButton>Chamada para Ação Principal</StyledCtaButton>
      </StyledHeaderContent>
    </StyledHeader>
  );
}

export default Header;