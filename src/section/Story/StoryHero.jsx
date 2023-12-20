import React from "react";
import { Articlehero } from "../../assets/images";

const StoryHero = () => {
  return (
    <div className="h-72  relative flex  bg-black justify-center max-sm:h-52 items-end ">
      <img
        src="https://images.unsplash.com/photo-1639741545948-bad9a0665e0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRoZSUyMHRoaW5rZXJ8ZW58MHx8MHx8fDA%3D"
        // src={Articlehero}
        alt="AboutTopImg"
        className="object-cover object-top  w-full h-full opacity-60 "
      />
      <p className="absolute bottom-5 max-sm:tracking-[6px] max-sm:text-[27px] text-white tracking-[11px] font-Oswald font-semibold text-[40px]  uppercase">
        {" "}
        Short Story
      </p>
    </div>
  );
};

export default StoryHero;
