import React, { useRef } from "react";
import Books from "../section/Work/Books";
import Article from "../section/Work/Articles";
import News from "../section/Work/News";

export default function Work() {
  const Bookref = useRef(null);
  const Articleref = useRef(null);
  const Newsref = useRef(null);

  const scrollToBooks = () => {
    if (Bookref.current) {
      const element = Bookref.current;
      const rect = element.getBoundingClientRect();
      window.scrollTo({
        top: rect.top + window.scrollY,
        behavior: "smooth",
      });
    }
  };

  const scrollToArticle = () => {
    if (Articleref.current) {
      const element = Articleref.current;
      const rect = element.getBoundingClientRect();
      window.scrollTo({
        top: rect.top + window.scrollY,
        behavior: "smooth",
      });
    }
  };
  const scrollToNews = () => {
    if (Newsref.current) {
      const element = Newsref.current;
      const rect = element.getBoundingClientRect();
      window.scrollTo({
        top: rect.top + window.scrollY,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section className=" bg-white  relative max-md:pt-0  pt-2">
        <div className="md:top-5 max-md:justify-evenly w-full  pr-2 max-md:bg-white  max-md:bottom-0  max-md:border-t-[1px] max-md:border-gray-300 fixed max-md:flex max  max-md:pr-1 gap-1 items-center max-md:text-[13px]  justify-end flex max-md:items-center    max-md:py-[2px]  ">
          <div
            className=" max-md:border-none  max-sm:p-1   max-md:m-1   w-auto 
          max-md:text-[15px]   max-w-[200px] flex justify-center items-center flex-row text-black   border-2 max-md:p-1 p-2 gap-2  border-black"
            onClick={scrollToBooks}
          >
            <span>BOOKS</span>
          </div>
          <div
            className="  max-md:border-none  max-sm:p-1    max-md:m-1   w-auto max-w-[200px] max-md:text-[15px] flex justify-center items-center flex-row text-black   border-2 p-2 gap-2    border-black"
            onClick={scrollToArticle}
          >
            <span>ARTICLES</span>
          </div>
          <div
            className=" max-md:border-none  max-sm:p-1  max-md:m-1   w-auto max-w-[200px] flex justify-center items-center flex-row text-black   border-2 p-2 gap-2 max-md:text-[15px]   border-black"
            onClick={scrollToNews}
          >
            <span>NEWS & MEDIA</span>
          </div>
        </div>
        <div ref={Bookref}>
          <Books></Books>
        </div>
        <div ref={Articleref}>
          <Article></Article>
        </div>
        <div ref={Newsref}>
          <News></News>
        </div>
      </section>
      {/* <div className="top-5 max-md:justify-center  pr-2 sticky max-md:bg-white  max-md:bottom-0    max-md:pr-1 gap-1 items-center max-md:text-[13px]  justify-end flex max-md:items-center  max-md:gap-3 max-md:py-[2px] ">
        <div
          className=" max-md:border-none  max-sm:p-1   max-md:m-1   w-auto 
          max-md:text-[13px]   max-w-[200px] flex justify-center items-center flex-row text-black   border-2 max-md:p-1 p-2 gap-2  border-black"
          onClick={scrollToBooks}
        >
          <span>BOOKS</span>
        </div>
        <div
          className="  max-md:border-none  max-sm:p-1    max-md:m-1   w-auto max-w-[200px] max-md:text-[13px] flex justify-center items-center flex-row text-black   border-2 p-2 gap-2    border-black"
          onClick={scrollToArticle}
        >
          <span>ARTICLES</span>
        </div>
        <div
          className=" max-md:border-none  max-sm:p-1  max-md:m-1   w-auto max-w-[200px] flex justify-center items-center flex-row text-black   border-2 p-2 gap-2 max-md:text-[13px]   border-black"
          onClick={scrollToNews}
        >
          <span>NEWS & MEDIA</span>
        </div>
      </div> */}
    </>
  );
}
