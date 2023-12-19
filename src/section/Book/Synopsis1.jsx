import React from "react";
import { Synopsis } from "../../assets/images";

const Synopsis1 = ({ bookdetails }) => {
  return (
    <section className="relative max-md:mt-14 flex mt-14">
      <div className="flex justify-between max-md:justify-center  max-md:flex-col  items-center">
        <div className="w-[400px]   max-md:w-full  max-md:py-0 py-20 max-md:h-[200px] max-md:bg-black    max-md:blur-[0px]   h-full ">
          <img
            src={Synopsis}
            className="w-full object-cover max-md:opacity-[0.29]  h-full"
            alt=""
          />
        </div>
        <div className=" z-30  text-[35px]  font-bold  max-md:text-[23px] absolute  left-40 max-md:top-8  font-[100] font-CooperHevitt     border-b-[3px] tracking-widest  text-white border-white ">
          SYNOPSIS
        </div>
        <div className="z-20 mr-72 text-black  max-md:top-[84px] max-md:bg-slate-300 max-md:mr-0 bg-white text-[18px]   w-[40%]   max-md:text-[15px] max-md:leading-[19px] font-montserrat    max-md:ml-0  max-sm:mt-0  max-md:my-0  my-20 max-md:w-full max-md:p-4  p-10  text-justify  ">
          T{bookdetails?.description}
        </div>
      </div>
      <div className="w-[500px] max-md:hidden   bg-gray-300  absolute h-full right-0 top-0"></div>
    </section>
  );
};

export default Synopsis1;
