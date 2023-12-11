import React from "react";
import { cover1 } from "../../assets/images";

const AboutBook = () => {
  return (
    <div className="relative  p-16 max-sm:p-0 max-sm:mt-4  max-sm:ml-4  justify-center items-center">
      <div className=" absolute p-12 bg-slate-200  pr-64 ">
        <img
          src={cover1}
          alt="person"
          className="  z-10 max-sm:mr-2 max-sm:mb-1  max-sm:h-[260px] bg-black h-[600px] "
        />
      </div>

      <div className="bg-slate-200 max-md:hidden h-28  w-28 right-1 rounded-full  absolute  "></div>
      <div className="bg-slate-200  h-72 top-72 w-72 max-md:hidden  rounded-full  absolute  right-32 "></div>
      <div className="bg-slate-200 h-48 top-[600px] w-48 max-md:hidden  rounded-full  absolute  right-4 "></div>
      <div className="text-[18px]  absolute right-32 text-justify bg-white w-[50%] max-sm:w-[85%] max-sm:p-3 max-md:text-[12px] max-sm:leading-[17px] font-montserrat   max-sm:ml-8 max-sm:mt-14  ml-24 mt-24  p-14 max-  ">
        <span className="text-[35px] ml-3 mr-1 font-serif ">L</span>
        orem ipsum dolor sit amet, consectetur adipisicing elit. Illo dolorum
        iure nesciunt enim dignissimos cumque voluptatum eos, possimus odio
        error perferendis nihil atque laudantium rem quos esse cupiditate
        repellat minima. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Fugit non, dignissimos quisquam doloremque reprehenderit quod
        dolores iste impedit sed voluptas quasi culpa fuga delectus asperiores
        assumenda porro omnis, alias praesentium! Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Maiores, quae doloremque voluptatum unde
        exercitationem voluptate, error laboriosam minima fuga soluta ullam
        culpa accusamus necessitatibus, nihil ducimus voluptatem praesentium
      </div>
    </div>
  );
};

export default AboutBook;
