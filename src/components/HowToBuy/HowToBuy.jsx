import { useEffect } from "react";
import AOS from "aos";

import Instruction from "./Instruction";
import twixCharacter from "../../assets/images/HowToBuy/twix-character.png";
import coinsOne from "../../assets/images/HowToBuy/coins-one.png";
import coinsTwo from "../../assets/images/HowToBuy/coins-two.png";
import bgTop from "../../assets/images/HowToBuy/bg-top.png";
import bgBottom from "../../assets/images/HowToBuy/bg-bottom.png";
import "aos/dist/aos.css";

const data = [
  {
    number: "01",
    title: "Create a Wallet",
    content:
      "Download Phantom or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to phantom app",
  },
  {
    number: "02",
    title: "Get some SOL",
    content:
      "Have SOL in your wallet to switch to $WOLF. If you dont have any SOL, you can buy SOL from an exchange or cross chain swap and send it to your wallet.",
  },
  {
    number: "03",
    title: "Go to Raydium",
    content:
      "Connect to Raydium. Go to raydium.io in google chrome or on the browser inside your Phantom app. Connect your wallet. Paste the $WOLF token address into Raydium and confirm the swap. When Phantom prompts you for a wallet signature, sign.",
  },
  {
    number: "04",
    title: "Swap",
    content: "Swith SOL for $TWIX",
  },
];

const HowToBuy = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section>
      <div className="w-full translate-y-1">
        <img
          src={bgTop}
          alt="Chocolate background top"
          className="min-w-full"
        />
      </div>
      <div className="text-white mx-auto bg-gradient-to-b from-[#6A2B1F] to-[#2F0C06] pt-10">
        <h1
          className="font-pilat uppercase font-black text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl md:text-right md:pr-12"
          data-aos="fade-left"
        >
          how to buy
        </h1>
        <div className="flex flex-col md:flex-row mt-8 xl:mt-0 mb-10 items-center">
          <div className="w-3/5 md:w-2/5 relative" data-aos="zoom-in">
            <img
              src={twixCharacter}
              alt="How to buy"
              className="w-full h-auto md:-translate-y-7"
            />
            <img
              src={coinsOne}
              alt="How to buy"
              className="w-1/2 absolute bottom-[28%] -left-[2%] md:bottom-[35%] md:left-[2%] lg:bottom-[32%] animate-light-bounce"
            />
            <img
              src={coinsTwo}
              alt="How to buy"
              className="absolute bottom-[5%] -right-[13%] md:bottom-[12%] md:-right-[12%] lg:bottom-[8%] animate-light-bounce"
            />
          </div>
          <div className="md:text-right w-4/5 md:w-3/5 md:pr-12 mt-8 md:mt-0">
            {data.map(({ number, title, content }, index) => (
              <Instruction
                key={index}
                number={number}
                title={title}
                content={content}
              />
            ))}
          </div>
        </div>
        <div className="w-full translate-y-1">
          <img
            src={bgBottom}
            alt="Chocolate background bottom"
            className="min-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
