import React, { useRef, useState } from "react";
import Books from "../section/Work/Books";
import Article from "../section/Work/Articles";
import News from "../section/Work/Stories";
import Stories from "../section/Work/Stories";

export default function Work() {
  const [currentSec, setcurrentSec] = useState("book");
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
      <section className=" relative max-md:pt-0  py-2">
        <div className="md:top-1  max-md:justify-evenly w-full  pr-2   max-md:bottom-0  max-md:border-t-[1px] sticky max-md:border-gray-300  max-md:fixed max-md:flex max  max-md:pr-1 gap-1 items-center max-md:text-[16px]  justify-end flex max-md:items-center    max-md:py-[3px] max-md:bg-black z-[60] ">
          <div
            className={` max-md:border-none  max-sm:p-1   max-md:m-1   w-auto 
          max-md:text-[17px]   max-w-[200px] flex justify-center items-center flex-row   ${
            currentSec == "book"
              ? "bg-black text-white max-md:text-white"
              : " max-md:text-slate-400 max-md:bg-black bg-white text-black"
          }  border-2 max-md:p-1 p-2 gap-2  border-black`}
            onClick={() => {
              setcurrentSec("book");
              scrollToBooks();
            }}
          >
            <span>BOOKS</span>
          </div>

          <div
            className={` max-md:border-none  max-sm:p-1   max-md:m-1   w-auto 
           max-md:text-[17px]   max-w-[200px] flex justify-center items-center flex-row   ${
             currentSec == "story"
               ? "bg-black text-white max-md:text-white"
               : " max-md:text-slate-400 max-md:bg-black bg-white text-black"
           }  border-2 max-md:p-1 p-2 gap-2  border-black`}
            onClick={() => {
              setcurrentSec("story");
              scrollToNews();
            }}
          >
            <span>STORIES</span>
          </div>
          <div
            className={` max-md:border-none  max-sm:p-1   max-md:m-1   w-auto 
          max-md:text-[17px]   max-w-[200px] flex justify-center items-center flex-row   ${
            currentSec == "article"
              ? "bg-black text-white max-md:text-white"
              : " max-md:text-slate-400 max-md:bg-black bg-white text-black"
          }  border-2 max-md:p-1 p-2 gap-2  border-black`}
            onClick={() => {
              setcurrentSec("article");
              scrollToArticle();
            }}
          >
            <span>ARTICLES</span>
          </div>
        </div>
        <div ref={Bookref}>
          <Books></Books>
        </div>
        <div ref={Newsref}>
          <Stories></Stories>
        </div>
        <div ref={Articleref}>
          <Article></Article>
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
