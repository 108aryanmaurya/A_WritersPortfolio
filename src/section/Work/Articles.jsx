import React from "react";
import { ArrowRightBlack } from "../../assets/icons";
import { articles } from "../../components/constants";

const Article = () => {
  return (
    <section className="max-md:my-10 my-16 ">
      <div className=" text-center text-[29px] my-7 max-md:my-2 font-[100] font-CooperHevitt">
        ARTICLE
      </div>
      <div className="px-24 flex flex-col  justify-center mt-7 max-md:mt-6 max-md:ml-0 max-md:px-3   max-md:mx-4 max-md:gap-9 gap-14">
        {articles.map((art) => (
          <div key={2} className=" flex max-md:gap-0 flex-col gap-4">
            <div className="flex ">
              <span className="text-[30px] w-[70%] max-md:w-[90%]     max-md:text-[20px]  uppercase text-gray-800 font-Oswald max-md:leading-7 max-md:mb-2">
                {art.title}
              </span>{" "}
              <span className=" ml-5 max-md:ml-2 max-md:text-[28px] text-[34px]   text-gray-600">
                ⟶
              </span>{" "}
            </div>
            <div className="max-md:leading-4 max-md:truncate text-[23px] max-md:text-[18px] text-gray-600 ">
              {art.description.length > 230
                ? art.description.substring(0, 230) + " . . ."
                : art.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Article;
