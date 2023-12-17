import React from "react";
import { cover1 } from "../../assets/images";

const BookHero = ({ bookdetails }) => {
  return (
    <div className="h-64   relative flex  bg-black justify-center max-sm:h-52 items-end ">
      <img
        src={cover1}
        alt="AboutTopImg"
        className="object-cover object-right-bottom w-full h-full opacity-40 "
      />
      <p className="absolute bottom-10 max-sm:tracking-[6px] max-sm:text-[27px] text-white tracking-[11px] font-Oswald font-semibold text-[50px]  ">
        {" "}
        BOOK
      </p>
    </div>
  );
};

export default BookHero;
