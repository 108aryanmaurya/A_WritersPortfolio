import React from "react";
import {
  TheGreatestIndianStoriesEverTold,
  heroBannerImage,
} from "../../assets/images";
import "./hero.css";
import { ArrowRightBlack } from "../../assets/icons";
export default function Hero() {
  return (
    <>
      <div
        className={`relative bigger max-sm:min-h-[250px]  min-h-[500px] max-2xl:min-h-[380px]`}
      >
        <div className="w-full h-full group text-center relative overflow-hidden">
          <div className="transition-all ease-in-out duration-200 absolute bg-pink-200 top-0  w-[50%] max-sm:w-[60%] h-full ">
            <div className="w-full h-full flex justify-start items-center">
              <img
                src={TheGreatestIndianStoriesEverTold}
                className="h-[400px] ml-10 max-md:ml-5 max-sm:ml-0 2xl:h-[500px] max-xl:h-[350px] max-lg:h-[300px] max-md:h-[250px] max-sm:h-[230px] mr-10 max-md:mr-7 max-sm:mr-2"
                alt=""
              />
            </div>
          </div>
          <div className="bg-pink-100  transition-all ease-in-out duration-200 absolute top-0 right-0 z-[1] w-[80%] max-sm:w-[75%] h-full flex justify-end [clip-path:polygon(100%_100%,30%_100%,0%_0%,100%_0%)] ">
            <div
              className="absolute -z-50 h-full w-full flex justify-end bg-cover bg-no-repeat opacity-60"
              style={{
                backgroundImage: `url(${heroBannerImage})`,
              }}
            ></div>

            <div class="w-[75%] max-sm:w-[80%] h-full flex justify-center items-center flex-col space-y-2 p-3">
              <h3 class="font-black text-gray-800 text-6xl 2xl:text-7xl max-xl:text-5xl max-lg:text-3xl max-md:text-xl max-sm:text-[20px] uppercase book-cover max-sm:font-extrabold">
                The Greatest Indian Stories Ever Told
              </h3>
              <div>
                <span class="md:text-lg inline text-right max-sm:text-center max-sm:leading-4 text-gray-800 text-base font-CooperHevitt max-sm:text-[10px] line-clamp-4 max-md:line-clamp-3 ">
                  The Greatest Indian Stories Ever Told is a selection of some
                  of the finest literary short fiction written by Indian writers
                  since the genre came into being in the country in the late
                  nineteenth century. Including early masters of the form,
                  contemporary stars, as well as brilliant writers who came of
                  age in the twenty-first century, this anthology takes in its
                  sweep stories from the various regions, languages, and
                  literatures of India.
                </span>
              </div>

              <div className="flex gap-5 pt-5 max-sm:pt-0">
                <div className="max-sm:p-1 max-md:mt-2  max-md:m-0   w-auto max-w-[200px] flex justify-center items-center flex-row text-black px-2 py-1 border-2 p2 gap-2 max-md:gap-1 max-sm:text-[12px]   border-black">
                  <span>READ MORE</span>
                  <img
                    src={ArrowRightBlack}
                    className="w-8 px-1 max-md:pl-0 max-md:w-5 max-sm:w-4 max-md:px-0 pl-2"
                    alt=""
                  />
                </div>
                <div className="max-sm:p-1 max-sm:hidden max-md:mt-2  max-md:m-0 py-1  w-auto max-w-[200px] flex justify-center items-center flex-row text-black px-2  border-2 p2 gap-2 max-md:gap-1 max-sm:text-[12px]   border-black">
                  <span>BUY NOW</span>
                  <img
                    src={ArrowRightBlack}
                    className="w-8 px-1 max-md:pl-0 max-md:w-5 max-md:px-0 pl-2"
                    alt=""
                  />
                </div>
              </div>
              <div class="hidden justify-between item-center absolute bottom-0 ">
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-yellow-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <p class="text-gray-200 font-medium max-sm:text-[10px] md:block mr-10 max-sm:mr-3">
                    Ratings
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-pink-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p class="text-gray-200 max-sm:text-[10px]  font-bold text-sm">
                    4.96
                    <span class="text-gray-200 max-sm:text-[10px]  font-normal">
                      (76 reviews)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
