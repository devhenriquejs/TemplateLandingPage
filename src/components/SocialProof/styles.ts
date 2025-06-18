// src/components/SocialProof/styles.ts
import styled from 'styled-components';

const palette = {
  darkBlue: '#004AAD',
  midBlue: '#0096C7',
  lightBlue: '#48CAE4',
  veryLightBlue: '#ADE8F4'
};

export const StyledSocialProofSection = styled.section`
  text-align: center;
  background-color: #F8F8F8;
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

export const StyledTestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* Uma coluna para mobile */
  gap: 25px;
  justify-items: center;
  max-width: 1200px; /* Adiciona um max-width para o conteúdo */
  margin: 0 auto;

  @media (min-width: 768px) {
    /* Layout com um depoimento maior e dois menores em colunas */
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
        "main sub1"
        "main sub2";
    align-items: start; /* Alinha o conteúdo ao topo das áreas */
  }

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr 1fr; /* Layout com um depoimento maior e dois menores */
    grid-template-areas: "main main sub1" "main main sub2";
  }
`;

export const StyledTestimonialHighlight = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.15);
  text-align: left;
  position: relative;
  max-width: 600px; /* Largura máxima para o depoimento principal em layouts mais simples */
  border-left: 8px solid ${palette.midBlue}; /* Borda de destaque */

  @media (min-width: 768px) {
    grid-area: main; /* Ocupa a área principal definida na grid */
    max-width: none; /* Remove max-width para preencher a área da grid */
  }
`;

export const StyledQuoteText = styled.p`
  font-size: 1.3em;
  font-style: italic;
  color: #444;
  margin-bottom: 25px;
  line-height: 1.5;
`;

export const StyledAuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const StyledAuthorPhotoPlaceholder = styled.div`
  width: 70px;
  height: 70px;
  background-color: #ccc;
  border-radius: 50%;
  border: 3px solid ${palette.midBlue};
  flex-shrink: 0;
`;

export const StyledAuthorName = styled.span`
  font-weight: bold;
  color: ${palette.darkBlue};
  display: block;
  font-size: 1.1em;
`;

export const StyledAuthorTitle = styled.span`
  color: #777;
  font-size: 0.9em;
`;

export const StyledSmallTestimonial = styled.div`
  background-color: ${palette.veryLightBlue}; /* Cor de fundo mais suave */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: left;
  max-width: 300px; /* Largura máxima para depoimentos menores */
  border-left: 4px solid ${palette.lightBlue};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  p {
    font-size: 0.95em;
    font-style: italic;
    color: #555;
    margin-bottom: 10px;
  }

  /* Para posicionamento na grid */
  &:nth-child(2) {
    @media (min-width: 768px) {
        grid-area: sub1;
    }
  }
  &:nth-child(3) {
    @media (min-width: 768px) {
        grid-area: sub2;
    }
  }
`;

export const StyledAuthorNameSmall = styled.span`
  font-weight: bold;
  color: ${palette.darkBlue};
  font-size: 0.9em;
`;

export const StyledTrustSeal = styled.div`
  background-color: ${palette.darkBlue};
  color: white;
  padding: 20px 30px;
  border-radius: 10px;
  margin-top: 50px;
  display: inline-flex;
  align-items: center;
  gap: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);

  @media (max-width: 768px) {
    flex-direction: column; /* Empilha ícone e texto no mobile */
    text-align: center;
  }
`;

export const StyledSealIcon = styled.span`
  font-size: 2.5em;
  line-height: 1;
`;