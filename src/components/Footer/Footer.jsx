import { useEffect } from "react";
import AOS from "aos";

import instagram from "../../assets/images/Footer/instagram.png";
import whatsapp from "../../assets/images/Footer/whatsapp.png";
import facebook from "../../assets/images/Footer/facebook.png";
import "aos/dist/aos.css";

const data = [
  {
    img: instagram,
    name: "instagram icon",
  },
  {
    img: whatsapp,
    name: "whatsapp icon",
  },
  {
    img: facebook,
    name: "facebook icon",
  },
];

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="text-white pb-10 bg-[#6A2B1F]">
      <div data-aos="fade-down">
        <h1 className="text-8xl md:text-9xl xl:text-[150px] font-permanent-marker py-7 drop-shadow-[10px_10px_5px_rgb(0,0,0)] animate-light-bounce">
          $TWIX
        </h1>
      </div>
      <ul className="flex justify-center gap-10">
        {data.map(({ img, name }, index) => (
          <li
            key={index}
            data-aos="zoom-in"
            data-aos-anchor-placement="top-bottom"
          >
            <img
              src={img}
              alt={name}
              className="w-10 md:w-12 xl:w-14 hover:cursor-pointer hover:scale-150 md:hover:scale-125 transition-transform duration-300"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Footer;
