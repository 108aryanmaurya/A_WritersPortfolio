import React from "react";
import { Synopsis } from "../../assets/images";

const BookSynopsis = () => {
  return (
    <section>
      <div className="relative ">
        <div className="h-[600px] -z-20  bg-black  ">
          <img
            src={Synopsis}
            alt=""
            className=" object-cover transition-all ease-in-out duration-500 hover:opacity-50  object-top  h-full w-full bg-black "
          />
          <div className="z-20  flex items-center justify-center">
            <div className="text-center top-10 absolute  text-white border-b-2   text-[29px] pt-4 max-md:text-[23px]  font-[100] font-CooperHevitt border-white">
              SYNOPSIS
            </div>
            <div className="z-20 absolute bottom-0 text-white text-[18px]  text-justify w-[40%] max-md:w-[75%] max-sm:p-3 max-md:text-[12px] max-sm:leading-[17px] font-montserrat   max-sm:ml-8 max-sm:mt-14  ml-24 mt-4  p-14  ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
              dolorum iure nesciunt enim dignissimos cumque voluptatum eos,
              possimus odio error perferendis nihil atque laudantium rem quos
              esse cupiditate repellat minima. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Fugit non, dignissimos quisquam
              doloremque reprehenderit quod dolores iste impedit sed voluptas
              quasi culpa fuga delectus asperiores assumenda porro omnis, alias
              praesentium! Lorem ipsum dolor sit, amet elit. Fugit non,
              dignissimos quisquam doloremque reprehenderit quod dolores iste
              impedit sed voluptas quasi culpa fuga delectus asperiores
              assumenda porro omnis, alias praesentium! Lorem ipsum dolor sit,
              amet
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSynopsis;
