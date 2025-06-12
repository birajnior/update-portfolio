import styled from "styled-components";

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
      color: ${({ theme }) => theme.colors.light}
    }
  }
`;