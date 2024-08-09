import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

const Instruction = ({ title, content }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      className="font-montserrat uppercase py-3 md:pt-0 cursor-default px-[5vw] md:px-0 md:pe-[8vw]"
      data-aos="fade-left"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-delay="200"
    >
      <div className="flex justify-center md:justify-end">
        <h2 className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl hover:scale-125 transition-all duration-500 w-fit md:origin-right">
          {title}
        </h2>
      </div>
      <p className="font-medium text-[10px] sm:text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl md:text-right">
        {content}
      </p>
    </div>
  );
};

export default Instruction;
