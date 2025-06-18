
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
      <StyledSectionTitle>Sobre Mim / Nossa Empresa</StyledSectionTitle>
      <StyledAboutContentWrapper>
        <StyledProfileDetails>
          <StyledProfilePhotoPlaceholder />
          <StyledBioText>
            Olá! Sou Luís Henrique, um desenvolvedor full-stack em formação com paixão por criar experiências digitais dinâmicas e eficientes. Minhas habilidades em React, TypeScript, Figma e Canva me permitem construir soluções visuais e funcionais. Meu foco é ajudar negócios a prosperar online.
          </StyledBioText>
          <StyledMiniInfographic>
            <StyledInfoItem>
              <StyledInfoNumber>5+</StyledInfoNumber>
              <p>Anos de Experiência</p>
            </StyledInfoItem>
            <StyledInfoItem>
              <StyledInfoNumber>20+</StyledInfoNumber>
              <p>Projetos Entregues</p>
            </StyledInfoItem>
          </StyledMiniInfographic>
        </StyledProfileDetails>
        <StyledMilestoneTimeline>
          <StyledTimelineLine />
          <StyledMilestoneEntry>
            <StyledMilestoneDot />
            <StyledMilestoneCard>
              <h3>2018</h3>
              <p>Início na jornada de desenvolvimento web, explorando HTML e CSS.</p>
            </StyledMilestoneCard>
          </StyledMilestoneEntry>
          <StyledMilestoneEntry>
            <StyledMilestoneDot />
            <StyledMilestoneCard>
              <h3>2020</h3>
              <p>Aprofundamento em Front-End, com foco em React e TypeScript.</p>
            </StyledMilestoneCard>
          </StyledMilestoneEntry>
          <StyledMilestoneEntry>
            <StyledMilestoneDot />
            <StyledMilestoneCard>
              <h3>2023</h3>
              <p>Especialização em UI/UX Design, dominando Figma e Canva para prototipagem e identidade visual.</p>
            </StyledMilestoneCard>
          </StyledMilestoneEntry>
          <StyledMilestoneEntry>
            <StyledMilestoneDot />
            <StyledMilestoneCard>
              <h3>2025</h3>
              <p>Lançamento dos serviços de Landing Pages e soluções de automação personalizadas.</p>
            </StyledMilestoneCard>
          </StyledMilestoneEntry>
        </StyledMilestoneTimeline>
      </StyledAboutContentWrapper>
    </StyledAboutSection>
  );
}

export default AboutSection;