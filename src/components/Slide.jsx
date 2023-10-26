import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/Slide.scss";

export default function Slide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const images = [
    "../../public/Main.jpg",
    "../../public/slide.webp",
    "../../public/slide2.jpg",
    "../../public/slide3.jpg",
  ];
  return (
    <div className="slide_wrapper">
      <Slider {...settings}>
        {images.map((item) => (
          <img className="slide_wrapper--img" src={item} />
        ))}
      </Slider>
    </div>
  );
}
