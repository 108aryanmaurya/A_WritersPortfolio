import React from "react";
import { Articlehero, cover1 } from "../../assets/images";

const ArticleHero = () => {
  return (
    <div className="h-48  relative flex  bg-black justify-center max-sm:h-52 items-end ">
      <img
        src={Articlehero}
        alt="AboutTopImg"
        className="object-cover object-right-top w-full h-full opacity-60 "
      />
      <p className="absolute bottom-1 max-sm:tracking-[6px] max-sm:text-[27px] text-white tracking-[11px] font-Oswald font-semibold text-[40px]  ">
        {" "}
        ARTICLE
      </p>
    </div>
  );
};

export default ArticleHero;