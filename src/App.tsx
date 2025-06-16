// import "./App.css";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { WeatherWidget } from "./components/WeatherApi/WeatherWidget";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
      </main>
      <WeatherWidget />
    </>
  );
}

export default App;
