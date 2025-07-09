// src/components/Benefits/styles.ts
import styled from 'styled-components';

const palette = {
  midnightBlue: '#0A2540',    // cor de fundo escuro
  blueRibbon: '#0057FF',       // cor destaque
  skyBlue: '#00CFFF',          // cor clara suave
  veryLightBlue: '#ADE8F4',    // tom de fundo da seção
  saffron: '#FFD700',          // cor de atenção
  lightGray: '#F0F8F8'         // texto secundário
};

export const StyledBenefitsSection = styled.section`
  text-align: center;
  background: linear-gradient(180deg, ${palette.veryLightBlue} 0%, ${palette.skyBlue} 100%);
  padding: 80px 20px;
  position: relative;
`;

export const StyledSectionTitle = styled.h2`
  color: ${palette.midnightBlue};
  font-size: 2.5em;
  margin-bottom: 60px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    font-size: 2em;
    margin-bottom: 40px;
  }
`;

export const StyledBenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  justify-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;
  }
`;

export const StyledBenefitCard = styled.div`
  background: #fff;
  padding: 40px 20px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-top-color 0.3s ease;
  border-top: 5px solid transparent;
  position: relative;
  z-index: 1;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 24px rgba(0,0,0,0.2);
    border-top-color: ${palette.blueRibbon};
  }

  &.highlighted-card {
    border-top-color: ${palette.blueRibbon};
  }

  h3 {
    font-size: 1.5em;
    color: ${palette.midnightBlue};
    margin-bottom: 15px;
    position: relative;
    &:after {
      content: '';
      width: 50px;
      height: 4px;
      background: ${palette.saffron};
      position: absolute;
      bottom: -10px;
      left: calc(50% - 25px);
      border-radius: 2px;
    }
  }

  p {
    font-size: 1em;
    color: ${palette.midnightBlue};
    margin-top: 20px;
    line-height: 1.6;
  }

  @media (min-width: 1024px) {
    padding: 50px 30px;
  }
`;

export const StyledBenefitIcon = styled.span`
  font-size: 3.5em;
  margin-bottom: 20px;
  display: block;
  color: ${palette.blueRibbon};
  filter: drop-shadow(0 2px 2px rgba(0,0,0,0.2));
`;
