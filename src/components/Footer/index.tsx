

import {
  StyledFooterSection,
  StyledFooterContent,
  StyledFooterColumn,
  StyledSocialIcons,
  StyledFooterCallToAction,
  StyledCtaButtonFooter,
  StyledFooterBottom
} from './styles';

function Footer() {
  return (
    <StyledFooterSection>
      <StyledFooterContent>
        <StyledFooterColumn>
          <h3>Serviços</h3>
          <ul>
            <li><a href="#landing-pages">Landing Pages</a></li>
            <li><a href="#automacao">Automação</a></li>
            <li><a href="#design">Identidade Visual</a></li>
          </ul>
        </StyledFooterColumn>
        <StyledFooterColumn>
          <h3>Legal</h3>
          <ul>
            <li><a href="#privacidade">Política de Privacidade</a></li>
            <li><a href="#termos">Termos de Uso</a></li>
          </ul>
        </StyledFooterColumn>
        <StyledFooterColumn>
          <h3>Contato</h3>
          <p>lh5818181@gmail.com</p>
          <p>(81) 9 9942-9143</p>
          <StyledSocialIcons>
            <a href="#instagram" className="social-icon">📸</a>
            <a href="#linkedin" className="social-icon">🔗</a>
          </StyledSocialIcons>
        </StyledFooterColumn>
        <StyledFooterCallToAction>
            <h3>Pronto para Alavancar seu Negócio Digital?</h3>
            <p>Vamos transformar sua presença online em uma máquina de captação de clientes. Entre em contato hoje mesmo!</p>
            <StyledCtaButtonFooter>Fale Conosco e Comece!</StyledCtaButtonFooter>
        </StyledFooterCallToAction>
      </StyledFooterContent>
      <StyledFooterBottom>
        <p>&copy; {new Date().getFullYear()} Luís Henrique. Todos os direitos reservados.</p>
      </StyledFooterBottom>
    </StyledFooterSection>
  );
}

export default Footer;