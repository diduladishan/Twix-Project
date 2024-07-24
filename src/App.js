import logo from "./logo.svg";
import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import HowToBuy from "./components/HowToBuy/HowToBuy";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/HeroSection/hero";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* <Carousel />
      <HowToBuy />
      <Footer /> */}
    </div>
  );
}

export default App;
