
import {
  StyledAboutSection,
  StyledSectionTitle,
  StyledAboutContentWrapper,
  StyledProfileDetails,
  StyledProfilePhotoPlaceholder,
  StyledBioText,
  StyledMiniInfographic,
  StyledInfoItem,
  StyledInfoNumber,
  StyledMilestoneTimeline,
  StyledTimelineLine,
  StyledMilestoneEntry,
  StyledMilestoneDot,
  StyledMilestoneCard
} from './styles';

function AboutSection() {
  return (
    <StyledAboutSection>
      <StyledSectionTitle>Minha Trajetória: Criando Soluções Digitais para o Seu Sucesso</StyledSectionTitle>
      <StyledAboutContentWrapper>
        <StyledProfileDetails>
          <StyledProfilePhotoPlaceholder />
          <StyledBioText>
            Olá! Sou Luís Henrique, um desenvolvedor apaixonado por criar pontes entre ideias e resultados. Com minha expertise em React, TypeScript e um olhar apurado para UI/UX, construo Landing Pages que não apenas encantam, mas, acima de tudo, geram valor real para coaches e consultores como você. Meu objetivo é transformar a sua visão em uma ferramenta digital de alta performance.
          </StyledBioText>
          <StyledMiniInfographic>
            <StyledInfoItem>
              <StyledInfoNumber>5+</StyledInfoNumber>
              <p>Anos de Experiência</p>
            </StyledInfoItem>
            <StyledInfoItem>
              <StyledInfoNumber>20+</StyledInfoNumber>
              <p>Projetos de Sucesso</p>
            </StyledInfoItem>
          </StyledMiniInfographic>
        </StyledProfileDetails>
        <StyledMilestoneTimeline>
          <StyledTimelineLine />
          <StyledMilestoneEntry>
            <StyledMilestoneDot />
            <StyledMilestoneCard>
              <h3>2020</h3>
              <p>Início na jornada de desenvolvimento web, construindo as bases com HTML e CSS.</p>
            </StyledMilestoneCard>
          </StyledMilestoneEntry>
          <StyledMilestoneEntry>
            <StyledMilestoneDot />
            <StyledMilestoneCard>
              <h3>2023</h3>
              <p>Aprofundamento em Front-End, com foco intenso em React e TypeScript, criando interfaces dinâmicas.</p>
            </StyledMilestoneCard>
          </StyledMilestoneEntry>
          <StyledMilestoneEntry>
            <StyledMilestoneDot />
            <StyledMilestoneCard>
              <h3>2024</h3>
              <p>Aprofundamento em UI/UX Design, utilizando Figma e Canva para prototipagem e criação de identidades visuais impactantes.</p>
            </StyledMilestoneCard>
          </StyledMilestoneEntry>
          <StyledMilestoneEntry>
            <StyledMilestoneDot />
            <StyledMilestoneCard>
              <h3>2025</h3>
              <p>Lançamento dos serviços especializados em Landing Pages de Alta Conversão e automação para profissionais como coaches e consultores.</p>
            </StyledMilestoneCard>
          </StyledMilestoneEntry>
        </StyledMilestoneTimeline>
      </StyledAboutContentWrapper>
    </StyledAboutSection>
  );
}

export default AboutSection;