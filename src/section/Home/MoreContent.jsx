import React from "react";

export default function MoreContent() {
  return (
    <>
      <div className="bg-gray-900 my-10 py-24 px-12 max-sm:px-8 ">
        <div className="flex flex-col text-center w-full mb-10">
          <h2 className="max-sm:tracking-[6px] max-sm:text-[27px] tracking-[6px] font-semibold text-[40px]    text-[#FAF8F0] font-Oswald textce">
            Reads By A.M Gautam
          </h2>
        </div>
        <div className="flex justify-center max-sm:flex-col items-center">
          <div className="flex flex-col m-10 max-sm:m-5 max-sm:justify-center max-sm:items-center max-sm:pb-5">
            <img
              alt="Art"
              src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="h-64 w-64 object-cover"
            />

            <h3 className="mt-4 text-lg font-bold text-white sm:text-xl">
              Lorem, ipsum dolor.
            </h3>

            <p className="mt-2 max-w-sm text-gray-200 max-sm:text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              reiciendis sequi ipsam incidunt.
            </p>
          </div>
          <div className="flex flex-col  max-sm:m-5 m-10 max-sm:justify-center max-sm:items-center max-sm:pb-5">
            <img
              alt="Art"
              src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="h-64 w-64 object-cover"
            />

            <h3 className="mt-4 text-lg font-bold text-white sm:text-xl">
              Lorem, ipsum dolor.
            </h3>

            <p className="mt-2 max-w-sm text-gray-200 max-sm:text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              reiciendis sequi ipsam incidunt.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
