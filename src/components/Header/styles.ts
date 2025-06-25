// src/components/Header/styles.ts
import styled from 'styled-components';

// Definindo a paleta de cores para consistência
const palette = {
  darkBlue: '#004AAD',
  midBlue: '#0096C7',
  lightBlue: '#48CAE4',
  veryLightBlue: '#ADE8F4'
};

export const StyledHeader = styled.header`
  background-color: ${palette.darkBlue};
  color: #fff;
  padding: 80px 0;
  text-align: center;
  position: relative;
  overflow: hidden; /* Para garantir que o placeholder da imagem não vaze */

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const StyledHeaderContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    font-size: 3em;
    margin-bottom: 20px;
    line-height: 1.1;
  }

  p {
    font-size: 1.2em;
    margin-bottom: 30px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2em;
    }
    p {
      font-size: 1em;
    }
  }
`;

export const StyledCtaButton = styled.button`
  background-color: ${palette.midBlue};
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #007BA3;
  }
`;

export const StyledHeaderImagePlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "Especialista em Conversão Digital";
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: ${palette.veryLightBlue};
    color: #333;
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 0.9em;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    &::after {
      top: 10px;
      right: 10px;
      padding: 8px 12px;
    }
  }
`;