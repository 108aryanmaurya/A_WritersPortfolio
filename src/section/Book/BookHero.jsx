import React from "react";
import { cover1, Bookhero } from "../../assets/images";

const BookHero = ({ bookdetails }) => {
  return (
    <div className="h-64   relative flex  bg-black justify-center max-sm:h-52 items-end ">
      <img
        src="https://images.unsplash.com/photo-1647205552933-12e3dfdb77b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1pY2hlbGFuZ2VsbydzJTIwZGF2aWR8ZW58MHx8MHx8fDA%3D"
        // src={Bookhero}
        alt="AboutTopImg"
        className="object-cover max-md:object-bottom w-full h-full opacity-30 "
      />
      <p className="absolute bottom-2 max-sm:tracking-[6px] max-sm:text-[27px] text-white tracking-[11px] font-Oswald font-semibold text-[40px]  ">
        {" "}
        BOOK
      </p>
    </div>
  );
};

export default BookHero;
