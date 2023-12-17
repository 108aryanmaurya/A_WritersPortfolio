import React from "react";
import { campaign1, campaign2 } from "../assets/images";
import { ArrowRightBlack } from "../assets/icons";
import Hero from "../section/NewsEvents/Hero";
import Cards from "../section/NewsEvents/Cards";
export default function NewsEvents() {
  return (
    <section>
      <div className="grid">
        <Hero />
      </div>
      <Cards />
      <div className="flex justify-center items-start  gap-16">
        <img src={campaign1} alt="" className="w-[40%]" />
        <div className="w-[50%] flex flex-col gap-6 ">
          <p className="text-[40px]">Lorem ipsum dolor sit</p>
          <p className="text-[22px]">Starting Date: 23 August 2023</p>
          <p></p>
          <div
            className=" max-sm:p-1 max-md:mt-2  max-md:m-1   w-auto max-w-[200px] flex justify-center items-center flex-row text-black   border-2 p-2 gap-2 max-md:gap-1 max-sm:text-[14px]   border-black"
            onClick={() => {
              // navigate(`/Book/${singleBook.title}`);
            }}
          >
            <span>READ MORE</span>
            <img
              src={ArrowRightBlack}
              className="w-8 px-1 max-md:pl-0 max-md:w-5 max-md:px-0 pl-2"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
