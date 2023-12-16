import React from "react";
import { realdownload } from "../../assets/images";
import { Download } from "../../assets/icons";

const BookDownload = () => {
  return (
    <section className="flex justify-end mt-36 items-center relative">
      <div className="z-10  max-sm:p-1 max-md:mt-2  text-[30px] font-[250] absolute  left-[29%] max-md:left-0  top-[40%]  max-md:m-1    w-[400px] flex justify-center items-center h-20   bg-gray-900 text-white   border-2 p-2 gap-2 uppercase max-md:gap-1 max-sm:text-[14px]   border-black">
        <span>get a sample pdf</span>
        <img
          src={Download}
          className="w-10 px-1  max-md:pl-0 max-md:w-5 max-md:px-0 pl-2"
          alt="dwl"
        />
      </div>
      <div className="w-[500px] max-md:w-full  mr-12 p-22 z-30  my-20">
        <img src={realdownload} alt="" className="" />
      </div>
      <div className="bg-gray-300 absolute right-28 p-22 h-[100%]     w-[60%]"></div>
    </section>
  );
};

export default BookDownload;
