import { useEffect } from "react";
import AOS from "aos";

import bgTop from "../../assets/images/HowToBuy/bg-top.png";
import telegram from "../../assets/images/Footer/telegram.png";
import x from "../../assets/images/Footer/x.png";
import pill from "../../assets/images/Footer/pill.png";
import "aos/dist/aos.css";

const data = [
  {
    img: telegram,
    name: "telegram icon",
  },
  {
    img: x,
    name: "x icon",
  },
  {
    img: pill,
    name: "pill icon",
  },
];

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="text-white pb-10 bg-gradient-to-b from-[#6A2B1F] to-[#2F0C06] relative">
      <div className="w-full absolute top-0 -translate-y-[35%] z-20">
        <img src={bgTop} alt="A layer of chocolate" className="w-full" />
      </div>
      <div
        data-aos="fade-down"
        className="text-7xl md:text-8xl xl:text-9xl 2xl:text-[150px] font-knewave py-7 drop-shadow-[10px_10px_5px_rgb(0,0,0)] pt-[23%]"
      >
        <h1>$TWIX</h1>
      </div>
      <ul className="flex justify-center gap-4 md:gap-6">
        {data.map(({ img, name }, index) => (
          <li
            key={index}
            data-aos="zoom-in"
            data-aos-anchor-placement="top-bottom"
          >
            <img
              src={img}
              alt={name}
              className="w-5 md:w-7 xl:w-9 hover:cursor-pointer hover:scale-150 md:hover:scale-125 transition-transform duration-300"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Footer;
