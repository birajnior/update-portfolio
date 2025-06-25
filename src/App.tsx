import React, { lazy } from 'react';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { SectionDivider } from './components/SectionDivider';

const ServicesSection = lazy(() => import('./components/ServicesSection/ServicesSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection/ProjectsSection'));
const About = lazy(() => import('./components/About/About'));
const ContactSection = lazy(() => import('./components/ContactSection/ContactSection'));
const Footer = lazy(() => import('./components/Footer/Footer'));

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <SectionDivider />
        <React.Suspense fallback={<div>Carregando serviços...</div>}>
          <ServicesSection />
        </React.Suspense>
        <SectionDivider />
        <React.Suspense fallback={<div>Carregando projetos...</div>}>
          <ProjectsSection />
        </React.Suspense>
        <SectionDivider />
        <React.Suspense fallback={<div>Carregando sobre...</div>}>
          <About />
        </React.Suspense>
        <SectionDivider />
        <React.Suspense fallback={<div>Carregando contato...</div>}>
          <ContactSection />
        </React.Suspense>
        <SectionDivider />
        <React.Suspense fallback={<div>Carregando rodapé...</div>}>
          <Footer />
        </React.Suspense>
      </main>
    </>
  );
}

export default App;
