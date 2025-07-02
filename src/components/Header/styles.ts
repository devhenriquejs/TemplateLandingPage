import styled from 'styled-components';
import notebook from '../../assets/images/notebook.jpg';

// Definindo a paleta de cores para consistência
const palette = {
  darkBlue: '#004AAD',
  midBlue: '#0096C7',
  lightBlue: '#48CAE4',
  veryLightBlue: '#ADE8F4'
};

// Header com background e overlay
export const StyledHeader = styled.header`
  position: relative;
  padding: 148px 0;
  color: #fff;
  text-align: left;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),
      url(${notebook}) center center/cover no-repeat;
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

// Badge de autoridade
export const StyledBadge = styled.span`
 position: absolute;
  top: 40px;
  left: 100px;
  background-color: ${palette.veryLightBlue};
  color: #333;
  padding: 8px 14px;
  border-radius: 4px;
  font-size: 0.9em;
  font-weight: 600;
  display: inline-block;
  z-index: 11;

  @media (max-width: 768px) {
    top: 20px;
    left: 20px;
  }
`;

// Conteúdo principal do header
export const StyledHeaderContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 760px;
  padding: 0 100px;

  h1 {
    font-size: 3em;
    margin-bottom: 20px;
    line-height: 1.1;
  }

  p {
    font-size: 1.2em;
    margin-bottom: 30px;
    max-width: 600px;
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

// Botão CTA com hover e animação
export const StyledCtaButton = styled.button`
  background-color: ${palette.midBlue};
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #007BA3;
    transform: scale(1.03);
    box-shadow: 0 0 10px rgba(0, 150, 199, 0.4);
  }
`;
