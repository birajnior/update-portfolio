import styled from "styled-components";
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  padding: 4rem 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
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
