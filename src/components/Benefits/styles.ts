// src/components/Benefits/styles.ts
import styled from 'styled-components';

const palette = {
  darkBlue: '#004AAD',
  midBlue: '#0096C7',
  lightBlue: '#48CAE4',
  veryLightBlue: '#ADE8F4'
};

export const StyledBenefitsSection = styled.section`
  text-align: center;
  background-color: ${palette.veryLightBlue}; /* Cor mais clara */
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

export const StyledBenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* 1 coluna no mobile */
  gap: 25px;
  justify-items: center;
  max-width: 1200px; /* Adiciona um max-width para o conteúdo */
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 colunas em telas médias */
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr); /* 4 colunas em telas maiores */
  }
`;

export const StyledBenefitCard = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  text-align: center;
  max-width: 320px; /* Largura máxima para os cards no mobile */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-top: 5px solid transparent; /* Para borda animada */
  position: relative;
  z-index: 1; /* Para hover shadow */

  &:hover {
    transform: translateY(-8px); /* Efeito de "levantar" */
    box-shadow: 0 8px 20px rgba(0,0,0,0.2); /* Sombra mais forte no hover */
  }

  /* Destaque para o card central (ou um que você queira chamar atenção) */
  &.highlighted-card {
    border-top-color: ${palette.midBlue}; /* Cor de destaque */
  }
  &.highlighted-card:hover {
    border-top-color: ${palette.darkBlue};
  }

  h3 {
    font-size: 1.5em;
    color: ${palette.darkBlue};
    margin-bottom: 10px;
  }

  p {
    font-size: 0.95em;
    color: #555;
  }

  @media (min-width: 1024px) {
    max-width: none; /* Remove a largura máxima para se adaptar à grade */
  }
`;

export const StyledBenefitIcon = styled.span`
  font-size: 3em;
  margin-bottom: 15px;
  display: block;
`;


