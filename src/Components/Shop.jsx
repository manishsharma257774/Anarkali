import React from "react";

export default function Shop() {
  return (
    <>
      <div className=" h-auto w-full">
        <div className="bg-gray-100 h-auto w-full p-[20px] flex items-center justify-between">
          <h1 className="text-[30px] font-medium">Shop</h1>
          <h2 className="text-[20px]">
            Home <span className="p-[15px]">Shop</span>
          </h2>
        </div>
      </div>
      <div className=" h-auto w-full">
        <div className=" h-auto w-full p-[20px] flex items-center justify-between">
          <h1 className="text-[20px] font-normal">
            Showing 1-15 of 50 results
          </h1>
          <i className="bi bi-list lg:hidden md:block text-[30px] text-black"></i>
          <h2 className="text-[17px] hidden lg:block ">
            <ul className="flex gap-[20px] ">
              <li>Filter</li>
              <li>
                <i class="bi bi-text-indent-left"></i>
              </li>
              <li>DEFAULT SORTING</li>
              <li>
                <i class="bi bi-search"></i>
              </li>
              <li>Show</li>
              <li>9</li>
              <li>12</li>
              <li>18</li>
              <li>24</li>
            </ul>
          </h2>
        </div>
      </div>
      <hr />
      <div className=" h-auto w-[100%] p-[5px] ">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 w-[100%]">
          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712038966/product1-1_dz5mid_helmiy.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Anarkali</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$41.99</del>-$37.99
            </p>
          </div>

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

          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712038981/product1-12-450x600_ma9zfg_dmftvo.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Anouk</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$72.90</del>-$70.00
            </p>
          </div>

          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039013/product1-39_tosi0v_bunoas.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Baesd</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$87.87</del>-$81.87
            </p>
          </div>

          <div className="h-auto w-[100%] p-[10px] hidden lg:block">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039064/product2-29-450x600_kkwbks_ibm0y6.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Amzira</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$24.99</del>-$14.99
            </p>
          </div>
        </div>
      </div>
      <div className=" h-auto w-[100%] p-[5px] ">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 w-[100%]">
          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712038969/product1-7-450x600_gvini8_beutve.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Bitiya</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$324.50 </del>-$294.50
            </p>
          </div>

          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039056/product2-27-450x600_x8gkmn_mo9vqn.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Bitiya Bahama</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$85.99 </del>-$74.99
            </p>
          </div>

          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039009/product1-38_zhyydr_jpkjcy.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Born Babies</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$45.99 </del>-$41.99
            </p>
          </div>

          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712038962/product_o6wb5b_i4zxjr.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Cherry</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$71.99 </del>-$61.99
            </p>
          </div>

          <div className="h-auto w-[100%] p-[10px] hidden lg:block">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039099/product3-3-450x600_pgrt96_t3qwrg.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Cutiekins</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$147.50 </del>-$127.50
            </p>
          </div>
        </div>
      </div>

      <div className=" h-auto w-[100%] p-[5px] ">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 w-[100%]">
          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039103/product3-24-450x600_ba4gyv_obpkac.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Deyann</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$47.87 </del>–$41.87
            </p>
          </div>

          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039015/product1-450x600_tdam7z_azll5y.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">External Product</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$59.00</del>-$39.00
            </p>
          </div>

          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039081/product2-40-450x600_qiikvz_lbd3zr.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Fabindia</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$330.90</del>-$230.00
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
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039038/product2-16-450x600_mxhcur_wg7ozi.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Goroly</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$107.99</del>-$89.99
            </p>
          </div>
        </div>
      </div>
      <div className=" h-auto w-[100%] p-[5px] ">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 w-[100%]">
          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039019/product2-1-450x600_ivndnm.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Groupped Product</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$27.90 </del>-$127.50
            </p>
          </div>

          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039066/product2-31-450x600_i2728t.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Hangup</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$78.87</del>-$65.87
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
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039046/product2-20-450x600_amr8wc.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">House of Dress</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$107.99 </del>–$89.99
            </p>
          </div>

          <div className="h-auto w-[100%] p-[10px] hidden lg:block">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039118/product4-21-450x600_ytnbhk.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Image Variable</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$222.00</del>-$233.00
            </p>
          </div>
        </div>
      </div>

      <div className=" h-auto w-[100%] p-[5px] ">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 w-[100%]">
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

          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712038977/product1-10-450x600_u72qg5.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Indo Era</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$47.90</del>-$27.90
            </p>
          </div>

          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712038983/product1-13_zcrgp5.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Ivoc</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$97.45</del>-$67.45
            </p>
          </div>

          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039025/product2-8-450x600_gqnl7d.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Jompers</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$145.50</del>-$127.50
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
      </div>
      <div className=" h-auto w-[100%] p-[5px] ">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 w-[100%] ">
          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039088/product3-1-450x600_1_t6gh61.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Khushal K</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$97.99 </del>-$95.99
            </p>
          </div>

          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039078/product2-34-450x600_npts0f.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Kid 1</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$61.87 </del>-$54.87
            </p>
          </div>

          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039060/product2-28-450x600_cf5rqj.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Kisah</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$64.99 </del>-$54.99
            </p>
          </div>

          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039039/product2-18-450x600_vejgpr.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Label</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$107.99 </del>-$89.99
            </p>
          </div>

          <div className="h-auto w-[100%] p-[10px] hidden lg:block">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039085/product2-450x600_xigjtr.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Libas</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$54.60</del>-$51.60
            </p>
          </div>
        </div>
      </div>
      <div className=" h-auto w-[100%] p-[5px] ">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 w-[100%]">
          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039095/product3-2-450x600_rvhukq.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Misskurti</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$47.87 </del>–$41.87
            </p>
          </div>

          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039106/product3-29-450x600_zf2nc2.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Nauti Nati</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$59.00</del>-$39.00
            </p>
          </div>

          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039049/product2-21-450x600_kvfbc4.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Nayo</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$330.90</del>-$230.00
            </p>
          </div>

          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039126/product5-17-450x600_weaajp.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Out of Stock</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$45.99</del>-$35.99
            </p>
          </div>

          <div className="h-auto w-[100%] p-[10px] hidden lg:block">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039005/product1-37_zr4ias.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Pantaloons</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$107.99</del>-$89.99
            </p>
          </div>
        </div>
      </div>
      <div className=" h-auto w-[100%] p-[5px] ">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 w-[100%]">
          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712038974/product1-8_fadw0u.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Rojaa</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$324.50</del>-$294.50
            </p>
          </div>

          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039023/product2-4-450x600_dvuh5j.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Sangria</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$147.50</del>-$127.50
            </p>
          </div>

          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712038986/product1-14_dlqxio.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Sanwara</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$72.90</del>-$70.00
            </p>
          </div>

          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712038963/product1_xhgaz5.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Silk Land</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$79.99 </del>–$69.99
            </p>
          </div>

          <div className="h-auto w-[100%] p-[10px] hidden lg:block">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039038/product2-16-450x600_mxhcur_wg7ozi.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Simple Product</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$230.00</del>-$189.00
            </p>
          </div>
        </div>
      </div>

      <div className=" h-auto w-[100%] p-[5px] ">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 w-[100%]">
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

          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039123/product5-13-450x600_kjrrvq.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Sojanya</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$89.50</del>-$78.50
            </p>
          </div>

          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039003/product1-26_a06ibs.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Stuffie Land</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$107.99</del>-$89.99
            </p>
          </div>

          <div className="h-auto w-[100%] p-[10px] hidden lg:block">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039071/product2-32-450x600_vc8uya.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">The Ethnic Co</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$78.87</del>-$65.87
            </p>
          </div>
        </div>
      </div>
      <div className=" h-auto w-[100%] p-[5px] ">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 w-[100%]">
          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039074/product2-33-450x600_alnltw.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Tiber Taber</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$78.87</del>-$65.87
            </p>
          </div>
          <div className="h-auto w-[100%] p-[10px]">
            <img src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712040171/product2-3_epcfr5.avif" alt="" />
            <h2 className="p-[2px] font-medium">Tiny Kingdom</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$67.87 </del>-$61.87
            </p>
          </div>

          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039029/product2-10-450x600_wy1mm6.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">V-mart</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$72.90</del>-$70.00
            </p>
          </div>

          <div className="h-auto w-[100%] p-[10px]">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039019/product2-1-450x600_ivndnm.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Varanga</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$27.99 </del>-$21.99
            </p>
          </div>

          <div className="h-auto w-[100%] p-[10px] hidden lg:block">
            <img
              src="https://res.cloudinary.com/dbkghiyvh/image/upload/v1712039114/product3-32-450x600_wo4shb.avif"
              alt=""
            />
            <h2 className="p-[2px] font-medium">Vastramay</h2>
            <p className="p-[2px] font-medium">
              <del className="text-red-600">$77.99</del>-$69.77
            </p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
