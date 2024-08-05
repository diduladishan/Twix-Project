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
      <p className="text-[#FE8C00] font-bold text-xs lg:text-sm xl:text-base 2xl:text-lg animate-pulse">
        {number}
      </p>
      <div className="flex justify-center md:justify-end">
        <h2 className="font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl hover:scale-125 transition-all duration-500 w-fit md:origin-right">
          {title}
        </h2>
      </div>
      <p className="font-medium text-xs lg:text-sm xl:text-base 2xl:text-lg">
        {content}
      </p>
    </div>
  );
};

export default Instruction;
