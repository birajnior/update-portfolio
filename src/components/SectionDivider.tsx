import styled from 'styled-components';

export const SectionDivider = styled.hr`
  margin: 0 auto;
  width: 85%;
  height: 8px;
  border: none;
  background: linear-gradient(
    to right,
    transparent,
    ${({ theme }) => theme.colors.emphasis},
    transparent
  );
  opacity: 0.4;
`;
