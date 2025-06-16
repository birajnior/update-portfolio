// import "./App.css";
import { About } from './components/About/About';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { WeatherWidget } from './components/WeatherApi/WeatherWidget';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
      </main>
      <WeatherWidget />
    </>
  );
}

export default App;
