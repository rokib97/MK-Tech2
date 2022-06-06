import React from "react";
// import required modules
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import "./styles.css";
import banner1 from "../images/banner/banner1.jpg";
import banner2 from "../images/banner/banner2.jpg";
import banner3 from "../images/banner/banner3.jpg";
const Carousel = () => {
  return (
    <div className="relation -z-30">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <img src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
