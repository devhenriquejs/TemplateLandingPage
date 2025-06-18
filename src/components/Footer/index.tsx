

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
          <p>contato@seuemail.com</p>
          <p>(XX) XXXXX-XXXX</p>
          <StyledSocialIcons>
            <a href="#instagram" className="social-icon">📸</a>
            <a href="#linkedin" className="social-icon">🔗</a>
          </StyledSocialIcons>
        </StyledFooterColumn>
        <StyledFooterCallToAction>
            <h3>Pronto para Alavancar seu Negócio?</h3>
            <p>Entre em contato e vamos conversar sobre seus objetivos!</p>
            <StyledCtaButtonFooter>Fale Conosco!</StyledCtaButtonFooter>
        </StyledFooterCallToAction>
      </StyledFooterContent>
      <StyledFooterBottom>
        <p>&copy; {new Date().getFullYear()} Seu Nome/Empresa. Todos os direitos reservados.</p>
      </StyledFooterBottom>
    </StyledFooterSection>
  );
}

export default Footer;