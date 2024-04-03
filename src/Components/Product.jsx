import React from "react";

export default function Product() {
  return (
    <>
      <div className="p-[20px] w-[100%] flex items-center justify-between ]">
        <ul className="flex gap-[10px] font-medium text-[10px] sm:text-[20px]">
          <li>Home/</li>
          <li>Women/</li>
          <li>Festive Wear/</li>
          <li className="text-gray-500">Simple Product</li>
        </ul>
        <h1 className="text-[20px]">
          <i class="bi bi-chevron-left"></i>
          <i class="bi bi-grid"></i>
          <i class="bi bi-chevron-right"></i>
        </h1>
      </div>
      <hr />
      <div className=" w-[100%] grid grid-cols-1 sm:grid-cols-1 md:flex">
        <div className=" w-[100%] lg:w-[40%] md:w-[60%] p-[20px]">
          <div className=" w-[100%] h-[500px] bg-cover bg-[url('https://res.cloudinary.com/dbkghiyvh/image/upload/v1712040526/product4-21_yansau.avif')]"></div>
        </div>{" "}
        <div className="w-[100%] p-[20px]">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 w-[100%]  cursor-e-resize text-gray-700"></div>

          <h1 className="text-[30px] font-semibold">Simple Product</h1>
          <h2 className="text-[17px]">
            <i class="bi bi-star-fill text-yellow-300"></i>
            <i class="bi bi-star-fill text-yellow-300"></i>
            <i class="bi bi-star-fill text-yellow-300"></i>
            <i class="bi bi-star-fill text-yellow-300"></i>
            <i class="bi bi-star-fill text-yellow-300 "></i> 1review
          </h2>
          <div className=" w-[100%] pt-[10px]">
            <ul className="flex items-center justify-between">
              <li className="font-medium">
                <del className="text-red-600 text-[20px]">$230.00</del>-$189.00
              </li>
              <li className="font-medium">453 IN STOCK (CAN BE BACKORDERED)</li>
            </ul>
          </div>
          <div className="pt-[10px]">
            <p>
              Safer For The Environment: Our denim factory partner recycles 98%
              of their water using reverse osmosis filtration and keeps
              byproducts out of the environment by mixing them with concrete to
              create building materials.
            </p>
          </div>
          <br />
          <div className=" bg-red-100 p-[20px] border-2 border-solid border-red-900 rounded-[10px] w-[100%]">
            <ul className="flex items-center justify-between">
              <li className="text-[18px] text-red-600 font-semibold">
                Last hours of black friday promotion:
              </li>
              <li>
                <p className=" font-medium p-[3px] w-[100%] text-[20px] px-[20px] bg-red-800 text-white rounded-[5px]">
                  1725:20:31:58
                </p>
              </li>
            </ul>
          </div>
          <br />
          <div className=" bg-yellow-100 border-2 border-solid border-red-900 p-[13px] rounded-[10px] w-[100%]">
            <ul className="flex items-center justify-between">
              <li className="text-[15px] text-green-600 font-medium ">
                ORDERED: 47{" "}
              </li>
              <li>
                <p className=" p-[3px] text-green-600 font-medium w-[100%] text-[15px]">
                  ITEMS AVAILABLE: 453{" "}
                </p>
              </li>
            </ul>
            <span>
              <input className="w-[100%]  bg-red-600" type="range" />
            </span>
          </div>
          <br />
          <div className=" p-[15px] rounded-[10px] w-[100%]">
            <ul className="flex items-center justify-center gap-[10px]">
              <li className="bg-gray-300 p-[10px] w-[50%] font-medium flex items-center justify-center border-2 border-solid border-gray-500 rounded-lg">
                Click's
              </li>
              <li className="bg-red-500 text-white p-[10px] w-[100%] flex items-center font-medium justify-center border-2 border-solid border-gray-500 rounded-lg">
                Add To Cart
              </li>
              <li className="bg-gray-950 p-[10px] w-[30%] flex items-center justify-center border-2 border-solid border-gray-500 rounded-lg ">
                <i class="bi bi-suit-heart text-white text-[20px]"></i>
              </li>
            </ul>
          </div>
          <br />
          <h1 className="p-[10px] w-[100%] sm:w-[60%] md:w-[80%]  lg:w-[50%] flex items-center justify-center border-[1px] border-solid border-gray-500 rounded-lg">
            <ul className="flex items-center justify-center gap-[10px]">
              <li className="text-[18px] text-red-600 font-semibold">SHARE:</li>
              <li className="h-[27px] w-[27px] border-[7px] border-solid border-blue-900 bg-white rounded-[50px] flex items-center justify-center">
                <i class="bi bi-facebook text-blue-900 cursor-pointer"></i>
              </li>
              <li className="h-[27px] w-[27px] border-[7px] border-solid bg-blue-500 border-blue-500 rounded-[50px] flex items-center justify-center">
                <i class="bi bi-twitter text-white cursor-pointer"></i>
              </li>
              <li className="h-[27px] w-[27px] border-[7px] border-solid bg-red-600 text-white border-red-600 rounded-[50px] flex items-center justify-center">
                <i class="bi bi-pinterest cursor-pointer"></i>
              </li>
              <li className="h-[27px] w-[27px] border-[7px] border-solid border-blue-500 text-white bg-blue-500 rounded-[50px] flex items-center justify-center">
                <i class="bi bi-linkedin cursor-pointer"></i>
              </li>
              <li className="h-[27px] w-[27px] border-[7px] border-solid text-white bg-yellow-800 border-yellow-800 rounded-[50px] flex items-center justify-center">
                <i class="bi bi-journal-medical cursor-pointer"></i>
              </li>
              <li className="h-[27px] w-[27px] border-[7px] text-white bg-green-400 border-solid border-green-400 rounded-[50px] flex items-center justify-center">
                <i class="bi bi-whatsapp cursor-pointer"></i>
              </li>
              <li className="h-[27px] w-[27px] border-[7px] text-blue-500 bg-white border-solid border-blue-500 rounded-[50px] flex items-center justify-center">
                <i class="bi bi-telegram cursor-pointer"></i>
              </li>
            </ul>
          </h1>
          <br />
        </div>
      </div>
      <hr />
      <div className=" w-[100%] grid grid-cols-1 sm:grid-cols-1 md:flex">
        <div className="w-[100%] pt-[10px] P-[10px]">
          <h1 className="text-[25px] font-medium p-[10px]">
            You May Also Like
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 w-[100%] text-gray-700">
            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712038969/product1-7-450x600_gvini8_beutve.avif"
                alt=""
              />
              <h2 className="p-[2px] font-medium">Bitiya </h2>
              <p className="p-[2px] font-medium">
                <del className="text-red-600">$324.50</del>-$294.50
              </p>
            </div>

            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039099/product3-3-450x600_pgrt96_t3qwrg.avif"
                alt=""
              />
              <h2 className="p-[2px] font-medium">Cutiekins</h2>
              <p className="p-[2px] font-medium">
                <del className="text-red-600">$147.50</del>-$127.50
              </p>
            </div>

            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039110/product3-30-450x600_sh9c0g.avif"
                alt=""
              />
              <h2 className="p-[2px] font-medium">Here&Now</h2>
              <p className="p-[2px] font-medium">
                <del className="text-red-600">$61.87</del>-$54.87
              </p>
            </div>

            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039044/product2-19-450x600_eawtrr_eohrxn.avif"
                alt=""
              />
              <h2 className="p-[2px] font-medium">Fashor</h2>
              <p className="p-[2px] font-medium">
                <del className="text-red-600">$45.99</del>-$35.99
              </p>
            </div>

            <div className="h-auto w-[100%] p-[10px] hidden lg:block">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712038993/product1-16_n3jf5z.avif"
                alt=""
              />
              <h2 className="p-[2px] font-medium">Kalini</h2>
              <p className="p-[2px] font-medium">
                <del className="text-red-600">$107.99</del>-$89.99
              </p>
            </div>
          </div>
          <h1 className="text-[25px] font-medium p-[10px]">
            Viewers Also Liked{" "}
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 w-[100%] text-gray-700">
            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039033/product2-16-450x600_em6p1v.avif"
                alt=""
              />
              <h2 className="p-[2px] font-medium">Goraly </h2>
              <p className="p-[2px] font-medium">
                <del className="text-red-600">$107.99</del>-$89.99
              </p>
            </div>

            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039054/product2-22-450x600_aj35vg.avif"
                alt=""
              />
              <h2 className="p-[2px] font-medium">Image Variable</h2>
              <p className="p-[2px] font-medium">
                <del className="text-red-600">$222.00</del>-$233.00
              </p>
            </div>

            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039015/product1-450x600_tdam7z_azll5y.avif"
                alt=""
              />
              <h2 className="p-[2px] font-medium">Silk Land</h2>
              <p className="p-[2px] font-medium">
                <del className="text-red-600">$79.99</del>-$69.99
              </p>
            </div>

            <div className="h-auto w-[100%] p-[10px]">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712038990/product1-15_xnjvy2.avif"
                alt=""
              />
              <h2 className="p-[2px] font-medium">Singni</h2>
              <p className="p-[2px] font-medium">
                <del className="text-red-600">$107.99</del>-$89.99
              </p>
            </div>

            <div className="h-auto w-[100%] p-[10px] hidden lg:block">
              <img
                src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039126/product5-17-450x600_weaajp.avif"
                alt=""
              />
              <h2 className="p-[2px] font-medium">Out of Stock</h2>
              <p className="p-[2px] font-medium">
                <del className="text-red-600">$130.00</del>-$105.00
              </p>
            </div>
          </div>
        </div>
        <div className=" w-[100%] lg:w-[40%] md:w-[60%] p-[20px]">
          <h1 className="text-[30px] font-medium text-center">
            Product Categories{" "}
          </h1>
          <div className=" w-[100%]">
            <ul className="flex items-center justify-between p-[10px]">
              <li>All Products</li>

              <li>0</li>
            </ul>
            <ul className="flex items-center justify-between p-[10px]">
              <li>Ethnic Wear</li>

              <li>14</li>
            </ul>{" "}
            <ul className="flex items-center justify-between p-[10px]">
              <li>Festive Wear</li>

              <li>19</li>
            </ul>{" "}
            <ul className="flex items-center justify-between p-[10px]">
              <li>Kids</li>

              <li>15</li>
            </ul>{" "}
            <ul className="flex items-center justify-between p-[10px]">
              <li>Kurta Pant Set</li>

              <li>10</li>
            </ul>{" "}
            <ul className="flex items-center justify-between p-[10px]">
              <li>Lehangas</li>

              <li>12</li>
            </ul>{" "}
            <ul className="flex items-center justify-between p-[10px]">
              <li>Lehenga Set</li>

              <li>12</li>
            </ul>
            <ul className="flex items-center justify-between p-[10px]">
              <li>Men</li>
              <li>16</li>
            </ul>
            <ul className="flex items-center justify-between p-[10px]">
              <li>Men T-Shirts</li>
              <li>15</li>
            </ul>
            <ul className="flex items-center justify-between p-[10px]">
              <li>Sharara Set</li>
              <li>9</li>
            </ul>
            <ul className="flex items-center justify-between p-[10px]">
              <li>Sherwanis</li>
              <li>7</li>
            </ul>
            <ul className="flex items-center justify-between p-[10px]">
              <li>Women</li>
              <li>12</li>
            </ul>
            <ul className="flex items-center justify-between p-[10px]">
              <li>Women T-Shirts</li>
              <li>20</li>
            </ul>
            <br />
            <button className="p-[8px] px-[20px] bg-red-500  text-white rounded-lg">
              All Products <i class="bi bi-arrow-right-short"></i>
            </button>
          </div>
        </div>{" "}
      </div>{" "}
      <div className=" w-[100%]">
        <h1 className="text-[25px] font-medium p-[10px] text-center">
          1 review for Simple Product
        </h1>
        <hr />
        <div className=" w-[100%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          <div className=" w-[100%] p-[20px]">
            <h1 className="text-[35px] font-medium text-center">5.0</h1>
            <h2 className="text-[20px] text-yellow-400 text-center">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
            </h2>
            <p className="text-center text-[20px] font-medium">
              Based on 1 review
            </p>
            <br />
            <span className="flex items-center justify-center">
              <button className="p-[3px] px-[20px] bg-slate-950 text-white text-[20px] rounded-lg">
                Add a review
              </button>
            </span>
          </div>
          <div className=" w-[100%] p-[20px] flex items-center justify-center">
            <div className=" border-[1px] rounded-xl border-solid border-gray-600 p-[20px]">
              <h1 className="text-[15px] font-medium p-[5px]">
                5 Star <input className="bg-gray-700 text-white" type="text" />{" "}
                100%
              </h1>
              <h1 className="text-[15px] font-medium p-[5px]">
                5 Star <input className="bg-gray-200" type="text" /> 100%
              </h1>
              <h1 className="text-[15px] font-medium p-[5px]">
                5 Star <input className="bg-gray-200" type="text" /> 100%
              </h1>
              <h1 className="text-[15px] font-medium p-[5px]">
                5 Star <input className="bg-gray-200" type="text" /> 100%
              </h1>
              <h1 className="text-[15px] font-medium p-[5px]">
                5 Star <input className="bg-gray-200" type="text" /> 100%
              </h1>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
