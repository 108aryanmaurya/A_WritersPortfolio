import React from "react";
import { Synopsis } from "../../assets/images";

const BookSynopsis = () => {
  return (
    <section>
      <div className="relative flex ">
        <div className="bg-black    ">
          <img
            src={Synopsis}
            alt="synop"
            className=" object-cover  opacity-100 bg-black object-top -z-20 absolute h-full w-full"
          />
        </div>

        <div className="flex justify-evenly  max-md:flex-col  items-center">
          <div className="text-center  text-[29px]  max-md:text-[23px]  font-[100] font-CooperHevitt  text-white border-b-2  border-white">
            SYNOPSIS
          </div>
          <div className="z-20  text-white text-[18px]  text-center w-[51%] max-md:w-[75%] max-sm:p-3 max-md:text-[12px] max-sm:leading-[17px] font-montserrat   max-sm:ml-8 max-sm:mt-14  ml-24 mt-4  p-14 max-  ">
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
      </div>
    </section>
  );
};

export default BookSynopsis;
