import React from "react";
import { ReaderReview } from "../../components/constants";

const Testimonials = () => {
  return (
    <section className="py-16 bg-black text-slate-200 mt-14 max-md:py-8">
      <div className=" text-center  text-[36px]  font-[100] font-Gamiliademo tracking-[6px] max-md:tracking-[4px] max-md:text-[24px] uppercase">
        testimonials
      </div>

      <div className="w-[400px]   max-md:w-[100%]  max-md:py-0 py-20 max-md:h-[100%] max-md:bg-black    max-md:blur-[0px]   h-full ">
        <img
          src="https://images.unsplash.com/photo-1511406361295-0a1ff814c0ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGRhcmt8ZW58MHx8MHx8fDA%3D"
          className="w-full  max-md:opacity-[0.29]  h-full"
          alt=""
        />
      </div>

      <div className="flex flex-col max-md:gap-5 gap-10 text-justify px-6 max-md:mt-3 mt-8 w-[60%] mx-auto max-md:w-[90%]  leading-4 font-montserrat justify-center ">
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
