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
import { useNavigate } from "react-router";

const Stories = () => {
  const navigate = useNavigate();
  return (
    <section className="flex relative flex-col  items-center justify-center">
      <div className="text-center text-[29px] pt-4 max-md:text-[23px] max-md:pb-3 pb-7 font-[100] font-CooperHevitt   border-black">
        SHORT STORIES
      </div>
      <div className=" grid grid-cols-3 max-md:grid-cols-2  gap-x-24 max-md:w-[90%] max-md:gap-x-10 max-md:gap-y-16 gap-y-20 my-10 max-md:my-6 justify-center ">
        {storyCover.map((ind) => {
          return (
            <section
              key={2}
              className="relative"
              onClick={() => {
                navigate(`/Story/${ind.title.replace(/\s+/g, "-")}`);
              }}
            >
              <div className="z-50  shadow-black bg-black max-md:shadow-xl max-md:shadow-gray-600  shadow-md">
                <img
                  src={ind.cover}
                  alt=""
                  className=" w-[240px] max-md:h-[280px]  opacity-70 h-[380px]  max-md:w-full "
                />
              </div>
              <div className=" z-50 absolute max-md:left-3  w-[75%]  left-9 bottom-12 flex flex-col  max-md:bottom-7  gap-24  max-md:gap-20 max-md:w-[85%]">
                <div className="tracking-widest  text-yellow-400 uppercase font-Gamiliademo max-md:text-[18px]  text-[28px] text-center ">
                  {ind.title}
                </div>
                <div className="tracking-widest  text-yellow-500 uppercase font-Authorfont text-[20px]  font-light max-md:text-[14px] text-center ">
                  By A.M. Gautam
                </div>
              </div>
            </section>
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
