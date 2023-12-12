import React, { useEffect, useState } from "react";
import { crausoel } from "../../components/constants";
import { ArrowRight } from "../../assets/icons";
const AboutCrousel = () => {
  const [reviews, setReviews] = useState(crausoel);

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
      <p className="font-CooperHevitt  max-md:my-2 font-semibold tracking-[5px]  text-[40px] text-gray-200 max-md:text-center  max-sm:text-[22px] ">
        WORKS BY A.M GAUTAM
      </p>

      <div className="flex max-md:flex-col max-md:gap-0 max-md:my-3  my-8  gap-10">
        <div className="h-[350px] relative  flex  justify-center items-center w-full max-w-[500px]    max-md:h-[300px] max-md:max-w-full mx-auto text-center">
          <img
            src={reviews[currentIndex]?.cover}
            alt=""
            className=" transition ease-in-out group3 w-full h-full object-top     m-auto mb-1 "
          />
        </div>
        <div className="mx-7 max-lg:mx-0 max-sm:p-2 text-center items-center justify-center  w-[50%] max-md:w-[100%] flex flex-col max-md:py-5 gap-5 max-md:gap-0 ">
          <div>
            <p className="text-[30px] 2xl:text-[35px] max-sm:pl-2 text-white font-Gamiliademo ">
              The Lorem Ipsum
            </p>
            <span className="italic max-sm:pl-2 text-[18px] 2xl:text-[22px] font-[50] font-Oswald tracking-wider text-slate-300">
              -BY A.M GAUTAM
            </span>
          </div>
          <div className="font-montserrat max-md:mx-2 max-md:mt-3 h-auto 2xl:text-[18px] text-slate-400 text-justify max-md:text-center">
            {reviews[currentIndex]?.description &&
            reviews[currentIndex]?.description.length > 300
              ? reviews[currentIndex]?.description.slice(0, 300) + "..."
              : reviews[currentIndex]?.description}
          </div>
          <div className="max-sm:p-1 max-sm:px-4 px-5 max-md:mt-4 max-md:m-2 max-md:max-w-[150px]  w-auto max-w-[200px] flex justify-center items-center flex-row text-white  border-2 p-2   max-sm:text-[14px]   border-white">
            <span>READ MORE</span>
            <img src={ArrowRight} className="pl-1" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCrousel;
