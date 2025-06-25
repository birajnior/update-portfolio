import { useState, useEffect } from 'react';
import {
  Container,
  Header,
  HoverZone,
  Menu,
  HamburgerButton,
  MobileMenu,
  Brand,
  LogoWrapper,
  LogoImage,
  CenterLogo,
} from './Navbar.styles';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../../assets/nova-marca.png';

export const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [forceShow, setForceShow] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'contato', label: 'Contato' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 50 || currentY < lastScrollY) {
        setShow(true);
      } else {
        setShow(false);
        setMobileOpen(false);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <HoverZone onMouseEnter={() => setForceShow(true)} onMouseLeave={() => setForceShow(false)} />

      <Header
        initial={{ y: 0 }}
        animate={{ y: show || forceShow ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        role="banner"
      >
        <Container>
          <div className="flex items-center justify-between w-full">
            {/* Esquerda */}
            <div className="flex items-center justify-start w-1/3">
              <Brand>JB DEVELOPER</Brand>
              <LogoWrapper>
                <LogoImage src={logo} alt="Logo" />
              </LogoWrapper>
            </div>

            {/* Centro (logo só aparece em telas grandes) */}
            <div className="w-1/3 flex justify-center">
              <CenterLogo src={logo} alt="Logo" />
            </div>

            {/* Direita */}
            <div className="w-1/3 flex justify-end items-center gap-4">
              <HamburgerButton
                aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
                onClick={() => setMobileOpen((prev) => !prev)}
              >
                {mobileOpen ? <FiX /> : <FiMenu />}
              </HamburgerButton>

              <Menu>
                {menuItems.map(({ id, label }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(id);
                      }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </Menu>
            </div>
          </div>
        </Container>

        {mobileOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {menuItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(id);
                    setMobileOpen(false);
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </MobileMenu>
        )}
      </Header>
    </>
  );
};
