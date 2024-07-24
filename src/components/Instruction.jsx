import React from "react";

const Instruction = ({ number, title, content }) => {
  return (
    <div className="font-montserrat uppercase mt-5 md:mt-0">
      <p className="text-[#FE8C00] font-bold text-xs">{number}</p>
      <h2 className="font-bold text-2xl lg:text-3xl">{title}</h2>
      <p className="font-medium text-xs lg:text-sm">{content}</p>
    </div>
  );
};

export default Instruction;
