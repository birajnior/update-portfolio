import styled from 'styled-components';
import { media } from '../../styles/media';

export const Section = styled.section`
  padding: 6rem 2rem 8rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  overflow: hidden;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 4rem;

  @media ${media.tablet} {
    font-size: 2rem;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  max-width: 1300px;
  margin: 0 auto;

  @media ${media.notebook} {
    flex-direction: column;
    text-align: center;
  }
`;

export const Info = styled.div`
  flex: 1;
`;

export const ProjectTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.emphasis};

  @media ${media.tablet} {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const TechItem = styled.li`
  background-color: ${({ theme }) => theme.colors.primaryHover};
  color: ${({ theme }) => theme.colors.border};
  padding: 0.4rem 0.75rem;
  border-radius: 8px;
  font-size: 0.875rem;
  list-style: none;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media ${media.notebook} {
    justify-content: center;
  }
`;

export const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.25s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectImage = styled.img`
  width: 100%;
  max-width: 540px;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  margin-bottom: 1.5rem;
  object-fit: cover;
`;

export const NavigationButtons = styled.div`
  display: flex;
  gap: 1rem;

  button {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    padding: 0.6rem 1.2rem;
    border: none;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.25s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryHover};
    }
  }
`;
