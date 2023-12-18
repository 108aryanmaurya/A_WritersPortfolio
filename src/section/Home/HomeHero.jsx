import React, { useRef, useState, useEffect } from "react";
import { heroright, heroleft } from "../../assets/icons";
import HomeHeroCards from "./HomeHeroCards";
export default function HomeHero() {
  const slidesContainerRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);

  useEffect(() => {
    const updateSlideWidth = () => {
      setSlideWidth(
        slidesContainerRef.current
          ? slidesContainerRef.current.children[0].clientWidth
          : 0
      );
    };

    updateSlideWidth();
    window.addEventListener("resize", updateSlideWidth);
    return () => {
      window.removeEventListener("resize", updateSlideWidth);
    };
  }, []);

  useEffect(() => {
    const autoSlide = () => {
      if (slidesContainerRef.current) {
        slidesContainerRef.current.scrollLeft += slideWidth || 0;

        const isNearLastSlide =
          slidesContainerRef.current.scrollLeft +
            slidesContainerRef.current.offsetWidth >=
          slidesContainerRef.current.scrollWidth - 10;

        if (isNearLastSlide) {
          slidesContainerRef.current.scrollLeft = 0;
        }
      }
    };

    autoSlide();

    const autoSlideInterval = setInterval(autoSlide, 5000);

    return () => clearInterval(autoSlideInterval);
  }, [slideWidth]);

  const prevSlide = () => {
    if (slidesContainerRef.current) {
      slidesContainerRef.current.scrollLeft -= slideWidth || 0;
    }
  };
  const nextSlide = () => {
    if (slidesContainerRef.current) {
      slidesContainerRef.current.scrollLeft += slideWidth || 0;
    }
  };
  const slideData = [
    {
      imageSrc:
        "https://images.pexels.com/photos/6263568/pexels-photo-6263568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      backgroundColor: "bg-white",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/3026364/pexels-photo-3026364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      backgroundColor: "bg-violet-400",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/3026364/pexels-photo-3026364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      backgroundColor: "bg-green-400",
    },
  ];
  return (
    <>
      <div
        id="app"
        className="mx-auto px-8 max-md:px-0 transition-all duration-500 ease-linear"
      >
        <div className="relative">
          <div
            ref={slidesContainerRef}
            className="slides-container z-[999] h-[350px] 2xl:h-[400px] max-sm:h-[300px] flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded max-md:rounded-none scroll-smooth no-scrollbar "
          >
            {slideData.map((slide, index) => (
              <HomeHeroCards key={index} {...slide} />
            ))}
          </div>

          <div className="absolute top-0  -left-5 h-full z-50 items-center hidden md:flex">
            <button
              role="button"
              className="prev px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
              aria-label="prev"
              onClick={prevSlide}
            >
              <img src={heroleft} alt="" />
            </button>
          </div>
          <div className="absolute top-0 -right-5 z-50 h-full items-center hidden md:flex">
            <button
              role="button"
              className="next px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
              aria-label="next"
              onClick={nextSlide}
            >
              <img src={heroright} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
