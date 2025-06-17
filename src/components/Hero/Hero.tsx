import { BackgroundAnimado, Button, ButtonContainer, Section, Subtitle, Title } from './Hero.style';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <Section id="inicio" aria-label="Seção de destaque principal do site">
      <BackgroundAnimado position="top-left" />
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title>
          Transformo <span>ideias</span> em soluções digitais eficientes.
        </Title>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <Subtitle>
          Desenvolvimento web moderno e acessível para pequenas empresas, profissionais autônomos e
          agências.
        </Subtitle>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <ButtonContainer>
          <Button href="#projetos">Ver Projetos</Button>
          <Button href="#contato" aria-label="Fale comigo via WhatsApp">
            Fale Comigo
          </Button>
        </ButtonContainer>
      </motion.div>
    </Section>
  );
};
