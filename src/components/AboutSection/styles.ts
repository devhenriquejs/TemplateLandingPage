// src/components/AboutSection/styles.ts
import styled from 'styled-components';

const palette = {
  darkBlue: '#004AAD',
  midBlue: '#0096C7',
  lightBlue: '#48CAE4',
  veryLightBlue: '#ADE8F4'
};

export const StyledAboutSection = styled.section`
  text-align: center;
  background-color: ${palette.veryLightBlue}; /* Cor de fundo suave */
  padding: 60px 20px;
`;

export const StyledSectionTitle = styled.h2`
  color: ${palette.darkBlue};
  font-size: 2.5em;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

export const StyledAboutContentWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Padrão mobile: empilhado */
  align-items: center;
  gap: 50px;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row; /* Layout em colunas para desktop */
    justify-content: center;
    align-items: flex-start;
  }
`;

export const StyledProfileDetails = styled.div`
  max-width: 500px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    margin-right: 50px;
  }
`;

export const StyledProfilePhotoPlaceholder = styled.div`
  width: 150px;
  height: 150px;
  background-color: #ccc;
  border-radius: 50%;
  margin: 0 auto 20px auto;
  border: 5px solid ${palette.midBlue};
  box-shadow: 0 0 0 8px rgba(0, 150, 199, 0.2); /* Anel externo sutil */

  @media (min-width: 768px) {
    margin: 0 0 20px 0; /* Alinha à esquerda no desktop */
  }
`;

export const StyledBioText = styled.p`
  font-size: 1.1em;
  line-height: 1.7;
  color: #555;
  margin-bottom: 30px;
`;

export const StyledMiniInfographic = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
`;

export const StyledInfoItem = styled.div`
  text-align: center;
`;

export const StyledInfoNumber = styled.span`
  font-size: 2.5em;
  font-weight: bold;
  color: ${palette.darkBlue};
  display: block;
`;

export const StyledMilestoneTimeline = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px; /* Largura máxima para a linha do tempo */
  padding: 20px 0;
`;

export const StyledTimelineLine = styled.div`
  position: absolute;
  width: 3px;
  background-color: ${palette.midBlue};
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2px;
`;

export const StyledMilestoneEntry = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  position: relative;

  &:nth-child(odd) { /* Itens ímpares à esquerda da linha (mobile) */
    flex-direction: row;
    justify-content: flex-start;
  }
  &:nth-child(even) { /* Itens pares à direita da linha (mobile) */
    flex-direction: row-reverse;
    justify-content: flex-start; /* Alinha à esquerda para mobile */
  }

  @media (min-width: 768px) {
    &:nth-child(odd) { /* Ímpares à esquerda da linha (desktop) */
      flex-direction: row;
      justify-content: flex-end; /* Empurra o card para a esquerda */
      padding-right: 40px; /* Espaço entre card e linha */
    }
    &:nth-child(even) { /* Pares à direita da linha (desktop) */
      flex-direction: row-reverse;
      justify-content: flex-start; /* Empurra o card para a direita */
      padding-left: 40px; /* Espaço entre card e linha */
    }
  }
`;

export const StyledMilestoneDot = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${palette.darkBlue};
  border-radius: 50%;
  border: 4px solid #fff;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`;

export const StyledMilestoneCard = styled.div`
  background-color: #fff;
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  max-width: calc(50% - 30px); /* Meia largura - espaço do ponto */
  text-align: left;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  /* Ajuste para mobile */
  ${StyledMilestoneEntry}:nth-child(odd) & {
    margin-right: auto; /* Empurra para a direita para alinhar à esquerda */
    left: 0;
    right: auto;
    border-left: 5px solid ${palette.lightBlue};
    margin-left: 20px; /* Espaço para o dot */
  }
  ${StyledMilestoneEntry}:nth-child(even) & {
    margin-left: auto; /* Empurra para a esquerda para alinhar à direita */
    right: 0;
    left: auto;
    border-right: 5px solid ${palette.lightBlue}; /* Borda à direita para par */
    border-left: none; /* Remove borda esquerda */
    margin-right: 20px; /* Espaço para o dot */
  }


  @media (min-width: 768px) {
    max-width: 250px; /* Largura para desktop */

    ${StyledMilestoneEntry}:nth-child(odd) & {
        border-right: 5px solid ${palette.lightBlue}; /* Borda direita para ímpar no desktop */
        border-left: none; /* Remove borda esquerda */
        margin-left: 0; /* Anula margem anterior */
        margin-right: 0; /* Anula margem anterior */
    }
    ${StyledMilestoneEntry}:nth-child(even) & {
        border-left: 5px solid ${palette.lightBlue}; /* Borda esquerda para par no desktop */
        border-right: none; /* Remove borda direita */
        margin-left: 0; /* Anula margem anterior */
        margin-right: 0; /* Anula margem anterior */
    }
  }

  h3 {
    font-size: 1.2em;
    color: ${palette.darkBlue};
    margin-bottom: 5px;
  }

  p {
    font-size: 0.9em;
    color: #555;
    margin: 0;
  }
`;