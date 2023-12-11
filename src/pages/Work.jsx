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
    <section className=" bg-gray-50 relative  pt-2">
      <div className="top-5 pr-2 sticky  gap-1 items-center justify-end flex ">
        <div
          className="  max-sm:p-1 max-md:mt-6  max-md:m-2   w-auto max-w-[200px] flex justify-center items-center flex-row text-black   border-2 p-2 gap-2 max-sm:text-[14px]    border-black"
          onClick={scrollToBooks}
        >
          <span>BOOKS</span>
        </div>
        <div
          className=" max-sm:p-1  max-md:mt-6  max-md:m-2   w-auto max-w-[200px] flex justify-center items-center flex-row text-black   border-2 p-2 gap-2 max-sm:text-[14px]   border-black"
          onClick={scrollToArticle}
        >
          <span>ARTICLES</span>
        </div>
        <div
          className=" max-sm:p-1 max-md:mt-6 max-md:m-2   w-auto max-w-[200px] flex justify-center items-center flex-row text-black   border-2 p-2 gap-2 max-sm:text-[14px]   border-black"
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
  );
}
