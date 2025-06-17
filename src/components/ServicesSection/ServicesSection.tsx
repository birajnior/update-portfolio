import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaRocket } from 'react-icons/fa';
import { Section, Title, Subtitle, CardsGrid, Card } from './ServicesSection.style';
// import { BackgroundAnimado } from '../Hero/Hero.style';

const services = [
  {
    icon: <FaCode size={36} />,
    title: 'Sites Responsivos',
    description: 'Criação de sites modernos, rápidos e adaptáveis a qualquer dispositivo.',
  },
  {
    icon: <FaMobileAlt size={36} />,
    title: 'Web Apps',
    description: 'Aplicações interativas com foco em performance e experiência do usuário.',
  },
  {
    icon: <FaRocket size={36} />,
    title: 'Lançamento de Projetos',
    description: 'Do protótipo ao ar: te ajudo a colocar seu projeto no ar com eficiência.',
  },
];

export const ServicesSection = () => {
  return (
    <Section
      id="servicos"
      className="relative py-32 px-4 md:px-12 mb-24 overflow-hidden"
      aria-label="Seção de serviços oferecidos"
    >
      <div className="text-center mb-12 relative z-10">
        <Title>Serviços</Title>
        <Subtitle>O que posso fazer por você</Subtitle>
      </div>

      <CardsGrid>
        {services.map((service, index) => (
          <Card
            key={index}
            as={motion.div}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
            role="article"
            aria-label={service.title}
            className="hover:scale-105 transition-transform duration-300"
          >
            <div className="text-primary mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-base text-secondary">{service.description}</p>
          </Card>
        ))}
      </CardsGrid>
    </Section>
  );
};
