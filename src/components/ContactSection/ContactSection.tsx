// ContactSection.tsx
import React from 'react';
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
} from './ContactSection.style';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';

export const ContactSection: React.FC = () => {
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
          <Form onSubmit={(e) => e.preventDefault()}>
            <Input type="text" name="name" placeholder="Nome" required />
            <Input type="email" name="email" placeholder="E-mail" required />
            <Input type="tel" name="phone" placeholder="Telefone" required />
            <Select name="contact_preference" defaultValue="" required>
              <option value="" disabled>
                Preferência de contato
              </option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Email">Email</option>
              <option value="Ligação">Ligação</option>
            </Select>
            <TextArea name="project" placeholder="Descreva um pouco do seu projeto!" required />
            <SubmitButton type="submit">Enviar</SubmitButton>
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
          <p>
            Eu ajudo você a criar soluções digitais que impulsionam resultados. Vamos conversar
            sobre como podemos desenvolver algo incrível para o seu negócio!
          </p>
          <div>
            <h4>Vamos trabalhar juntos!</h4>
            <p>Email: ubiratanbernardo@outlook.com</p>
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
    </Section>
  );
};

export default ContactSection;
