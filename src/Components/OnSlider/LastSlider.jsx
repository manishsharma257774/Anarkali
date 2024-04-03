import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
export default function SwiperSlider() {
  return (
    <>
      {" "}
      <div className="flex items-center justify-center w-[100%]">
        <Swiper
          autoplay={{
            delay: 4000,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={5}
          slidesPerView={
            window.screen.width > 768
              ? 6
              : window.screen.width > 640
              ? 4
              : window.screen.width > 440
              ? 2
              : 1
          }
          loop={true}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712042998/banner-500x500-7_dv1dbr_ckj7or.avif"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712042982/banner-500x500-4_socxsu_dn6t8r.avif"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712042986/banner-500x500-5_xf0syf_oeksov.avif"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712042993/banner-500x500-6_qfp31j_ilapou.avif"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712042971/banner-500x500-1_hx8qfe_lkk6ih.avif"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712042977/banner-500x500-3_qdvyel_qt1mub.avif"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
