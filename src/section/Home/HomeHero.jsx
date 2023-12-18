import React, { useRef, useState, useEffect } from "react";
import { heroright, heroleft } from "../../assets/icons";
import HomeHeroCards from "./HomeHeroCards";

export default function HomeHero() {
  const slidesContainerRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const [direction, setDirection] = useState(1);

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
        slidesContainerRef.current.scrollLeft += slideWidth * direction;

        const isNearLastSlide =
          slidesContainerRef.current.scrollLeft +
            slidesContainerRef.current.offsetWidth >=
          slidesContainerRef.current.scrollWidth - 10;

        const isNearFirstSlide = slidesContainerRef.current.scrollLeft <= 10;

        if (isNearLastSlide) {
          setDirection(-1);
        } else if (isNearFirstSlide) {
          setDirection(1);
        }
      }
    };

    autoSlide();

    const autoSlideInterval = setInterval(autoSlide, 10000);

    return () => clearInterval(autoSlideInterval);
  }, [slideWidth, direction]);

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
        className="mx-auto mt-5 max-md:mt-0 px-8 max-md:px-0 transition-all duration-500 ease-linear"
      >
        <div className="relative">
          <div
            ref={slidesContainerRef}
            className="slides-container z-[999] h-[350px] 2xl:h-[400px] max-sm:h-[300px] flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-4 max-sm:space-x-0 rounded max-md:rounded-none scroll-smooth no-scrollbar "
          >
            {slideData.map((slide, index) => (
              <HomeHeroCards key={index} {...slide} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
