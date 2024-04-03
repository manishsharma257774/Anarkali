import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SwiperSlider() {
  return (
    <>
      {" "}
      <div className="flex items-center justify-center w-[100%]">
        <Swiper
          spaceBetween={5}
          slidesPerView={
            window.screen.width > 768 ? 5 : window.screen.width > 640 ? 4 : 2
          }
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className="h-[200px] w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712042720/0015637_fabulous-embelished-sherwani-kurta-for-mens_800_lyb064_ol4th3.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039092/product3-1-450x600_fwm6yg.avif"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039033/product2-16-450x600_em6p1v.avif"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712042830/product2_1_z7yv6t_mexrt1.avif"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039118/product4-21-450x600_ytnbhk.avif"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039071/product2-32-450x600_vc8uya.avif"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
