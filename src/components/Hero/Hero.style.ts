import styled from 'styled-components';
import { media } from '../../styles/media';

export const Section = styled.section`
  position: relative;
  overflow: hidden;

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

export const Title = styled.h1`
  font-size: 3.5rem;
  font-family: ${({ theme }) => theme.fonts.heading};

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media ${media.tablet} {
    font-size: 3rem;
  }

  @media ${media.notebook} {
    font-size: 3.5rem;
  }

  @media ${media.desktop} {
    font-size: 4rem;
  }
`;

export const Subtitle = styled.p`
font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.75rem;
  margin-top: 1rem;
  max-width: 720px;
  color: ${({ theme }) => theme.colors.textLight};

  @media ${media.mobile} {
    font-size: 1.125rem;
  }

  @media ${media.smallMobile} {
    font-size: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

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
    color: ${({ theme }) => theme.colors.background};
  }
`;

type BackgroundAnimadoProps = {
  $position?: 'top-left' | 'bottom-right';
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

  ${({ $position }) =>
    $position === 'top-left' &&
    `
      top: -100px;
      left: -100px;
    `}

  ${({ $position }) =>
    $position === 'bottom-right' &&
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

  @media ${media.tablet} {
    width: 300px;
    height: 300px;

    ${({ $position }) =>
      $position === 'top-left' &&
      `
        top: -50px;
        left: -50px;
      `}

    ${({ $position }) =>
      $position === 'bottom-right' &&
      `
        bottom: -50px;
        right: -50px;
      `}
  }
`;
