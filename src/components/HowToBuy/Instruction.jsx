import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

const Instruction = ({ number, title, content }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      className="font-montserrat uppercase mt-5 md:mt-0 cursor-default"
      data-aos="fade-left"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-delay="200"
    >
      <p className="text-[#FE8C00] font-bold text-xs animate-pulse">{number}</p>
      <div className="flex justify-center md:justify-end">
        <h2 className="font-bold text-2xl lg:text-3xl hover:text-3xl lg:hover:text-4xl transition-all duration-500 h-9 w-fit">
          {title}
        </h2>
      </div>
      <p className="font-medium text-xs lg:text-sm">{content}</p>
    </div>
  );
};

export default Instruction;
