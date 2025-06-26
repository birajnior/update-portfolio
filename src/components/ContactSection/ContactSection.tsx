import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import {
  Section,
  Container,
  FormContainer,
  InfoContainer,
  Form,
  Input,
  TextArea,
  Select,
  SubmitButton,
  Socials,
  Title,
  TitleFom,
  Description,
  CallToWork,
  Email,
  ErrorMessage,
} from './ContactSection.style';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';

import SuccessModal from '../Modal/SuccessModal';
import ErrorModal from '../Modal/ErrorModal';

import {
  validarNome,
  validarEmail,
  validarTelefone,
  validarMensagem,
  validarSelect,
} from '../../utils/email/formValidation';
import { enviarFormulario } from '../../utils/email/sendEmail';
import PhoneInput from '../../utils/email/PhoneInput';

const ContactSection: React.FC = () => {
  // estados para os campos
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [select, setSelect] = useState('');

  // estados de erro
  const [errors, setErrors] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
    select: '',
  });

  const formRef = useRef<HTMLFormElement>(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);

  function validarCampos() {
    const eNome = validarNome(nome) ? '' : 'O nome precisa ter pelo menos 3 caracteres.';
    const eEmail = validarEmail(email) ? '' : 'Insira um email válido.';
    const eTelefone = validarTelefone(telefone)
      ? ''
      : 'Telefone deve ter entre 10 e 11 dígitos numéricos.';
    const eMensagem = validarMensagem(mensagem)
      ? ''
      : 'A mensagem precisa ter pelo menos 10 caracteres.';
    const eSelect = validarSelect(select) ? '' : 'Por favor, selecione uma preferência de contato.';

    setErrors({
      nome: eNome,
      email: eEmail,
      telefone: eTelefone,
      mensagem: eMensagem,
      select: eSelect,
    });

    return !eNome && !eEmail && !eTelefone && !eMensagem && !eSelect;
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validarCampos()) return;

    if (!formRef.current) return;

    await enviarFormulario(
      formRef.current,
      () => {
        formRef.current?.reset();
        setNome('');
        setEmail('');
        setTelefone('');
        setMensagem('');
        setSelect('');
        setIsSuccessModalOpen(true);
      },
      () => setIsErrorModalOpen(true),
      (loading) => setIsSending(loading)
    );
  };

  return (
    <Section id="contato" aria-label="Entre em contato">
      <Container>
        <FormContainer
          as={motion.div}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <TitleFom>Entre em contato!</TitleFom>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              type="text"
              name="user_name"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              $hasError={!!errors.nome}
              required
            />
            {errors.nome && <ErrorMessage>{errors.nome}</ErrorMessage>}

            <Input
              type="email"
              name="user_email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              $hasError={!!errors.email}
              required
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

            <PhoneInput value={telefone} onChange={setTelefone} error={errors.telefone} />

            <Select
              name="contact_preference"
              value={select}
              onChange={(e) => setSelect(e.target.value)}
              $hasError={!!errors.select}
              required
            >
              <option value="" disabled>
                Preferência de contato
              </option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Email">Email</option>
              <option value="Ligação">Ligação</option>
            </Select>
            {errors.select && <ErrorMessage>{errors.select}</ErrorMessage>}

            <TextArea
              name="project_description"
              placeholder="Descreva um pouco do seu projeto!"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              $hasError={!!errors.mensagem}
              required
            />
            {errors.mensagem && <ErrorMessage>{errors.mensagem}</ErrorMessage>}

            <SubmitButton type="submit" disabled={isSending}>
              {isSending ? 'Enviando...' : 'Enviar'}
            </SubmitButton>
          </Form>
        </FormContainer>

        <InfoContainer
          as={motion.div}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Title>Quer tirar suas ideias do papel?</Title>
          <Description>
            Eu ajudo você a criar soluções digitais que impulsionam resultados. Vamos conversar
            sobre como podemos desenvolver algo incrível para o seu negócio!
          </Description>
          <div>
            <CallToWork>Vamos trabalhar juntos!</CallToWork>
            <Email>Email: ubiratanbernardo@outlook.com</Email>
          </div>
          <Socials>
            <a href="https://github.com/birajnior" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ubiratanbernardo/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/jbdeveloper" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@birajnior" target="_blank" rel="noreferrer">
              <FaTiktok />
            </a>
            <a href="https://wa.me/55seunumero" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
          </Socials>
        </InfoContainer>
      </Container>

      {/* Modais de retorno */}
      <SuccessModal isOpen={isSuccessModalOpen} onClose={() => setIsSuccessModalOpen(false)} />
      <ErrorModal isOpen={isErrorModalOpen} onClose={() => setIsErrorModalOpen(false)} />
    </Section>
  );
};

export default ContactSection;
