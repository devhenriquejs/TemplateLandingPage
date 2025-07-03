import styled from 'styled-components';
import notebook from '../../assets/images/notebook.jpg';

// Definindo a paleta de cores para consistência
const palette = {
  darkBlue: '#004AAD',
  midBlue: '#0096C7',
  lightBlue: '#48CAE4',
  lightGray: 'F0F4F8',
  veryLightBlue: '#ADE8F4',
  moreVeryLightBlue: '#9EDCF9',
  brightBlue: '#00A8E8',
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
      linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),
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
  left: 70px;
  background-color: ${palette.moreVeryLightBlue}; 
  border: 1px solid rgba(0, 0, 0, 0.1);
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
    padding: 0 70px;
    display: flex;
    flex-direction: column;
    gap: 28px;
    align-items: flex-start;

  h1 {
    font-size: 2.7em;
    margin-bottom: 0;
    line-height: 1.08;
    font-weight: 800;
    letter-spacing: -1px;
    text-shadow: 0 2px 16px rgba(0,0,0,0.18);
  }

  p {
    font-size: 1.25em;
    margin-bottom: 0;
    max-width: 600px;
    color: ${palette.lightGray};
    line-height: 1.6;
    font-weight: 400;
    text-shadow: 0 1px 8px rgba(0,0,0,0.10);
  }

  @media (max-width: 1024px) {
    padding: 0 40px;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
    h1 {
      font-size: 2em;
      letter-spacing: -0.5px;
    }
    p {
      font-size: 1em;
      max-width: 100%;
    }
  }
`;

// Botão CTA com hover e animação
export const StyledCtaButton = styled.button`
  background-color: ${palette.brightBlue};
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
    background-color: ${palette.brightBlue};
    transform: scale(1.03);
    box-shadow: 0 0 15px rgba(0, 168, 232, 0.6);
  }
`;
