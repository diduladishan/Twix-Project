import { useEffect } from "react";
import AOS from "aos";

import Instruction from "./Instruction";
import howToBuy from "../assets/images/how-to-buy.png";
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
    <div className="text-white py-12 max-w-screen-xl mx-auto">
      <h1
        className="font-pilat uppercase font-black lg:text-4xl text-3xl md:text-right md:pr-12"
        data-aos="fade-left"
      >
        how to buy
      </h1>
      <div className="flex flex-col md:flex-row mt-8 xl:mt-0 items-center">
        <div className="w-3/5 md:w-2/5" data-aos="zoom-in">
          <img
            src={howToBuy}
            alt="How to buy"
            className="w-full h-auto md:-translate-y-7 animate-light-bounce"
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
    </div>
  );
};

export default HowToBuy;
