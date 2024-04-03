// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function SwiperSlider() {
  return (
    <>
      {" "}
      <div className="flex items-center justify-center w-[100%] cursor-e-resize">
        <Swiper
          spaceBetween={5}
          slidesPerView={
            window.screen.width > 768 ? 5 : window.screen.width > 640 ? 3 : 2
          }
          loop={true}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dikp9trqs/image/upload/v1712032699/product-450x600_djiyfr.avif"
                alt=""
              />
              <h2 className="p-[2px] font-medium">Indi Inside</h2>
              <p className="p-[2px] font-medium">
                <del className="text-red-600">$107.99</del>-$89.99
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dikp9trqs/image/upload/v1712032690/product2-40-450x600_vfl5bu.avif"
                alt=""
              />
              <h2 className="p-[2px] font-medium">Goroly</h2>
              <p className="p-[2px] font-medium">
                <del className="text-red-600">$107.99</del>-$89.99
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px]">
              <img src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712042290/product2-39-450x600_khudaf_qmqinc.avif" alt="" />
              <h2 className="p-[2px] font-medium">Anayna</h2>
              <p className="p-[2px] font-medium">
                <del className="text-red-600">$107.99</del>-$89.99
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712038969/product1-7-450x600_gvini8_beutve.avif"
                alt=""
              />
              <h2 className="p-[2px] font-medium">Skyasia</h2>
              <p className="p-[2px] font-medium">
                <del className="text-red-600">$107.99</del>-$89.99
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039088/product3-1-450x600_1_t6gh61.avif"
                alt=""
              />
              <h2 className="p-[2px] font-medium">Nayo</h2>
              <p className="p-[2px] font-medium">
                <del className="text-red-600">$107.99</del>-$89.99
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712038962/product_o6wb5b_i4zxjr.avif"
                alt=""
              />
              <h2 className="p-[2px] font-medium">House of Dress</h2>
              <p className="p-[2px] font-medium">
                <del className="text-red-600">$107.99</del>-$89.99
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039081/product2-40-450x600_qiikvz_lbd3zr.avif"
                alt=""
              />
              <h2 className="p-[2px] font-medium">Label</h2>
              <p className="p-[2px] font-medium">
                <del className="text-red-600">$107.99</del>-$89.99
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
