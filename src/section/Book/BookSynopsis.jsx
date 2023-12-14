import React from "react";
import { Synopsis } from "../../assets/images";

const BookSynopsis = () => {
  return (
    <section className="w-[80%] max-md:mt-6   ">
      <div className="relative flex ">
        <div className="flex justify-evenly  max-md:flex-col  items-center">
          <div className="text-center z-30  text-[29px]  max-md:text-[23px]  font-[100] font-CooperHevitt   border-b-[1px]  border-black">
            SYNOPSIS
          </div>
          <div className="z-20  text-[18px]   w-[51%] max-md:w-[75%] max-sm:p-3 max-md:text-[12px] max-sm:leading-[17px] font-montserrat   max-sm:ml-8 max-sm:mt-0  ml-24   p-14 text-justify  ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            dolorum iure nesciunt enim dignissimos cumque voluptatum eos,
            possimus odio error perferendis nihil atque laudantium rem quos esse
            cupiditate repellat minima. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Fugit non, dignissimos quisquam doloremque
            reprehenderit quod dolores iste impedit sed voluptas quasi culpa
            fuga delectus asperiores assumenda porro omnis, alias praesentium!
            Lorem ipsum dolor sit, amet elit. Fugit non, dignissimos quisquam
            doloremque reprehenderit quod dolores iste impedit sed voluptas
            quasi culpa fuga delectus asperiores assumenda porro omnis, alias
            praesentium! Lorem ipsum dolor sit, amet
          </div>
        </div>
        <div className="w-[300px] bg-slate-200  absolute h-full right-0 top-0"></div>
        <div className="w-[190px] bg-slate-200  absolute h-full left-0 top-0"></div>
      </div>
    </section>
  );
};

export default BookSynopsis;
