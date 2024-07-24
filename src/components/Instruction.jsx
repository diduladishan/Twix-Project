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
      className="font-montserrat uppercase mt-5 md:mt-0 group cursor-default"
      data-aos="fade-left"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-delay="200"
    >
      <p className="text-[#FE8C00] font-bold text-xs animate-pulse">{number}</p>
      <h2 className="font-bold text-2xl lg:text-3xl group-hover:text-3xl lg:group-hover:text-4xl transition-all duration-500">
        {title}
      </h2>
      <p className="font-medium text-xs lg:text-sm">{content}</p>
    </div>
  );
};

export default Instruction;
