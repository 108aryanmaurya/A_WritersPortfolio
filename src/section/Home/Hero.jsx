import React from "react";
import { book } from "../../assets/images";
export default function Hero() {
  return (
    <>
      <div
        className={`relative bigger max-sm:min-h-[250px]  min-h-[500px] max-2xl:min-h-[380px]`}
      >
        <div className="w-full h-full group text-center relative uppercase overflow-hidden">
          <div className="hero-one  transition-all ease-in-out duration-200 absolute top-0 z-[1] w-[80%] h-full bg-gray-200 [clip-path:polygon(0%_0%,65%_0%,100%_100%,0%_100%)]">
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <span className="text-[86px] max-lg:text-[75px] max-md:text-[70px] max-sm:text-[42px] leading-[5.5rem]  w-[100%] font-bold flex justify-center items-center max-sm:leading-[3rem]">
                <span className="relative text-white top-0 transition-all ease-linear  duration-200">
                  A.M&nbsp;Gautam
                </span>
              </span>
            </h1>{" "}
          </div>
          <div className="transition-all ease-in-out duration-200 absolute bg-gray-800 top-0 right-0 w-[70%] h-full ">
            <div className="w-full h-full flex justify-end items-center">
              <img src={book} className="h-[300px] mr-10" alt="" />
            </div>
          </div>
          {/* <div className="w-full absolute h-full bg-[rgba(0,0,0,.4)] z-10 "></div> */}
        </div>
      </div>
    </>
  );
}
