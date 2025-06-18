// src/components/Footer/styles.ts
import styled from 'styled-components';

const palette = {
  darkBlue: '#004AAD',
  midBlue: '#0096C7',
  lightBlue: '#48CAE4',
  veryLightBlue: '#ADE8F4'
};

export const StyledFooterSection = styled.footer`
  background-color: ${palette.darkBlue}; /* Dark Blue */
  color: white;
  padding-top: 50px;
  padding-bottom: 20px;
  font-size: 0.9em;
`;

export const StyledFooterContent = styled.div`
  display: flex;
  flex-direction: column; /* Empilhado no mobile */
  gap: 40px;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px; /* Adiciona padding lateral */

  @media (min-width: 768px) {
    flex-direction: row; /* Colunas no desktop */
    justify-content: space-around;
    text-align: left;
    flex-wrap: wrap; /* Permite que as colunas quebrem se a tela for pequena */
  }
`;

export const StyledFooterColumn = styled.div`
  h3 {
    font-size: 1.2em;
    margin-bottom: 15px;
    color: ${palette.veryLightBlue}; /* Very Light Blue */
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul li {
    margin-bottom: 10px;
  }

  ul li a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  ul li a:hover {
    color: #fff;
  }

  p {
    margin-bottom: 10px;
    color: rgba(255, 255, 255, 0.8);
  }

  @media (min-width: 768px) {
    flex: 1; /* Distribui o espaço igualmente */
    min-width: 150px; /* Largura mínima para cada coluna */
  }
`;

export const StyledSocialIcons = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center; /* Centraliza no mobile */
  gap: 20px;

  @media (min-width: 768px) {
    justify-content: flex-start; /* Alinha ícones à esquerda no desktop */
  }
`;

export const StyledSocialIcon = styled.a`
  font-size: 2em;
  color: white;
  text-decoration: none;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    color: ${palette.veryLightBlue}; /* Very Light Blue */
  }
`;

export const StyledFooterCallToAction = styled.div`
  background-color: ${palette.midBlue}; /* Mid Blue */
  padding: 30px;
  border-radius: 10px;
  margin-top: 30px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  text-align: center; /* Garante centralização */

  @media (min-width: 768px) {
    flex-basis: 100%; /* Ocupa a largura total abaixo das colunas */
    margin-top: 50px;
  }

  h3 {
    color: white;
    font-size: 1.5em;
    margin-bottom: 15px;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 20px;
  }
`;

export const StyledCtaButtonFooter = styled.button`
  background-color: ${palette.lightBlue}; /* Light Blue */
  color: ${palette.darkBlue};
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #7ED9F5;
    transform: scale(1.02);
  }
`;

export const StyledFooterBottom = styled.div`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
`;