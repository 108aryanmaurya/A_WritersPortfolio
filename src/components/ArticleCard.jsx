import DOMPurify from "dompurify";
import React from "react";
import { useNavigate } from "react-router";

const ArticleCard = ({ art }) => {
  const navigate = useNavigate();
  console.log(art);
  return (
    <div
      key={2}
      className=" flex max-md:gap-0 flex-col gap-2"
      onClick={() => {
        navigate(`/Article/${art?.title.replace(/\s+/g, "-")}`);
      }}
    >
      <div className="flex ">
        <span className="text-[30px] w-[70%] max-md:w-[90%]     max-md:text-[20px]  uppercase text-gray-800 font-Oswald max-md:leading-7 max-md:mb-2">
          {art?.title}
        </span>{" "}
        <span className=" ml-5 max-md:ml-2 max-md:text-[28px] text-[34px]   text-gray-600">
          ⟶
        </span>{" "}
      </div>
      <div
        className="max-md:leading-4 leading-5 w-[85%]  text-[22px] max-md:text-[21px] font-TimesNewRoman text-gray-600 "
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(
            art?.description.length > 100
              ? art?.description.substring(0, 100) + "   . . ."
              : art?.description
          ),
        }}
      ></div>
    </div>
  );
};

export default ArticleCard;
