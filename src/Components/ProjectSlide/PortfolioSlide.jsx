import React from "react";
import p1 from "../../assets/project1.jpeg";
import p2 from "../../assets/project2.jpeg";
import p3 from "../../assets/project3.jpeg";
import p4 from "../../assets/project4.jpeg";
import styles from "./PortfolioSlide.module.scss";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

export default () => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards, Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className={`ms-lg-0 ${styles.portfolio_swiper}`}
    >
      <SwiperSlide className={`${styles.portfolio_swiper_slide}`}>
        <div className={`card rounded-0 border-0 ${styles.portfolio_card}`}>
          <img src={p1} alt="Bookmarker" />
          <a
            href="https://o-marss.github.io/bookmark/"
            className={`${styles.card_overlay}`}
          >
            <h2 className={`${styles.project_name}`}>Bookmarker</h2>
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide className={`${styles.portfolio_swiper_slide}`}>
        <div className={`card rounded-0 border-0 ${styles.portfolio_card}`}>
          <img src={p2} alt="Mealify" />
          <div className={`${styles.card_overlay}`}>
            <h2 className={`${styles.project_name}`}>Mealify</h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={`${styles.portfolio_swiper_slide}`}>
        <div className={`card rounded-0 border-0 ${styles.portfolio_card}`}>
          <img src={p3} alt="WatchWise" />
          <div className={`${styles.card_overlay}`}>
            <h2 className={`${styles.project_name}`}>WatchWise</h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={`${styles.portfolio_swiper_slide}`}>
        <div className={`card rounded-0 border-0 ${styles.portfolio_card}`}>
          <img src={p4} alt="DailyForecasts" />
          <div className={`${styles.card_overlay}`}>
            <h2 className={`${styles.project_name}`}>DailyForecasts</h2>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
