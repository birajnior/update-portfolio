import { motion } from 'framer-motion';
import styled from 'styled-components';
import { media } from '../../styles/media';

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text};
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  margin-left: 4rem;
  color: ${({ theme }) => theme.colors.primary};

  @media ${media.tablet}, ${media.mobile}, ${media.smallMobile} {
    margin-left: 0;
    text-align: center;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 10rem;
  align-items: flex-start;
  justify-content: center;
  max-width: 1580px;
  margin: 0 auto;
  padding-inline: ${({ theme }) => theme.spacing.xl};

  @media ${media.desktop} {
    gap: 6rem;
  }

  @media ${media.notebook}, ${media.tablet}, ${media.mobile}, ${media.smallMobile} {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
    padding-inline: ${({ theme }) => theme.spacing.lg};
  }

  @media ${media.mobile}, ${media.smallMobile} {
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

  @media ${media.notebook} {
    width: 420px;
    height: 500px;
  }

  @media ${media.tablet} {
    width: 300px;
    height: 380px;
  }

  @media ${media.mobile}, ${media.smallMobile} {
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

  @media ${media.notebook} {
    max-width: 640px;
  }

  @media ${media.tablet} {
    max-width: 90%;
  }

  @media ${media.mobile}, ${media.smallMobile} {
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
  color: ${({ theme }) => theme.colors.text};
`;
