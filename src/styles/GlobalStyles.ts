// src/styles/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './fonts.css';

export const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Global defaults */
  body {
    font-family: ${({ theme }) => theme.fonts.body};
    line-height: 1.5;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    min-width: 320px;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }

  button {
    font-family: inherit;
    font-size: 1em;
    padding: 0.6em 1.2em;
    border-radius: 8px;
    border: none;
    background-color: ${({ theme }) => theme.colors.button};
    color: white;
    cursor: pointer;
    transition: background-color 0.25s ease;
  }

  button:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }

/* WebKit (Chrome, Edge, Safari) */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.colors.light};
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.emphasis};
}

::-webkit-scrollbar-thumb:hover {
  background: ${({ theme }) => theme.colors.emphasis};
}

/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.primary} ${({ theme }) => theme.colors.light};
}

  /* Scroll Animation */
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 1s ease-out, transform 1s ease-out;
  }

  .animate-on-scroll.show {
    opacity: 1;
    transform: translateY(0);
  }
`;
