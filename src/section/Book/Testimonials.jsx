import React from "react";
import { ReaderReview } from "../../components/constants";

const Testimonials = () => {
  return (
    <section className=" relative  flex flex-col items-center text-slate-200 mt-28 max-md:mt-7 max-md:py-8">
      <div className="w-full  max-md:h-[600px] top-0  h-[800px] bg-black     max-md:py-0   max-md:bg-black max-md:blur-[0px]  ">
        <img
          src="https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRhcmt8ZW58MHx8MHx8fDA%3D"
          className="w-full  object-cover  opacity-50  max-md:opacity-[0.29]  h-full"
          alt=""
        />
      </div>

      <div className="absolute text-center top-36 max-md:top-12  text-[36px]  font-[100] font-Gamiliademo tracking-[6px] max-md:tracking-[4px] max-md:text-[24px] uppercase">
        testimonials
      </div>
      <div className="flex flex-col top-56 max-md:top-24 text-slate-300 absolute max-md:gap-5 gap-10 text-justify px-6 max-md:mt-3 mt-8 w-[60%] mx-auto max-md:w-[90%]  leading-4 font-montserrat justify-center ">
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
