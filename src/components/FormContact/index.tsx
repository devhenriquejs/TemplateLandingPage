
import {
  StyledFormContactSection,
  StyledSectionTitle,
  StyledFormCard,
  StyledFormIntroText,
  StyledContactForm,
  StyledFormGroup,
  StyledInput,
  StyledLabel,
  StyledErrorMessage,
  StyledSubmitButton
} from './styles';

function FormContact() {
  return (
    <StyledFormContactSection>
      <StyledSectionTitle>Receba Material Exclusivo</StyledSectionTitle>
      <StyledFormCard> {/* Cartão flutuante */}
        <StyledFormIntroText>
          Preencha o formulário e daremos o próximo passo para impulsionar seu negócio!
        </StyledFormIntroText>
        <StyledContactForm>
          <StyledFormGroup>
            <StyledLabel htmlFor="name">Nome Completo</StyledLabel>
            <StyledInput type="text" id="name" placeholder="Seu nome" />
            {/* Placeholder para mensagem de erro */}
            <StyledErrorMessage className="error-placeholder"></StyledErrorMessage>
          </StyledFormGroup>

          <StyledFormGroup>
            <StyledLabel htmlFor="email">E-mail</StyledLabel>
            <StyledInput type="email" id="email" placeholder="seu.email@exemplo.com" />
            {/* Placeholder para mensagem de erro */}
            <StyledErrorMessage className="error-placeholder"></StyledErrorMessage>
          </StyledFormGroup>

          <StyledFormGroup>
            <StyledLabel htmlFor="phone">Telefone (Opcional)</StyledLabel>
            <StyledInput type="tel" id="phone" placeholder="(XX) XXXXX-XXXX" />
            {/* Placeholder para mensagem de erro */}
            <StyledErrorMessage className="error-placeholder"></StyledErrorMessage>
          </StyledFormGroup>

          <StyledSubmitButton type="submit">Receber Material Exclusivo</StyledSubmitButton>
        </StyledContactForm>
      </StyledFormCard>
    </StyledFormContactSection>
  );
}

export default FormContact;