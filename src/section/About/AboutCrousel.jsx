import React, { useEffect, useState } from "react";
import { crausoel, works } from "../../components/constants";
import { ArrowRight } from "../../assets/icons";
import { useNavigate } from "react-router";
import { Articlehero, Bookcover } from "../../assets/images";

const AboutCrousel = () => {
  const [reviews, setReviews] = useState(works);
  const navigate = useNavigate();
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [reviews?.cover]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="mx-auto flex px-24 max-lg:px-10 bg-gray-900 flex-col my-10 max-sm:mt-20 max-md:py-3  py-24 max-sm:px-0">
      <p className="font-CooperHevitt   max-md:my-2 font-semibold tracking-[5px]  text-[40px] pl-8 max-md:pl-0 text-gray-200 max-md:text-center  max-sm:text-[22px] ">
        WORKS BY A.M. GAUTAM
      </p>

      <div className="flex max-md:flex-col justify-center items-start  max-md:gap-0 max-md:my-3  my-8  gap-28">
        <div className=" mx-auto ">
          {reviews[currentIndex].type == "Book" && (
            <div
              className="h-[450px] relative  flex  justify-center items-center w-[300px] max-w-[100px] max-md:w-[200px]     max-md:h-[300px] max-md:max-w-full mx-auto text-center"
              onClick={() => {
                navigate(
                  `/Book/${reviews[currentIndex].title.replace(/\s+/g, "-")}`
                );
              }}
            >
              <img
                // src={Articlehero}
                src={reviews[currentIndex]?.cover}
                alt=""
                className=" transition ease-in-out group3 w-full h-full object-top     m-auto mb-1 "
              />
            </div>
          )}

          {reviews[currentIndex].type == "Article" && (
            <div
              className="h-[400px] relative  flex  justify-center items-center w-[400px] max-w-[600px]     max-md:w-[300px]   max-md:h-[300px] max-md:max-w-full mx-auto text-center"
              onClick={() => {
                navigate(
                  `/Article/${reviews[currentIndex].title.replace(/\s+/g, "-")}`
                );
              }}
            >
              <img
                src={Articlehero}
                // src={reviews[currentIndex]?.cover}
                alt=""
                className=" transition ease-in-out group3 w-full h-full object-top     m-auto mb-1 "
              />
            </div>
          )}

          {reviews[currentIndex]?.type === "Short Story" && (
            <section
              key={2}
              className="relative"
              onClick={() => {
                navigate(
                  `/Story/${reviews[currentIndex].title.replace(/\s+/g, "-")}`
                );
              }}
            >
              <div
                className="z-50  shadow-black bg-black max-md:shadow-md  max-md:shadow-gray-600  shadow-md"
                onClick={() => {
                  navigate(
                    `/Article/${reviews[currentIndex].title.replace(
                      /\s+/g,
                      "-"
                    )}`
                  );
                }}
              >
                <img
                  src={reviews[currentIndex]?.cover}
                  alt=""
                  className=" w-[260px] max-md:h-[280px]  opacity-70 h-[400px]  max-md:w-full "
                />
              </div>
              <div className=" z-50 absolute max-md:left-3  w-[75%]  left-9 bottom-12 flex flex-col  max-md:bottom-7  gap-24  max-md:gap-20 max-md:w-[85%]">
                <div className="tracking-widest  text-yellow-400 uppercase font-Gamiliademo max-md:text-[18px]  text-[28px] text-center   ">
                  {reviews[currentIndex]?.title}
                </div>
                <div className="tracking-widest  text-yellow-500 uppercase font-Authorfont text-[20px]  font-light max-md:text-[14px] text-center ">
                  By A.M. Gautam
                </div>
              </div>
            </section>
          )}
        </div>
        <div className="mx-7 max-lg:mx-0 max-sm:p-2 text-center items-center justify-evenly  w-[50%] max-md:w-[100%] flex flex-col max-md:py-5 gap-9  max-md:gap-0 ">
          <div>
            <p className="text-[30px] 2xl:text-[35px] max-sm:pl-2 max-md:leading-7 max-md:my-3  text-white font-Gamiliademo w-full ">
              {reviews[currentIndex]?.title}
            </p>
            <span className="italic max-sm:pl-2 text-[18px] 2xl:text-[22px] font-[50] font-Oswald tracking-wider text-slate-300">
              -BY A.M. GAUTAM
            </span>
          </div>
          <div className="font-montserrat max-md:mx-2 max-md:mt-3 h-auto 2xl:text-[18px] text-slate-400 text-justify max-md:text-center">
            {reviews[currentIndex]?.description}
          </div>
          <div
            className="max-sm:p-1 max-sm:px-4 px-5 max-md:mt-4 max-md:m-2 max-md:max-w-[150px]  w-auto max-w-[200px] flex justify-center items-center flex-row text-white  border-2 p-2  max-md:border-[1px]  max-sm:text-[14px]   border-white"
            onClick={() => {
              if (reviews[currentIndex].type === "Book") {
                navigate(
                  `/Book/${reviews[currentIndex].title.replace(/\s+/g, "-")}`
                );
              }
              if (reviews[currentIndex].type === "Story") {
                navigate(
                  `/Story/${reviews[currentIndex].title.replace(/\s+/g, "-")}`
                );
              }
              if (reviews[currentIndex].type === "Article") {
                navigate(
                  `/Article/${reviews[currentIndex].title.replace(/\s+/g, "-")}`
                );
              }
            }}
          >
            <span>READ MORE</span>
            <img src={ArrowRight} className="pl-1 max-md:w-6 " alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCrousel;
