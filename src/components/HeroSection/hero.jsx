import React from "react";
import twixLogo from "../../assets/images/heroSection/twix-logo.png";
import chocoCharacterRight from "../../assets/images/heroSection/choco-character-right-02.png";
import chocoCharacterLeft from "../../assets/images/heroSection/choco-character-left-02.png";
import bgBottom from "../../assets/images/heroSection/bg-bottom.png";
import telegram from "../../assets/images/Footer/telegram.png";
import x from "../../assets/images/Footer/x.png";
import pill from "../../assets/images/Footer/pill.png";
import "./hero.css";

function Hero() {
  return (
    <div className="photoDiv">
      <div className="characterContainer">
        <img
          src={chocoCharacterLeft}
          alt="Choco"
          className="chocoCharacter animate-light-bounce"
        />
      </div>
      <div className="characterContainer">
        <img
          src={chocoCharacterRight}
          alt="Choco"
          className="chocoCharacter animate-light-bounce"
        />
      </div>
      <img src={bgBottom} alt="Choco" className="chocoBarBottom" />
      <div className="absolute top-[95%] sm:top-[93%] md:top-[92%] lg:top-[91%] xl:top-[90%] 2xl:top-auto 2xl:bottom-[4.5vw] left-1/2 w-full -translate-x-1/2 flex justify-center gap-4 md:gap-6 z-10">
        <img
          src={telegram}
          alt="telegram"
          className="w-5 sm:w-6 md:w-7 lg:w-10 xl:w-12 2xl:w-14 hover:cursor-pointer hover:scale-150 md:hover:scale-125 transition-transform duration-300"
        />
        <img
          src={x}
          alt="x"
          className="w-5 sm:w-6 md:w-7 lg:w-10 xl:w-12 2xl:w-14 hover:cursor-pointer hover:scale-150 md:hover:scale-125 transition-transform duration-300"
        />
        <img
          src={pill}
          alt="pill"
          className="w-5 sm:w-6 md:w-7 lg:w-10 xl:w-12 2xl:w-14 hover:cursor-pointer hover:scale-150 md:hover:scale-125 transition-transform duration-300"
        />
      </div>
      <img src={twixLogo} alt="Choco" className="twixLogo" />
    </div>
  );
}

export default Hero;
