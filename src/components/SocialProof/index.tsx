
import {
  StyledSocialProofSection,
  StyledSectionTitle,
  StyledTestimonialGrid,
  StyledTestimonialHighlight,
  StyledQuoteText,
  StyledAuthorInfo,
  StyledAuthorPhotoPlaceholder,
  StyledAuthorName,
  StyledAuthorTitle,
  StyledSmallTestimonial,
  StyledAuthorNameSmall,
  StyledTrustSeal,
  StyledSealIcon
} from './styles';

function SocialProof() {
  return (
    <StyledSocialProofSection>
      <StyledSectionTitle>O Que Nossos Clientes Dizem</StyledSectionTitle>
      <StyledTestimonialGrid>
        {/* Depoimento principal */}
        <StyledTestimonialHighlight>
          <StyledQuoteText>"Desde que implementamos a landing page, nossa taxa de conversão aumentou em 40%! Trabalho incrível e super profissional. Recomendo de olhos fechados!"</StyledQuoteText>
          <StyledAuthorInfo>
            <StyledAuthorPhotoPlaceholder />
            <div>
              <StyledAuthorName>Maria Silva</StyledAuthorName>
              <StyledAuthorTitle>CEO, Startup X</StyledAuthorTitle>
            </div>
          </StyledAuthorInfo>
        </StyledTestimonialHighlight>

        {/* Outros depoimentos menores */}
        <StyledSmallTestimonial>
          <p>"Agilidade e qualidade! A LP ficou perfeita para o lançamento do meu curso."</p>
          <StyledAuthorNameSmall>João Almeida</StyledAuthorNameSmall>
        </StyledSmallTestimonial>
        <StyledSmallTestimonial>
          <p>"Excelente suporte e resultados visíveis. Minha lista de e-mails cresceu muito!"</p>
          <StyledAuthorNameSmall>Ana Costa</StyledAuthorNameSmall>
        </StyledSmallTestimonial>
      </StyledTestimonialGrid>
      <StyledTrustSeal>
        <StyledSealIcon>🌟</StyledSealIcon>
        <p>Mais de 100 clientes satisfeitos e crescendo!</p>
      </StyledTrustSeal>
    </StyledSocialProofSection>
  );
}

export default SocialProof;