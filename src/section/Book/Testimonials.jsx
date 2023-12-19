import React from "react";
import { ReaderReview } from "../../components/constants";
import { reviewhero } from "../../assets/images";

const Testimonials = () => {
  return (
    <section className=" relative  flex flex-col items-center text-slate-200 mt-28 max-md:mt-7 max-md:py-8">
      <div className="w-full  max-md:h-[600px] top-0  h-[800px] bg-black     max-md:py-0   max-md:bg-black max-md:blur-[0px]  ">
        <img
          src={reviewhero}
          className="w-full  object-cover    max-md:opacity-[0.29]  h-full"
          alt=""
        />
      </div>

      <div className="absolute text-center top-36 max-md:top-12  text-[36px]  font-[100] font-Gamiliademo tracking-[6px] max-md:tracking-[4px] max-md:text-[24px] uppercase border-b-2 border-slate-300">
        testimonials
      </div>
      <div className="flex flex-col top-56 max-md:top-24 text-[20px] text-slate-300 absolute max-md:gap-5 gap-10 text-justify px-6 max-md:mt-3 mt-8 w-[60%] mx-auto max-md:w-[90%]  leading-6 font-montserrat justify-center ">
        {ReaderReview.map((review) => {
          return (
            <div key={1} className="">
              "{review.review}"
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
