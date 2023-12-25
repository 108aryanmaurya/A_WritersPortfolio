import React from "react";
import { useNavigate } from "react-router";
import { ArrowRight, ArrowRightBlack } from "../assets/icons";

const StoryCardnew = ({ ind }) => {
  const navigate = useNavigate();
  console.log(ind);
  return (
    <section className="w-[80%] max-md:w-[95%] max-md:gap-8 my-16 flex items-center flex-col gap-12 ">
      <span
        className="text-[30px]     max-md:text-[22px]   uppercase text-gray-800 font-Oswald max-md:leading-7    "
        onClick={() => {
          navigate(`/Story/${ind?.title.replace(/\s+/g, "-")}`);
        }}
      >
        {ind?.title}
      </span>{" "}
      <div
        key={2}
        className="max-md:flex-col   justify-between items-start   max-md:gap-3  gap-10  flex   "
      >
        <div
          className="max-md:w-full mr-10"
          onClick={() => {
            navigate(`/indicle/${ind?.title.replace(/\s+/g, "-")}`);
          }}
        >
          <img src={ind.cover2} alt="" className="w-[650px]" />
        </div>
        <div className="w-[60%]  max-md:w-full flex max-md:gap-4  flex-col gap-10 ">
          <div className="flex flex-col gap-3">
            <div className="max-md:mt-2">
              <span>Published in </span>
              <a href={ind.link} target="_blank" rel="noopener noreferrer">
                {" "}
                <span className="font-Authorfont text-[17px] mx-0 italic">
                  {ind.published}
                </span>{" "}
              </a>
            </div>
            {/* <span
          className="text-[25px] 2xl:text-[30px] max-md:hidden   max-md:text-[20px]  uppercase text-gray-800 font-Oswald max-md:leading-7 underline max-md:mb-2"
          onClick={() => {
            navigate(`/Story/${ind?.title.replace(/\s+/g, "-")}`);
          }}
        >
          {ind?.title}
        </span>{" "} */}
            <span
              className="max-md:leading-6 leading-7    text-[18px] 2xl:text-[22px]  text-justify max-md:text-[21px] font-TimesNewRoman "
              onClick={() => {
                navigate(`/indicle/${ind?.title.replace(/\s+/g, "-")}`);
              }}
            >
              {/* "{ind?.shortDescription}" */}
              "At 9 in the morning, she had been standing on the balcony of a
              large apartment in South Delhi and the thought of landing her
              first job had filled her guts with excitement. Some of that
              excitement, admittedly, had started churning into nervousness when
              she rang the doorbell twice, and yet no one answered the
              door.Maybe Im at the wrong address, she had thought, and to
              confirm it with Pandey-Ji she had taken out the pamphlet from her
              handbag on which his number was printed."
            </span>
          </div>
          <button className=" max-md:hidden gap-7 mt-0   bg-black max-md:p-[3px] p-[3px]  justify- items-center  max-w-[170px]  ">
            <span
              className="  border-[1px] border-white      flex justify-center items-center text-[20px] font-TimesNewRoman flex-row text-white bg-black  p-1 gap-1 max-md:gap-1 max-md:p-1  max-sm:text-[19px]   max-md:border-[2px] "
              onClick={() => {
                navigate(`/Story/${ind.title.replace(/\s+/g, "-")}`);
              }}
            >
              <span>Read Here</span>
              <img
                src={ArrowRight}
                className="w-8 px-1  max-md:pl-0 max-md:w-4  max-md:px-0 pl-2"
                alt=""
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StoryCardnew;
