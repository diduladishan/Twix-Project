import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

import CarouselCard from "./CarouselCard";
import twixOne from "../../assets/images/Carousel/twix-one.png";
import twixTwo from "../../assets/images/Carousel/twix-two.png";
import twixThree from "../../assets/images/Carousel/twix-three.png";
import twixFour from "../../assets/images/Carousel/twix-four.png";
import twixFive from "../../assets/images/Carousel/twix-five.png";
import bgTop from "../../assets/images/Carousel/bg-top.png";
import bgBottom from "../../assets/images/Carousel/bg-bottom.png";

const data = [
  {
    img: twixOne,
    title: "Twix #1",
    bid: "0.32 SOL",
  },
  {
    img: twixTwo,
    title: "Twix #2",
    bid: "0.32 SOL",
  },
  {
    img: twixThree,
    title: "Twix #3",
    bid: "0.32 SOL",
  },
  {
    img: twixFour,
    title: "Twix #4",
    bid: "0.32 SOL",
  },
  {
    img: twixFive,
    title: "Twix #5",
    bid: "0.32 SOL",
  },
  {
    img: twixOne,
    title: "Twix #6",
    bid: "0.32 SOL",
  },
  {
    img: twixTwo,
    title: "Twix #7",
    bid: "0.32 SOL",
  },
  {
    img: twixThree,
    title: "Twix #8",
    bid: "0.32 SOL",
  },
  {
    img: twixFour,
    title: "Twix #9",
    bid: "0.32 SOL",
  },
  {
    img: twixFive,
    title: "Twix #10",
    bid: "0.32 SOL",
  },
  {
    img: twixOne,
    title: "Twix #11",
    bid: "0.32 SOL",
  },
  {
    img: twixTwo,
    title: "Twix #12",
    bid: "0.32 SOL",
  },
  {
    img: twixThree,
    title: "Twix #13",
    bid: "0.32 SOL",
  },
  {
    img: twixFour,
    title: "Twix #14",
    bid: "0.32 SOL",
  },
  {
    img: twixFive,
    title: "Twix #15",
    bid: "0.32 SOL",
  },
];

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  return (
    <section>
      <img src={bgTop} alt="Chocolate background top" />
      <div className="bg-[#6A2B1F] pb-10">
        <Slider {...settings}>
          {data.map(({ img, title, bid }, index) => (
            <CarouselCard img={img} title={title} bid={bid} />
          ))}
        </Slider>
      </div>
      <img src={bgBottom} alt="Chocolate background bottom" />
    </section>
  );
};

export default Carousel;
