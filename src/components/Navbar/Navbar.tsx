import { useState, useEffect } from 'react';
import { Container } from '../Layout/Container';
import { Header, HoverZone, Menu } from './Navbar.styles';

export const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [forceShow, setForceShow] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Detecta rolagem
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 50 || currentY < lastScrollY) {
        setShow(true); // mostra ao subir
      } else {
        setShow(false); // esconde ao descer
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Hover no topo */}
      <HoverZone onMouseEnter={() => setForceShow(true)} onMouseLeave={() => setForceShow(false)} />

      {/* Header com animação de subir/descer */}
      <Header
        initial={{ y: 0 }}
        animate={{ y: show || forceShow ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        role="banner"
      >
        <Container className="flex justify-between items-center px-6 py-4 text-white">
          <h1 className="text-xl font-bold">
            jb<span className="text-blue-500">developer</span>
          </h1>
          <Menu>
            <li>
              <a
                href="#inicio"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('inicio');
                }}
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#servicos"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('servicos');
                }}
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#projetos"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projetos');
                }}
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#depoimentos"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('depoimentos');
                }}
              >
                Depoimentos
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('sobre');
                }}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contato');
                }}
              >
                Contato
              </a>
            </li>
          </Menu>
        </Container>
      </Header>
    </>
  );
};
