import DOMPurify from "dompurify";
import React from "react";
import { useNavigate } from "react-router";

const ArticleCard = ({ art }) => {
  const navigate = useNavigate();
  console.log(art);
  return (
    <div key={2} className=" max-md:flex-col    flex   w-full   ">
      <div
        className="w-[60%] max-md:w-full "
        onClick={() => {
          navigate(`/Article/${art?.title.replace(/\s+/g, "-")}`);
        }}
      >
        <span
          className="text-[30px]    max-md:block hidden    max-md:text-[22px]  uppercase text-gray-800 font-Oswald max-md:leading-7 max-md:mb-8 "
          onClick={() => {
            navigate(`/Article/${art?.title.replace(/\s+/g, "-")}`);
          }}
        >
          {art?.title}
        </span>{" "}
        <img src={art.cover} alt="" className="w-[650px]" />
      </div>
      <div className="w-[40%] max-md:w-full flex max-md:gap-2  flex-col gap-4">
        <div className="max-md:mt-2">
          <span>Published in </span>
          <a href={art.link} target="_blank" rel="noopener noreferrer">
            {" "}
            <span className="font-Authorfont text-[17px] mx-0 italic">
              {art.publication}
            </span>{" "}
          </a>
        </div>
        <span
          className="text-[30px]  max-md:hidden   max-md:text-[20px]  uppercase text-gray-800 font-Oswald max-md:leading-7 max-md:mb-2"
          onClick={() => {
            navigate(`/Article/${art?.title.replace(/\s+/g, "-")}`);
          }}
        >
          {art?.title}
        </span>{" "}
        <div
          className="max-md:leading-6 leading-7 max-md:mt-3   text-[22px] max-md:text-[21px] font-TimesNewRoman "
          //   dangerouslySetInnerHTML={{
          //     __html: DOMPurify.sanitize(
          //       art?.description.length > 250
          //         ? art?.description.substring(0, 250)
          //         : art?.description
          //     ),
          //   }}
          onClick={() => {
            navigate(`/Article/${art?.title.replace(/\s+/g, "-")}`);
          }}
        >
          {art?.shortDescription}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
