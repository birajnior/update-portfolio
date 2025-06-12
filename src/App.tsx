// import "./App.css";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
      </main>
    </>
  );
}

export default App;
