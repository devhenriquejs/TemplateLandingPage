
import {
  StyledBenefitsSection,
  StyledSectionTitle,
  StyledBenefitsGrid,
  StyledBenefitCard,
  StyledBenefitIcon
} from './styles';

function Benefits() {
  return (
    <StyledBenefitsSection>
      <StyledSectionTitle>Benefícios Incríveis para Você</StyledSectionTitle>
      <StyledBenefitsGrid>
        <StyledBenefitCard>
          <StyledBenefitIcon>💡</StyledBenefitIcon>
          <h3>Gere Mais Leads</h3>
          <p>Sua landing page será otimizada para capturar o máximo de contatos interessados.</p>
        </StyledBenefitCard>
        <StyledBenefitCard className="highlighted-card"> {/* Card destacado */}
          <StyledBenefitIcon>📈</StyledBenefitIcon>
          <h3>Aumente Suas Vendas</h3>
          <p>Design persuasivo e CTAs estratégicos para transformar leads em clientes.</p>
        </StyledBenefitCard>
        <StyledBenefitCard>
          <StyledBenefitIcon>✨</StyledBenefitIcon>
          <h3>Presença Profissional</h3>
          <p>Tenha um site com visual moderno e que transmite confiança e autoridade.</p>
        </StyledBenefitCard>
        <StyledBenefitCard>
          <StyledBenefitIcon>⏱️</StyledBenefitIcon>
          <h3>Economize Tempo</h3>
          <p>Com um template pronto, você foca no seu negócio, não no desenvolvimento.</p>
        </StyledBenefitCard>
      </StyledBenefitsGrid>
    </StyledBenefitsSection>
  );
}

export default Benefits;