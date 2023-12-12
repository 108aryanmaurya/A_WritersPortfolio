import React from "react";
import { book } from "../../assets/images";
export default function Hero() {
  return (
    <>
      <div
        className={`relative bigger max-sm:min-h-[250px]  min-h-[500px] max-2xl:min-h-[380px]`}
      >
        <div className="w-full h-full group text-center relative uppercase overflow-hidden">
          <div
            className="bg-white  transition-all ease-in-out duration-200 absolute top-0 z-[1] w-[80%] h-full  [clip-path:polygon(0%_0%,65%_0%,100%_100%,0%_100%)] bg-cover bg-no-repeat"
            // style={{
            //   backgroundImage: `url(https://www.shutterstock.com/image-photo/hand-holding-book-read-alone-600nw-2039738759.jpg)`,
            // }}
          >
            <div class="w-[70%] h-full flex justify-center items-center flex-col space-y-2 p-3">
              <h3 class="font-black text-gray-800 md:text-3xl text-xl">
                Lorem Ipsum dolor
              </h3>
              <h3 class="font-black font-Authorfont tracking-wider text-gray-800 md:text-xl text-xl">
                -By A.M Gautam
              </h3>
              <p class="md:text-lg text-gray-800 text-base max-sm:text-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis.
              </p>

              <div className="flex ">
                <span
                  type="submit"
                  class="m-2 max-sm:m-1  top-0 right-0 text-white bg-[#B564F7] max-sm:text-[10px] max-sm:px-2 max-sm:py-1 px-3 py-2 justify-center flex items-center cursor-pointer hover:bg-[#bb80ec] font-semibold"
                >
                  Read Sample Copy
                </span>
                <span
                  type="submit"
                  class="m-2 max-sm:m-1  top-0 right-0 text-white bg-[#B564F7] max-sm:text-[10px] max-sm:px-2 max-sm:py-1 px-3 py-2 justify-center flex items-center cursor-pointer hover:bg-[#bb80ec] font-semibold"
                >
                  Buy now
                </span>
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
          <div className="transition-all ease-in-out duration-200 absolute bg-gray-800 top-0 right-0 w-[55%] h-full ">
            <span
              type="submit"
              class="m-2 max-sm:m-1 2xl:text-xl absolute top-0 right-0 text-white bg-[#B564F7] max-sm:text-[10px] max-sm:px-2 max-sm:py-1 px-3 py-2 justify-center flex items-center cursor-pointer hover:bg-[#bb80ec] font-semibold"
            >
              Buy now
            </span>
            <div className="w-full h-full flex justify-end items-center">
              <img
                src={book}
                className="h-[350px] 2xl:h-[400px] max-xl:h-[300px] max-lg:h-[250px] max-md:h-[200px] max-sm:h-[170px] mr-10 max-md:mr-7 max-sm:mr-2"
                alt=""
              />
            </div>
          </div>
          {/* <div className="w-full absolute h-full bg-[rgba(0,0,0,.4)] z-10 "></div> */}
        </div>
      </div>
    </>
  );
}
