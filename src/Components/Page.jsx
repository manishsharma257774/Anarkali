import React from "react";

export default function Page() {
  return (
    <>
      <div className="h-auto w-full grid grid-cols-1 lg:grid-cols-2">
        <div className=" h-auto w-[100%] flex items-center justify-center p-[20px]">
          <div className="h-[550px] w-[100%] shadow-2xl border-4 border-solid border-yellow-300">
            <iframe
              className="w-[100%] h-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14220.496174139067!2d75.74876655!3d26.9946256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1711092305297!5m2!1sen!2sin"
            ></iframe>
          </div>
        </div>
        <div className=" h-[600px] w-[100%] p-[20px]">
          <div className="h-auto w-[100%]">
            <div className="flex items-center justify-between">
              <div className="text-[20px] sm:text-[30px] p-[10px] ">
                {" "}
                <h1 className="font-medium">Our Showroom</h1>
                <p className="text-[12px] font-semibold sm:text-[15px]">
                  551 Water Color Green Ball St, <br /> New York, NY 2041, USA
                </p>
                <span className="text-[12px] sm:text-[15px] text-gray-400">
                  +09000 000 34 35
                  <br />
                  +09000 000 34 36
                </span>
              </div>
              <div className="text-[20px] sm:text-[30px] p-[10px] ">
                {" "}
                <h1 className="font-medium">Quick Help</h1>
                <p className="text-[12px] font-semibold sm:text-[15px]">
                  You can ask anything you want to <br /> know about our
                  products or services <br /> via this e-mail.
                </p>
                <span className="text-[12px] sm:text-[15px] text-gray-400">
                  help@anarkali.com
                  <br />
                  refund@anarkali.com
                </span>
              </div>
            </div>
          </div>
          <h1 className="text-[30px] font-medium">Send a Message</h1>
          <input
            className="p-[10px] w-[100%] border-[1px] border-solid border-b-slate-800"
            placeholder="Your name"
            type="text"
          />{" "}
          <br /> <br />
          <input
            className="p-[10px] w-[100%] border-[1px] border-solid border-b-slate-800"
            placeholder="Your E-mail"
            type="text"
          />
          <br />
          <br />
          <input
            className="p-[10px] w-[100%] border-[1px] border-solid border-b-slate-800"
            placeholder="Technical Help"
            type="text"
          />
          <br />
          <br />
          <textarea
            className="h-[50px] w-[100%] p-[10px] border-[1px] border-solid border-b-slate-800"
            name=""
            id=""
            placeholder="Message"
            cols="30"
            rows="10"
          ></textarea>
          <br />
          <button className="rounded-lg p-[7px] px-[50px] hover:bg-red-600 bg-black text-white font-semibold">
            Submit
          </button>
        </div>
      </div>{" "}
      <hr />
    </>
  );
}
