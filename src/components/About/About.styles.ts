import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.border}; /* usa border: "#120012" */
  color: ${({ theme }) => theme.colors.text};
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  margin-left: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 12rem;
  align-items: flex-start;
  justify-content: center;
  max-width: 1680px;
  margin: 0 auto;
  padding-inline: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 6rem; // 👈 se quiser suavizar antes de virar coluna
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.notebook}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-inline: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    padding-inline: ${({ theme }) => theme.spacing.md};
  }
`;


export const Photo = styled.img`
  width: 600px;
  height: 700px;
  max-width: 100%;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.notebook}) {
    width: 420px;
    height: 500px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 300px;
    height: 380px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    width: 220px;
    height: 280px;
    margin: 0 auto;
  }
`;

export const TextWrapper = styled.div`
  flex: 1;
  max-width: 700px;
  font-size: 1rem;
  line-height: 1.8;

  @media (max-width: ${({ theme }) => theme.breakpoints.notebook}) {
    max-width: 640px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 90%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    max-width: 100%;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

export const SubsectionTitle = styled.h3`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.emphasis};
`;

export const SectionMotion = styled(motion.section)`
  padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
`;
