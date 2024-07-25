import "./App.css";
import HowToBuy from "./components/HowToBuy/HowToBuy";
import Footer from "./components/Footer/Footer";
import Hero from "./components/HeroSection/hero";
import Section03 from "./components/Section03/section03";
import Navigation from "./components/Navigation/navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Section03 />
      <HowToBuy />
      <Footer />
    </div>
  );
}

export default App;
