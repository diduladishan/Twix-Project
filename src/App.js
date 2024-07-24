import logo from "./logo.svg";
import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import HowToBuy from "./components/HowToBuy";

function App() {
  return (
    <div className="App">
      <Carousel />
      <HowToBuy />
    </div>
  );
}

export default App;
