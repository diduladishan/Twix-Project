const CarouselCard = ({ img, title, bid }) => {
  return (
    <div className="flex justify-center">
      <div className="bg-[#100E0D]  w-fit p-5 rounded-lg hover:-translate-y-1 transition-transform duration-500 ease-out m-2">
        <img src={img} alt={title} className="w-48 h-auto" />
        <div className="text-left mt-4 text-white uppercase text-sm leading-6">
          <p>{title}</p>
          <button className="text-[#FE8C00] uppercase animate-pulse hover:text-[15px] hover:animate-none transition-all duration-300">
            Buy Now
          </button>
          <p className="text-[0.55rem] mt-2 -mb-1 normal-case">Highest Bid</p>
          <p>{bid}</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
