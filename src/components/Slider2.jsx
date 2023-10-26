import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import "../components/Slider2.scss";

const Slider2 = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        autoplay={{ delay: 2 }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="../../public/Main.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../public/slide.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../public/slide2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../public/slide3.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider2;
