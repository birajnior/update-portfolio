// import "./App.css";
import { About } from './components/About/About';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { ProjectsSection } from './components/ProjectsSection/ProjectsSection';
import { SectionDivider } from './components/SectionDivider';
import { ServicesSection } from './components/ServicesSection/ServicesSection';
import { WeatherWidget } from './components/WeatherApi/WeatherWidget';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <SectionDivider />
        <ServicesSection />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <About />
        <SectionDivider />
      </main>
      <WeatherWidget />
    </>
  );
}

export default App;
