import React from "react";
import { Download2 } from "../../assets/images";
import { Download } from "../../assets/icons";

const BookDownload = () => {
  return (
    <section className="flex  ml-56 max-md:ml-2 max-md:mt-14 mt-32 items-center relative">
      <div className="w-[600px] max-md:w-[250px]  p-22 z-30  ">
        <img src={Download2} alt="" className="" />
      </div>

      <div className="right-[30%] p-24  max-md:gap-2 z-30 bg-slate-100 max-md:right-2  absolute  max-md:p-5  uppercase   gap-6   flex-col flex justify-center items-center">
        <div className="font-Oswald max-md:text-[20px]  text-[28px]">
          Get a sample of book
        </div>
        <div className="z-10  max-sm:p-1 max-md:mt-2  text-[20px] font-[400]  max-md:left-2  max-md:m-0     max-md:w-auto max-md:h-auto   flex justify-center  items-center  max-md:font-[300]    text-blackborder-2  p-2 gap-2 uppercase max-md:gap-1 max-sm:text-[14px] border-2  max-md:border-[1px]  border-black">
          <span>Download</span>
        </div>
      </div>
    </section>
  );
};

export default BookDownload;
