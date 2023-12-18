import React from "react";
import {
  story1,
  story2,
  story3,
  story4,
  story5,
  story6,
} from "../../assets/images";
import { storyCover } from "../../components/constants";

const Stories = () => {
  return (
    <section className="flex relative flex-col  items-center justify-center">
      <div className="text-center text-[29px] pt-4 max-md:text-[23px] max-md:pb-3 pb-7 font-[100] font-CooperHevitt   border-black">
        STORIES
      </div>
      <div className=" grid grid-cols-3 max-md:grid-cols-2  gap-x-24 max-md:w-[90%] max-md:gap-x-10 max-md:gap-y-6 gap-y-20 my-10 max-md:my-6 justify-center ">
        {storyCover.map((ind) => {
          return (
            <div key={2} className="z-50">
              <img
                src={ind.cover}
                alt=""
                className=" w-[240px]  max-md:w-full "
              />
            </div>
          );
        })}

        <div className="bg-slate-200 z-10 max-lg:hidden h-28  w-28 right-1 rounded-full  absolute  "></div>
        <div className="bg-slate-200 z-10  h-72 top-96 w-72 max-lg:hidden  rounded-full  absolute  right-12 "></div>
        <div className="bg-slate-200 z-10 h-48 top-[600px] w-48 max-lg:hidden  rounded-full  absolute  left-4 "></div>
      </div>
    </section>
  );
};

export default Stories;
