import React from "react";
import CharacterLeft from "../../assets/images/ThreeCharacters/character-left.png";
import CharacterCenter from "../../assets/images/ThreeCharacters/character-center.png";
import CharacterRight from "../../assets/images/ThreeCharacters/character-right.png";

function ThreeCharacters() {
  return (
    <div class="grid grid-cols-3 bg-gradient-to-t from-[#6a2b1f] to-[#3a120b]">
      <div className="flex justify-center items-center">
        <img src={CharacterLeft} alt="Left side character" className="" />
      </div>
      <div className="flex justify-center items-center">
        <img src={CharacterCenter} alt="Left side character" className="" />
      </div>
      <div className="flex justify-center items-center">
        <img src={CharacterRight} alt="Left side character" className="" />
      </div>
    </div>
  );
}

export default ThreeCharacters;
