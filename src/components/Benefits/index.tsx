
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
      <StyledSectionTitle>Benefícios Incríveis que Sua Landing Page Trará para Seu Negócio</StyledSectionTitle>
      <StyledBenefitsGrid>
        <StyledBenefitCard>
          <StyledBenefitIcon>💡</StyledBenefitIcon>
          <h3>Gere Mais Leads Qualificados</h3>
          <p>Sua landing page será construída para atrair e capturar leads que realmente se encaixam no perfil do seu cliente ideal.</p>
        </StyledBenefitCard>
        <StyledBenefitCard className="highlighted-card"> {/* Card destacado */}
          <StyledBenefitIcon>📈</StyledBenefitIcon>
          <h3>Acelere Suas Vendas e Inscrições</h3>
          <p>Com um design persuasivo e chamadas para ação estratégicas, converta mais visitantes em alunos, mentorados ou clientes de consultoria.</p>
        </StyledBenefitCard>
        <StyledBenefitCard>
          <StyledBenefitIcon>✨</StyledBenefitIcon>
          <h3>Construa Autoridade e Profissionalismo</h3>
          <p>Apresente seus serviços de forma elegante e eficaz, transmitindo confiança e credibilidade instantânea aos seus futuros clientes.</p>
        </StyledBenefitCard>
        <StyledBenefitCard>
          <StyledBenefitIcon>⏱️</StyledBenefitIcon>
          <h3>Otimize Seu Tempo e Recursos</h3>
          <p>Pare de perder tempo com plataformas complexas. Tenha uma solução que funciona, permitindo que você foque no que faz de melhor: transformar vidas.</p>
        </StyledBenefitCard>
      </StyledBenefitsGrid>
    </StyledBenefitsSection>
  );
}

export default Benefits;