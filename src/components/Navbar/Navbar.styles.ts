import { motion } from 'framer-motion';
import styled from 'styled-components';
import { media } from '../../styles/media';

export const Container = styled.div`
  margin: 0 auto;
  padding: 1rem 2rem;

  @media ${media.tablet}, ${media.mobile}, ${media.smallMobile} {
    padding: 1rem;
  }
`;

// Menu padrão (visível em notebooks e desktops)
export const Menu = styled.ul`
  display: flex;
  align-items: center;

  li {
    list-style: none;
  }

  a {
    padding: 1.25rem;
    color: white;
    border-radius: 0.375rem;
    transition: background-color 0.25s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryHover};
      color: ${({ theme }) => theme.colors.border};
    }
  }

  @media ${media.notebook} {
    a {
      padding: 1rem;
      font-size: 0.95rem;
    }
  }

  @media ${media.tablet}, ${media.mobile}, ${media.smallMobile} {
    display: none;
  }
`;

// Botão hamburger (visível apenas no mobile/tablet)
export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 60;

  @media ${media.tablet}, ${media.mobile}, ${media.smallMobile} {
    display: block;
  }

  svg {
    width: 28px;
    height: 28px;
    color: white;
  }
`;

// Menu Mobile (desliza de cima)
export const MobileMenu = styled(motion.ul)`
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  background-color: rgba(18, 0, 18, 0.95);
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 40;

  li {
    list-style: none;
  }

  a {
    color: white;
    padding: 0.5rem;
    border-radius: 0.375rem;
    transition: background-color 0.25s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryHover};
      color: ${({ theme }) => theme.colors.border};
    }
  }
`;

export const Header = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  background-color: rgba(18, 0, 18, 0.95);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
`;

// Área invisível no topo para hover (mostrar navbar ao subir)
export const HoverZone = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 24px;
  width: 100%;
  z-index: 60;
`;

// Estilização do título JBDEVELOPER
export const Brand = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  white-space: nowrap;

  @media ${media.notebook} {
    font-size: 1.2rem;
  }

  @media ${media.mobile}, ${media.smallMobile} {
    font-size: 1rem;
  }
`;
