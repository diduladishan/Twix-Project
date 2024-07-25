import "./App.css";
import HowToBuy from "./components/HowToBuy/HowToBuy";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/HeroSection/hero";
import Section03 from "./components/Section03/section03";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section03 />
      <HowToBuy />
      <Footer />
    </div>
  );
}

export default App;
