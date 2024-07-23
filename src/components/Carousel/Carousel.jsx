import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

import CarouselCard from "../CarouselCard";
import twixOne from "../../assets/images/twix-one.png";
import twixTwo from "../../assets/images/twix-two.png";
import twixThree from "../../assets/images/twix-three.png";
import twixFour from "../../assets/images/twix-four.png";
import twixFive from "../../assets/images/twix-five.png";

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
];

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
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
    <div>
      <div className="w-10 h-10"></div>
      <Slider {...settings}>
        {data.map(({ img, title, bid }, index) => (
          <CarouselCard img={img} title={title} bid={bid} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
