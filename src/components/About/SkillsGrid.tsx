// src/components/About/SkillsGrid.tsx

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiVuedotjs,
  SiBootstrap,
  SiTailwindcss,
  SiStyledcomponents,
  SiTypescript,
  SiGithub,
  SiFigma,
  SiVite,
} from 'react-icons/si';

import styled from 'styled-components';
import { media } from '../../styles/media';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 2rem;

  @media ${media.smallMobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
    color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    width: 40px;
    height: 40px;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

export const SkillsGrid = () => {
  return (
    <Grid aria-label="Tecnologias dominadas">
      <SkillItem>
        <SiHtml5 title="HTML5" aria-label="HTML5" />
        <span>HTML5</span>
      </SkillItem>
      <SkillItem>
        <SiCss3 title="CSS3" aria-label="CSS3" />
        <span>CSS3</span>
      </SkillItem>
      <SkillItem>
        <SiJavascript title="JavaScript" aria-label="JavaScript" />
        <span>JavaScript</span>
      </SkillItem>
      <SkillItem>
        <SiReact title="React" aria-label="React.js" />
        <span>React.js</span>
      </SkillItem>
      <SkillItem>
        <SiVuedotjs title="Vue.js" aria-label="Vue.js" />
        <span>Vue.js</span>
      </SkillItem>
      <SkillItem>
        <SiBootstrap title="Bootstrap" aria-label="Bootstrap" />
        <span>Bootstrap</span>
      </SkillItem>
      <SkillItem>
        <SiTailwindcss title="Tailwind CSS" aria-label="Tailwind CSS" />
        <span>Tailwind CSS</span>
      </SkillItem>
      <SkillItem>
        <SiStyledcomponents title="Styled-components" aria-label="Styled-components" />
        <span>Styled Components</span>
      </SkillItem>
      <SkillItem>
        <SiTypescript title="TypeScript" aria-label="TypeScript" />
        <span>TypeScript</span>
      </SkillItem>
      <SkillItem>
        <SiGithub title="GitHub" aria-label="GitHub" />
        <span>Git / GitHub</span>
      </SkillItem>
      <SkillItem>
        <SiFigma title="Figma" aria-label="Figma" />
        <span>Figma</span>
      </SkillItem>
      <SkillItem>
        <SiVite title="Vite" aria-label="Vite" />
        <span>Vite</span>
      </SkillItem>
    </Grid>
  );
};
