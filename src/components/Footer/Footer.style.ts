import styled from 'styled-components';
import { media } from '../../styles/media';

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textLight};
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.875rem;
  line-height: 1.5;

  @media ${media.mobile} {
    font-size: 1rem;
  }
`;

export const Copyright = styled.p`
  margin-top: ${({ theme }) => theme.spacing.sm};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.light};
`;
