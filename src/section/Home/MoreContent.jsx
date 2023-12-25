import React from "react";
import { ArrowRightBlack } from "../../assets/icons";
import { useNavigate } from "react-router";
import { goto } from "../../assets/icons";
import { works } from "../../components/constants";
export default function MoreContent() {
  const navigate = useNavigate();
  const shortStories = works.filter((work) => work.type === "Article");

  return (
    <>
      <div className="py-28 px-12 max-sm:px-4 max-sm:py-10 max-sm:pt-20">
        <div className="flex flex-col text-center w-full mb-10">
          <h2 className="max-sm:tracking-[6px] max-sm:text-[20px] tracking-[6px] font-semibold text-[40px] text-gray-900 font-Oswald textce uppercase">
            Articles By A.M. Gautam
          </h2>
        </div>
        <div className="flex justify-center 2xl:gap-10 max-md:gap-0   flex-wrap max-md:flex-col items-start w-full">
          {shortStories.map((art) => (
            <div
              key={art.id}
              className="flex flex-col m-10 max-sm:m-2 max-sm:justify-center max-sm:items-center max-md:flex-row max-sm:pb-5 max-w-[300px] max-md:max-w-full"
            >
              <img
                alt="Art"
                src={art?.cover}
                className="h-64 w-64 max-md:w-50 max-md:h-50 max-sm:w-32 max-sm:h-32 object-cover"
              />
              <div className="w-full max-md:ml-4">
                <h3
                  className="mt-4 max-md:mt-0 text-lg 2xl:text-2xl max-md:text-base max-sm:text-base text-black sm:text-xl font-TimesNewRoman tracking-wider cursor-pointer hover:underline underline-offset-4 "
                  onClick={() => {
                    navigate(`/Article/${art?.title.replace(/\s+/g, "-")}`);
                  }}
                >
                  {art?.title}
                </h3>
                <div className="flex gap-2 items-center mt-2 max-md:flex-col max-md:items-start">
                  <a
                    href={art?.publicationlink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex">
                      <span className="text-[13px] max-sm:text-[10px] 2xl:text-[16px] text-black max-md:text-[12px] hover:underline hover:text-blue-500 font-Oswald">
                        {art?.publication}{" "}
                      </span>
                      <img
                        src={goto}
                        className="w-3 2xl:w-4 mx-1 h-3 2xl:h-4 invert"
                        alt=""
                      />
                    </div>
                  </a>
                  <span className="text-white items-center max-md:hidden">
                    -
                  </span>
                  <h3 className=" text-sm text-gray-800 2xl:text-lg max-sm:text-[12px] font-CooperHevitt tracking-wider">
                    {art.Date}
                  </h3>
                </div>
                <div
                  className="max-md:hidden max-sm:p-1 my-4 max-md:mt-4 max-md:m-2 max-md:max-w-[150px]  w-auto max-w-[200px] flex justify-center items-center flex-row text-black  text-sm 2xl:text-lg  border-[1px] p-2   max-sm:text-[14px]   border-black"
                  onClick={() => {
                    navigate(`/Article/${art?.title.replace(/\s+/g, "-")}`);
                  }}
                >
                  READ NOW
                  <img src={ArrowRightBlack} className="w-8 px-1 pl-2" alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
