// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SwiperSlider() {
  return (
    <>
      {" "}
      <div className="flex items-center justify-center w-[100%] h-[500px]  bg-neutral-800 cursor-e-resize rounded-xl">
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 2050,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className=" h-[500px] bg-[url('https://res.cloudinary.com/dbkghiyvh/image/upload/v1712041779/slideshow-1920-31_cxq93q.avif')] bg-cover bg-[50%] bg-no-repeat">
              <div className=" h-full w-full bg-black/5 bg-fixed">
                <div className="flex h-full items-center justify-center">
                  <div className="px-6 text-center text-white md:px-12">
                    <h1 className="mb-6 text-[50px] font-medium md:text-[70px] sm:text-[60px]  lg:text-[78px]">
                      Baraati Edit 2023
                    </h1>
                    <h3 className="mb-8 text-2xl font-sans">
                      New generation approach
                    </h3>
                    <button
                      type="button"
                      className="text-white inline-block rounded-lg  px-8  p-[8px] text-[18px] bg-teal-800"
                    >
                      Cleck Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" h-[500px] bg-[url('https://res.cloudinary.com/dbkghiyvh/image/upload/v1712041775/slideshow-1920-24_h7rnjd.avif')] bg-cover bg-[50%] bg-no-repeat">
              <div className=" h-full w-full bg-black/5 bg-fixed">
                <div className="flex h-full items-center justify-end">
                  <div className="px-6 text-right text-white md:px-12">
                    <h1 className="mb-6 text-[50px] font-medium md:text-[70px] sm:text-[60px]  lg:text-[78px]	">
                      Pink Elegancy
                    </h1>
                    <h3 className="mb-8 text-2xl font-sans">
                      New generation approach
                    </h3>
                    <button
                      type="button"
                      className="text-white inline-block rounded-lg  px-8  p-[8px] text-[18px] bg-teal-800"
                    >
                      Cleck Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" h-[500px] bg-[url('https://res.cloudinary.com/dbkghiyvh/image/upload/v1712041768/slideshow-1920-16_qfgqdt.avif')] bg-cover bg-[50%] bg-no-repeat">
              <div className=" h-full w-full bg-black/5 bg-fixed">
                <div className="flex h-full items-center justify-start">
                  <div className="px-6 text-left text-gray-950 md:px-12">
                    <h1 className="mb-4 text-[50px] font-medium	md:text-[70px] sm:text-[60px]  lg:text-[78px]">
                      Floral Patterned Dresses
                    </h1>
                    <h3 className="mb-8 text-2xl font-sans text-slate-500 ">
                      Reflect nature's patterns on the street!
                    </h3>
                    <button
                      type="button"
                      className="text-white inline-block rounded-lg  font-sans px-6  p-[8px] text-[18px] bg-blue-950"
                    >
                      Cleck Products
                    </button>
                  </div>
                </div>
              </div>{" "}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
