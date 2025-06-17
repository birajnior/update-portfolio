import {
  Title,
  Paragraph,
  SubsectionTitle,
  ContentWrapper,
  Photo,
  TextWrapper,
  SectionMotion,
} from './About.styles';
import minhaFoto from '../../assets/bira-jr.webp';
import { SkillsGrid } from './SkillsGrid';

export const About = () => {
  return (
    <SectionMotion
      id="sobre"
      aria-label="Seção Sobre Mim"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Title>Sobre Mim</Title>

      <ContentWrapper>
        <Photo src={minhaFoto} alt="Foto de perfil de Bira Jr, desenvolvedor front-end" />

        <TextWrapper>
          <Paragraph>
            Sou desenvolvedor front-end apaixonado por transformar ideias em sites rápidos, bonitos
            e funcionais. Com base em São Paulo e raízes no Nordeste (PE), venho de uma trajetória
            de muita dedicação — de quem arregaça as mangas pra construir um futuro com propósito e
            criatividade.
          </Paragraph>

          <Paragraph>
            Minha jornada começou longe da tecnologia — trabalhei como porteiro por anos, mas sempre
            carreguei comigo a vontade de aprender e evoluir. Hoje aplico meus conhecimentos para
            construir interfaces modernas e funcionais, sempre com foco em usabilidade,
            acessibilidade e conversão.
          </Paragraph>

          <Paragraph>
            Atendo pequenas e médias empresas que desejam fortalecer sua presença online com
            soluções sob medida que entregam valor real.
          </Paragraph>

          <SubsectionTitle>🧠 Competências Técnicas</SubsectionTitle>
          <SkillsGrid />

          <SubsectionTitle>🎯 Meu Foco</SubsectionTitle>
          <Paragraph>
            Criar soluções digitais que unem <strong>estética</strong>, <strong>velocidade</strong>{' '}
            e <strong>funcionalidade</strong>, com o objetivo de gerar{' '}
            <strong>valor real para o negócio do cliente</strong>.
          </Paragraph>

          <SubsectionTitle>🗣️ Além do código...</SubsectionTitle>
          <Paragraph>
            Sou movido por desafios, boas conversas, <strong>música</strong>,{' '}
            <strong>café forte</strong>, <strong>energético gelado</strong> e um{' '}
            <strong>churrasco de fim de semana</strong> 🍖☕⚡
          </Paragraph>
        </TextWrapper>
      </ContentWrapper>
    </SectionMotion>
  );
};
