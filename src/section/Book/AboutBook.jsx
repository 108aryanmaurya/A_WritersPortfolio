import React from "react";
import { cover1 } from "../../assets/images";

const AboutBook = () => {
  return (
    <div
      className="relative mt-16  h-full w-full
     flex  p-16   max-md:mt-6 justify-start   max-sm:ml-0 max-md:justify-start max-md:p-0 items-center"
    >
      <div className="   p-12 ml-36 top-0  absolute max-md:my-0 max-md:ml-6 bg-gray-200 max-md:pr-28 max-md:p-3  pr-72 ">
        <img
          src={cover1}
          alt="person"
          className="   max-md:mr-2   max-md:mb-1  max-md:h-[210px]   bg-black h-[400px] "
        />
      </div>

      {/* <div className="bg-slate-200 max-md:hidden h-28  w-28 right-1 rounded-full  absolute  "></div>
      <div className="bg-slate-200  h-72 top-72 w-72 max-md:hidden  rounded-full  absolute  right-32 "></div>
      <div className="bg-slate-200 h-48 top-[600px] w-48 max-md:hidden  rounded-full  absolute  right-4 "></div> */}
      <div
        className="text-[18px] z-30  ml-[700px]
        bg-white   text-justify  w-[40%] max-md:w-[75%] max-md:p-5 max-md:text-[13px]  max-md:leading-[16px] font-montserrat   max-md:ml-20  max-md:mt-40  p-14 "
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dolorum
        iure nesciunt enim dignissimos cumque voluptatum eos, possimus odio
        error perferendis nihil atque laudantium rem quos esse cupiditate
        repellat minima. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Fugit non, dignissimos quisquam doloremque reprehenderit quod
        dolores iste impedit sed voluptas quasi culpa fuga delectus asperiores
      </div>
    </div>
  );
};

export default AboutBook;
