import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState(false);

  const location = useLocation().pathname;
  const navigate = useNavigate();
  return (
    <>
      <nav className="bg-white border-2 border-solid border-black top-[0px] sticky z-[5] shadow-2xl">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <img
            src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712043613/240-logo_fdyzz3.avif"
            className="h-[55px] w-[40%] sm:w-[20%] md:w-[16%] md:h-[55px] lg:w-[15%] lg:h-[60px]"
            alt=""
          />
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div>
              <button
                onClick={() => {
                  setIcon(!icon);
                }}
              >
                <i
                  className={`bi md:block text-black text-[25px] bi-${
                    icon ? "x" : "back"
                  }`}
                ></i>
              </button>

              <div className={`w-full  ${icon ? "block" : "hidden"}`}>
                <ul className="font-medium md:flex-row  flex gap-[20px] text-[20px]">
                  <li>
                    <i class="bi bi-handbag cursor-pointer"></i>
                  </li>
                  <li>
                    <i class="bi bi-suit-heart-fill text-red-600 cursor-pointer"></i>
                  </li>
                  <li>
                    <i class="bi bi-person cursor-pointer"></i>
                  </li>
                  <li>
                    <i class="bi bi-arrow-clockwise cursor-pointer"></i>
                  </li>
                  <li>
                    <i class="bi bi-bell-fill text-yellow-300 cursor-pointer"></i>
                  </li>
                </ul>
              </div>
            </div>

            <button
              onClick={() => {
                setOpen(!open);
              }}
            >
              <i
                className={`bi md:hidden text-black text-[35px] bi-${
                  open ? "x" : "list"
                }`}
              ></i>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 text-[20px] md:text-[17px] lg:text-[19px]">
              <Link
                to={"/"}
                className={`block py-2 px-3 ${
                  location == "/" ? "text-orange-600" : "text-black"
                }`}
              >
                HOME
              </Link>
              <Link
                to={"/shop"}
                className={`block py-2 px-3 ${
                  location == "/shop" ? "text-orange-600" : "text-black"
                }`}
              >
                SHOP
              </Link>
              <Link
                to={"/product"}
                className={`block py-2 px-3 ${
                  location == "/product" ? "text-orange-600" : "text-black"
                }`}
              >
                PRODUCT
              </Link>

              <Link
                to={"/page"}
                className={`block py-2 px-3 ${
                  location == "/page" ? "text-orange-600" : "text-black"
                }`}
              >
                CONTACT
              </Link>
              <Link
                to={"/mega"}
                className={`block py-2 px-3 ${
                  location == "/mega" ? "text-orange-600" : "text-black"
                }`}
              >
                MEGA
              </Link>
            </ul>
          </div>
          <div className={`w-full  ${open ? "block" : "hidden"}`}>
            <ul className="font-medium  p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse">
              <Link
                to={"/"}
                className={`block py-2 px-3 ${
                  location == "/" ? "text-orange-600" : "text-black"
                }`}
              >
                HOME
              </Link>
              <Link
                to={"/shop"}
                className={`block py-2 px-3 ${
                  location == "/shop" ? "text-orange-600" : "text-black"
                }`}
              >
                SHOP
              </Link>
              <Link
                to={"/product"}
                className={`block py-2 px-3 ${
                  location == "/product" ? "text-orange-600" : "text-black"
                }`}
              >
                PRODUCT
              </Link>

              <Link
                to={"/page"}
                className={`block py-2 px-3 ${
                  location == "/page" ? "text-orange-600" : "text-black"
                }`}
              >
                CONTECT
              </Link>
              <Link
                to={"/mega"}
                className={`block py-2 px-3 ${
                  location == "/mega" ? "text-orange-600" : "text-black"
                }`}
              >
                MEGA
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
