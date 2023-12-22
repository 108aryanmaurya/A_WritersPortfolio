import React from "react";
import "./HomeHeroCards.css";
import { ArrowRight } from "../../assets/icons";
import DOMPurify from "dompurify";

const HomeHeroCards = ({ story }) => {
  return (
    <div className="relative w-[1000px] max-xl:w-[900px] max-lg:w-[700px] 2xl:w-[1200px] max-sm:w-full rounded max-md:rounded-none h-full flex-shrink-0 snap-center scroll-smooth overflow-hidden">
      <div className="w-full bg-black h-full flex flex-row group text-center scroll-smooth relative  overflow-hidden">
        <div
          className={`bg-gray-800 transition-all ease-in-out duration-200 opacity-80 max-sm:opacity-70 z-[1] w-[80%] h-full  [clip-path:polygon(0%_0%,65%_0%,100%_100%,0%_100%)]`}
        >
          <div class="w-[74%] h-full flex justify-center items-center flex-col text-left space-y-2 p-3">
            <div className="ml-10 max-sm:ml-0">
              <h3 class="font-black font-Gamiliademo tracking-wider text-white 2xl:text-3xl text-4xl max-lg:text-3xl max-md:text-xl mb-3 max-sm:mb-1">
                {story?.title}
              </h3>
              <h3 class="font-black font-Authorfont tracking-wider mb-2  text-gray-100  text-xl max-md:text-lg max-sm:text-base">
                -By A.M. Gautam
              </h3>

              <p class=" text-gray-50 text-base  max-sm:text-[10px] font-montserrat">
                {story?.description.length > 180
                  ? story?.description.substring(0, 180) + "   . . ."
                  : story?.description}
              </p>
              <div className="max-sm:p-1 my-4 max-md:mt-4 max-md:m-2 max-md:max-w-[150px]  w-auto max-w-[200px] flex justify-center items-center flex-row text-white  text-sm 2xl:text-lg  border-[1px] p-2   max-sm:text-[14px]   border-white">
                READ STORY
                <img src={ArrowRight} className="w-8 px-1 pl-2" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="transition-all ease-in-out duration-200 absolute bg-gray-200 top-0 right-0 w-[55%] h-full">
          <div
            className="w-full h-full flex justify-end items-center inside-shadow  bg-no-repeat bg object-center -z-50 bg-cover"
            style={{
              backgroundImage: `url(${story?.cover})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroCards;
