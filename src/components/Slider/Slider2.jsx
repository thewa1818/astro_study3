import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper"; // 追記
import "swiper/css";
import "../Slider/Slider2.scss";

const Slider2 = () => {
  return (
    <>
      <Swiper
        className="mySwiper"
        modules={[Autoplay]} // 追記
        autoplay={{ delay: 0 }} // 追記
        loop={true}
        speed={4000}
      >
        <SwiperSlide>
          <div className="bg1"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg2"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg3"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg4"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider2;
