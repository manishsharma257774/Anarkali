// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
export default function SwiperSlider() {
  return (
    <>
      {" "}
      <div className="flex items-center justify-center w-[100%]  cursor-e-resize">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
          }}
          modules={[Autoplay, Pagination, Navigation]}

          /* // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)} */
        >
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[20px] font-bold text-center ">
              <h1 className="text-white bg-red-600 p-[5px] rounded-2xl text-[15px] sm:text-[20px] lg:text-[25px]">
                FROM YOU - HAPPY CUSTOMERS
              </h1>
              <p className="text-[13px] text-center p-[5px] font-sans sm:text-[17px] sm:p-[10px] lg:text-[20px]">
                This is due their excellent service, competitive pricing and
                customer support.It's throughly refresing to get such a personal
                touch.Duis aute <br /> lorem ipusm is simply free text irure
                dolor in reprehenderit
              </p>
              <h1 className=" h-auto w-[100%] flex items-center justify-center p-[20px]">
                <p className="w-[70px] h-auto p-[35px] bg-[url('https://ninetheme.com/themes/anarkali/wp-content/uploads/2023/09/product4-15-100x100.jpg')] bg-cover rounded-[50px]"></p>
                <h4 className="p-[10px]">
                  Jessica Brown <br />
                  <span className="text-slate-500">Customer</span>
                </h4>
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[20px]  font-bold text-center ">
              <h1 className="text-white bg-red-600 p-[5px] rounded-2xl text-[15px] sm:text-[20px] lg:text-[25px]">
                FROM YOU - HAPPY CUSTOMERS
              </h1>
              <p className="text-[13px] text-center font-sans p-[5px] sm:text-[17px] sm:p-[10px] lg:text-[20px]">
                This is due their excellent service, competitive pricing and
                customer support.It's throughly refresing to get such a personal
                touch.Duis aute <br /> lorem ipusm is simply free text irure
                dolor in reprehenderit
              </p>
              <h1 className=" h-auto w-[100%] flex items-center justify-center">
                <p className="w-[70px] h-auto p-[35px] bg-[url('https://ninetheme.com/themes/anarkali/wp-content/uploads/2023/09/product1-30-100x100.jpg')] bg-cover rounded-[50px]"></p>
                <h4 className="p-[10px]">
                  Jessica Brown <br />
                  <span className="text-slate-500">Customer</span>
                </h4>
              </h1>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[20px] font-bold text-center ">
              <h1 className="text-white bg-red-600 p-[5px] rounded-2xl text-[15px] sm:text-[20px] lg:text-[25px]">
                FROM YOU - HAPPY CUSTOMERS
              </h1>
              <p className="text-[13px] text-center p-[5px] font-sans sm:text-[17px] sm:p-[10px] lg:text-[20px]">
                This is due their excellent service, competitive pricing and
                customer support.It's throughly refresing to get such a personal
                touch.Duis aute <br /> lorem ipusm is simply free text irure
                dolor in reprehenderit
              </p>
              <h1 className=" h-auto w-[100%] flex items-center justify-center">
                <p className="w-[70px] h-auto p-[35px] bg-[url('https://ninetheme.com/themes/anarkali/wp-content/uploads/2023/09/product2-38-100x100.jpg')] bg-cover rounded-[50px]"></p>
                <h4 className="p-[10px]">
                  Jessica Brown <br />
                  <span className="text-slate-500">Customer</span>
                </h4>
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
