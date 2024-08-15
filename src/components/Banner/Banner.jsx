import bgTop from "../../assets/images/Banner/bg-top.png";
import banner from "../../assets/images/Banner/banner.png";

const Banner = () => {
  return (
    <section className="relative mt-[6%]">
      <div className="w-full absolute top-0 z-20 -translate-y-[62%]">
        <img src={bgTop} alt="A layer of chocolate" className="w-full" />
      </div>
      <img src={banner} alt="" />
    </section>
  );
};

export default Banner;
