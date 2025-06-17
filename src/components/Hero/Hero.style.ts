import styled from 'styled-components';

export const Section = styled.section`
  position: relative; /* Necessário para posicionar elementos absolutos dentro */
  overflow: hidden; /* Impede o estouro visual do background animado */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  padding: 4rem 2rem 0;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
`;

// Title = Título principal (h1)
export const Title = styled.h1`
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.fonts.heading};

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

// Subtitle = Subtítulo (h2 ou p)
export const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-top: 1rem;
  max-width: 720px;
  color: ${({ theme }) => theme.colors.textLight};
`;

// ButtonContainer = Agrupa os botões com espaço entre eles
export const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

// Botão genérico
export const Button = styled.a`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

// BackgroundAnimado = Elemento decorativo animado
type BackgroundAnimadoProps = {
  position?: 'top-left' | 'bottom-right';
};

export const BackgroundAnimado = styled.div<BackgroundAnimadoProps>`
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle at center, #b400ff, transparent 70%);
  filter: blur(120px);
  opacity: 0.5;
  z-index: 0;
  animation: flutuar 8s ease-in-out infinite alternate;
  pointer-events: none;

  ${({ position }) =>
    position === 'top-left' &&
    `
      top: -100px;
      left: -100px;
    `}

  ${({ position }) =>
    position === 'bottom-right' &&
    `
      bottom: -100px;
      right: -100px;
    `}

  @keyframes flutuar {
    0% {
      transform: translate(0, 0) scale(1);
    }
    100% {
      transform: translate(30px, 40px) scale(1.05);
    }
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;

    ${({ position }) =>
      position === 'top-left' &&
      `
        top: -50px;
        left: -50px;
      `}

    ${({ position }) =>
      position === 'bottom-right' &&
      `
        bottom: -50px;
        right: -50px;
      `}
  }
`;
