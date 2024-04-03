import React from "react";

export default function Mega() {
  return (
    <>
      <div className=" w-[100%] grid grid-cols-1 sm:grid-cols-1 md:flex">
        <div className=" w-[100%] lg:w-[40%] md:w-[60%] p-[20px]">
          <h1 className="text-[30px] font-medium text-center">
            All categories
          </h1>
          <div className=" w-[100%] ">
            <ul className="h-[55px] flex items-center justify-between w-[100%] border-2 border-solid border-x-zinc-400 rounded-[40px] mt-[20px] p-[10px]">
              <li className="h-[43px] w-[43px] border-2 border-solid border-gray-200 rounded-[70px] overflow-hidden">
                <img
                  className="h-[42px] w-[100%]"
                  src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712040945/product5-25-225x300_bkytyc.avif"
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
                  src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039092/product3-1-450x600_fwm6yg.avif"
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
                  src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039056/product2-27-450x600_x8gkmn_mo9vqn.avif"
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
                  src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039064/product2-29-450x600_kkwbks_ibm0y6.avif"
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
                  src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712041300/product1-22-225x300_muenqu.avif"
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
                  src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712038990/product1-15_xnjvy2.avif"
                  alt=""
                />
              </li>
              LEHANGAS
              <li className="h-[43px] w-[43px] rounded-[70px] flex items-center justify-center bg-red-200 text-gray-700">
                12
              </li>{" "}
            </ul>
            <br />
            <button className="p-[8px] px-[20px] bg-red-500  text-white rounded-lg">
              All Products <i class="bi bi-arrow-right-short"></i>
            </button>
          </div>
        </div>{" "}
        <div className="w-[100%] pt-[50px] P-[10px]">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 w-[100%] text-gray-700">
            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039056/product2-27-450x600_x8gkmn_mo9vqn.avif"
                alt=""
              />
              <h2 className="p-[2px] font-medium">ETHNIC WEAR </h2>
            </div>

            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039054/product2-22-450x600_aj35vg.avif"
                alt=""
              />
              <h2 className="p-[2px] font-medium">FESTIVE WEAR</h2>
            </div>

            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712040945/product5-25-225x300_bkytyc.avif"
                alt=""
              />
              <h2 className="p-[2px] font-medium">KIDS</h2>
            </div>

            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039106/product3-29-450x600_zf2nc2.avif"
                alt=""
              />
              <h2 className="p-[2px] font-medium">KURTA PANT SET</h2>
            </div>

            <div className="h-auto w-[100%] p-[10px] hidden lg:block">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712038990/product1-15_xnjvy2.avif"
                alt=""
              />
              <h2 className="p-[2px] font-medium">LEHANGAS</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 w-[100%] text-gray-700">
            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039064/product2-29-450x600_kkwbks_ibm0y6.avif"
                alt=""
              />
              <h2 className="p-[2px] font-medium">MEN</h2>
            </div>

            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712041199/product4-32-225x300_agg1r2.avif"
                alt=""
              />
              <h2 className="p-[2px] font-medium">LEHENGA SET</h2>
            </div>

            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712041300/product1-22-225x300_muenqu.avif"
                alt=""
              />
              <h2 className="p-[2px] font-medium">WOMEN</h2>
            </div>

            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712041303/product3-35-225x300_bhuhym.avif"
                alt=""
              />
              <h2 className="p-[2px] font-medium">SHARARA SET</h2>
            </div>

            <div className="h-auto w-[100%] p-[10px] hidden lg:block">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712041309/product5-15-225x300_w3iqo6.avif"
                alt=""
              />
              <h2 className="p-[2px] font-medium">SHERWANIS</h2>
            </div>
          </div>
        </div>
      </div>{" "}
      <hr />
    </>
  );
}
