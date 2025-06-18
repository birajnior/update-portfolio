import styled from 'styled-components';
import { media } from '../../styles/media';

export const Section = styled.section`
  padding: 4rem 2rem 8rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};

  @media ${media.mobile}, ${media.smallMobile} {
    font-size: 2.25rem;
    text-align: center;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.textLight};

  @media ${media.mobile}, ${media.smallMobile} {
    font-size: 1.125rem;
    text-align: center;
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  max-width: 85%;
  margin: 0 auto;

  @media ${media.notebook} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${media.tablet}, ${media.mobile}, ${media.smallMobile} {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.border};
  padding: 2rem;
  border-radius: 1.5rem;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  }

  h3 {
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    color: ${({ theme }) => theme.colors.textLight};
  }
`;
