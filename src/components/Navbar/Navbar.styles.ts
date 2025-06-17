import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Menu = styled.ul`
  display: flex;
  gap: 1rem; /* Espaço entre os itens */
  align-items: center;

  li {
    list-style: none;
  }

  a {
    padding: 0.5rem 1rem;
    color: white;
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

// Área invisível no topo para hover
export const HoverZone = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 24px;
  width: 100%;
  z-index: 60;
`;
