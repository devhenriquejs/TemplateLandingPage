// src/components/FormContact/styles.ts
import styled from 'styled-components';

const palette = {
  darkBlue: '#004AAD',
  midBlue: '#0096C7',
  lightBlue: '#48CAE4',
  problemRed: '#FF6347' // Usando a cor de erro de antes
};

export const StyledFormContactSection = styled.section`
  text-align: center;
  background-color: #f8f8f8;
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

export const StyledFormCard = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15); /* Sombra mais acentuada para "flutuar" */
  max-width: 500px;
  margin: 0 auto;
  border-top: 8px solid ${palette.darkBlue}; /* Borda superior colorida */
`;

export const StyledFormIntroText = styled.p`
  font-size: 1.1em;
  color: #555;
  margin-bottom: 30px;
  line-height: 1.6;
`;

export const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledFormGroup = styled.div`
  text-align: left;
  position: relative;
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: 0.9em;
  color: #333;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1em;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${palette.midBlue};
    box-shadow: 0 0 0 3px rgba(0, 150, 199, 0.2);
  }
`;

export const StyledErrorMessage = styled.span`
  color: ${palette.problemRed}; /* Cor de erro */
  font-size: 0.8em;
  margin-top: 5px;
  display: block;
  min-height: 1em; /* Garante que o layout não "pule" quando o erro aparece */
  /* No futuro, este estilo pode ser condicional para aparecer/desaparecer */
`;

export const StyledSubmitButton = styled.button`
  background-color: ${palette.darkBlue}; /* Cor primária */
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  font-size: 1.1em;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 10px;

  &:hover {
    background-color: #002A80;
    transform: translateY(-2px);
  }
`;