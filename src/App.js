import logo from "./logo.svg";
import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import HowToBuy from "./components/HowToBuy";
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <div className="App bg-gradient-to-b from-[#6A2B1F] to-[#2F0C06]">
      <Navbar />
      {/* <Carousel />
      <HowToBuy /> */}
    </div>
  );
}

export default App;
