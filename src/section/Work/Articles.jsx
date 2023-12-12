import React from "react";
import { ArrowRightBlack } from "../../assets/icons";
import { articles } from "../../components/constants";

const Article = () => {
  return (
    <section>
      <div className=" text-center text-[29px] my-7 max-md:my-2 font-[100] font-CooperHevitt">
        ARTICLE
      </div>
      <div className="px-24 flex flex-col max-md:px-6 justify-center mt-7 max-md:mt-6 max-md:ml-0   ml-44  max-md:gap-9 gap-14">
        {articles.map((art) => (
          <div key={2} className=" flex max-md:gap-0 flex-col gap-4">
            <span className="text-[30px]   max-md:text-[20px]  uppercase text-gray-800 font-Oswald max-md:leading-4 max-md:mb-2">
              {art.title.length > 70
                ? art.title.substring(0, 50) + " . . ."
                : art.title}
              <span className=" ml-5 max-md:text-[28px] text-[34px]   text-gray-600">
                ⟶
              </span>{" "}
            </span>{" "}
            <div className="max-md:leading-4 text-[23px] max-md:text-[18px] text-gray-600 ">
              {art.description.length > 90
                ? art.description.substring(0, 90) + " . . ."
                : art.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Article;
