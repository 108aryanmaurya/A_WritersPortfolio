import React, { useEffect, useRef, useState } from "react";
import Books from "../section/Work/Books";
import Article from "../section/Work/Articles";
import News from "../section/Work/Stories";
import Stories from "../section/Work/Stories";
import { useNavigate, useParams } from "react-router";
import { articles, covers, storyCover } from "../components/constants";

export default function Work() {
  const { type } = useParams();
  console.log(type);
  const navigate = useNavigate();
  const [currentSec, setcurrentSec] = useState("book");
  const Bookref = useRef(null);
  const Articleref = useRef(null);
  const Newsref = useRef(null);
  const [BookData, setBookData] = useState([]);
  const [StoryData, setStoryData] = useState([]);
  const [ArticleData, setArticleData] = useState([]);

  useEffect(() => {
    if (type === "Fiction") {
      setBookData(
        covers.filter((book) => {
          return book.genre === "Fiction";
        })
      );
      setStoryData(
        storyCover.filter((story) => {
          return story.genre === "Fiction";
        })
      );
      setArticleData(
        articles.filter((article) => {
          return article.genre === "Fiction";
        })
      );
    }
    if (type === "Non-Fiction") {
      setBookData(
        covers.filter((book) => {
          return book.genre === "Non-Fiction";
        })
      );
      setStoryData(
        storyCover.filter((story) => {
          return story.genre === "Non-Fiction";
        })
      );
      setArticleData(
        articles.filter((article) => {
          return article.genre === "Non-Fiction";
        })
      );
    }
  }, [type]);

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
      <section className=" flex justify-center flex-col items-center relative max-md:py-0  bg-white py-2">
        {/* <div className="md:top-1  max-md:justify-evenly w-full  pr-2   max-md:bottom-0  max-md:border-t-[1px] sticky max-md:border-gray-300  max-md:fixed max-md:flex  max  max-md:pr-1 gap-1 items-center max-md:text-[16px]  justify-end flex max-md:items-center    max-md:py-[3px] max-md:bg-black z-[60] ">
          {BookData.length > 0 && (
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
          )}

          {StoryData.length > 0 && (
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
          )}
          {ArticleData.length > 0 && (
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
          )}
        </div> */}
        <div className="text-center tracking-wider border- font-Gamiliademo  py-20  max-md:py-8 text-[55px] max-md:text-[40px] ">
          {type}
        </div>
        {BookData.length > 0 && (
          <div ref={Bookref}>
            <Books BookData={BookData}></Books>
          </div>
        )}
        {StoryData.length > 0 && (
          <div ref={Newsref}>
            <Stories StoryData={StoryData}></Stories>
          </div>
        )}
        {ArticleData.length > 0 && (
          <div ref={Articleref} className="">
            <Article ArticleData={ArticleData}></Article>
          </div>
        )}

        <button
          className="bg-black text-white max-md:p-2  p-4 text-[20px] flex justify-center items-center text-center font-serif"
          onClick={() => {
            // navigate(`{/${type === "Fiction" ? "Non-Fiction" : "Fiction"}}`);

            if (type === "Fiction") {
              navigate("/Work/Non-Fiction");
            } else {
              navigate("/Work/Fiction");
            }
          }}
        >
          Read {type === "Fiction" ? "Non-Fiction" : "Fiction"} ⟶
        </button>
      </section>
    </>
  );
}
