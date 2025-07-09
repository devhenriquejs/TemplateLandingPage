// src/components/SocialProof/index.tsx
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
        {/* Depoimento principal ajustado */}
        <StyledTestimonialHighlight>
          <StyledQuoteText>"As Landing Pages que desenvolvemos ajudaram diversos profissionais a aumentar drasticamente suas taxas de conversão, transformando a captação de clientes em um processo eficiente e escalável."</StyledQuoteText>
          <StyledAuthorInfo>
            <StyledAuthorPhotoPlaceholder />
            <div>
              {/* Remover nome e cargo fictícios, usar declarações genéricas */}
              <StyledAuthorName>Experiência Validada no Mercado</StyledAuthorName>
              <StyledAuthorTitle>Profissionais e Empresas Parceiras</StyledAuthorTitle>
            </div>
          </StyledAuthorInfo>
        </StyledTestimonialHighlight>

        {/* Outros depoimentos menores ajustados */}
        <StyledSmallTestimonial>
          <p>"Nossos clientes relatam mais agendamentos e um público mais engajado após a implementação das soluções."</p>
          <StyledAuthorNameSmall>Feedback Positivo Contínuo</StyledAuthorNameSmall>
        </StyledSmallTestimonial>
        <StyledSmallTestimonial>
          <p>"A clareza e o profissionalismo das páginas criadas geram confiança instantânea nos visitantes, levando a mais interações."</p>
          <StyledAuthorNameSmall>Melhora na Percepção de Marca</StyledAuthorNameSmall>
        </StyledSmallTestimonial>
      </StyledTestimonialGrid>
      <StyledTrustSeal>
        <StyledSealIcon>🌟</StyledSealIcon>
        <p>Metodologia Comprovada para Transformar Sua Presença Online!</p>
      </StyledTrustSeal>
    </StyledSocialProofSection>
  );
}

export default SocialProof;