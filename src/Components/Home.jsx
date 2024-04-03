import React from "react";
import FirstSlider from "./OnSlider/FirstSlider";
import Second from "./OnSlider/Second";
import Third from "./OnSlider/Third";
import Fourth from "./OnSlider/Fourth";
import Fifth from "./OnSlider/Fifth";
import Six from "./OnSlider/Six";
import LastSlider from "./OnSlider/LastSlider";

export default function Home() {
  return (
    <>
      <div className="bg-slate-500 h-[500px] w-[100%]">
        <FirstSlider />
      </div>
      <div className="bg-teal-800 h-[50px] w-full flex items-center justify-center">
        <p className="text-white text-[12px] font-semibold text-center lg:text-[16px] md:text-[16px] sm:text-[15px] ">
          {" "}
          BIGGEST CELEBRATION OFFER 30% OFF ON ANARKALI COLLECTION - SHOP NOW
        </p>
      </div>
      <div className=" h-auto w-[100%]  flex items-center justify-center p-[40px]">
        <div className=" h-auto w-[100%]  grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-3">
          <div className="h-auto w-[100%]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712041753/21-768x768_bhyslw.avif"
              alt=""
            />
          </div>
          <div className="h-auto w-[100%]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712041764/24-768x768_yjf7bx.avif"
              alt=""
            />
          </div>
          <div className="h-auto w-[100%]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712041758/23-768x768_rzvn7m.avif"
              alt=""
            />
          </div>
          <div className="h-auto w-[100%]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712041748/20-768x768_sp4phi.avif"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" h-auto w-[100%]  flex items-center justify-center p-[40px]">
        <div className=" h-auto w-[100%]  grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-3 font-medium	text-[18px] sm:text-[15px] md:text-[12px] lg:text-[15px]">
          <div className="h-auto w-[100%] border-2 border-solid border-gray-200">
            <ul className="h-[55px] flex items-center justify-between w-[100%] border-2 border-solid border-x-zinc-400 rounded-[40px] mt-[20px] p-[10px]">
              <li className="h-[43px] w-[43px] border-2 border-solid border-gray-200 rounded-[70px] overflow-hidden">
                <img
                  className="h-[42px] w-[100%]"
                  src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712043795/7790-Black-1-AA3499BlackModelFront-1200W_lezihk.jpg"
                  alt=""
                />
              </li>
              WOMEN T-SHIRTS
              <li className="h-[43px] w-[43px] rounded-[70px] flex items-center justify-center bg-red-200 text-gray-700">
                18
              </li>{" "}
            </ul>
            <ul className="h-[55px] flex items-center justify-between w-[100%] border-2 border-solid border-x-zinc-400 rounded-[40px] mt-[20px] p-[10px]">
              <li className="h-[43px] w-[43px] border-2 border-solid border-gray-200 rounded-[70px] overflow-hidden">
                <img
                  className="h-[42px] w-[100%]"
                  src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712043788/OIP_k5ae68.jpg"
                  alt=""
                />
              </li>
              ETHNIC WEAR
              <li className="h-[43px] w-[43px] rounded-[70px] flex items-center justify-center bg-red-200 text-gray-700">
                14
              </li>{" "}
            </ul>
            <ul className="h-[55px] flex items-center justify-between w-[100%] border-2 border-solid border-x-zinc-400 rounded-[40px] mt-[20px] p-[10px]">
              <li className="h-[43px] w-[43px] border-2 border-solid border-gray-200 rounded-[70px] overflow-hidden">
                <img
                  className="h-[42px] w-[100%]"
                  src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712043788/4703-4-scaled_oig5fg.jpg"
                  alt=""
                />
              </li>
              LEHENGA SET
              <li className="h-[43px] w-[43px] rounded-[70px] flex items-center justify-center bg-red-200 text-gray-700">
                12
              </li>{" "}
            </ul>
          </div>
          <div className="h-[300px] w-[100%] border-2 border-solid border-gray-200">
            <ul className="h-[55px] flex items-center justify-between w-[100%] border-2 border-solid border-x-zinc-400 rounded-[40px] mt-[20px] p-[10px]">
              <li className="h-[43px] w-[43px] border-2 border-solid border-gray-200 rounded-[70px] overflow-hidden">
                <img
                  className="h-[42px] w-[100%]"
                  src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712043772/394d14e3-4363-477a-8958-5ddc38538791.a8aa7c2baf43a8d70c46d56bbafbe8fe_ykwqkm.webp"
                  alt=""
                />
              </li>
              MEN T-SHIRTS
              <li className="h-[43px] w-[43px] rounded-[70px] flex items-center justify-center bg-red-200 text-gray-700">
                15
              </li>{" "}
            </ul>
            <ul className="h-[55px] flex items-center justify-between w-[100%] border-2 border-solid border-x-zinc-400 rounded-[40px] mt-[20px] p-[10px]">
              <li className="h-[43px] w-[43px] border-2 border-solid border-gray-200 rounded-[70px] overflow-hidden">
                <img
                  className="h-[42px] w-[100%]"
                  src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712043816/product1-30-450x600_gr8zzx.avif"
                  alt=""
                />
              </li>
              MEN
              <li className="h-[43px] w-[43px] rounded-[70px] flex items-center justify-center bg-red-200 text-gray-700">
                16
              </li>{" "}
            </ul>
            <ul className="h-[55px] flex items-center justify-between w-[100%] border-2 border-solid border-x-zinc-400 rounded-[40px] mt-[20px] p-[10px]">
              <li className="h-[43px] w-[43px] border-2 border-solid border-gray-200 rounded-[70px] overflow-hidden">
                <img
                  className="h-[42px] w-[100%]"
                  src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712043801/product1-6_ijqpnq.avif"
                  alt=""
                />
              </li>
              SHARARA SET
              <li className="h-[43px] w-[43px] rounded-[70px] flex items-center justify-center bg-red-200 text-gray-700">
                9
              </li>{" "}
            </ul>
          </div>
          <div className="h-[300px] w-[100%] border-2 border-solid border-gray-200">
            <ul className="h-[55px] flex items-center justify-between w-[100%] border-2 border-solid border-x-zinc-400 rounded-[40px] mt-[20px] p-[10px]">
              <li className="h-[43px] w-[43px] border-2 border-solid border-gray-200 rounded-[70px] overflow-hidden">
                <img
                  className="h-[42px] w-[100%]"
                  src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712043846/product2-39-450x600_uhl12q.avif"
                  alt=""
                />
              </li>
              KIDS
              <li className="h-[43px] w-[43px] rounded-[70px] flex items-center justify-center bg-red-200 text-gray-700">
                15
              </li>{" "}
            </ul>
            <ul className="h-[55px] flex items-center justify-between w-[100%] border-2 border-solid border-x-zinc-400 rounded-[40px] mt-[20px] p-[10px]">
              <li className="h-[43px] w-[43px] border-2 border-solid border-gray-200 rounded-[70px] overflow-hidden">
                <img
                  className="h-[42px] w-[100%]"
                  src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712043840/product2-20-450x600_aiw0ah.avif"
                  alt=""
                />
              </li>
              WOMEN
              <li className="h-[43px] w-[43px] rounded-[70px] flex items-center justify-center bg-red-200 text-gray-700">
                20
              </li>{" "}
            </ul>
            <ul className="h-[55px] flex items-center justify-between w-[100%] border-2 border-solid border-x-zinc-400 rounded-[40px] mt-[20px] p-[10px]">
              <li className="h-[43px] w-[43px] border-2 border-solid border-gray-200 rounded-[70px] overflow-hidden">
                <img
                  className="h-[42px] w-[100%]"
                  src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712043808/product1-10-450x600_u8wcvd.avif"
                  alt=""
                />
              </li>
              SHERWANIS
              <li className="h-[43px] w-[43px] rounded-[70px] flex items-center justify-center bg-red-200 text-gray-700">
                7
              </li>{" "}
            </ul>
          </div>
          <div className="h-[300px] w-[100%] border-2 border-solid border-gray-200">
            <ul className="h-[55px] flex items-center justify-between w-[100%] border-2 border-solid border-x-zinc-400 rounded-[40px] mt-[20px] p-[10px]">
              <li className="h-[43px] w-[43px] border-2 border-solid border-gray-200 rounded-[70px] overflow-hidden">
                <img
                  className="h-[42px] w-[100%]"
                  src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712043795/product1_nc46qr.avif"
                  alt=""
                />
              </li>
              FESTIVE WEAR
              <li className="h-[43px] w-[43px] rounded-[70px] flex items-center justify-center bg-red-200 text-gray-700">
                19
              </li>{" "}
            </ul>
            <ul className="h-[55px] flex items-center justify-between w-[100%] border-2 border-solid border-x-zinc-400 rounded-[40px] mt-[20px] p-[10px]">
              <li className="h-[43px] w-[43px] border-2 border-solid border-gray-200 rounded-[70px] overflow-hidden">
                <img
                  className="h-[42px] w-[100%]"
                  src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712043788/OIP_k5ae68.jpg"
                  alt=""
                />
              </li>
              KURTA PANT SET
              <li className="h-[43px] w-[43px] rounded-[70px] flex items-center justify-center bg-red-200 text-gray-700">
                10
              </li>{" "}
            </ul>
            <ul className="h-[55px] flex items-center justify-between w-[100%] border-2 border-solid border-x-zinc-400 rounded-[40px] mt-[20px] p-[10px]">
              <li className="h-[43px] w-[43px] border-2 border-solid border-gray-200 rounded-[70px] overflow-hidden">
                <img
                  className="h-[42px] w-[100%]"
                  src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712043788/4703-4-scaled_oig5fg.jpg"
                  alt=""
                />
              </li>
              LEHANGAS
              <li className="h-[43px] w-[43px] rounded-[70px] flex items-center justify-center bg-red-200 text-gray-700">
                12
              </li>{" "}
            </ul>
          </div>
        </div>
      </div>
      <div className=" h-auto w-[100%] p-[10px]">
        <div className="flex items-center justify-between font-medium p-[10px]">
          <h2 className="text-[17px]">Trending Best Selling Products</h2>
          <h2 className="flex items-center justify-center">
            <ul className="  m-[5px] hidden lg:flex gap-[15px] text-[5px] lg:text-[15px] md:text-[12px]">
              <li>ALL PRODUCTS</li>
              <li>FEATURED</li>
              <li>BEST SELLERS</li>
              <li>TOP RATED</li>
              <li>ON SALE</li>
              <li>IN STOCK</li>
            </ul>
          </h2>
          <h2 className="flex items-center justify-center">
            All Products{" "}
            <i className="bi bi-arrow-right text-[20px] m-[10px]"></i>
          </h2>
        </div>
        <hr />
      </div>
      <div className=" h-auto w-[100%] p-[5px]">
        <div className=" h-auto w-[100%]">
          <Second />
        </div>
      </div>
      <div className="h-auto w-full  p-[30px] flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          <div className=" h-auto w-[100%] bg-red-100 rounded-xl p-[9  px] flex  border-2 border-solid border-red-700">
            <div className=" grid grid-cols-1 sm:grid-cols-2">
              <div className="h-auto w-[100%]  p-[25px]">
                <h1 className="font-medium text-[15px] text-rose-800 sm:text-[19px] lg:text-[22px]">
                  Our Policy: Best Price!
                </h1>
                <p className="text-[15px] font-medium text-red-600">
                  Sign up to avoid missing discounts!
                </p>
              </div>

              <div className="h-auto w-[105%]  flex items-center justify-center text-white p-[30px] sm:text-[13px] lg:text-[17px]">
                <button className=" rounded-lg p-[10px] bg-rose-800">
                  <i class="bi bi-backpack p-[7px]"></i>
                  Check Coupouns
                </button>
              </div>
            </div>
          </div>

          <div className="bg-emerald-100 h-auto w-[100%] rounded-xl flex border-2 border-solid border-teal-600">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="h-auto w-[100%]  p-[30px]">
                <h1 className="font-medium text-[15px] text-teal-400 sm:text-[19px] lg:text-[22px]">
                  Click for Campaigns!
                </h1>
                <p className="text-[15px] font-medium text-teal-600">
                  Sign up to avoid missing campaigns!
                </p>
              </div>
              <div className="h-auto w-[100%] flex items-center justify-center text-white p-[30px] sm:text-[13px] lg:text-[17px]">
                <button className="rounded-lg p-[10px] bg-teal-600">
                  <i class="bi bi-backpack p-[7px]"></i>
                  Check Campaign
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-auto w-[100%] p-[10px]">
        <div className="flex items-center justify-between font-medium p-[10px]">
          <h2 className="text-[17px]">Trending Best Selling Products</h2>
          <h2 className="flex items-center justify-center">
            <ul className="  m-[5px] hidden lg:flex gap-[15px] text-[5px] lg:text-[15px] md:text-[12px]">
              <li>ALL PRODUCTS</li>
              <li>COLOR</li>
              <li>
                <i class="bi bi-circle-fill text-red-600 cursor-pointer"></i>
              </li>
              <li>
                <i class="bi bi-circle-fill text-orange-600 cursor-pointer"></i>
              </li>
              <li>
                <i class="bi bi-circle-fill text-green-600 cursor-pointer"></i>
              </li>
              <li>
                <i class="bi bi-circle-fill text-yellow-600 cursor-pointer"></i>
              </li>
              <li>
                <i class="bi bi-circle-fill text-blue-600 cursor-pointer"></i>
              </li>
            </ul>
          </h2>
          <h2 className="flex items-center justify-center">
            All Products{" "}
            <i className="bi bi-arrow-right text-[20px] m-[10px]"></i>
          </h2>
        </div>
        <hr />
      </div>
      <div className=" h-auto w-[100%] p-[5px]">
        <div className=" h-auto w-[100%]">
          <Third />
        </div>
      </div>
      <div className="h-auto w-full  p-[30px] flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          <div className=" h-auto w-[100%] bg-[url('https://th.bing.com/th/id/R.003e04ea14d26e4479146c8d43175514?rik=Q0nOiEBYeimH8Q&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f5%2fb%2f9%2f1111553-vertical-light-green-backgrounds-1920x1080-for-iphone-7.jpg&ehk=UyNKUHfI2snar%2fIn71juAbd%2blppXdVZWMmyCWZNIHho%3d&risl=&pid=ImgRaw&r=0')] rounded-xl p-[9  px] flex  border-2 border-solid border-red-700">
            <div className=" grid grid-cols-1 sm:grid-cols-2">
              <div className="h-auto w-[100%]  p-[25px]">
                <h1 className="font-medium text-[15px] text-white sm:text-[19px] lg:text-[22px]">
                  Our Policy: Best Price!
                </h1>
                <p className="text-[15px] font-medium text-white">
                  Sign up to avoid missing discounts!
                </p>
              </div>

              <div className="h-auto w-[105%]  flex items-center justify-center text-black p-[30px] sm:text-[13px] lg:text-[17px]">
                <button className=" rounded-lg p-[10px] bg-white font-medium">
                  <i className="bi bi-backpack p-[7px]"></i>
                  Check Coupouns
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[url('https://i.pinimg.com/originals/06/ac/94/06ac942ae9339227efadcdbaf381fb97.jpg')] h-auto w-[100%] rounded-xl flex border-2 border-solid border-teal-600">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="h-auto w-[100%]  p-[30px]">
                <h1 className="font-medium text-[15px] text-white sm:text-[19px] lg:text-[22px]">
                  Click for Campaigns!
                </h1>
                <p className="text-[15px] font-medium text-white">
                  Sign up to avoid missing campaigns!
                </p>
              </div>
              <div className="h-auto w-[100%] flex items-center justify-center text-black p-[30px] sm:text-[13px] lg:text-[17px]">
                <button className="rounded-lg p-[10px] bg-white font-medium">
                  <i className="bi bi-backpack p-[7px]"></i>
                  Check Campaign
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-auto w-[100%] p-[10px]">
        <div className="flex items-center justify-between font-medium p-[10px]">
          <h2 className="text-[17px]">Trending Best Selling Products</h2>
          <h2 className="flex items-center justify-center">
            <ul className="  m-[5px] hidden lg:flex gap-[15px] text-[5px] lg:text-[15px] md:text-[12px]">
              <li>ALL PRODUCTS</li>
              <li>FEATURED</li>
              <li>BEST SELLERS</li>
              <li>TOP RATED</li>
              <li>ON SALE</li>
              <li>IN STOCK</li>
            </ul>
          </h2>
          <h2 className="flex items-center justify-center">
            All Products{" "}
            <i className="bi bi-arrow-right text-[20px] m-[10px]"></i>
          </h2>
        </div>
        <hr />
      </div>{" "}
      <div className=" h-auto w-[100%] p-[5px]">
        <div className=" h-auto w-[100%]">
          <Fourth />
        </div>
      </div>
      <div className=" h-auto mt-[30px] bg-[url('https://res.cloudinary.com/dbkghiyvh/image/upload/v1712042636/bridal-lehenga-163767297916x9_lyatto_j2fvgf.webp')] bg-no-repeat bg-cover w-[100%] p-[5px] flex items-center justify-center">
        <div className=" h-[500px] w-[40%] "></div>
        <div className=" h-[500px] w-[60%] flex items-center justify-center ">
          <div className="bg-white overflow-scroll h-[300px] w-[100%] rounded-xl ">
            <Fifth />
          </div>
        </div>
      </div>
      <div className=" h-auto w-full text-center p-[20px]">
        <h1 className="text-[20px] font-bold sm:text-[23px] lg:text-[30px]">
          Current Articles From Anarkali
        </h1>
        <p className="text-[17px] font-medium text-slate-800">
          <span className="">
            Cardigan helvetica sriracha, portland celiac truffaut{" "}
          </span>
        </p>
      </div>
      <hr />
      <div className=" h-auto w-[100%] p-[25px] bg-slate-50">
        <div className=" h-auto w-[100%]">
          <Six />
        </div>
      </div>
      <div className=" h-auto w-full text-center p-[20px]">
        <h1 className="text-[20px] font-bold sm:text-[23px] lg:text-[30px]">
          Follow On <span className="underline">Instagram</span>
        </h1>
        <p className="text-[17px] font-medium">
          <span className="underline"> Follow</span> To Be Informed About
          Campaigns And Collections <span className="underline">@Anarkali</span>
        </p>
      </div>
      <hr />
      <div className=" h-auto w-[100%] p-[5px]">
        <div className=" h-auto w-[100%]">
          <LastSlider />
        </div>
      </div>
      <hr />
    </>
  );
}
