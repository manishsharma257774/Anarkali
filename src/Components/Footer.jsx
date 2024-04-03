import React from "react";

export default function Footer() {
  return (
    <>
      <div className=" h-auto w-full p-[20px]">
        <ul className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-[17px]">
          <li className="flex items-center justify-center m-[10px]">
            <p className="mt-[-10px] text-[30px] p-[10px]">
              <i className="bi bi-truck"></i>
            </p>
            <h1>
              Free shipping <br />
              Standard Shipping
            </h1>
          </li>
          <li className="flex items-center justify-center m-[10px]">
            <p className="mt-[-10px] text-[30px] p-[10px]">
              <i className="bi bi-backpack"></i>
            </p>
            <h1>
              Secure Payment <br />
              100% risk-free shopping
            </h1>
          </li>
          <li className=" flex items-center justify-center m-[10px]">
            <p className="mt-[-10px] text-[30px] p-[10px]">
              <i className="bi bi-gift-fill"></i>
            </p>
            <h1>
              Special Campaigns <br />
              Guaranteed Saving
            </h1>
          </li>
          <li className="flex  items-center justify-center m-[10px]">
            <p className="mt-[-10px] text-[30px] p-[10px]">
              <i className="bi bi-person-up"></i>
            </p>
            <h1>
              Customer Service <br />
              Give us feedback
            </h1>
          </li>
        </ul>
      </div>
      <hr />
      <footer className="bg-slate-100 dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                <img
                  className="h-[80px]"
                  src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712043613/240-logo_fdyzz3.avif"
                />{" "}
              </span>
              <h1 className="text-[30px] p-[5px]">
                <i className="bi bi-facebook p-[10px] cursor-pointer text-blue-600"></i>
                <i className="bi bi-twitter p-[10px] cursor-pointer text-blue-600"></i>
                <i className="bi bi-youtube p-[10px] cursor-pointer text-red-600"></i>
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-[20px] font-semibold text-gray-900 uppercase dark:text-white">
                  CATEGORIES{" "}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li>Woman Denim</li>
                  <li>Accessories</li>
                  <li>Man Denim</li>
                  <li>Clothes</li>
                  <li>Shoes</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-[20px] font-semibold text-gray-900 uppercase dark:text-white">
                  CAMPAIGNS{" "}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li>Winter Shoes</li>
                  <li>Women T-shirts</li>
                  <li>%50 Sales</li>
                  <li>Outlet</li>
                  <li>Pre-Sale</li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-[20px] font-semibold text-gray-900 uppercase dark:text-white">
                  HELP
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li>Order Tracking</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Tutorials</li>
                  <li>FAQ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
