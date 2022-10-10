import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Dashboard from "../../img/dashboard1.png";
import Restuarent from "../../img/res.png";
import News from "../../img/news.png";
import Spam from "../../img/spam.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Dashboard} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Restuarent} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Spam} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={News} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
