"use client";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import classes from "./ReviewsCards.module.css";
import clsx from "clsx";
import React from "react";
import Rating from "react-rating";
import { FaStar  } from "react-icons/fa";
import { GoStar, GoStarFill } from "react-icons/go";

export default function ReviewsCards({ data }) {
  return (
    <div className={classes.sliderWrapper}>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={4.2}
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{ delay: 6000 }}
        pagination={false}
        loop
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.2,
            spaceBetween: 20,
          },
          1400: {
            slidesPerView: 4.2,
            spaceBetween: 20,
          },
          1600: {
            slidesPerView: 4.5,
            spaceBetween: 30,
          },
        }}
        className={classes.swiper}
      >
        {data?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className={classes.reviewsCards}>
              <div className={classes.stars}>
                <Rating
                  initialRating={item?.rating}
                  emptySymbol={<GoStar color="#e4e5e9" className={classes.star} size={20} />}
                  fullSymbol={<GoStarFill  color="#024757" className={classes.star} size={20} />}
                  readonly
                  size={14}
                  spaceBetween={10}
                />
              </div>
              <p className={clsx(classes.review, "fs18 fw-400")}>
                "{item?.review}"
              </p>
              <div>
              <p className={clsx(classes.fullName, "fs20 fw-500")}>
                {item?.fullName}
              </p>
              <p className={clsx(classes.country, "fs16 fw-400")}>
                {item?.country}
              </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
