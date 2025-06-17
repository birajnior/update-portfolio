// import "./App.css";
import { About } from './components/About/About';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { ServicesSection } from './components/ServicesSection/ServicesSection';
import { WeatherWidget } from './components/WeatherApi/WeatherWidget';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <ServicesSection />
        <About />
      </main>
      <WeatherWidget />
    </>
  );
}

export default App;
