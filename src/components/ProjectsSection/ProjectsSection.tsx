import { useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi';
import {
  Section,
  Title,
  ProjectContainer,
  Info,
  ProjectTitle,
  Description,
  TechList,
  TechItem,
  ButtonsWrapper,
  StyledButton,
  ImageWrapper,
  ProjectImage,
  NavigationButtons,
} from './ProjectsSection.styles';
import { ProjectsData } from './ProjectsData';
import { AnimatePresence, motion } from 'framer-motion';

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = ProjectsData[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ProjectsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? ProjectsData.length - 1 : prev - 1));
  };

  return (
    <Section id="projetos" aria-label="Seção de projetos do portfólio">
      <Title>Projetos em Destaque</Title>
      <AnimatePresence mode="wait">
        <div style={{ minHeight: '500px' }}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <ProjectContainer>
              <Info>
                <ProjectTitle>{project.title}</ProjectTitle>
                <Description>{project.description}</Description>

                <TechList>
                  {project.techs.map((tech) => (
                    <TechItem key={tech}>{tech}</TechItem>
                  ))}
                </TechList>

                <ButtonsWrapper>
                  <StyledButton
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Repositório de ${project.title}`}
                  >
                    <FiGithub /> GitHub
                  </StyledButton>
                  <StyledButton
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visitar ${project.title}`}
                  >
                    <FiExternalLink /> Ver Site
                  </StyledButton>
                </ButtonsWrapper>
              </Info>

              <ImageWrapper>
                <ProjectImage
                  src={project.image}
                  alt={`Imagem ilustrativa do projeto ${project.title}`}
                  loading="lazy"
                />
                <NavigationButtons>
                  <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    aria-label="Projeto anterior"
                  >
                    <FiArrowLeft />
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={currentIndex === ProjectsData.length - 1}
                    aria-label="Próximo projeto"
                  >
                    <FiArrowRight />
                  </button>
                </NavigationButtons>
              </ImageWrapper>
            </ProjectContainer>
          </motion.div>
        </div>
      </AnimatePresence>
    </Section>
  );
};

export default ProjectsSection;
