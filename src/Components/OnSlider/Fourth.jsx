import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
export default function SwiperSlider() {
  return (
    <>
      {" "}
      <div className="flex items-center justify-center w-[100%]  cursor-e-resize">
        <Swiper
          autoplay={{
            delay: 2000,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={5}
          slidesPerView={
            window.screen.width > 768 ? 5 : window.screen.width > 640 ? 4 : 2
          }
          loop={true}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712038999/product1-19_bx4ijr.avif"
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
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039038/product2-16-450x600_mxhcur_wg7ozi.avif"
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
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712038996/product1-17-450x600_mgzhls_mjacdt.avif"
                alt=""
              />
              <h2 className="p-[2px] font-medium">Anayna</h2>
              <p className="p-[2px] font-medium">
                <del className="text-red-600">$107.99</del>-$89.99
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039054/product2-22-450x600_aj35vg.avif"
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
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039049/product2-21-450x600_kvfbc4.avif"
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
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712041300/product1-22-225x300_muenqu.avif"
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
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039039/product2-18-450x600_vejgpr.avif"
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
