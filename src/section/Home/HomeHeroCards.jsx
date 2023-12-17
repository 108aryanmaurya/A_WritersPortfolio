// HomeHeroCards.jsx
import React from "react";

const HomeHeroCards = ({ imageSrc, backgroundColor }) => {
  return (
    <div className="slide w-[800px] max-sm:w-full rounded h-full flex-shrink-0 snap-center overflow-hidden">
      <div className="w-full h-full flex flex-row group text-center relative uppercase overflow-hidden">
        <div
          className={`bg-${backgroundColor} transition-all ease-in-out duration-200 z-[1] w-[80%] h-full  [clip-path:polygon(0%_0%,65%_0%,100%_100%,0%_100%)]`}
        >
          <div class="w-[70%] h-full flex justify-center items-center flex-col text-left space-y-2 p-3">
            <div>
              <h3 class="font-black text-gray-800 md:text-3xl text-xl">
                Lorem Ipsum dolor
              </h3>
              <h3 class="font-black font-Authorfont tracking-wider mb-5 text-gray-800 md:text-xl text-xl">
                -By A.M Gautam
              </h3>
              <span
                type="submit"
                class="m-2 max-sm:m-1 my-3 max-w-[150px] top-0 right-0 text-white bg-[#B564F7] max-sm:text-[10px] max-sm:px-2 max-sm:py-1 px-3 py-2 justify-center flex items-center cursor-pointer hover:bg-[#bb80ec] font-semibold"
              >
                Read Now
              </span>
              <p class="md:text-lg text-gray-800 text-base max-sm:text-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Officiis.
              </p>
            </div>
          </div>
        </div>
        <div className="transition-all ease-in-out duration-200 absolute bg-gray-800 top-0 right-0 w-[55%] h-full">
          <div className="w-full h-full flex justify-end items-center">
            <img
              src={imageSrc}
              className="h-[300px] 2xl:h-[350px] max-xl:h-[280px] max-lg:h-[250px] max-md:h-[200px] max-sm:h-[170px] mr-10 max-md:mr-7 max-sm:mr-2"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroCards;
