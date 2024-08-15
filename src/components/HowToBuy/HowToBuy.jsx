import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Instruction from "./Instruction";
import bgTop from "../../assets/images/HowToBuy/bg-top.png";
import twixCharacter from "../../assets/images/HowToBuy/twix-character.png";
import coinsOne from "../../assets/images/HowToBuy/coins-one.png";
import coinsTwo from "../../assets/images/HowToBuy/coins-two.png";
import bgCharacter from "../../assets/images/HowToBuy/bg-character.png";

const data = [
  {
    title: "01",
    content:
      "Download Phantom or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to phantom app",
  },
  {
    title: "02",
    content:
      "Have SOL in your wallet to switch to $WOLF. If you don't have any SOL, you can buy SOL from an exchange or cross chain swap and send it to your wallet.",
  },
  {
    title: "03",
    content:
      "Connect to Raydium. Go to raydium.io in google chrome or on the browser inside your Phantom app. Connect your wallet. Paste the $WOLF token address into Raydium and confirm the swap. When Phantom prompts you for a wallet signature, sign.",
  },
  {
    title: "04",
    content: "Switch SOL for $TWIX",
  },
];

const HowToBuy = React.forwardRef((props, ref) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div ref={ref} className="your-styling-class">
      <section className="relative">
        <div className="w-full absolute -top-[1px] z-20">
          <img src={bgTop} alt="A layer of chocolate" className="w-full" />
        </div>
        <div className="text-white mx-auto bg-[#B78844] pt-[20%] md:pt-0">
          <div className="flex flex-col md:flex-row items-center md:items-stretch">
            <div
              className="w-3/5 md:w-[30%] relative z-20 flex justify-center items-center lg:py-[200px] md:ms-[2vw] md:mt-[15%]"
              data-aos="zoom-in"
            >
              <img
                src={twixCharacter}
                alt="How to buy"
                className="w-full h-auto md:scale-150 md:origin-left"
              />
              <img
                src={coinsOne}
                alt="How to buy"
                className="w-1/2 md:w-[75%] absolute left-0 animate-light-bounce md:scale-150 md:origin-left mt-[6%]"
              />
              <img
                src={coinsTwo}
                alt="How to buy"
                className="w-1/2 md:w-[75%] absolute right-0 md:-right-[43%] my-auto animate-light-bounce md:scale-150 md:origin-left mt-[50%] md:mt-[72%]"
              />
            </div>
            <div className="relative z-10 md:w-[70%]">
              <div
                className="absolute w-full h-full bg-contain bg-right bg-no-repeat -z-10"
                style={{ backgroundImage: `url(${bgCharacter})` }}
              ></div>
              <div className="bg-black/60 backdrop-blur-sm backdrop-brightness-125 h-full md:me-[4vw] flex flex-col justify-center md:ps-[20%] md:pt-[30%] pb-[8%] md:pb-[14%]">
                {data.map(({ title, content }, index) => (
                  <Instruction key={index} title={title} content={content} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default HowToBuy;
