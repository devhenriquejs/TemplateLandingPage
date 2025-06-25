// src/components/FormContact/index.tsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
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
  StyledSubmitButton,
  StyledMessageModalOverlay, // Novo componente de modal
  StyledMessageModalContent, // Novo componente de modal
  StyledMessageModalHeader, // Novo componente de modal
  StyledMessageModalText, // Novo componente de modal
  StyledMessageModalCloseButton // Novo componente de modal
} from './styles';

// 1. Definição do Schema de Validação com Zod
// Aqui você define as regras para cada campo do seu formulário.
const schema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('E-mail inválido').min(1, 'E-mail é obrigatório'),
  // Telefone é opcional, mas se preenchido, deve seguir o padrão de 10 ou 11 dígitos numéricos
  phone: z.string().optional().refine(val => {
    if (!val) return true; // Permite que seja vazio
    return /^\d{10,11}$/.test(val); // Valida formato numérico de 10 ou 11 dígitos
  }, {
    message: 'Telefone inválido (apenas números, 10 ou 11 dígitos)'
  }),
});

// Tipo dos dados do formulário inferido do schema Zod
type FormData = z.infer<typeof schema>;

// Componente de Mensagem Modal (substitui alert/confirm)
interface MessageModalProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const MessageModal: React.FC<MessageModalProps> = ({ message, type, onClose }) => {
  const headerColor = type === 'success' ? '#22C55E' : '#EF4444'; // Verde para sucesso, vermelho para erro

  return (
    <StyledMessageModalOverlay>
      <StyledMessageModalContent style={{ borderColor: headerColor }}>
        <StyledMessageModalHeader style={{ color: headerColor }}>
          {type === 'success' ? 'Sucesso!' : 'Erro!'}
        </StyledMessageModalHeader>
        <StyledMessageModalText>{message}</StyledMessageModalText>
        <StyledMessageModalCloseButton onClick={onClose}>
          Fechar
        </StyledMessageModalCloseButton>
      </StyledMessageModalContent>
    </StyledMessageModalOverlay>
  );
};

function FormContact() {
  // 2. Configuração do React Hook Form
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema), // Integra Zod para validação
  });

  // Estado para gerenciar o feedback da submissão (mensagem e tipo)
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState<string>('');

  // Função que será chamada ao submeter o formulário, se a validação passar
  const onSubmit = async (data: FormData) => {
    setSubmissionStatus('submitting');
    setResponseMessage('Enviando seus dados...');

    // 3. Simulação de Automação com Zapier (Webhook)
    // ATENÇÃO: Substitua 'SUA_URL_DO_WEBHOOK_ZAPIER_AQUI' pela URL real do seu Webhook do Zapier.
    // No Zapier, você criará um "Zap" com "Webhook Catch Hook" como gatilho (Trigger).
    // Ele te dará uma URL, cole ela aqui.
    const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/SEU_ID_ZAPIER/SUA_CHAVE_AQUI/'; // Exemplo: https://hooks.zapier.com/hooks/catch/1234567/abcdefg/

    try {
      const response = await fetch(ZAPIER_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setResponseMessage('Dados enviados com sucesso! Em breve entraremos em contato com você.');
        reset(); // Limpa o formulário após o sucesso
      } else {
        // Se o Zapier ou o servidor retornar um erro HTTP
        setSubmissionStatus('error');
        setResponseMessage(`Erro ao enviar os dados. Status: ${response.status}. Por favor, tente novamente.`);
        console.error('Erro na resposta do webhook:', await response.text());
      }
    } catch (error) {
      // Erro de rede ou outro erro inesperado
      setSubmissionStatus('error');
      setResponseMessage('Não foi possível conectar ao servidor. Verifique sua conexão ou tente mais tarde.');
      console.error('Erro na requisição fetch:', error);
    }
  };

  // Função para fechar a mensagem modal
  const closeMessageModal = () => {
    setSubmissionStatus('idle');
    setResponseMessage('');
  };

  return (
    <StyledFormContactSection>
      <StyledSectionTitle>Dê o Próximo Passo: Receba Nosso Guia Exclusivo!</StyledSectionTitle>
      <StyledFormCard>
        <StyledFormIntroText>
          Preencha o formulário abaixo e receba gratuitamente nosso 'Guia Essencial: Como sua Landing Page pode Lançar seu Próximo Programa de Coaching com Sucesso!'. É o pontapé inicial para a sua jornada de conversão.
        </StyledFormIntroText>
        {/* Formulário com handleSubmit do React Hook Form */}
        <StyledContactForm onSubmit={handleSubmit(onSubmit)}>
          <StyledFormGroup>
            <StyledLabel htmlFor="name">Nome Completo</StyledLabel>
            {/* Input com 'register' para React Hook Form */}
            <StyledInput
              type="text"
              id="name"
              {...register('name')} // Conecta este input ao campo 'name' do schema Zod
              placeholder="Seu nome"
              // Adiciona classe de erro se houver
              className={errors.name ? 'input-error' : ''}
            />
            {/* Exibição de erros de validação */}
            <StyledErrorMessage>{errors.name?.message}</StyledErrorMessage>
          </StyledFormGroup>

          <StyledFormGroup>
            <StyledLabel htmlFor="email">E-mail</StyledLabel>
            <StyledInput
              type="email"
              id="email"
              {...register('email')}
              placeholder="seu.email@exemplo.com"
              className={errors.email ? 'input-error' : ''}
            />
            <StyledErrorMessage>{errors.email?.message}</StyledErrorMessage>
          </StyledFormGroup>

          <StyledFormGroup>
            <StyledLabel htmlFor="phone">Telefone (Opcional)</StyledLabel>
            <StyledInput
              type="tel"
              id="phone"
              {...register('phone')}
              placeholder="(XX) XXXXX-XXXX"
              className={errors.phone ? 'input-error' : ''}
            />
            <StyledErrorMessage>{errors.phone?.message}</StyledErrorMessage>
          </StyledFormGroup>

          <StyledSubmitButton
            type="submit"
            disabled={submissionStatus === 'submitting'} // Desabilita o botão durante o envio
          >
            {submissionStatus === 'submitting' ? 'Enviando...' : 'Quero Receber o Guia Agora!'}
          </StyledSubmitButton>
        </StyledContactForm>

        {/* Exibe a mensagem modal quando o status não for 'idle' */}
        {submissionStatus !== 'idle' && responseMessage && (
          <MessageModal
            message={responseMessage}
            type={submissionStatus === 'success' ? 'success' : 'error'}
            onClose={closeMessageModal}
          />
        )}
      </StyledFormCard>
    </StyledFormContactSection>
  );
}

export default FormContact;