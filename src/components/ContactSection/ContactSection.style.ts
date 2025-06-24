// ContactSection.style.ts
import styled from 'styled-components';
import { media } from '../../styles/media';
export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.lg};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media ${media.notebook} {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.xxxl};
  }

  @media ${media.desktop} {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.xxxl};
  }

  @media ${media.largeDesktop} {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.xxxl};
  }
`;

export const FormContainer = styled.div`
  flex: 1;
  max-width: 600px;
  width: 100%;
`;

export const InfoContainer = styled.div`
  flex: 1;
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.border};
  border: 1px solid ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.body};
`;

export const TextArea = styled.textarea`
  background-color: ${({ theme }) => theme.colors.border};
  border: 1px solid ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.body};
  resize: none;
  min-height: 150px;
`;

export const Select = styled.select`
  background-color: ${({ theme }) => theme.colors.border};
  border: 1px solid ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.body};
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  transition:
    background 0.3s ease,
    transform 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
    transform: scale(1.05);
  }

  @media ${media.smallMobile}, ${media.mobile}, ${media.tablet} {
    margin-bottom: 1.75rem;
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;

  svg {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.primary};
    transition:
      color 0.3s ease,
      transform 0.2s;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.primaryHover};
      transform: scale(1.1);
    }

    @media ${media.smallMobile}, ${media.mobile}, ${media.tablet} {
      font-size: 1.5rem;
    }
  }
`;

export const TitleFom = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primaryHover};

  @media ${media.smallMobile}, ${media.mobile}, ${media.tablet} {
    font-size: 1.5rem;
  }
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryHover};

  @media ${media.smallMobile}, ${media.mobile}, ${media.tablet} {
    font-size: 1.4rem;
  }
`;

export const Description = styled.p`
  font-size: 1.3rem;

  @media ${media.smallMobile}, ${media.mobile}, ${media.tablet} {
    font-size: 1rem;
  }
`;

export const CallToWork = styled.h4`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.primaryHover};

  @media ${media.smallMobile}, ${media.mobile}, ${media.tablet} {
    font-size: 1rem;
  }
`;

export const Email = styled.p`
  font-size: 1.1rem;
  margin-top: 8px;

  @media ${media.smallMobile}, ${media.mobile}, ${media.tablet} {
    font-size: 1rem;
  }
`;
