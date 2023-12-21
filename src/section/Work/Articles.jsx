import React from "react";
import { ArrowRightBlack } from "../../assets/icons";
import { articles } from "../../components/constants";
import { useNavigate } from "react-router";
import DOMPurify from "dompurify";

const Article = () => {
  const navigate = useNavigate();

  return (
    <section className=" max-md:py-1 max-md:mt-5 py-2  mt-10">
      <div className=" text-center text-[29px] my-12 max-md:my-2 font-[100] font-CooperHevitt">
        ARTICLE
      </div>
      <div className="px-36  flex flex-col  justify-center my-7 max-md:my-6 max-md:ml-0 max-md:px-3   max-md:mx-4 max-md:gap-9 gap-14">
        {articles.map((art) => (
          <div
            key={2}
            className=" flex max-md:gap-0 flex-col gap-2"
            onClick={() => {
              navigate(`/Article/${art.title.replace(/\s+/g, "-")}`);
            }}
          >
            <div className="flex ">
              <span className="text-[30px] w-[70%] max-md:w-[90%]     max-md:text-[20px]  uppercase text-gray-800 font-Oswald max-md:leading-7 max-md:mb-2">
                {art.title}
              </span>{" "}
              <span className=" ml-5 max-md:ml-2 max-md:text-[28px] text-[34px]   text-gray-600">
                ⟶
              </span>{" "}
            </div>
            <div
              className="max-md:leading-4 leading-5 w-[85%]  text-[22px] max-md:text-[21px] font-TimesNewRoman text-gray-600 "
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  art.description.length > 100
                    ? art.description.substring(0, 100) + "   . . ."
                    : art.description
                ),
              }}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Article;
