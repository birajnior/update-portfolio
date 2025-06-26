import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const Content = styled.div<{ type: 'success' | 'error' }>`
  background-color: ${({ type }) =>
    type === 'success' ? '#012641' : '#9e2a2f'};
  color: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
`;

export const CloseButton = styled.button`
  font-size: 1.5rem;
  background: transparent;
  color: white;
  border: none;
  cursor: pointer;
`;

export const Body = styled.div`
  margin-bottom: 1.5rem;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;