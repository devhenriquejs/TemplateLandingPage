// src/components/FormContact/styles.ts
import styled from 'styled-components';

const palette = {
  darkBlue: '#004AAD',
  midBlue: '#0096C7',
  lightBlue: '#48CAE4',
  problemRed: '#FF6347' // Cor de erro
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

  /* Estilo para inputs com erro de validação */
  &.input-error {
    border-color: ${palette.problemRed};
    box-shadow: 0 0 0 3px rgba(255, 99, 71, 0.2);
  }
`;

export const StyledErrorMessage = styled.span`
  color: ${palette.problemRed}; /* Cor de erro */
  font-size: 0.8em;
  margin-top: 5px;
  display: block;
  min-height: 1em; /* Garante que o layout não "pule" quando o erro aparece */
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

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

// --- Estilos para o Modal de Mensagem (Novo) ---
export const StyledMessageModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* Garante que fique acima de todo o conteúdo */
  padding: 20px;
`;

export const StyledMessageModalContent = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
  text-align: center;
  border-top: 8px solid; /* A cor será definida via prop 'style' no TSX */
  position: relative;
`;

export const StyledMessageModalHeader = styled.h3`
  font-size: 1.8em;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const StyledMessageModalText = styled.p`
  font-size: 1.1em;
  color: #555;
  margin-bottom: 30px;
`;

export const StyledMessageModalCloseButton = styled.button`
  background-color: #e0e0e0;
  color: #333;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ccc;
  }
`;