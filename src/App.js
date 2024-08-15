import logo from "./logo.svg";
import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import HowToBuy from "./components/HowToBuy/HowToBuy";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/hero";
import Section03 from "./components/Section03/section03";
import ThreeCharacters from "./components/ThreeCharacters/ThreeCharacters";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section03 />
      <Banner />
      <ThreeCharacters />
      <HowToBuy />
      <Footer />
    </div>
  );
}

export default App;
